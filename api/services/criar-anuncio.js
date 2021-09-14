import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:10004/wp-json/api';

const postData = async (dataUser, token) => {

    const bodyParam = dataUser;

    const config = {
        headers: {"Authorization": `Bearer ${token}`}
    };

    const data = await axios.post('http://localhost:10004/wp-json/api/anuncio', bodyParam, config)
    return data;
} 

export default postData;