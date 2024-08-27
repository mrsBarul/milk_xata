import ChatPoster from "../../../../shared/ui/chatPoster/ChatPoster";
import Stack from "../../../../shared/ui/stack/Stack";
import Title from "../../../../shared/ui/title/Title";
import styles from './SliderCard.module.scss'

const SliderCard = ({ chatCard }) => {
    return(
        <Stack className={styles.sliderCardContainer}
        direction="column">
            <ChatPoster poster={chatCard.title}/>
            <Stack direction="column" justify="justifyStart" align="alignStart">
                <Title text={chatCard.title}/>
                <p>{chatCard.description}</p>
            </Stack>
        </Stack>
    )
}

export default SliderCard;