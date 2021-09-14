import axios from "axios";
// axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_WEBAPP_PORT}/wp-json/api`;

const postData = async (dataUser, token) => {

    const bodyParam = dataUser;

    const data = await axios.get(`${process.env.NEXT_PUBLIC_WEBAPP_PORT}/wp-json/api/anuncio`, {
        params: {
            slug
        }
    })
    return data;
} 

export default postData;