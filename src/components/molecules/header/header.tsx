import {FunctionComponent, ComponentPropsWithoutRef} from 'react';
import {observer} from "mobx-react";
import styles from './header.module.scss';
import NavButton from "../../atoms/navbutton/navbutton";
import Logo from "../../atoms/logo/logo";
import store from "../../../stores/store";


const Header: FunctionComponent = observer(() => {
    const {isEntered,openModal} = store;

    return (
        <>
            <div className={styles.sticky}>
                <div className={styles.header}>
                    <Logo/>

                    {isEntered ?
                        <div>
                            <NavButton navBtnText={'Settings'} link={'settings'}/>
                            <NavButton navBtnText={'Account'} link={'account'}/>
                        </div>:
                        <span className={styles.signButton} onClick={() => openModal(true)}>Enter in Account
                        </span>
                    }
                </div>
            </div>
        </>
    )
});

export default Header;