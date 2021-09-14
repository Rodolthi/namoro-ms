import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:10004/wp-json/api';

const postData = async (filtros) => {

    const {regiao, acompanhante} = filtros;

    const data = await axios.get(`http://localhost:10004/wp-json/api/anuncios`,{
        params: {
            cidade: regiao,
            acompanhante
        }
    })
    return data;
} 

export default postData;