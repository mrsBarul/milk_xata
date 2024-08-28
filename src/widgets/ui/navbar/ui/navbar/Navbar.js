import Stack from "../../../../../shared/ui/stack/Stack";
import styles from './Navbar.module.scss';
import dataNavbar from '../../../header/menuTop/lib/data'
import NavbarItem from "../navbarItem/NavbarItem";
import Logo from "../../../../../shared/ui/logo/Logo";
import Button from "../../../../../shared/ui/button/Button";
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(prevState => !prevState)
    }

    return(
        <Stack direction="column" justify="justifyStart"
        className={`${styles.navbarContainer} ${isOpen ? styles.navbarContainerOpen : ''}`}>
            <Stack justify="justifyBetween"
            className={`${styles.navbar} ${isOpen ? styles.navbarOpen : ''}`}>
                <Logo/>
                <Button variant="default">
                    {'Lounch App'}
                </Button>
                <Button onClick={handleMenuClick} variant="transparent">
                    <img src={isOpen ? '/images/closeMenu.svg' : '/images/openMenu.svg'} alt="button's menu"/>
                </Button>
            </Stack>
            <Stack className={`${styles.containerNavbarItem} ${isOpen ? '' : styles.containerNavbarItemClosed}`} 
            direction="column">
                {dataNavbar.map((navbarItem, key) => (
                    <NavbarItem key={key} navbarItem={navbarItem}/>
                ))}
            </Stack>
        </Stack>
    )
}

export default Navbar;