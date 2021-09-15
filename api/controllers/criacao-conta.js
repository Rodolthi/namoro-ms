import postData from '../services/criacao-conta';
import autenticar from 'api/services/autenticar';

export const postUsuario = async (dataUser) => {

    const { data } = await autenticar({
        "username": "thiago.uxbr@gmail.com",
        "password": "*b!nM)yoa4QQtSWIeziQaOH("
    });
    const result = await postData(dataUser, data.data.token);
    return result;
}
