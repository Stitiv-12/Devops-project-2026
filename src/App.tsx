import "./App.css";
import { TodoList } from "./components/Todo_list/todolist";
function App() {
  return (
    <>
      <TodoList listTaches={["steven", "alice", "bob"]} />
    </>
  );
}

export default App;
