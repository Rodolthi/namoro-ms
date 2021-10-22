import axios from "axios";
// axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_WEBAPP_PORT}/?rest_route=/api`;

const postData = async (slug) => {

    const data = await axios.post(`${process.env.NEXT_PUBLIC_WEBAPI_PORT}/?rest_route=/api/pagamento_cartao_aprovado`,{
        params: {
            slug
        }
    })
    return data;
} 

export default postData;