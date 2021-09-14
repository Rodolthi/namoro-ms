import postData from '../services/criar-anuncio';


export const postAnuncio = async (data) => {
    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMDQiLCJpYXQiOjE2MzE1ODk3NDAsIm5iZiI6MTYzMTU4OTc0MCwiZXhwIjoxNjMxNTkzMzQwLCJkYXRhIjp7InVzZXIiOnsiaWQiOjEsImRldmljZSI6IiIsInBhc3MiOiI5NTkyZDQ3ZDY0ODMyMDI2YTVkMjg5MzA4ZGQ5NmRlMyJ9fX0.RRWsx6q-jsy3L3eRWj3YPtlbts5XrQByS-Jdd45cVVk'
    const result = await postData(data, token);
    return result;
}
