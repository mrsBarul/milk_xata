import Button from "../../../../shared/ui/button/Button";
import Stack from "../../../../shared/ui/stack/Stack"
import Title from "../../../../shared/ui/title/Title";
import styles from './SliderToolkitItem.module.scss'

const SliderToolkitItem = ({ toolkitItem }) => {
    return(
        <Stack className={styles.sliderToolkitContainer}>
            <Stack direction="column" 
            align="alignStart">
                <p>{toolkitItem.title}</p>
                <Title text={toolkitItem.header}/>
                <p>{toolkitItem.description}</p>
                <Button variant="primery">{'Get Started'}</Button>
            </Stack>
            <Stack>
                <img src={`/images/${toolkitItem.poster_one}.png`} alt="skins poster"/>
                <img src={`/images/${toolkitItem.poster_two}.png`} alt="ranking poster"/>
            </Stack>
        </Stack>
    )
}

export default SliderToolkitItem;