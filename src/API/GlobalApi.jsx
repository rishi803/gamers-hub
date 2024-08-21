import axios from "axios"; 

 const apiKey = "e16a4f37b912480ab2185227d7d5da47";

 console.log(apiKey);
 const axiosCreate = axios.create({
      baseURL: "https://api.rawg.io/api"
 })

 const getGenreList = axiosCreate.get('/genres?key='+apiKey);
 console.log(getGenreList);
export default getGenreList;