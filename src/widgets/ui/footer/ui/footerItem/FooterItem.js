import Stack from "../../../../../shared/ui/stack/Stack";
import styles from './FooterItem.module.scss';

const FooterItem = () => {
    return(
        <Stack justify="justifyBetween" className={styles.footerItemContainer}>
            <Stack>
                <p>Copyright © 2024, PlayLife.</p>
            </Stack>
            <Stack direction="column" align="alignEnd">
                <Stack>
                    <a href="/terms_of_service" target="_blank" rel="noreferrer">Terms of Service</a>
                    <a href="/privacy_policy" target="_blank" rel="noreferrer">Privacy Policy</a>
                </Stack>
                <Stack>
                    <a href="https://t.me/PlayLifeContactBot" target="_blank" rel="noreferrer">Support</a>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default FooterItem;