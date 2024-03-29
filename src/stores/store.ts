import {makeAutoObservable} from 'mobx';
import {filmType} from "../types/filmType";
import {getFilms} from "../api/getfilms";
import {userInfoType} from "../types/userInfoType";
import {getFilm} from "../api/getFilm";

class Store {
    filmList: filmType[] = [];
    favoriteFilmList: filmType[] = [];

    selectedFilm: filmType = this.filmList[0];

    lastPage: string = '/';
    isLoading: boolean = true;
    error: boolean = true;

    isEntered: boolean = false;
    userList: userInfoType[] = [];

    drag: boolean = false;
    image_Url: string = '';

    isModalOpened: boolean = false;

    alarm: string = '';

    filmListPage: number = 1;
    favoriteListPage: number = 1;

    accountName: string = '';
    registerDate: string = '';
    password: string = '';

    constructor() {
        makeAutoObservable(this);
    }


    changeLastPage = (path: string) => {
        this.lastPage = path;
    }

    changeImage = (path: string) => {
        this.image_Url = path;
        this.saveDataInLocalStorage();
    }

    changeAccountName = (newName: string) => {
        this.userList.forEach((item, index) => {
            if (item.user_name === this.accountName) {
                this.userList[index] = {
                    user_favList: this.favoriteFilmList,
                    user_name: newName,
                    user_password: this.password,
                    user_registration_date: this.registerDate,
                    user_photo_URL: this.image_Url
                }
            }
        });
        localStorage.setItem('userList', JSON.stringify(this.userList));
        this.accountName = newName;
    }

    changeAccountPassword = (newPass: string) => {
        this.password = newPass;
        this.saveDataInLocalStorage();
    }

    signOut = () => {
        this.isEntered = false;
    }

    changeFilmPage = (num: number) => {
        this.filmListPage = num;
    }

    getDataFromLocalStorage = () => {
        this.userList = JSON.parse(localStorage.getItem('userList') || '[]');
    }

    saveDataInLocalStorage = () => {
        this.userList.forEach((item, index) => {
            if (item.user_name === this.accountName) {
                this.userList[index] = {
                    user_favList: this.favoriteFilmList,
                    user_name: this.accountName,
                    user_password: this.password,
                    user_registration_date: this.registerDate,
                    user_photo_URL: this.image_Url
                }
            }
        });
        localStorage.setItem('userList', JSON.stringify(this.userList));
    }

    openModal = (status: boolean) => {
        this.isModalOpened = status;
    }

    setSelectedFilm = async (id: number) => {
        try {
            this.selectedFilm = await getFilm(id);
        } catch {
        }
        this.isLoading = false;
    }
    changeLoadingStatus = (status: boolean) => {
        this.isLoading = status;
    }

    getFilmsAction = async () => {
        while (this.error) {
            try {
                this.filmList = await getFilms();
                this.error = false;
            } catch (error) {
                console.log(error);
            }
        }
        this.isLoading = false;
    }

    addToFavorite = (id: number) => {
        console.log(id);
        this.filmList.forEach((item) => {
            if (item.id === id) {
                this.favoriteFilmList.push(item);
            }
        })
        this.saveDataInLocalStorage();
    }

    setAlarmMessage = (alarmMessage: string) => {
        this.alarm = alarmMessage;
    }

    deleteFromFavorite = (id: number) => {
        this.favoriteFilmList.forEach((item: filmType, index: number) => {
            if (item.id === id) {
                const bufArr: filmType[] = this.favoriteFilmList;
                bufArr.splice(index, 1);
                this.favoriteFilmList = bufArr;
                console.log(this.favoriteFilmList)
            }
        });
        this.saveDataInLocalStorage();
    }

    signIn = (userName: string) => {
        this.userList.forEach((item) => {
            if (item.user_name === userName) {
                this.accountName = item.user_name;
                this.registerDate = item.user_registration_date;
                this.password = item.user_password;
                this.favoriteFilmList = item.user_favList;
                this.image_Url = item.user_photo_URL
            }
        })
        this.isModalOpened = false;
        this.isEntered = true;
    }

    signUp = (userName: string, userPassword: string) => {
        this.userList.push({
            user_favList: [],
            user_name: userName,
            user_password: userPassword,
            user_registration_date: `${(new Date()).getDate()}.${(new Date()).getMonth()}.${(new Date()).getFullYear()}`,
            user_photo_URL: 'https://clov.net/wimg/32574385521dd1847f7d1e5b940491ef.jpg'
        });
        this.signIn(userName);
        this.saveDataInLocalStorage();
    }

}

const store = new Store();

export default store;


/*import {createBrowserRouter} from 'react-router-dom';
import App from "../App";
import Main from "../components/pages/main/main";
import Film from "../components/pages/film/film";
import Account from "../components/pages/account/account";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '', element: <Main/>},
            {path: 'film', element: <Film/>},
            {path: 'account', element: <Account/>}
        ],
    },
]);*/