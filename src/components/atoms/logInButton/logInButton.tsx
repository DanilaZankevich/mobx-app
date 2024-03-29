import { FunctionComponent } from 'react';
import styles from './logo.module.scss';
import {useNavigate} from "react-router-dom";


const LogInButton:FunctionComponent = () =>{
    const navigate = useNavigate();
    return(
        <div onClick={() => navigate('/')} className={styles.logo}>
            <span className={styles.icon}/>
            <span className={styles.logoText}>Movie</span>
        </div>
    );
}

export default LogInButton;