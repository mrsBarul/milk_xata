import Stack from "../stack/Stack";
import styles from './Logo.module.scss'

const Logo = () => {
    return(
        <Stack className={styles.logoContainer}>
            <img src={`/images/logoMilkAi.png`} alt="logo"/>
            <p>MilkPad</p>
        </Stack>
    )
}

export default Logo;