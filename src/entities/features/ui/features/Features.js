import Stack from "../../../../shared/ui/stack/Stack";
import styles from './Features.module.scss';
import dataFeatures from '../../lib/data';
import FeaturesItem from "../featuresItem/FeaturesItem";

const Features = () => {
    return(
        <Stack id="Features" className={styles.featuresContainer}>
            <Stack justify="justifyBetween">
                {dataFeatures.map((features, key) => (
                    <FeaturesItem key={key} features={features}/>
                ))}
            </Stack>
        </Stack>
    )
}

export default Features;