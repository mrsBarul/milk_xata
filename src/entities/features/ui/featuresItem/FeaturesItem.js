import Stack from "../../../../shared/ui/stack/Stack";
import Title from "../../../../shared/ui/title/Title";
import styles from './FeaturesItem.module.scss'

const FeaturesItem = ({ features }) => {
    return(
        <Stack direction="column" 
        justify="justifyStart"
        align="alignStart"
        className={styles.featuresItemContainer}>
            <Title text={features.title}/>
            <p>{features.description}</p>
        </Stack>
    )
}

export default FeaturesItem;