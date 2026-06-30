import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© {new Date().getFullYear()} Nikita Didus</span>
        <div className={styles.links}>
          <a href="mailto:nikitadidus@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/nikita-didus-215305331/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/lightfire52" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
