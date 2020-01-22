import { REG_FORM, USER_REG, successAction, failureAction } from "../types";
const initialState = {
  data: [
    {
      courseName: "React.js-Base",
      curseId: "0000"
    },
    {
      courseName: "Node.js-Base",
      curseId: "0001"
    },
    {
      courseName: "Python-Base",
      curseId: "0002"
    },
    {
      courseName: "Html/css",
      curseId: "0003"
    },
    {
      courseName: "Pure JavaScript",
      curseId: "0004"
    },
    {
      courseName: "PHP-Base",
      curseId: "0005"
    }
  ]
};

export default function Courses(state = initialState, action) {
  switch (action.type) {
    case successAction(USER_REG):
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
    default:
      return state;
  }
}
