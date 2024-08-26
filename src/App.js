import MainPage from "./pages/mainPage/MainPage";
import styles from './App.module.scss';
import Stack from './shared/ui/stack/Stack';

function App() {
  return ( 
    <Stack className={styles.App}>
      <MainPage/>
    </Stack>
  );
}

export default App;
