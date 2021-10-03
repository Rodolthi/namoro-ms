import postData from '../services/aprovar-anuncio';


export const postAprovarAnuncio = async (slug) => { 
    const result = await postData(slug);
    return result;
}
