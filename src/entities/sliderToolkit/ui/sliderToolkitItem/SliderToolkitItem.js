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
                <Button variant="primery">
                    <a href="https://t.me/PlayLifeBot" target="_blanck">Get Started</a>
                </Button>
            </Stack>
            <Stack>
                <img src={`/images/${toolkitItem.poster_one}.svg`} loading="lazy" alt="skins poster"/>
                <img src={`/images/${toolkitItem.poster_two}.svg`} loading="lazy" alt="ranking poster"/>
            </Stack>
        </Stack>
    )
}

export default SliderToolkitItem;