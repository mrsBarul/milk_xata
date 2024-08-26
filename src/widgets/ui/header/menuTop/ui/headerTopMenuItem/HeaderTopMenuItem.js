import Stack from "../../../../../../shared/ui/stack/Stack";
import styles from './HeaderTopMenuItem.module.scss'

const HeaderTopMenuItem = ({ menuItem }) => {
    return(
        <Stack className={styles.headerTopMenuItemContainer}>
            <ul>
                <li>{ menuItem }</li>
            </ul>
        </Stack>
    )
}

export default HeaderTopMenuItem;