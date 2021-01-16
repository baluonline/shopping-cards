import axios from 'axios'

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const FETCH_USER = "FETCH_USER"
export const FETCH_USERS = "FETCH_USERS"
export const ENABLE_PREVIOUS="ENABLE_PREVIOUS"
const basePath="https://randomuser.me/api";

export const fetchUserData = () => {
    return axios
        .get(basePath)
        .then(({
            data
        }) => {
            console.log(JSON.stringify(data.results));
            return {
                type: FETCH_USER,
                payload: data
            };
        })
        .catch(error => console.log(error))
}

export const fetchUsers = (pageNumber,itemsCount) => {
    return axios
        .get(basePath+"?page="+pageNumber+"&results="+itemsCount+"&seed=")
        .then(({
            data
        }) => {
            // console.log(JSON.stringify(data.results));
            return {
                type: FETCH_USERS,
                payload: data.results
            };
        })
        .catch(error => console.log(error))
}

