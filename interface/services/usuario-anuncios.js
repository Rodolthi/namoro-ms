import axios from "axios";
// axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_WEBAPP_PORT}`;

const postData = async (usuario_id, token) => {
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_WEBAPI_PORT}/usuario/anuncios`,
    {
      params: {
        usuario_id,
      },
      token,
    }
  );
  return data;
};

export default postData;
