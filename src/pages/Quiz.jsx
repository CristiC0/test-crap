import { useState } from "react";
import styles from "./Quiz.module.css";
function Quiz({ onResponse, answers, setAnswers }) {
    const [showMessage, setShowMessage] = useState(false);

    function setScore(index, score) {
        setAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[index].answer = score;
            return newAnswers;
        });
    }
    function handleResponse() {
        const allAnswered = answers.every((answer) => answer.answer !== null);
        if (!allAnswered) {
            setShowMessage(true);
        } else {
            const categoryScores = { R: 0, I: 0, C: 0, S: 0, E: 0, A: 0 };
            answers.forEach(({ category, answer }) => {
                categoryScores[category] += answer;
            });
            const biggestCategory = Object.entries(categoryScores).reduce(
                (acc, [key, value]) => (value > acc[1] ? [key, value] : acc),
                ["", 0]
            )[0];
            onResponse(biggestCategory);
        }
    }
    return (
        <div>
            {answers.map(({ nr, question, answer }, index) => (
                <div className={styles.question} key={index}>
                    <p
                        className={`${
                            showMessage && answer === null ? "text-danger" : ""
                        }`}
                    >
                        {nr}. {question}
                    </p>
                    <div
                        className="btn-group me-2"
                        role="group"
                        aria-label="First group"
                    >
                        <button
                            type="button"
                            className={`btn btn-secondary ${styles.b} ${
                                answer === 1 ? styles.selected : ""
                            }`}
                            onClick={() => setScore(index, 1)}
                        >
                            1
                        </button>
                        <button
                            type="button"
                            c
                            className={`btn btn-secondary ${
                                answer === 2 ? styles.selected : ""
                            }`}
                            onClick={() => setScore(index, 2)}
                        >
                            2
                        </button>
                        <button
                            type="button"
                            className={`btn btn-secondary ${
                                answer === 3 ? styles.selected : ""
                            }`}
                            onClick={() => setScore(index, 3)}
                        >
                            3
                        </button>
                        <button
                            type="button"
                            className={`btn btn-secondary ${
                                answer === 4 ? styles.selected : ""
                            }`}
                            onClick={() => setScore(index, 4)}
                        >
                            4
                        </button>
                        <button
                            type="button"
                            className={`btn btn-secondary ${
                                answer === 5 ? styles.selected : ""
                            }`}
                            onClick={() => setScore(index, 5)}
                        >
                            5
                        </button>
                    </div>
                </div>
            ))}
            <button
                className={`btn btn-lg btn-primary ${styles.button}`}
                onClick={handleResponse}
            >
                Trimite răspunsurile
            </button>
            {showMessage && (
                <div
                    className={`alert alert-danger mt-3 ${styles.text}`}
                    role="alert"
                >
                    Te rugăm să răspunzi la toate întrebările.
                </div>
            )}
        </div>
    );
}

export default Quiz;
