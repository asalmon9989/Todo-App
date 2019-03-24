import { TASK_CHANGED, NOTES_CHANGED, CATEGORY_CHANGED, DUE_DATE_CHANGED, PRIORITY_CHANGED, ALERT_CHANGED } from '../actions/types';

const INITIAL_STATE = { task: '', notes: '', category: '', dueDate: '', priority: '', alert: ''};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TASK_CHANGED:
      return { ...state, task: action.payload };
    case NOTES_CHANGED:
      return { ...state, notes: action.payload };
    case CATEGORY_CHANGED:
      return { ...state, category: action.payload };
    case DUE_DATE_CHANGED:
      return { ...state, dueDate: action.payload };
    case PRIORITY_CHANGED:
      return { ...state, priority: action.payload };
    case ALERT_CHANGED:
      return { ...state, alert: action.payload };
    default:
      return state;
  }
}