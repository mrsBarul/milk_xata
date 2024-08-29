import Stack from "../../../../shared/ui/stack/Stack";
import PosterItem from "../posterItem/PosterItem";
import styles from './Poster.module.scss'

const Poster = () => {
    return(
        <Stack id="Create"  className={styles.posterContainer}>
            <Stack>
                <PosterItem/>
            </Stack>
        </Stack>
    )
}

export default Poster;