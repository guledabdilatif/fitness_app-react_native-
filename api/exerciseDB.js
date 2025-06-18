import axios from 'axios';
const apiKey = 'ce9fc92fbcmsh2b1f0aff6a32f9cp182a39jsnc06fb52e177e'
const baseUrl = 'https://exercisedb.p.rapidapi.com/exercises';
const apiCall = async (url, params) => {
    try {
        const options = {
            method: "GET",
            url,
            params,
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        }
        const response = await axios.request(options);
        return response.data;

    } catch (err) {
        console.log('error', err.message);
    }

}
export const fetchexerciseByBodyParts = async (bodyParts) => {
    let data = await apiCall(baseUrl+`/bodyPart/${bodyParts}`);
    return data;

}