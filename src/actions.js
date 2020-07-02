import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';



export const setSearchField = (text) => ({
    
    type: CHANGE_SEARCH_FIELD,
    payload: text
        
// here we are returning object
})


export const requestRobots=()=>(dispatch)=>{
    // having 2 functions
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data=> dispatch({ type:REQUEST_ROBOTS_SUCCESS, payload:data}))
    .then(error=> dispatch({ type:REQUEST_ROBOTS_FAILED, payload: error}))
    // here we are returning function
}