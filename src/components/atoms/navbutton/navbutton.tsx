import {FunctionComponent, ComponentPropsWithoutRef} from 'react';
import {observer} from "mobx-react";
import styles from './navbutton.module.scss';
import {Link} from "react-router-dom";

type navButtonProps = {
    navBtnText: string;
    link: string;
}

const NavButton: FunctionComponent<navButtonProps> = observer(({navBtnText, link}) => {

    return (
        <>
            <Link to={link} className={styles.navButton}>{navBtnText}
            </Link>
        </>
    )
});

export default NavButton;