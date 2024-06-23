import React, { ReactNode, useReducer } from "react";

type TodoProviderProps = {
  children: ReactNode;
};

// Define the type for the context value as an object
// type TodoContextValue = {
//   todotitle: string;
// };
// export const TodoContext = React.createContext<TodoContextValue>({
//   todotitle: "",
// });

export type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TAction = {
  type: "ADD_TODO" | "TASK_COMPLETE";
  payload: TTodo | string;
};

//typeConstants USE for avoiding spelling mistke(action type)
const typeConstants = {
  ADD_TODO: "ADD_TODO",
  TASK_COMPLETE: "TASK_COMPLETE",
};
// type TAction =
//   | { type: "ADD_TODO"; payload: TTodo }
//   | { type: "TOGGLE_TODO"; payload: { id: number } };

//createContext er mddhe amra jei value ta use context dye globally show korbo (mne value er mddhe jeglo globlly rakhbo) setar inital value ta k amra undefined set korchi initally and type hisebe state and dispatch dye rakchi as otai pre value hisebe patachi.//****** */
export const TodoContext = React.createContext<
  { state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case typeConstants.ADD_TODO:
      return [...currentState, action.payload as TTodo];

    case typeConstants.TASK_COMPLETE:
      return currentState.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.isCompleted }
          : todo
      );

    default:
      return currentState;
  }
};

const initialState: TTodo[] = [];

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    dispatch,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

// ekne context api er mddhe amra reducer use korta chai, tai reducer call kore reducer function declare korlam and dispatch, state ta k valuue te pathie dbo jate dispatch call kore or mddhe action type and action payload pathate pare.
