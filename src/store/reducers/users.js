import {
  REG_FORM,
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
      userId: "1"
    },
    {
      username: "Ada Laveis",
      curseId: "0002",
      userId: "2"
    },
    {
      username: "Ada Laveis",
      curseId: "0003",
      userId: "3"
    },
    {
      username: "Ada Laveis",
      curseId: "0004",
      userId: "4"
    },
    {
      username: "Ada Laveis",
      curseId: "0005",
      userId: "5"
    },
    {
      username: "Ada Laveis",
      curseId: "0001",
      userId: "6"
    },
    {
      username: "Ada Laveis",
      curseId: "0002",
      userId: "7"
    },
    {
      username: "Ada Laveis",
      curseId: "0000",
      userId: "8"
    },
    {
      username: "Ada Laveis",
      curseId: "0000",
      userId: "9"
    },
    {
      username: "Ada Laveis",
      curseId: "0001",
      userId: "10"
    },
    {
      username: "Ada Laveis",
      curseId: "0002",
      userId: "11"
    },
    {
      username: "Ada Laveis",
      curseId: "0004",
      userId: "12"
    },
    {
      username: "Ada Laveis",
      curseId: "0003",
      userId: "13"
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
    case successAction(REG_FORM):
      return {
        ...state,
        someData: [...state.someData, action.someData]
      };
    case successAction(DELETE_USER):
      console.log(action);
      return {
        ...state,
        data: state.data.filter(user => user.userId !== action.data)
      };
    default:
      return state;
  }
}
