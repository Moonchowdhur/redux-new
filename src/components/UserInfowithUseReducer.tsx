import { ChangeEvent, useReducer, useState } from "react";

type TUser = {
  id: string; // Ensure id is always a string
  name: string;
  hobbies: string[];
};

//declare initialState that define in useReducer
const initialState: TUser = {
  id: "",
  name: "",
  hobbies: [] as string[],
};

type TAction = {
  type: string;
  payload: string;
};

// action name
const userConstants = {
  UPDATE_ID: "UPDATE_ID",
  UPDATE_NAME: "UPDATE_NAME",
  UPDATE_HOBBIES: "UPDATE_HOBBIES",
} as const;

//useReducer(reducer, initialState)=>here reducer is a function where two parameter currentState, action and in action is an object, action={type:"increment/add_user", payload:data}
//action ta dispatch theke send hbe, jkhn dispatch call krobo sekhne dispatch er mddhe action er type and payload send korbe , seta reducer function as a action parameter asbe
const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case userConstants.UPDATE_ID:
      return { ...currentState, id: action.payload };

    case userConstants.UPDATE_NAME:
      return { ...currentState, name: "mimo" };

    case userConstants.UPDATE_HOBBIES:
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };
    default:
      return currentState;
  }
};

const UserInfowithUseReducer = () => {
  //return array ->use
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="">
      <h2 className="mx-auto  w-full text-4xl my-4 font-bold">
        UserInfo with UseReducer
      </h2>
      <form onSubmit={handleSubmit} className="grid  gap-12 grid-cols-4">
        <input
          type="text"
          name="id"
          //dispatch er mddhe amra action type +payload pathie dte pari (payload dye dynamic data save korte pari so eta reducer er kache nie jabe)
          onChange={(e) =>
            dispatch({ type: userConstants.UPDATE_ID, payload: e.target.value })
          }
          placeholder="id"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          //dispatch er mddhe amra action type +payload pathie dte pari
          onChange={(e) =>
            dispatch({
              type: userConstants.UPDATE_NAME,
              payload: e.target.value,
            })
          }
        />
        <input
          type="text"
          name="hobby"
          placeholder="hobby" //dispatch er mddhe amra action type +payload pathie dte pari
          onBlur={(e) =>
            dispatch({
              type: userConstants.UPDATE_HOBBIES,
              payload: e.target.value,
            })
          }
        />
        <button className="border btn p-2 w-2/4 bg-pink-600 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserInfowithUseReducer;
