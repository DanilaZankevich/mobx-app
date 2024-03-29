import { FunctionComponent, ComponentPropsWithoutRef } from 'react';
import {useNavigate} from "react-router-dom";
import styles from './poster.module.scss'
import store from "../../../stores/store";

interface PosterProps {
    text: string;
    id:number;
}

const Poster:FunctionComponent<PosterProps> = ({text,id, ...props}) =>{
    const navigate = useNavigate();
    const {changeLoadingStatus} = store;
    return(
        <div>
            <span onClick={()=>changeLoadingStatus(true)} >
            <img  alt="poster"  id={`${id}`} className={styles.poster} onClick={() => navigate(`/film#${id}`)} src={'http://image.tmdb.org/t/p/w342' + text}/>
                </span>
        </div>
    );
}

export default Poster;