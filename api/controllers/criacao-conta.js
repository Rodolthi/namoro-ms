import postData from '../services/criacao-conta';
import autenticar from 'api/services/autenticar';

export const postUsuario = async (dataUser) => {

    const {data} = await autenticar({"username":"rodolfoaldrovandip@gmail.com", "password":"admin"});                       
    const result = await postData(dataUser, data.data.token);
    return result;
}
