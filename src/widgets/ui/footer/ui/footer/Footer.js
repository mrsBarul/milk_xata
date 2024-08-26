import Stack from "../../../../../shared/ui/stack/Stack";
import FooterItem from "../footerItem/FooterItem";
import styles from './Footer.module.scss'

const Footer = () => {
    return(
        <Stack className={styles.footerContainer}>
            <Stack className={styles.footer}>
                <FooterItem/>
            </Stack>
        </Stack>
    )
}

export default Footer;