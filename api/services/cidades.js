import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:10004/wp-json/api';

const postData = async () => {

    const data = await axios.get(`http://localhost:10004/wp-json/api/cidades`)
    return data;
} 

export default postData;