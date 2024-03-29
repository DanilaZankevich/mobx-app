import {filmType} from "../types/filmType";
import axios from 'axios';


export const getFilm = async (id: number) => (await axios.get<filmType>(`https://api.themoviedb.org/3/movie/${id}?api_key=5b30259248d7713442e12ad9a6609ef1`)).data;
