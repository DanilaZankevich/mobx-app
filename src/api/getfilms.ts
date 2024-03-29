import {filmType} from "../types/filmType";
import axios  from 'axios';

export type filmRequest = {
    dates: object,
    page: number,
    results:filmType[],
    total_pages: number,
    total_results:number
}

export const getFilms = async () => (await axios.get<filmRequest>('https://api.themoviedb.org/3/movie/now_playing?api_key=5b30259248d7713442e12ad9a6609ef1')).data.results;
