import React from "react";
import styles from "./SeminarScreen.module.css";

export const SeminarScreen = () => {
  return (
    <div className={styles.seminar}>
      <div>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/3u_vIdnJYLc?autoplay=1&mute=1&loop=1"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; loop; fullscreen"
        ></iframe>
      </div>
    </div>
  );
};
