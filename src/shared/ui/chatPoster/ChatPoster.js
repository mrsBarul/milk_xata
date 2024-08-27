import Button from "../button/Button";
import Stack from "../stack/Stack";
import styles from './ChatPoster.module.scss'

const ChatPoster = ({ poster }) => {
    return(
        <Stack className={styles.chatPosterContainer}>
            <img src={`/images/${poster}.png`} alt="poster of the chat on MilkPad"/>
            <Stack className={styles.overlay}>
                <Button variant="transparent">
                    {'Lounch App'}
                </Button>
            </Stack>
        </Stack>
    )
}

export default ChatPoster;