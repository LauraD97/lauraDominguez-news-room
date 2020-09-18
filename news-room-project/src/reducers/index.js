import { combineReducers } from 'redux';
import { ADD_NEWS } from '../actions/actionTypes';

const loading = (loading = false, action) => {
    switch (action.type) {
      case 'LOADING':
        return action.isLoading;
      default:
        return loading;
    }
}

const news = (news =[], {type, payload}) => {
    switch (type) {
        case ADD_NEWS:
          return payload.news;
        default:
          return news;
      }
}

const loadingError = (error = false, action) => {
    switch (action.type) {
      case 'LOADING_ERROR':
        return action.hasError;
      default:
        return error;
    }
}

export default combineReducers({
  news,
  loading,
  loadingError
});