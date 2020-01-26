import {
  EDIT_USER,
  USER,
  successAction,
  failureAction,
  DELETE_USER
} from "../types";
const initialState = {
  data: [
    {
      username: "John Dou",
      curseId: "0000",
      userId: "0"
    },
    {
      username: "Vasy Pupkin",
      curseId: "0001",
      id: "1"
    },
    {
      username: "Ada Laveis",
      curseId: "0002",
      id: "2"
    },
    {
      username: "Ada Laveis",
      curseId: "0003",
      id: "3"
    },
    {
      username: "Ada Laveis",
      curseId: "0004",
      id: "4"
    },
    {
      username: "Ada Laveis",
      curseId: "0005",
      id: "5"
    },
    {
      username: "Ada Laveis",
      curseId: "0001",
      id: "6"
    },
    {
      username: "Ada Laveis",
      curseId: "0002",
      id: "7"
    },
    {
      username: "Ada Laveis",
      curseId: "0000",
      id: "8"
    }
  ]
};

export default function User(state = initialState, action) {
  switch (action.type) {
    case successAction(USER):
      console.log(action);
      return {
        ...state,
        data: [...state.data, action.data]
      };
    case successAction(EDIT_USER):
      console.log(action);
      return {
        ...state,
        data: state.data.map(user =>
          user.id !== action.data.id
            ? user
            : { ...user, username: action.data.userName }
        )
      };
    case successAction(DELETE_USER):
      console.log(action);
      return {
        ...state,
        data: state.data.filter(user => user.id !== action.data)
      };
    default:
      return state;
  }
}
