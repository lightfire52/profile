import unfPhoto from '../assets/unf.png';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section>
      <div className={styles.banner}>
        <img src={unfPhoto} alt="University of North Florida campus at dusk" className={styles.bannerImg} />
        <div className={styles.bannerCaption}>University of North Florida</div>
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Education</p>
        <h1>Studying Computer Science</h1>
        <p className={styles.lede}>
          I'm currently pursuing my degree at the University of North Florida,
          where I've focused on software development, data structures, and
          building real, working systems rather than just theory.
        </p>

        <div className={styles.detail}>
          <h3>University of North Florida</h3>
          <p className={styles.meta}>
            B.S. in Computer Science · College of Computing, Engineering and
            Construction · Fall 2026 · GPA 3.64
          </p>
          <p>
            Coursework has covered software engineering, databases, and web
            development — the same foundation that's let me contribute to a
            real team project rather than only solo coursework.
          </p>
        </div>

        <div className={styles.detail}>
          <h3>Honors &amp; Memberships</h3>
          <ul className={styles.list}>
            <li>Hicks Honors College</li>
            <li>Upsilon Pi Epsilon (UPE) International Honor Society</li>
            <li>Honors in Computer Science</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
