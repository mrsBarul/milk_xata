import Stack from "../stack/Stack";
import styles from './Title.module.scss'

const Title = ({ text }) => {
    return(
        <Stack className={styles.titleContainer}>
            <h3>
                {text}
            </h3>
        </Stack>
    )
}

export default Title;