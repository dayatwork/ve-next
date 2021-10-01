import { useAuth } from "@/contexts/auth.context";
import React from "react";
import { useQueryClient } from "react-query";
import styles from "./ButtonHelpDesk.module.css";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  // company_logo: string;
};

export const ButtonHelpDesk = ({ onClick }: Props) => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    if (!user.id || user.id === 2) {
      onClick(e);
      return;
    }

    const data = {
      senderId: user.id,
      receiverId: 2, // ID Admin KIC
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CHAT_API}/conversations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error("Error create conversations");
      }

      await res.json();
      await queryClient.invalidateQueries(["conversations"]);

      onClick(e);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="animate-pulse group hover:animate-none">
      <div className={styles.wrapper}>
        <button
          onClick={handleClick}
          className={styles.button}
          // style={{
          //   backgroundImage: company_logo
          //     ? `url(${process.env.NEXT_PUBLIC_STORAGE_URL}/companies/${company_logo})`
          //     : "url('/logo-placeholder.svg')",
          // }}
        >
          <div className="absolute group-hover:bg-primary-600 bg-primary-500 text-white flex justify-center items-center rounded-full border-transparent hover:border-primary">
            <svg
              className="w-10 h-10"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14 5.02936C16.4312 5.72562 18.3396 7.65944 19 10.1056"
              />
            </svg>
          </div>
          <span className="sr-only">Booking Consultation</span>
        </button>
      </div>
    </div>
  );
};

// export const NoButtonHelpDesk = ({ company_logo }: Props) => {
//   return (
//     <div>
//       <div className={styles.wrapper}>
//         <div
//           className={styles.button}
//           style={{
//             backgroundImage: company_logo
//               ? `url(${process.env.NEXT_PUBLIC_STORAGE_URL}/companies/${company_logo})`
//               : "url('/logo-placeholder.svg')",
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };