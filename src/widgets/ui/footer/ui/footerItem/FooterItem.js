import Stack from "../../../../../shared/ui/stack/Stack";
import styles from './FooterItem.module.scss'

const FooterItem = () => {
    return(
        <Stack justify="justifyBetween" className={styles.footerItemContainer}>
            <Stack>
                <p>Copyright © 2024, MilkPad.</p>
            </Stack>
            <Stack direction="column" align="alignEnd">
                <Stack>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </Stack>
                <Stack>
                    <p>support@milkpad.ai</p>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default FooterItem;