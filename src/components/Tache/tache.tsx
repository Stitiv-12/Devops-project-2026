import { Component } from "react";
import "./tache.css";

type TacheProps = {
  name: string;
};

export class Tache extends Component<TacheProps> {
  render() {
    return (
      <div className="conteneur-tache">
        <p>Hello, {this.props.name}!</p>
        <input type="checkbox" />
      </div>
    );
  }
}
