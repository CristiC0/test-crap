import styles from "./MainPage.module.css";

function MainPage({ onStartQuiz }) {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.h1}>CHESTIONAR GHIDARE ÎN CARIERĂ </h1>
                <p className={styles.p}>
                    Ești invitat/ă să răspunzi acestui chestionar de
                    identificare a intereselor profesionale Nu există răspunsuri
                    corecte sau greșite la aceste întrebări. Ești rugat/ă să
                    indici în ce măsură ți-ar plăcea să desfășori o serie de
                    activități. Este important să fii sincer/ă în răspunsurile
                    oferite.
                    <br />
                    <strong>Instrucțiuni: </strong>Opțiunile de răspuns sunt
                    între 1 și 5. Citeşte cu atenţie fiecare descriere şi
                    apreciază, utilizând scala de mai jos: 1 - nu mi-ar plăcea
                    absolut deloc 2 - nu prea mi-ar plăcea 3 - nici nu mi-ar
                    plăcea, nici nu mi-ar displăcea 4 - mi-ar plăcea 5 - mi-ar
                    plăcea foarte mult
                </p>
                <button
                    className={`btn btn-lg btn-primary ${styles.button}`}
                    type="button"
                    onClick={onStartQuiz}
                >
                    Începe chestionarul
                </button>
            </div>
        </div>
    );
}

export default MainPage;
