import TodoItem from "./TodoItem";

const TotalCompletedTodo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
};

export default TotalCompletedTodo;
