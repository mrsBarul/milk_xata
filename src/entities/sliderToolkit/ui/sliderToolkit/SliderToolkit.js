import Button from "../../../../shared/ui/button/Button";
import SectionTitle from "../../../../shared/ui/sectionTitle/SectionTitle";
import Stack from "../../../../shared/ui/stack/Stack";
import styles from "./SliderToolkit.module.scss";
import dataToolkit from '../../lib/data'
import SliderToolkitItem from "../sliderToolkitItem/SliderToolkitItem";

const SliderToolkit = () => {
    return(
        <Stack className={styles.sliderToolkitContainer} direction="column"> 
            <SectionTitle text={`Milkapad's Toolkit`}/>
            <Stack justify="justifyStart">
                <Button variant="toolkit">{'Chats'}</Button>
                <Button variant="toolkit">{'Ranking'}</Button>
            </Stack>
            <Stack direction="column">
                {dataToolkit.map((toolkitItem, key) => (
                    <SliderToolkitItem key={key} toolkitItem={toolkitItem}/>
                ))}
            </Stack>
        </Stack>
    )
}

export default SliderToolkit; 