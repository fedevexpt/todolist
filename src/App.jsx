import "./App.css";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import Editor from "./components/Editor";

function App() {
  return (
    <div>
      <List />
      <TodoItem />
      <Editor />
    </div>
  );
}

export default App;
