import {
  COURSE,
  successAction,
  failureAction,
  DELETE_COURSE,
  EDIT_COURSE
} from "../types";
const initialState = {
  data: [
    {
      courseName: "React.js-Base",
      id: "0000"
    },
    {
      courseName: "Node.js-Base",
      id: "0001"
    },
    {
      courseName: "Python-Base",
      id: "0002"
    },
    {
      courseName: "Html/css",
      id: "0003"
    },
    {
      courseName: "Pure JavaScript",
      id: "0004"
    },
    {
      courseName: "PHP-Base",
      id: "0005"
    }
  ]
};

export default function Courses(state = initialState, action) {
  switch (action.type) {
    case successAction(DELETE_COURSE):
      console.log(action);
      return {
        ...state,
        data: state.data.filter(course => course.id !== action.data)
      };

    case successAction(COURSE):
      console.log(action);
      return {
        ...state,
        data: [...state.data, action.data]
      };
    case successAction(EDIT_COURSE):
      console.log(action);
      return {
        ...state,
        data: state.data.map(course =>
          course.id !== action.data.id
            ? course
            : { ...course, courseName: action.data.courseName }
        )
      };

    default:
      return state;
  }
}
