import Button from "../../../../shared/ui/button/Button";
import SectionTitle from "../../../../shared/ui/sectionTitle/SectionTitle";
import Stack from "../../../../shared/ui/stack/Stack";
import styles from './SliderChat.module.scss';
import dataChat from '../../lib/data';
import SliderCard from "../sliderCard/SliderCard";
import { useState } from "react";

const SliderChat = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const itemsPerPage = 4;
    const totalItems = dataChat.length;
    const maxIndex = Math.ceil(totalItems / itemsPerPage) - 1;

    const handleNext = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const translateX = -currentIndex * 100;


    return(
        <Stack direction="column" className={styles.slaiderChatContainer}>
            <Stack justify="justifyBetween">
                <SectionTitle justify={"justifyStart"} text={'Chat on Milkapad'}/>
                <Stack>
                <Button
                        variant="allow"
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                    >
                        <img
                            src={`${'/images/activPrev.svg'}`}
                            alt='prev'
                            className={`${styles.buttonImage} ${currentIndex === 0 ? styles.disabledButton : ''}`}
                        />
                    </Button>
                    <Button
                        variant="allow"
                        onClick={handleNext}
                        disabled={currentIndex === maxIndex}
                    >
                        <img
                            src={`${'/images/activNext.svg'}`}
                            alt='next'
                            className={`${styles.buttonImage} ${currentIndex === maxIndex ? styles.disabledButton : ''}`}
                        />
                    </Button>
                </Stack>
            </Stack>
            <Stack justify="justifyStart" align="alignStart" 
            style={{ transform: `translateX(${translateX}%)` }}>
                {dataChat.map((chatCard, key) => (
                    <SliderCard key={key} chatCard={chatCard}/>
                ))}
            </Stack>
        </Stack>
    )
}

export default SliderChat;