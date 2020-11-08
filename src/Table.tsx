import React, {Component} from "react";

import {Character} from "./Character";

interface Props {
  characterData: Character[];
  removeCharacter: (index: number) => void;
}

const TableHeader = () => {
  return (
    <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
    </tr>
    </thead>
  )
}

const TableBody = (props: Props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}


export default class Table extends Component<Props, {}> {

  render() {
    const {characterData, removeCharacter} = this.props;

    return (
      <table>
        <TableHeader/>
        <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
    );
  }
}
