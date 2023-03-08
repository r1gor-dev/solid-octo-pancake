import { GET_RADIUS_WEB, ADD_RADIUS, DELETE_RADIUS, TOGGLE_RADIUS } from "../actions/types";

const initialState = {
    radius: []
}

export default function (state = initialState, action){
    switch (action.type){
        case GET_RADIUS_WEB:
            return {
                ...state,
                radius: action.payload
            };
        case DELETE_RADIUS:
            return {
                ...state,
                radius: state.radius.filter(radius => radius.id !== action.payload)
            };
        case TOGGLE_RADIUS:
            return {
                ...state,
                radius: [...state.radius]
            };
        case ADD_RADIUS:
            return {
                ...state,
                radius: [...state.radius, action.payload]
            };
        default:
            return state;
    }
};