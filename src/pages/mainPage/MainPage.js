import Questions from '../../entities/questions/ui/questions/Questions';
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
            <Questions/>
            <Footer/>
        </Stack>
    )
}

export default MainPage;