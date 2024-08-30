import Stack from "../../../../../shared/ui/stack/Stack";
import styles from './NavbarItem.module.scss'

const NavbarItem = ({ navbarItem, handleMenuClick }) => {
    
    return(
        <Stack className={styles.navbarItemContainer} 
        onClick={handleMenuClick}>
            <ul>
                <a href={navbarItem.link}>{ navbarItem.title }</a>
            </ul>
        </Stack>
    )
}

export default NavbarItem;