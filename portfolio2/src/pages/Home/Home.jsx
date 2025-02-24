import styles from "./HomeStyles.module.css";
import heroImg from "../../assets/hero.jpg";
import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github-dark.svg";
import resume from "../../assets/cv.pdf";

function Home() {
  return (
    <>
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img className={styles.heroImg} src={heroImg} alt="logo" />
        </div>

        <div className={styles.info}>
          <h1>Tsering Khando Lama</h1>
          <h3>...</h3>
          <span>
            <a href="https:\\www.linkedin.com/in/khando" target="_blank">
              <img src={linkedinIcon} alt="Link to linkedin" />
            </a>
            <a href="https:\\www.github.com/tseringkhando" target="_blank">
              <img src={githubIcon} alt="Link to github" />
            </a>
          </span>
          <p className={styles.description}>Never stop learning</p>
          <a href={resume} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
