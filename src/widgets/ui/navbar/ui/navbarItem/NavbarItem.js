import Stack from "../../../../../shared/ui/stack/Stack";
import styles from './NavbarItem.module.scss'

const NavbarItem = ({ navbarItem }) => {
    return(
        <Stack className={styles.navbarItemContainer} 
        align="alignStart">
            <ul>
                <a href="fghf">{ navbarItem }</a>
            </ul>
        </Stack>
    )
}

export default NavbarItem;