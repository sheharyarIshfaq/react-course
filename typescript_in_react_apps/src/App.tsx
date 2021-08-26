import TodosContextProvider from "./store/todos-context";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

function App() {

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
