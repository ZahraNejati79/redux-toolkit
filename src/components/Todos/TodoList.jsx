import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncTodos } from "../../features/todosSlice/todosSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);

  return (
    <div>
      <h2>TodoList</h2>
      {loading && <p>loading</p>}

      {error && <p> {error} </p>}

      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
