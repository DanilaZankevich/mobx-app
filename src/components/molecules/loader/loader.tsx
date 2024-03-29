import React, { FunctionComponent} from "react";
import styles from './loader.module.scss';
import {observer} from "mobx-react";
import store from "../../../stores/store";

const Loader:FunctionComponent = observer(() => {
    const {isLoading} = store;
    return(
        <>
            {isLoading?<span className={styles.fixedLay}><span className={styles.loader}></span></span> : []}
        </>
    )
});

export default Loader;