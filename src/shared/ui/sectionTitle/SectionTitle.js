import Stack from "../stack/Stack";
import styles from './SectionTitle.module.scss'

const SectionTitle = ({ text }) => {
    return(
        <Stack className={styles.sectionTitleContainer}>
            <h1>
                {text}
            </h1>
        </Stack>
    )
}

export default SectionTitle;