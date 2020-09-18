import { LOADING } from './actionTypes';
import { ADD_NEWS } from './actionTypes';
import { LOADING_ERROR } from './actionTypes';

export const fetchNews = (path) => {
    return(dispatch) => {
        dispatch(loadingError(false));

        dispatch(loading(true));

        fetch("https://api.canillitapp.com/" + path)
            .then((response) => response.json())
            .then((response) => {
                dispatch(loading(false));
                dispatch(addNews(response));
        })
        .catch(() => dispatch(loadingError(true)));
    }
}

export const loading = (bool) => ({
    type: LOADING,
    isLoading: bool
});

export const addNews = (news) => ({
    type: ADD_NEWS,
    payload: { news }
});

export const loadingError = (bool) => ({
    type: LOADING_ERROR,
    hasError: bool
});