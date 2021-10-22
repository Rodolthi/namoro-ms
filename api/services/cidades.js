import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:10004/?rest_route=/api';

const postData = async () => {

    const data = await axios.get(`${process.env.NEXT_PUBLIC_WEBAPI_PORT}/?rest_route=/api/cidades`)
    return data;
} 

export default postData;