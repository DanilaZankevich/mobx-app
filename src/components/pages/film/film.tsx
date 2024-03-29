import React, {FunctionComponent, useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import styles from './film.module.scss';
import store from "../../../stores/store";
import {Link, useLocation} from "react-router-dom";
import {getNums} from "../../../utils/utils";
import Loader from "../../molecules/loader/loader";

const Film: FunctionComponent = observer(() => {
    const {
        selectedFilm,
        setSelectedFilm,
        addToFavorite,
        deleteFromFavorite,
        favoriteFilmList,
        lastPage,
        changeLoadingStatus,
        isLoading,
        isEntered
    } = store;
    const [isAdded, changeAddStatus] = useState(false);
    const id: number = getNums(useLocation().hash);


    useEffect(() => {
        changeLoadingStatus(true);
        favoriteFilmList.forEach((film) => {
            if (film.id === id) {
                changeAddStatus(true);
            }
        });
        setSelectedFilm(id);
    }, []);

    const deleteHandleClick = () => {
        deleteFromFavorite(id);
        changeAddStatus(false);
    }

    const addHandleClick = () => {
        addToFavorite(id);
        changeAddStatus(true);
    }

    return (
        <>
            <Loader/>
            <div className={styles.filmPage}>
                <Link className={styles.backButton} to={lastPage}>Back</Link>
                {!isLoading ?
                    <div className={styles.film}>
                        <div className={styles.infoUnit}>
                            <img src={'http://image.tmdb.org/t/p/w342' + selectedFilm.poster_path}/>
                            <div className={styles.attributes}>
                                <span>Name: {selectedFilm.title}</span>
                                <hr className={styles.divideLine}/>
                                <span>Original name: {selectedFilm.original_title}</span>
                                <hr className={styles.divideLine}/>
                                <span>Rate: {selectedFilm.vote_average}</span>
                                <hr className={styles.divideLine}/>
                                <span>Original language : {selectedFilm.original_language}</span>
                                <hr className={styles.divideLine}/>
                                {selectedFilm.adult ?
                                    <>
                                        <span className={styles.alarm}>18+</span>
                                        <hr className={styles.divideLine}/>
                                    </> : <></>}
                                {isEntered ?
                                    <div className={styles.unitWithButtons}>
                                        {isAdded ?
                                            <div className={styles.favButton} onClick={deleteHandleClick}>Delete form
                                                favorite</div> :
                                            <div className={styles.favButton} onClick={addHandleClick}>Add to
                                                favorite</div>
                                        }
                                    </div> : <></>
                                }
                            </div>
                        </div>
                        <div className={styles.description}>
                            <span className={styles.subHeader}>Overview:</span>
                            <p>
                                &emsp; &emsp;{selectedFilm.overview}
                            </p>
                        </div>
                    </div> : <span></span>

                }

                <span></span>
            </div>
        </>
    )
});

export default Film;