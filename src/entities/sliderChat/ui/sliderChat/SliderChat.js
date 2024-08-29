import Button from "../../../../shared/ui/button/Button";
import SectionTitle from "../../../../shared/ui/sectionTitle/SectionTitle";
import Stack from "../../../../shared/ui/stack/Stack";
import styles from './SliderChat.module.scss';
import dataChat from '../../lib/data';
import SliderCard from "../sliderCard/SliderCard";
import { useEffect, useState } from "react";
import useWindowSize from "../../../../shared/hooks/useWindowSize";

const SliderChat = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4); 
    const [gap, setGap] = useState(20)
    const { width } = useWindowSize(); 

    const itemWidth = (100 / itemsPerPage - 1);


    const totalItems = dataChat.length;
    const maxIndex = Math.ceil(totalItems / itemsPerPage) - 1;

    console.log(maxIndex)

    useEffect(() => {
        if (width <= 590) {
            setItemsPerPage(1)
            setGap(26)
        } else if (width <= 820) {
            setItemsPerPage(2)
            setGap(20)
        } else if (width <= 1024) {
            setItemsPerPage(2)
            setGap(25)
        } else {
            setItemsPerPage(4)
            setGap(24)
        }
    }, [width]);

    const handleNext = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const translateX = (-(currentIndex * (itemWidth + (gap / width * 100)))) * itemsPerPage;

    return(
        <Stack id="Chats"  direction="column" className={styles.slaiderChatContainer}>
            <Stack justify="justifyBetween">
                <SectionTitle justify={width <= 590 ? "justifyCenter" : "justifyStart"} text={'Chat on Milkapad'}/>
                <Stack className={`${styles.buttonContainer} ${width <= 590 ? styles.containerNone : ''}`}>
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
            className={styles.sliderTrack}
            style={{ transform: `translateX(${translateX}%)` }}>
                {dataChat.map((chatCard, key) => (
                    <SliderCard key={key} chatCard={chatCard}/>
                ))}
            </Stack>

            <Stack className={`${styles.buttonContainer} ${width >= 590 ? styles.containerNone : ''}`}>
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
    )
}

export default SliderChat;