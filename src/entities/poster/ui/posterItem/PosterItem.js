import useWindowSize from "../../../../shared/hooks/useWindowSize";
import Button from "../../../../shared/ui/button/Button";
import SectionTitle from "../../../../shared/ui/sectionTitle/SectionTitle";
import Stack from "../../../../shared/ui/stack/Stack";
import styles from './PosterItem.module.scss'

const PosterItem = () => {

    const { width } = useWindowSize();

    
    const AlternativeComponent = () => (
        <Stack className={styles.posterItemAlternativeContainer}
        direction="column" justify="justifyCenter">
            <SectionTitle  
            text={'Create your own AI Companion'}/>
            <Stack align='alignEnd'>
                <Stack direction="column" align="alignStart">
                    <Stack direction="column" align="alignStart">
                        <p>Meet your new AI companion! Customize your companion’s appearance and personality to your liking, and watch her come to life.</p>
                    </Stack>
                    <Button variant="defaultCreate">
                        <img src={`/images/magicPen.png`} loading="lazy" alt="magic pen"/>
                        <a href="https://t.me/PlayLifeBot" target="_blanck">Create Ai Companion</a>
                    </Button>
                </Stack>
                <Stack>
                    <img src={`/images/posterPersons.png`} loading="lazy" alt="persons on the poster"/>
                </Stack>
            </Stack>
        </Stack>
    )

    const DefaultComponent = () => ( 
        <Stack className={styles.posterItemContainer} justify="justifyBetween">
            <Stack direction="column" align="alignStart">
                <Stack direction="column" align="alignStart">
                    <SectionTitle 
                        justify={"justifyStart"}  
                        text={'Create your own AI Companion'}
                    />
                    <p>Meet your new AI companion! Customize your companion’s appearance and personality to your liking, and watch her come to life.</p>
                </Stack>
                <Button variant="defaultCreate">
                    <img src={`/images/magicPen.png`} loading="lazy" alt="magic pen"/>
                    <a href="https://t.me/PlayLifeBot" target="_blanck">Create Ai Companion</a>
                </Button>
            </Stack>
            <Stack>
                <img src={`/images/posterPersons.png`} loading="lazy" alt="persons on the poster"/>
            </Stack>
        </Stack>
    )

    if (width > 590 && width <= 820) {
        return <AlternativeComponent />;
    } return <DefaultComponent />;
}

export default PosterItem;