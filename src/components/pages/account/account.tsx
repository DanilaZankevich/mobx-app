import React, {FunctionComponent} from 'react';
import {observer} from 'mobx-react';
import styles from './account.module.scss';
import store from "../../../stores/store";
import Poster from "../../atoms/poster/poster";


const Account: FunctionComponent = observer(() => {
    const {favoriteFilmList, accountName, image_Url, registerDate} = store;

    return (
        <>
            <div className={styles.account}>
                <div className={styles.miniProfile}>
                    <div>
                        <img alt='avatar' src={image_Url}/>
                    </div>
                    <span className={styles.name}>User: {accountName}</span>
                    <span className={styles.registrationDate}>Was registered in {registerDate}</span>
                </div>
                <div className={styles.favoriteList}>
                    <span className={styles.subHeader}>Your Favorites</span>
                    <hr className={styles.divideLine}/>
                    {
                        favoriteFilmList.map((film) => (
                            <div className={styles.filmUnit}>
                                <Poster key={film.id} id={film.id} text={film.poster_path}/>
                                <span className={styles.overview}>
                                    {film.overview}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
});

export default Account;