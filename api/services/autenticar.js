import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:10004/wp-json/api';

const postData = async (dataUser) => {

    const bodyParam = dataUser;

    const data = await axios.post('http://localhost:10004/wp-json/jwt-auth/v1/token', bodyParam)
    return data;
} 

export default postData;