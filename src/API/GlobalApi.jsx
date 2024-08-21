import axios from "axios"; 

 const apiKey = import.meta.env.VITE_API_KEY;

 console.log(apiKey);
 const axiosCreate = axios.create({
      baseURL: "https://api.rawg.io/api"
 })
console.log("key= " + apiKey);
 const getGenreList = axiosCreate.get('/genres?key='+apiKey);

export default getGenreList;