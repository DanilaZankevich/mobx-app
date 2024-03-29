import film from "../components/pages/film/film";
import {filmType} from "./filmType";

export type userInfoType = {
    user_password: string;
    user_name: string;
    user_registration_date: string;
    user_photo_URL: string;
    user_favList: filmType[];
}