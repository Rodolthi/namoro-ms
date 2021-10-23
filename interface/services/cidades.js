import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:10004';

const postData = async () => {

    const data = await axios.get(`${process.env.NEXT_PUBLIC_WEBAPI_PORT}/cidades`)
    return data;
} 

export default postData;