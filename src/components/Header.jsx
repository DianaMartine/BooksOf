import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <header className={styles.containerHeader}>
        <h1 className={styles.h1}>
          <span>Books</span> of...
        </h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href=".">Início</a>
            </li>
            <li>
              <a
                href="https://github.com/DianaMartine/BooksOf/blob/main/README.md"
                target="_blank"
                rel="noreferrer"
              >
                Sobre
              </a>
            </li>
          </ul>
        </nav>
        <br />
      </header>
    </div>
  );
};

export default Header;
