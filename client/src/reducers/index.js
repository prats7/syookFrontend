
import { GET_NOTES, ADD_NOTE, DELETE_NOTE, NOTES_LOADING } from '../actions/index';


const initialState = {
    notes: [],
    loading: false,
    isAuthenticated: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                notes: action.payload,
                loading: false,
                isAuthenticated: true
            };
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note._id !== action.payload)
            };
        case ADD_NOTE:
            return {
                ...state,
                notes: [action.payload, ...state.notes],
                isAuthenticated: true
            };
        case NOTES_LOADING:
            return {
                ...state,
                loading: true,
                isAuthenticated: true
            };
        default:
            return state;
    }
}