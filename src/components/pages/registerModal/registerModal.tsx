import {FunctionComponent, useEffect, useState} from 'react';
import {observer} from "mobx-react";
import styles from './registerModal.module.scss';
import store from "../../../stores/store";
import account from "../account/account";
import {stat} from "fs";


const SignInModal: FunctionComponent = observer(() => {
    const {isModalOpened, openModal, userList, alarm, setAlarmMessage, signIn, signUp} = store;
    const [passwordInputValue, setPasswordInputValue] = useState('');
    const [nameInputValue, setNameInputValue] = useState('');

    const tryToLogIn = () => {
        let status: number = 1;

        userList.forEach((item) => {
            if (item.user_name === nameInputValue && item.user_password === passwordInputValue) {
                status = 0;
                signIn(item.user_name);
            }
        })

        if (status === 1) {
            setAlarmMessage('Username or password are not correct.');
        }
    }

    const tryToRegister = () => {
        if (passwordInputValue.length < 8) {
            setAlarmMessage('Password имеет less 8 symbols.');
        } else if (nameInputValue.length < 4) {
            setAlarmMessage('Name is too short.');
        } else {
            let status = 0;
            userList.forEach((item) => {
                    if (item.user_name === nameInputValue) {
                        status = 1;
                    }
                }
            );
            if(status === 1) {
                setAlarmMessage('Account with this name has been created before. Try to enter.');
            }else{
                signUp(nameInputValue, passwordInputValue);
            }
        }
    }

    const closeModal = () => {
        openModal(false);
        setAlarmMessage('');
    }


    return (
        <div>
            {isModalOpened ?
                <div className={styles.modalBlurLay}>
                    <div className={styles.logWindow}>
                        <span className={styles.cross} onClick={closeModal}>&#10006;</span>
                        <div className={styles.modalContainer}>
                            <span className={styles.textNearInput}>Username  :  </span>
                            <input className={styles.logField} onChange={(e) => setNameInputValue(e.target.value)}/>
                        </div>
                        <div className={styles.modalContainer}>
                            <span>Password : </span>
                            <input className={styles.logField}
                                   onChange={(e) => setPasswordInputValue(e.target.value)}/>
                        </div>
                        <div className={styles.unitWithButtons}>
                            <span className={styles.logButton} onClick={tryToLogIn}>LogIn</span>
                            <span className={styles.logButton} onClick={tryToRegister}>Register</span>
                        </div>
                        <span className={styles.alarmMessage}>{alarm}</span>
                    </div>
                </div>
                :
                <div></div>
            }
        </div>
    )
});

export default SignInModal;