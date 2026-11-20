import { Component } from 'react'
import './tache.css'
import { Tache } from '../../models/tache'
import { FaTrash } from 'react-icons/fa6'

type TacheProps = {
  tache: Tache
  onToggle: () => void
  onDeleteTache: () => void
}

export class TacheComponent extends Component<TacheProps> {
  render() {
    return (
      <div className="conteneur-tache">
        <p className={this.props.tache.state ? 'tache_terminee' : 'tache'}>
          Tache : {this.props.tache.name}
        </p>
        <input type="checkbox" checked={this.props.tache.state} onChange={this.props.onToggle} />
        <button title='delete' onClick={this.props.onDeleteTache}><FaTrash /></button>
      </div>
    )
  }
}
