import React, {Component} from "react";
import {Character} from "./Character";

interface Props {
  handleSubmit: (state: State) => void;
}

interface State {
  name: string;
  job: string;
}

export default class Form extends Component<Props, State> {
  private readonly initialState: Character;

  constructor(props: Props) {
    super(props);

    this.initialState = {
      name: "",
      job: ""
    };

    this.state = this.initialState;
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target as typeof event.target & {name: "name" | "job"};

    this.setState({
      [name]: value
    } as Pick<State, "name" | "job">);
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const {name, job} = this.state;

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={this.handleChange}/>
        <label htmlFor="job">Job</label>
        <input type="text" name="job" id="job" value={job} onChange={this.handleChange}/>
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    )
  }

}
