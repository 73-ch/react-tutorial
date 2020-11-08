import React from 'react';
import './App.css';

import Table from "./Table";
import Form from "./Form";
import {Character} from "./Character";

interface Props {
}

interface State {
  characters: { name: string, job: string }[];
}


class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      characters: []
    }
  }

  removeCharacter = (index: number) => {
    const {characters} = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = (character: Character) => {
    this.setState({
      characters: [...this.state.characters, character]
    });
  }
  
  render() {
    const {characters} = this.state;

    return (
      <div className="App">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
