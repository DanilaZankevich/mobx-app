import { FunctionComponent } from 'react';
import styles from "../../molecules/footer/footer.module.scss";



const FooterContainer:FunctionComponent = () =>{
    return(
        <>
            <div className={styles.footerContainer}>
                <span className={styles.subHeader}>Contacts</span>
                <span>Number: +1234567890</span>
                <span>Gmail: gmail@gmail.com</span>
                <span>Location: Belarus</span>
                <span>Mailing index: 123124</span>
            </div>
        </>
    );
}

export default FooterContainer;