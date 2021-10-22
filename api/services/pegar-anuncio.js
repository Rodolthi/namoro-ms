import axios from "axios";
// axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_WEBAPP_PORT}/?rest_route=/api`;

const postData = async (slug) => {

    const data = await axios.get(`${process.env.NEXT_PUBLIC_WEBAPI_PORT}/?rest_route=/api/anuncio/${slug}`,)
    return data;
} 

export default postData;