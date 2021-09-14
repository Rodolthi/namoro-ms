import axios from "axios";
// axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_WEBAPP_PORT}/wp-json/api`;

const postData = async (filtros) => {

    const {regiao, acompanhante} = filtros;

    const data = await axios.get(`${process.env.NEXT_PUBLIC_WEBAPP_PORT}/wp-json/api/anuncios`,{
        params: {
            cidade: regiao,
            acompanhante
        }
    })
    return data;
} 

export default postData;