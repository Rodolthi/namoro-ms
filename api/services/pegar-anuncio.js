import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:10004/wp-json/api';

const postData = async (dataUser, token) => {

    const bodyParam = dataUser;

    const data = await axios.get(`http://localhost:10004/wp-json/api/anuncio`, {
        params: {
            slug
        }
    })
    return data;
} 

export default postData;