import {FunctionComponent} from "react";
import styles from './footer.module.scss';
import FooterContainer from "../../atoms/footerContainer/footerContainer";

const Footer: FunctionComponent = () => {
    return (
        <>
            <hr className={styles.groundLine}/>
            <div className={styles.footer}>
                <FooterContainer/>
                <FooterContainer/>
                <FooterContainer/>
                <FooterContainer/>
            </div>
        </>
    )
}

export default Footer;