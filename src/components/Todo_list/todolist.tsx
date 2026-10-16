import { Component } from 'react'
import './todolist.css'
import { Tache } from '../Tache/tache'

type TodoListProps = {
  listTaches: string[]
}

export class TodoList extends Component<TodoListProps> {
  render() {
    return (
      <div className="conteneur-toDoList">
        {this.props.listTaches.map((tache, index) => (
          <Tache key={index} name={tache} />
        ))}
      </div>
    )
  }
}
