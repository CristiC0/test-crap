import styles from "./Header.module.css";
function Header({ page }) {
    return (
        <>
            <nav
                class="navbar navbar-expand-lg bg-primary"
                data-bs-theme="dark"
            >
                <div className={styles.nav}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBfiCBHxHyH1ksRoK9j2VzZHtshHTwY7hNDQ&s"
                        width={30}
                        height={30}
                    />
                    <a class="navbar-brand" style={{ marginLeft: 0 }} href="#">
                        Chestionar ghidare în carieră
                    </a>
                </div>
            </nav>
            {page === 2 && (
                <nav class={`${styles.stick}`} data-bs-theme="dark">
                    <div className={styles.container}>
                        <p>1 - nu mi-ar plăcea absolut deloc</p>
                        <p>2 - nu prea mi-ar plăcea </p>
                        <p>
                            3 - nici nu mi-ar plăcea, nici nu mi-ar displăcea{" "}
                        </p>
                        <p>4 - mi-ar plăcea</p>
                        <p>5 - mi-ar plăcea foarte mult</p>
                    </div>
                </nav>
            )}
        </>
    );
}

export default Header;
