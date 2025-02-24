import styles from "./BackgroundStyles.module.css";
import { useTheme } from "../common/ThemeContext";
import videoDark from "../assets/bg.mp4";

function Background() {
  const { theme } = useTheme();
  const videoSource = videoDark;

  return (
    <>
      <div className={styles.shadowOverlay}></div>
      <video
        key={theme}
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        className={styles.bg}
      >
        <source src={videoSource} type="video/mp4" />
      </video>
    </>
  );
}

export default Background;
