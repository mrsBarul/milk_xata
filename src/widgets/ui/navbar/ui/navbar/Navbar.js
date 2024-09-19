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
            <Stack direction='column'>
                <Stack justify="justifyBetween"
                className={`${styles.navbar} ${isOpen ? styles.navbarOpen : ''}`}>
                    <Logo/>
                    <Button variant="default">
                        <a href="https://t.me/PlayLifeBot" target="_blanck">Launch App</a>
                    </Button>
                    <Button onClick={handleMenuClick} variant="menu">
                        <img src={isOpen ? '/images/closeMenu.svg' : '/images/openMenu.svg'} alt="button's menu"/>
                    </Button>
                </Stack>
                <Stack className={`${styles.containerNavbarItem} ${isOpen ? '' : styles.containerNavbarItemClosed}`} 
                direction="column">
                    {dataNavbar.map((navbarItem, key) => (
                        <NavbarItem key={key} navbarItem={navbarItem} handleMenuClick={handleMenuClick}/>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Navbar;