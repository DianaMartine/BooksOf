import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.containerFooter}>
        Made by &reg;Diana Martine&trade;
        <a href="https://github.com/dianamartine">
          <img
            src="https://img.shields.io/badge/-DianaMartine-000?style=for-the-badge&logo=Github&logoColor=white"
            alt="Github"
          />
        </a>
        <a href="https://linkedin.com/in/dianamartine">
          <img
            src="https://img.shields.io/badge/-Diana_Martine-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white"
            alt="linkedin"
          />
        </a>
        <a href="https://instagram.com/diana_martine__">
          <img
            src="https://img.shields.io/badge/@diana__martine____-c13584?style=for-the-badge&logo=Instagram&logoColor=white"
            alt="Instagram"
          />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
