import { TASK_CHANGED, NOTES_CHANGED, CATEGORY_CHANGED, DUE_DATE_CHANGED, PRIORITY_CHANGED, ALERT_CHANGED } from './types';

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