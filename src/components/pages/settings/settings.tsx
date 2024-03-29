import React, {FunctionComponent, useState} from "react";
import styles from './settings.module.scss'
import store from "../../../stores/store";
import {observer} from "mobx-react";
import {Link} from "react-router-dom";

const Settings: FunctionComponent = observer(() => {
    const {changeAccountName,signOut, changeAccountPassword, image_Url, accountName, password, changeImage} = store;
    const [passwordInputValue, setPasswordInputValue] = useState(password);
    const [nameInputValue, setNameInputValue] = useState(accountName);
    const [imageInputValue, setImageInputValue] = useState(image_Url);


    /*const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        changeDrag(true);
        const file = e.dataTransfer.files[0];
        console.log(file);
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        changeDrag(false);
        const file = e.dataTransfer.files[0];
        console.log(file);
    }

    const changeImage = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        console.log(file);
    }
    */
    return (
        <>
            <div className={styles.settings}>

                <div className={styles.container}>
                    <div>
                        <span className={styles.clue}>Your NickName:</span>
                        <input value={nameInputValue} onChange={(e) => setNameInputValue(e.target.value)}
                               className={styles.setField} placeholder={'Print your new nickname'}/>
                        <span onClick={() => changeAccountName(nameInputValue)}
                              className={styles.saveButton}>Save</span>
                    </div>
                    <div>
                        <span className={styles.clue}>Your Password : </span>
                        <input value={passwordInputValue} onChange={(e) => setPasswordInputValue(e.target.value)}
                               className={styles.setField} placeholder={'Print your new password'}/>
                        <span onClick={() => changeAccountPassword(passwordInputValue)}
                              className={styles.saveButton}>Save</span>
                    </div>
                    <div>
                        <span className={styles.clue}>Your image's url:</span>
                        <input value={imageInputValue} onChange={(e) => setImageInputValue(e.target.value)}
                               className={styles.setField} placeholder={'Print URL of your new image'}/>
                        <span onClick={() => changeImage(imageInputValue)} className={styles.saveButton}>Save</span>
                    </div>
                    <Link to={'/'} onClick={signOut} className={styles.signOutButton}>
                        Sign out
                    </Link>
                </div>

            </div>
        </>
    )
});

export default Settings;

/*    <div>{
                            !drag ?
                                <div onDragLeave={(e) => dragStartHandler(e)} onDragStart={(e) => dragStartHandler(e)}
                                     className={styles.dropZone}><span className={styles.dropMessage}>Drop your image here</span>
                                </div> :
                                <div onDrop={e => changeImage(e)} onDragStart={(e) => dragLeaveHandler(e)}
                                     onDragLeave={(e) => dragLeaveHandler(e)} className={styles.dropZoneReady}><span
                                    className={styles.dropMessage}>Drop!</span></div>
                        }
                        </div>

 */