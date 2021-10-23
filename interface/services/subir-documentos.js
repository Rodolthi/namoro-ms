import axios from "axios";

const postData = async (files, token) => {
  const bodyParam = { files, token };

  const data = await axios.post(
    `${process.env.NEXT_PUBLIC_WEBAPI_PORT}/documentos`,
    bodyParam
  );
  return data;
};

export default postData;
