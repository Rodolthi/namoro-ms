import postData from '../services/criacao-conta';


export const postUsuario = async (data) => {
    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMDQiLCJpYXQiOjE2MzA2MzY4ODMsIm5iZiI6MTYzMDYzNjg4MywiZXhwIjoxNjMwNjM3NzgzLCJkYXRhIjp7InVzZXIiOnsiaWQiOjEsImRldmljZSI6IiIsInBhc3MiOiI5NTkyZDQ3ZDY0ODMyMDI2YTVkMjg5MzA4ZGQ5NmRlMyJ9fX0.lua2n5KINtaOti3PLkK5xRQo2r02L62b_b4GhkA_F9U'
    const result = await postData(data, token);
    return result;
}
