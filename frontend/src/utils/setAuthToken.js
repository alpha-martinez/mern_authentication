import axios from 'axios';

//This utility will add the authorized user's JWT to the request header
// Any routes that are protected will require the JWT order to accss them

const setAuthToken = token => {
    if (token) {
        //apply every token to every request header
        axios.defaults.headers.common['Authorization'] = token;
        console.log(axios.defaults.headers.common);
    } else {
        delete axios.defaults.headers.common('Authorization');
    }
}

export default setAuthToken;