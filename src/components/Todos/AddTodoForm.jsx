import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todosSlice/todosSlice";

const AddTodoForm = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: todo }));
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">کار</label>
      <input
        className="form-control mb-2 mr-sm-2"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mb-2">
        اضافه کردن
      </button>
    </form>
  );
};

export default AddTodoForm;
