import { useState } from 'react';
import './App.css'
import { TodoList } from './components/Todo_list/todolist'
import { Tache } from './models/tache';
function App() {
  const [taches, setTaches] = useState<Tache[]>([
    new Tache("steven"),
    new Tache("alice"),
    new Tache("bob")
  ]);
  const [newTache, setNewTache] = useState("");

  const handleAddTache = (event : React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const newTacheObj = new Tache(newTache);
      setTaches([...taches, newTacheObj]);
      setNewTache('');
    }
  };

  const handleToggleTache = (index: number) => {
    setTaches((taches) =>
      taches.map((tache, i) =>
        i === index
          ? { ...tache, state: !tache.state }
          : tache
      )
    );
  };

  return (
    <div className="App">
      <TodoList listTaches={taches} onToggleTache={handleToggleTache} />
      <input 
        type="text" 
        value={newTache} 
        className='inputNewTache'
        placeholder='ajouter une nouvelle tache' 
        onKeyDown={(e) => handleAddTache(e)} 
        onChange={(e) => setNewTache(e.target.value)} />
    </div>
  )
}

export default App
