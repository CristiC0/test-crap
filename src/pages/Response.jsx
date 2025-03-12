import responses from "../data/responses.json";
import styles from "./Response.module.css";

function Response({ category, tryAgain }) {
    const { name, response, can, like, are, professions } = responses.find(
        (response) => response.category === category
    );

    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.h1}>{name}</h1>
                <p className={styles.p}> {response}</p>
                <div className={styles.info}>
                    <div className={styles.card}>
                        <h2>Sunteți?</h2>
                        <ul>
                            {are.map((text) => (
                                <li key={text}>{text}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h2>Puteți să : </h2>
                        <ul>
                            {can.map((text) => (
                                <li key={text}>{text}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h2>Vă place să? </h2>
                        <ul>
                            {like.map((text) => (
                                <li key={text}>{text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.card}>
                    <h2>Posibilități de carieră</h2>
                    <div className={styles.pro}>
                        {professions.map((profession) => (
                            <div
                                key={profession.name}
                                className={styles.profession}
                            >
                                {profession}
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className={`btn btn-lg btn-primary ${styles.button}`}
                    type="button"
                    onClick={tryAgain}
                >
                    Încearcă din nou
                </button>
            </div>
        </div>
    );
}

export default Response;
