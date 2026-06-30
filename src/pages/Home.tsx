import { Link } from 'react-router-dom';
import mePhoto from '../assets/me.png';
import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>Computer Science Student</p>
        <h1>Hi, I'm Nikita Didus.</h1>
        <p className={styles.lede}>
          I build clean, considered software — from a financial backtesting
          platform with my team to small projects like this one. I care about
          getting the details right, on the backend and the page itself.
        </p>
        <div className={styles.actions}>
          <Link to="/projects" className={styles.primaryLink}>See my projects</Link>
          <Link to="/career" className={styles.secondaryLink}>Where I'm headed →</Link>
        </div>
      </div>
      <div className={styles.imageWrap}>
        <img src={mePhoto} alt="Portrait of Nikita Didus" className={styles.photo} />
      </div>
    </section>
  );
}
