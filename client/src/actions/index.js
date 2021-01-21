import axios from 'axios';
//action types
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const NOTES_LOADING = 'NOTES_LOADING';
export const GET_NOTES = 'GET_NOTES';
export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';




//action creators
export const getNotes = () => dispatch => {
    dispatch(setNotesLoading());
    axios
        .get('/api/notes')
        .then(res =>
            dispatch({
                type: GET_NOTES,
                payload: res.data
            }))
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};



export const addNote = note => (dispatch) => {

    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    axios
        .post('/api/notes', note, config)
        .then(res =>
            dispatch({
                type: ADD_NOTE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteNote = id => (dispatch) => {
    axios.delete(`/api/notes/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_NOTE,
                payload: id
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );

};

//Return Errors
export const returnErrors = (msg, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status, id }
    };
};

//Clear Errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};

export const setNotesLoading = () => {
    return {
        type: NOTES_LOADING
    };
};