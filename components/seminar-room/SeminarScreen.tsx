import { useSettings } from "hooks/useSettings";
import React from "react";
import { matchYoutubeUrl } from "utils";
import styles from "./SeminarScreen.module.css";

export const SeminarScreen = () => {
  const defaultVideo =
    "https://www.youtube.com/watch?v=jS0qVrpKjY4&ab_channel=HospitalEngineeringExpo";

  const { data } = useSettings();

  const youtubeId = matchYoutubeUrl(data?.youtube_link || defaultVideo);

  return (
    <div className={styles.seminar}>
      <div className="bg-black">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; loop; fullscreen"
        ></iframe>
      </div>
    </div>
  );
};
