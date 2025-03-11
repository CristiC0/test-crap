function Header() {
    return (
        <div>
            <nav
                class="navbar navbar-expand-lg bg-primary"
                data-bs-theme="dark"
            >
                <div
                    style={{
                        display: "flex",
                        flexWrap: "inherit",
                        alignItems: "center",
                        gap: "10px",
                        marginRight: "10px",
                        marginLeft: "10px",
                    }}
                >
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
        </div>
    );
}

export default Header;
