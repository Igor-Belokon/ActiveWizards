import { COURSE, successAction, DELETE_COURSE } from "../types";

export function deleteCourse(id) {
  return dispatch => dispatch({ type: successAction(DELETE_COURSE), data: id });
}
export function addCourse(courseName, id) {
  return dispatch =>
    dispatch({ type: successAction(COURSE), data: courseName, id });
}
