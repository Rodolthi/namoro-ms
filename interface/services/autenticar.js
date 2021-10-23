import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:10004';

const postData = async (dataUser) => {

    const bodyParam = dataUser;

    const data = await axios.post(`${process.env.NEXT_PUBLIC_WEBAPI_PORT}/wp-json/jwt-auth/v1/token`, bodyParam)
    return data;
} 

export default postData;