import {
  COURSE,
  successAction,
  DELETE_COURSE,
  EDIT_COURSE,
  DELETE_USER,
  USER
} from "../types";

export function deleteCourse(id) {
  return dispatch => dispatch({ type: successAction(DELETE_COURSE), data: id });
}
export function addCourse(course) {
  return dispatch => dispatch({ type: successAction(COURSE), data: course });
}
export function editCourse(courseName) {
  return dispatch =>
    dispatch({ type: successAction(EDIT_COURSE), data: courseName });
}
export function deleteUser(id) {
  return dispatch => dispatch({ type: successAction(DELETE_USER), data: id });
}
export function addUser(user) {
  return dispatch => dispatch({ type: successAction(USER), data: user });
}
