import Button from "../../../../shared/ui/button/Button";
import SectionTitle from "../../../../shared/ui/sectionTitle/SectionTitle";
import Stack from "../../../../shared/ui/stack/Stack";
import styles from "./SliderToolkit.module.scss";
import dataToolkit from '../../lib/data'
import SliderToolkitItem from "../sliderToolkitItem/SliderToolkitItem";
import { useState } from "react";

const SliderToolkit = () => {

    const [activeTab, setActiveTab] = useState('Chats');

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }

    const activeData = dataToolkit.find(item => item.title === activeTab);

    return (
        <Stack id="Toolkit"  className={styles.sliderToolkitContainer} direction="column"> 
            <SectionTitle text={`PlayLife's Toolkit`} />
            <Stack className={styles.buttonContainer} justify="justifyStart">
                <Button 
                    variant="toolkit" 
                    className={activeTab === 'Chats' ? styles.active : ''} 
                    onClick={() => handleTabClick('Chats')}
                >
                    {'Chats'}
                    <div className={styles.underline} />
                </Button>
                <Button 
                    variant="toolkit" 
                    className={activeTab === 'Ranking' ? styles.active : ''} 
                    onClick={() => handleTabClick('Ranking')}
                >
                    {'Ranking'}
                    <div className={styles.underline} />
                </Button>
            </Stack>
            <Stack direction="column">
                <SliderToolkitItem toolkitItem={activeData} />
            </Stack>
        </Stack>
    );
}

export default SliderToolkit;