import { useState } from "react";

import styles from "./NavigationStyles.module.css";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section id="navigation" className={styles.container}>
        <nav className={styles.nav}>
          <button className={styles.toggle} onClick={toggleNav}>
            ☰
          </button>
          <ul className={`${styles.list} ${isOpen ? styles.active : ""}`}>
            <li className={styles.item}>
              <a href="/">Home</a>
            </li>
            <li className={styles.item}>
              <a href="/about">About</a>
            </li>
            <li className={styles.item}>
              <a href="/projects">Projects</a>
            </li>

            <li className={styles.item}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navigation;
