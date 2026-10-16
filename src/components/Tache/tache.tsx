import { Component } from 'react'
import './tache.css'
import { Tache } from '../../models/tache';

type TacheProps = {
  tache: Tache;
  onToggle: () => void;
};


export class TacheComponent extends Component<TacheProps> {
  render() {
    return (
        <div className="conteneur-tache">
            <p className={this.props.tache.state ? "tache_terminee" : "tache"}>Tache : {this.props.tache.name}</p>
            <input type="checkbox" checked={this.props.tache.state} onChange={this.props.onToggle} />
        </div>
    )
  }
}
