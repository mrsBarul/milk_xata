import SectionTitle from "../../../../shared/ui/sectionTitle/SectionTitle";
import Stack from "../../../../shared/ui/stack/Stack";
import QuestionsItem from "../questionsItem/QuestionsItem";
import styles from './Questions.module.scss';
import dataQuestion from '../../lib/data'

const Questions = () => {
    return(
        <Stack id="FAQ"  className={styles.questionsContainer} direction="column">
            <SectionTitle text={'Frequently Asked Questions'}/>
            <Stack direction="column">
                {dataQuestion.map((question, key) => (
                    <QuestionsItem key={key} question={question} isFirst={key === 0}/>
                ))}
            </Stack>
        </Stack>
    )
}

export default Questions;