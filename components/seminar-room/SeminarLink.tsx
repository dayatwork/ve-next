/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./SeminarLink.module.css";

export const SeminarLink = () => {
  return (
    <div className={styles.link}>
      <div className="grid grid-cols-2 gap-0.5 sm:gap-2 p-0 sm:p-1 rounded-lg transform -translate-y-3 sm:translate-y-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg">
        <a
          className="flex items-center justify-center py-1 sm:py-0 bg-primary-50 text-primary-500 hover:text-white font-bold sm:rounded-md cursor-pointer hover:bg-primary-500 transition"
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="hidden lg:inline-block">Webinar Schedule</span>
        </a>
        <a
          className="flex items-center justify-center py-1 sm:py-0 bg-blue-50 text-blue-500 hover:text-white font-bold sm:rounded-md cursor-pointer hover:bg-blue-500 transition"
          href="https://zoom.us"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/zoom-logo.png" alt="zoom logo" />
          <span className="hidden lg:inline-block">Join a Meeting</span>
        </a>
      </div>
    </div>
  );
};
