import CookieBanner from '../../entities/cookieBanner/ui/CookieBanner';
import Features from '../../entities/features/ui/features/Features';
import Poster from '../../entities/poster/ui/poster/Poster';
import Questions from '../../entities/questions/ui/questions/Questions';
import SliderChat from '../../entities/sliderChat/ui/sliderChat/SliderChat';
import SliderToolkit from '../../entities/sliderToolkit/ui/sliderToolkit/SliderToolkit';
import useWindowSize from '../../shared/hooks/useWindowSize';
import Stack from '../../shared/ui/stack/Stack';
import Footer from '../../widgets/ui/footer/ui/footer/Footer';
import Header from '../../widgets/ui/header/mainHeader/Header';
import HeaderTopMenu from '../../widgets/ui/header/menuTop/ui/headerTopMenu/HeaderTopMenu';
import Navbar from '../../widgets/ui/navbar/ui/navbar/Navbar';
import styles from './MainPage.module.scss';

const MainPage = () => {

    const screenSize = useWindowSize();
    const tabletM = 1070;


    return(
        <main>
            <Stack justify='justifyStart' className={styles.mainPageContainer} direction="column">
                {(screenSize.width) <= tabletM ? <Navbar/> : 
                <HeaderTopMenu/>} 
                <Header/>
                <SliderChat/>
                <Features />
                <SliderToolkit/> 
                <Poster/>
                <Questions/>
                <Footer/> 
                <CookieBanner/>
            </Stack>
        </main>
    )
}

export default MainPage;