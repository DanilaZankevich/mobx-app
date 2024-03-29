import {FunctionComponent} from "react";
import styles from './navPad.module.scss'
import store from "../../../stores/store";

const NavPad: FunctionComponent = () => {
    const {changeFilmPage} = store;
    return (
        <>
            <div className={styles.navPad}>
                <span className={styles.pageButton} onClick={() => changeFilmPage(1)}>1</span>
                <span className={styles.pageButton} onClick={() => changeFilmPage(2)}>2</span>
            </div>
        </>
    )
}

export default NavPad;