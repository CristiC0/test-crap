import "bootswatch/dist/zephyr/bootstrap.min.css";
import MainPage from "./pages/MainPage";
import { useCallback, useState, useEffect } from "react";
import Quiz from "./pages/Quiz";
import Response from "./pages/Response";
import questions from "./data/questions.json";
import Header from "./components/Header";

function App() {
    const [page, setPage] = useState(() => {
        return parseInt(localStorage.getItem("page")) || 1;
    });
    const [category, setCategory] = useState(() => {
        return localStorage.getItem("category") || null;
    });
    const [answers, setAnswers] = useState(() => {
        const savedAnswers = localStorage.getItem("answers");
        return savedAnswers
            ? JSON.parse(savedAnswers)
            : questions.map((question) => ({ ...question, answer: null }));
    });

    useEffect(() => {
        localStorage.setItem("page", page);
    }, [page]);

    useEffect(() => {
        localStorage.setItem("category", category);
    }, [category]);

    useEffect(() => {
        localStorage.setItem("answers", JSON.stringify(answers));
    }, [answers]);

    const startQuiz = useCallback(() => {
        setPage(2);
    }, []);

    const onResponse = (category) => {
        setCategory(category);
        setPage(3);
    };

    const tryAgain = () => {
        setPage(1);
        setCategory(null);
        setAnswers(
            questions.map((question) => ({ ...question, answer: null }))
        );
        localStorage.removeItem("category");
        localStorage.removeItem("answers");
    };

    return (
        <>
            <Header page={page} />
            {page === 1 && <MainPage onStartQuiz={startQuiz} />}
            {page === 2 && (
                <Quiz
                    onResponse={onResponse}
                    answers={answers}
                    setAnswers={setAnswers}
                    tryAgain={tryAgain}
                />
            )}
            {page === 3 && <Response category={category} tryAgain={tryAgain} />}
        </>
    );
}

export default App;
