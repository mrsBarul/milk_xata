import Stack from "../../../../../../shared/ui/stack/Stack";
import styles from './HeaderTopMenuItem.module.scss'

const HeaderTopMenuItem = ({ menuItem }) => {
    return(
        <Stack className={styles.headerTopMenuItemContainer}>
            <ul>
                <a href={menuItem.link}>{ menuItem.title }</a>
            </ul>
        </Stack>
    )
}

export default HeaderTopMenuItem;