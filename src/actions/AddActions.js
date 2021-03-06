import { TASK_CHANGED, NOTES_CHANGED, CATEGORY_CHANGED, DUE_DATE_CHANGED, PRIORITY_CHANGED, ALERT_CHANGED, CLEAR_ADD_FORM, TOGGLE_DATE_MODAL } from './types';

export const taskChanged = (text) => {
  return {
    type: TASK_CHANGED,
    payload: text
  };
};
export const notesChanged = (text) => {
  return {
    type: NOTES_CHANGED,
    payload: text
  };
};
export const categoryChanged = (text) => {
  return {
    type: CATEGORY_CHANGED,
    payload: text
  };
};
export const dueDateChanged = (text) => {
  return {
    type: DUE_DATE_CHANGED,
    payload: text
  };
};
export const priorityChanged = (text) => {
  return {
    type: PRIORITY_CHANGED,
    payload: text
  };
};
export const alertChanged = (text) => {
  return {
    type: ALERT_CHANGED,
    payload: text
  };
};
export const toggleDateModal = () => {
  return {
    type: TOGGLE_DATE_MODAL
  };
};
export const clearAddForm = () => {
  return {
    type: CLEAR_ADD_FORM,
    payload: ''
  };
};