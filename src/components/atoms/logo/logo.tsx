import { FunctionComponent } from 'react';
import styles from './logo.module.scss';
import {Link, useNavigate} from "react-router-dom";

const Logo:FunctionComponent = () =>{
    const navigate = useNavigate();
    return(

        <Link to={'/'} className={styles.logo}>
            <span  className={styles.icon}/>
            <span className={styles.logoText}>Movie</span>
        </Link>
    );
}

export default Logo;