import React, {FunctionComponent, useEffect} from 'react';
import {observer} from "mobx-react";
import styles from './main.module.scss';
import store from "../../../stores/store";
import Poster from "../../atoms/poster/poster";
import Loader from "../../molecules/loader/loader";
import NavPad from "../../atoms/navPad/navPad";

const Main: FunctionComponent = observer(() => {
    const {getFilmsAction, filmList, changeLoadingStatus, filmListPage} = store;

    useEffect(() => {
        changeLoadingStatus(true);
        getFilmsAction();
        changeLoadingStatus(false);

    },);

    return (
        <>
            <Loader/>
            <div className={styles.main}>
                {
                    filmList.map((film, index) => {
                        if (index >= (filmListPage - 1) * 10 && index < filmListPage * 10) {
                            return (<Poster key={film.id} id={film.id} text={film.poster_path}/>);
                        }
                    })}
            </div>
            <NavPad/>
        </>
    )
});

export default Main;