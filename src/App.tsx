import { useState } from 'react';
import './App.css'
import { TodoList } from './components/Todo_list/todolist'
import { Tache } from './models/tache'
import { FaTrash } from 'react-icons/fa';
function App() {
  const [taches, setTaches] = useState<Tache[]>([
    new Tache('steven'),
    new Tache('alice'),
  ])
  const [newTache, setNewTache] = useState('')

  const handleAddTache = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if(newTache == ''){
        return
      }
      const newTacheObj = new Tache(newTache)
      setTaches([...taches, newTacheObj])
      setNewTache('')
    }
  }

  const handleToggleTache = (index: number) => {
    setTaches((taches) =>
      taches.map((tache, i) => (i === index ? { ...tache, state: !tache.state } : tache)),
    )
  }

  const handleDeleteTache = (index: number) => {
    setTaches(taches.filter((_tache,i) => (i != index)))
  }

  return (
    <div className="App">
      <h2>Tâches restantes : {taches.filter((tache) => !tache.state).length}</h2>
      <TodoList listTaches={taches} onToggleTache={handleToggleTache} onDeleteTache={handleDeleteTache} />
      <button onClick={() => setTaches([])}>Delete all taches <FaTrash /></button>
      <input
        type="text"
        value={newTache}
        className="inputNewTache"
        placeholder="ajouter une nouvelle tache"
        onKeyDown={(e) => handleAddTache(e)}
        onChange={(e) => setNewTache(e.target.value)}
      />
    </div>
  )
}

export default App
