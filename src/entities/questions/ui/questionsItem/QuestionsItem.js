import { useState } from "react";
import Button from "../../../../shared/ui/button/Button";
import Stack from "../../../../shared/ui/stack/Stack";
import Title from "../../../../shared/ui/title/Title";
import styles from './QuestionsItem.module.scss'

const QuestionsItem = ({ question, isFirst }) => {

    const [isOpen, setIsOpen] = useState(isFirst || false);

    const handleComponentClick = () => {
        setIsOpen(prevState => !prevState)
    }

    return(
        <Stack className={styles.questionsItemContainer} 
        direction="column"
        onClick={handleComponentClick}>
            <Stack justify="justifyBetween">
                <Title text={question.title}/>
                <Button variant="openQuestion">
                <img
                        src={`/images/openQuestion.svg`}
                        loading="lazy"
                        alt="open questions"
                        className={isOpen ? styles.rotated : styles.reverseRotated}
                    />
                </Button>
            </Stack>
            <Stack className={isOpen ? styles.openAnswer : styles.closeAnswer} direction="column" align="alignStart">
                {question.intro && <p>{question.intro}</p>}
                {question.answer.map((answer, key) => (
                    <ul key={key}>
                        <li><span>{answer}</span></li>
                    </ul>
                ))}
                {question.end && <p>{question.end}</p>}
            </Stack>
        </Stack>
    )
}

export default QuestionsItem;