import { Component } from "react";
import './todolist.css'
import { TacheComponent } from '../Tache/tache';
import type { Tache } from "../../models/tache";

type TodoListProps = {
  listTaches: Tache[];
  onToggleTache: (index: number) => void;
};

export class TodoList extends Component<TodoListProps> {
  render() {
    return (
        <div className="conteneur-toDoList">
            {this.props.listTaches.map((tache, index) => (
                <TacheComponent key={index} tache={tache} onToggle={() => this.props.onToggleTache(index)} />
            ))}
        </div>
    )
  }
}