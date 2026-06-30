import styles from './Career.module.css';

export default function Career() {
  return (
    <section className={styles.content}>
      <p className={styles.eyebrow}>Career</p>
      <h1>Where I'm headed</h1>
      <p className={styles.lede}>
      </p>

      <div className={styles.timeline}>
        <div className={styles.entry}>
          <h3>Web Developer Intern, Cooledtured</h3>
          <p className={styles.meta}>Hopefully, soon</p>
          <p>
            Hopefully ;)
          </p>
        </div>
        <div className={styles.entry}>
          <h3>Right now</h3>
          <p className={styles.meta}>University of North Florida</p>
          <p>
            Finishing my degree, contributing to a team project, and building
            small things like this one to keep learning by doing.
          </p>
        </div>
      </div>
    </section>
  );
}
