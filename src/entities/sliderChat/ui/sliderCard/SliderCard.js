import Button from "../../../../shared/ui/button/Button";
import Stack from "../../../../shared/ui/stack/Stack";
import Title from "../../../../shared/ui/title/Title";
import styles from './SliderCard.module.scss'

const SliderCard = ({ chatCard }) => {
    return(
        <Stack className={styles.sliderCardContainer}
        direction="column">
            <Stack className={styles.chatPosterContainer}>
                <img src={`/images/${chatCard.title}.png`} alt="poster of the chat on MilkPad"/>
                <Stack className={styles.overlay}>
                    <Button variant="transparent">
                        {'Lounch App'}
                    </Button>
                </Stack>
            </Stack>
            <Stack direction="column" justify="justifyStart" align="alignStart">
                <Title text={chatCard.title}/>
                <p>{chatCard.description}</p>
            </Stack>
        </Stack>
    )
}

export default SliderCard;