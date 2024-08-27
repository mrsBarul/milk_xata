import Features from '../../entities/features/ui/features/Features';
import Poster from '../../entities/poster/ui/poster/Poster';
import Questions from '../../entities/questions/ui/questions/Questions';
import SliderChat from '../../entities/sliderChat/ui/sliderChat/SliderChat';
import Stack from '../../shared/ui/stack/Stack';
import Footer from '../../widgets/ui/footer/ui/footer/Footer';
import Header from '../../widgets/ui/header/mainHeader/Header';
import HeaderTopMenu from '../../widgets/ui/header/menuTop/ui/headerTopMenu/HeaderTopMenu';
import styles from './MainPage.module.scss';

const MainPage = () => {
    return(
        <Stack justify='justifyStart' className={styles.mainPageContainer} direction="column">
            <HeaderTopMenu/>
            <Header/>
            <SliderChat/>
            <Features/>
            <Poster/>
            <Questions/>
            <Footer/>
        </Stack>
    )
}

export default MainPage;