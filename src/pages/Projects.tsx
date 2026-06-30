import styles from './Projects.module.css';

const projects = [
  {
    title: 'Stock Market Backtester',
    role: 'Team of Four · Frontend',
    period: 'Feb 2026 – Apr 2026',
    description:
      "Built a full-stack app for simulating trading strategies against historical market data. The backend's Python and FastAPI, pulling real financial data through the yfinance API to crunch through. I focused on the frontend — React and TypeScript, with a custom CSS setup — turning the backtest results into something you can actually look at and make sense of, instead of just a wall of numbers.",
  },
  {
    title: 'Computer Vision Robustness Research',
    role: 'Undergraduate Research',
    period: 'Dec 2025 – May 2026',
    description:
      "Ongoing research into how well computer vision models hold up when things aren't perfect. I'm benchmarking architectures like ResNet-50 against various image perturbations, specifically in a medical imaging context — basically stress-testing models the way they'd actually get stress-tested in the real world.",
  },
  {
    title: 'Canny Edge Detection',
    role: 'Small Team',
    period: 'Oct 2025 – Nov 2025',
    description:
      "Built a Canny edge detection algorithm completely from scratch — no OpenCV, no shortcuts, just the actual math and logic behind how edge detection works. A good reminder that it's a lot more satisfying (and a lot harder) to build something yourself than to import it.",
  },
  {
    title: 'Maximum Clique Search Heuristic',
    role: 'Faculty-Mentored Research',
    period: 'Aug 2025 – Dec 2025',
    description:
      "Worked with a faculty mentor to recreate a theoretical search heuristic for the Maximum Clique problem, a classic hard problem in graph theory. Spent a good chunk of time refining the algorithm to cut down computation time, which turned into a real lesson in how much performance work is just finding the right place to be less wasteful.",
  },
  {
    title: 'This Portfolio Site',
    role: 'Solo Project',
    period: '2026',
    description:
      "Built from scratch to actually learn frontend development properly, not just patch things together. A small React app with client-side routing, no backend by design — the goal was something fast and simple, not extra complexity for its own sake. Also where I spent real time thinking about layout and design instead of just function.",
  },
];

export default function Projects() {
  return (
    <section className={styles.content}>
      <p className={styles.eyebrow}>Projects</p>
      <h1>Things I've built</h1>
      <p className={styles.lede}>
        A mix of coursework, research, and team projects — what they are,
        and what I actually did on each one.
      </p>

      <div className={styles.list}>
        {projects.map((project) => (
          <article key={project.title} className={styles.project}>
            <div className={styles.heading}>
              <h3>{project.title}</h3>
              <span className={styles.period}>{project.period}</span>
            </div>
            <p className={styles.role}>{project.role}</p>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
