import Stack from "../../../../../shared/ui/stack/Stack";
import styles from './NavbarItem.module.scss'

const NavbarItem = ({ navbarItem }) => {
    return(
        <Stack className={styles.navbarItemContainer}>
            <ul>
                <a href={navbarItem.link}>{ navbarItem.title }</a>
            </ul>
        </Stack>
    )
}

export default NavbarItem;