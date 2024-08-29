import Logo from "../../../../../../shared/ui/logo/Logo";
import Stack from "../../../../../../shared/ui/stack/Stack";
import styles from "./HeaderTopMenu.module.scss";
import dataMenu from "../../lib/data"
import HeaderTopMenuItem from "../headerTopMenuItem/HeaderTopMenuItem";
import Button from "../../../../../../shared/ui/button/Button";

const HeaderTopMenu = () => {
    return(
        <Stack className={styles.headerTopMenuContainer}>
            <Stack justify="justifyBetween" className={styles.headerTopMenu}>
                <Logo/>
                <Stack className={styles.menuItem}>
                    {dataMenu.map((menuItem, key) => (
                        <HeaderTopMenuItem key={key} menuItem={ menuItem }/>
                    ))}
                </Stack>
                <Button variant="default">
                <a href="https://t.me/MilkPadBot" target="_blanck">Lounch App</a>
                </Button>
            </Stack>
        </Stack>
    )
}

export default HeaderTopMenu;