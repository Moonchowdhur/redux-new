/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";
import TTodo from "../../context/TodoProvider";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);
  return (
    <>
      <h1>todo list</h1>
      {/* todo import wrong?????? */}
      {state.map((item: TTodo) => (
        <p
          className={`cursor-pointer ${item.completed ? "line-through" : ""}`}
          key={item.id}
          // "TASK_COMPLETE" function not wrking
          onClick={() => dispatch({ type: "TASK_COMPLETE", payload: item.id })}
        >
          {item.title}
        </p>
      ))}
    </>
  );
};

export default TodoList;
