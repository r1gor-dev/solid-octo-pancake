import axios from "axios";
import { GET_RADIUS_WEB, ADD_RADIUS, TOGGLE_RADIUS, DELETE_RADIUS} from "./types";
import radius from "../reducers/radius";

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

// Get RADius web (list)

export const getWeb = () => dispatch => {
    axios.get('api/radius/')
        .then(result => {
            dispatch({
                type: GET_RADIUS_WEB,
                payload: result.data
            });
        }).catch(error => console.log(error));
};

// Delete RADius websoc
export const deleteWeb = (id) => dispatch => {
    axios.delete(`api/radius/${id}/`)
        .then(result => {
            dispatch({
               type: DELETE_RADIUS,
               payload: id
            });
        }).catch(error => console.log(error));
};

// Toggle RAD web
export const toggleWeb = (radius) => dispatch => {
    radius.done = !radius.done;
    axios.put(`api/radius/${radius.id}`, radius)
        .then(result => {
            dispatch({
                type: TOGGLE_RADIUS,
                payload: result.data
            });
        }).catch(error => console.log(error));
};

// Add RADweb
export const addWeb = (radius) => dispatch => {
    axios.post('api/radius/', radius)
        .then(result => {
            dispatch({
                type: ADD_RADIUS,
                payload: result.data
            });
        }).catch(error => console.log(error));
};