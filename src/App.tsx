import { useState } from "react";
import "./App.css";
import UserData from "./components/DataUser";
import UserInfowithUseReducer from "./components/UserInfowithUseReducer";
import { TodoProvider } from "./context/TodoProvider";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <TodoProvider>
      <div className="bg-blue-300 md:w-9/12 mx-auto p-4">
        {/* <h2>{count}</h2> */}
        {/* <CounterWithClassComponent count={count} setCount={setCount} /> */}
        {/* <UserData /> */}
        {/* <UserInfowithUseReducer /> */}
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
