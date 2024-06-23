import React, { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = ({ children }: any) => {
  const { state, dispatch } :any= useContext(TodoContext);

  console.log(state);

  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(task);

    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };

    //here call dispatch function
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  return (
    <div className="">
      <h2 className="mx-auto  w-full text-4xl my-4 font-bold">
        UserInfo with UseReducer
      </h2>
      <form onSubmit={handleSubmit} className="grid  gap-12 grid-cols-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          //dispatch er mddhe amra action type +payload pathie dte pari
          onBlur={(e) => setTask(e.target.value)}
        />

        <button
          type="submit"
          className="border btn p-2 w-2/4 bg-pink-600 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

// const { state, dispatch }: any = useContext(TodoContext);
