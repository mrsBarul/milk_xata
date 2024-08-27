import Button from "../../../../shared/ui/button/Button";
import SectionTitle from "../../../../shared/ui/sectionTitle/SectionTitle";
import Stack from "../../../../shared/ui/stack/Stack";
import styles from './SliderChat.module.scss';
import dataChat from '../../lib/data';
import SliderCard from "../sliderCard/SliderCard";

const SliderChat = () => {
    return(
        <Stack direction="column" className={styles.slaiderChatContainer}>
            <Stack justify="justifyBetween">
                <SectionTitle justify={"justifyStart"} text={'Chat on Milkapad'}/>
                <Stack>
                    <Button variant="allow">
                        <img alt='prev'/>
                    </Button>
                    <Button variant="allow">
                        <img alt='next'/>
                    </Button>
                </Stack>
            </Stack>
            <Stack justify="justifyStart" align="alignStart">
                {dataChat.map((chatCard, key) => (
                    <SliderCard key={key} chatCard={chatCard}/>
                ))}
            </Stack>
        </Stack>
    )
}

export default SliderChat;