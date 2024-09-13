import Stack from "../stack/Stack";
import styles from './Logo.module.scss'

const Logo = () => {
    return(
        <Stack className={styles.logoContainer}>
            <img src={`/images/logoPlayLifeAi.svg`} rel="preload" alt="logo"/>
            <p>PlayLife</p>
        </Stack>
    )
}

export default Logo;