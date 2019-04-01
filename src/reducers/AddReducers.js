import { TASK_CHANGED, NOTES_CHANGED, CATEGORY_CHANGED, DUE_DATE_CHANGED, PRIORITY_CHANGED, ALERT_CHANGED, CLEAR_ADD_FORM, TOGGLE_DATE_MODAL } from '../actions/types';

const INITIAL_STATE = { task: '', notes: '', category: '', dueDate: 0, priority: '', alert: '', dateModalVisible: false };

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
    case CLEAR_ADD_FORM: 
      return INITIAL_STATE;
    case TOGGLE_DATE_MODAL:
      return { ...state, dateModalVisible: !state.dateModalVisible }
    default:
      return state;
  }
}