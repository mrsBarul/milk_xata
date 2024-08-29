import Button from "../../../../shared/ui/button/Button";
import SectionTitle from "../../../../shared/ui/sectionTitle/SectionTitle";
import Stack from "../../../../shared/ui/stack/Stack";
import styles from './PosterItem.module.scss'

const PosterItem = () => {
    return(
        <Stack className={styles.posterItemContainer} justify="justifyBetween">
            <Stack direction="column" align="alignStart">
                <Stack direction="column" align="alignStart">
                    <SectionTitle justify={"justifyStart"}  text={'Create your own AI Companion'}/>
                    <p>Meet your new AI companion! Customize your companion’s appearance and personality to your liking, and watch her come to life.</p>
                </Stack>
                <Button variant="defaultCreate">
                    <img src={`/images/magicPen.png`} alt="magic pen"/>
                    <a href="https://t.me/MilkPadBot" target="_blanck">Create Ai Companion</a>
                </Button>
            </Stack>
            <Stack>
                <img src={`/images/posterPersons.png`} alt="persons on the poster"/>
            </Stack>
        </Stack>
    )
}

export default PosterItem;