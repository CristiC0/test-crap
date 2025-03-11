import responses from "../data/responses.json";
import styles from "./Response.module.css";
function Response({ category, tryAgain }) {
    const { name, response } = responses.find(
        (response) => response.category === category
    );
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.h1}>{name}</h1>
                <p className={styles.p}> {response}</p>
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
