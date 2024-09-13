import Button from "../../../../shared/ui/button/Button";
import SectionTitle from "../../../../shared/ui/sectionTitle/SectionTitle";
import Stack from "../../../../shared/ui/stack/Stack";
import styles from './SliderChat.module.scss';
import dataChat from '../../lib/data';
import SliderCard from "../sliderCard/SliderCard";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "../../../../shared/hooks/useWindowSize";

const SliderChat = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4); 
    const gap = 24;
    const { width } = useWindowSize(); 
    const carouselRef = useRef(null);

    const totalItems = dataChat.length;
    const maxIndex = Math.ceil(totalItems / itemsPerPage) - 1;

    useEffect(() => {
        if (width <= 590) {
            setItemsPerPage(1);
        } else if (width <= 820) {
            setItemsPerPage(2);
        } else if (width <= 1024) {
            setItemsPerPage(2);
        } else {
            setItemsPerPage(4);
        }
    }, [width]);

    const handleNext = () => {
        if (carouselRef.current && currentIndex < maxIndex) {
            const totalGapWidth = gap * (itemsPerPage - 1);
            const itemWidth = (carouselRef.current.offsetWidth - totalGapWidth) / itemsPerPage;
            carouselRef.current.scrollBy({ left: (itemWidth + gap) * itemsPerPage, behavior: 'smooth' });
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (carouselRef.current && currentIndex > 0) {
            const totalGapWidth = gap * (itemsPerPage - 1);
            const itemWidth = (carouselRef.current.offsetWidth - totalGapWidth) / itemsPerPage;
            carouselRef.current.scrollBy({ left: -((itemWidth + gap) * itemsPerPage), behavior: 'smooth' });
            setCurrentIndex(currentIndex - 1);
        }
    };

    return(
        <Stack id="Home"  direction="column" className={styles.slaiderChatContainer}>
            <Stack justify="justifyBetween">
                <SectionTitle justify={width <= 590 ? "justifyCenter" : "justifyStart"} text={'Chat on PlayLife'}/>
                <Stack className={`${styles.buttonContainer} ${width <= 590 ? styles.containerNone : ''}`}>
                    <Button
                        variant="allow"
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                    >
                        <img
                            src={`${'/images/activPrev.svg'}`}
                            alt='prev'
                            loading="lazy"
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
                            loading="lazy"
                            className={`${styles.buttonImage} ${currentIndex === maxIndex ? styles.disabledButton : ''}`}
                        />
                    </Button>
                </Stack>
            </Stack>
            <Stack ref={carouselRef}
            justify="justifyStart" align="alignStart" 
            className={styles.sliderTrack}
            style={{ overflowX: 'hidden', display: 'flex' }}>
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
                            loading="lazy"
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
                            loading="lazy"
                            className={`${styles.buttonImage} ${currentIndex === maxIndex ? styles.disabledButton : ''}`}
                        />
                    </Button>
                </Stack>
        </Stack>
    )
}

export default SliderChat;