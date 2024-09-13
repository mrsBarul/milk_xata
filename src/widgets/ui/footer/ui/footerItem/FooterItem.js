import Stack from "../../../../../shared/ui/stack/Stack";
import styles from './FooterItem.module.scss'

const FooterItem = () => {
    return(
        <Stack justify="justifyBetween" className={styles.footerItemContainer}>
            <Stack>
                <p>Copyright © 2024, PlayLife.</p>
            </Stack>
            <Stack direction="column" align="alignEnd">
                <Stack>
                    <a href="/terms_of_service" target="_blank">Terms of Service</a>
                    <a href="/privacy_policy" target="_blank">Privacy Policy</a>
                </Stack>
                <Stack>
                    <p>support@PlayLife.ai</p>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default FooterItem;