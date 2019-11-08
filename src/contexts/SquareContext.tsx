import React, { createContext, Dispatch, useReducer, useContext } from "react";

export const ADD_SQUARE = "ADD_SQUARE" as const;
export const CHANGE_SQUARE = "CHANGE_SQUARE" as const;
export const DELETE_SQUARE = "DELETE_SQUARE" as const;

export type Square = {
  Id: number;
  col: number;
  color: string;
  height: number;
};

type ColState = Square[];
const ColsStateContext = createContext<ColState[] | void>(undefined);

type Action =
  | {
      type: "ADD_SQUARE";
      Id: number;
      col: number;
      color: string;
      height: number;
    }
  | { type: "CHANGE_SQUARE"; Id: number; col: number; color: string }
  | { type: "DELETE_SQUARE"; Id: number; col: number };
type ColsDispatch = Dispatch<Action>;
const ColsDispatchContext = createContext<ColsDispatch | undefined>(undefined);

function colsReducer(state: ColState[], action: Action): ColState[] {
  switch (action.type) {
    case ADD_SQUARE:
      state[action.col - 1].push({
        Id: action.Id,
        col: action.col,
        color: action.color,
        height: action.height
      });
      return state;
    case CHANGE_SQUARE:
      return state;
    case DELETE_SQUARE:
      return state;
    default:
      return state;
  }
}

export function ColsContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [cols, dispatch] = useReducer(colsReducer, [
    [
      {
        Id: 1,
        col: 1,
        color: "#2c7488",
        height: 80
      },
      {
        Id: 2,
        col: 1,
        color: "#aca",
        height: 110
      }
    ],
    [
      {
        Id: 1,
        col: 2,
        color: "#cbb",
        height: 35
      }
    ],
    [
      {
        Id: 1,
        col: 3,
        color: "#aac",
        height: 20
      }
    ]
  ]);

  return (
    <ColsDispatchContext.Provider value={dispatch}>
      <ColsStateContext.Provider value={cols}>
        {children}
      </ColsStateContext.Provider>
    </ColsDispatchContext.Provider>
  );
}

export function useColsState() {
  const state = useContext(ColsStateContext);
  if (!state) throw new Error("Cols provider problem");
  return state;
}
export function useColsDispatch() {
  const dispatch = useContext(ColsDispatchContext);
  if (!dispatch) throw new Error("Cols provider problem");
  return dispatch;
}
