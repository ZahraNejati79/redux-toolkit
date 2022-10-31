import "./App.css";
import { Provider } from "react-redux";
import { store } from "./features/Store";
import AddTodoForm from "./components/Todos/AddTodoForm";
import TodoList from "./components/Todos/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Provider store={store}>
      <AddTodoForm />
      <TodoList />
    </Provider>
  );
}

export default App;
