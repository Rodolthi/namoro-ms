import axios from "axios";
// axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_WEBAPP_PORT}/wp-json/api`;

const postData = async (slug) => {

    const data = await axios.put(`${process.env.NEXT_PUBLIC_WEBAPI_PORT}/wp-json/api/anuncio-aprovar`,{
        params: {
            slug
        }
    })
    return data;
} 

export default postData;