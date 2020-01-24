import { COURSE, successAction, DELETE_COURSE } from "../types";

export function deleteCourse(id) {
  return dispatch => dispatch({ type: successAction(DELETE_COURSE), data: id });
}
export function addCourse(course) {
  return dispatch => dispatch({ type: successAction(COURSE), data: course });
}
