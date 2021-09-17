import React from "react";
import Link from "next/link";
import styles from "./SeminarRoomLink.module.css";

export const SeminarRoomLink = () => {
  return (
    <div className={styles.link}>
      <Link href="seminar-room">
        <a className=" h-full bg-[#A6FAFF] bg-opacity-100 w-full rounded-md text-[#00B4BF] border-[4px] border-[#00B4BF] flex items-center justify-center space-x-2">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="door-open"
            className="svg-inline--fa fa-door-open fa-w-20"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z"
            ></path>
          </svg>
          <span className="font-bold">Enter</span>
        </a>
      </Link>
    </div>
  );
};
