import Button from "../../../../shared/ui/button/Button";
import Stack from "../../../../shared/ui/stack/Stack";
import styles from './Header.module.scss'

const Header = () => {
    return(
        <Stack direction="column" className={styles.headerContainer}>
            <Stack direction="column">
                <h1>Interaction, Unleashed.</h1>
                <p>Discover customized chats on any topic tailored to your preferences.</p>
            </Stack>
            <Button variant="default">
                {'Get Started'}
            </Button>
        </Stack>
    )
}

export default Header;