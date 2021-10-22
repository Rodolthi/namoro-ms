import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:10004/?rest_route=/api';

const postData = async (dataUser) => {

    const bodyParam = dataUser;

    const data = await axios.post(`${process.env.NEXT_PUBLIC_WEBAPI_PORT}/?rest_route=/jwt-auth/v1/token`, bodyParam)
    return data;
} 

export default postData;