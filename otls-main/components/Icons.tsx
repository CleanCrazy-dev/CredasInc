import { HTMLAttributes } from "react";

export interface OtlsIconProps extends HTMLAttributes<SVGElement> {}

export const OtlsChevronLeft = (props?: OtlsIconProps) => {
  return (
    <svg
      width="7"
      height="10"
      viewBox="0 0 7 10"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M6.06066 8.93934L2.12128 4.99997L6.06066 1.06056L5 0L0 4.99997L5 10L6.06066 8.93934Z" />
    </svg>
  );
};

export const OtlsChevronRight = (props?: OtlsIconProps) => {
  return (
    <svg
      width="7"
      height="10"
      viewBox="0 0 7 10"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M0.939453 1.06066L4.87883 5.00003L0.939453 8.93944L2.00011 10L7.00011 5.00003L2.00011 0L0.939453 1.06066Z" />
    </svg>
  );
};

export const OtlsLink = (props?: OtlsIconProps) => {
  return (
    <svg
      width="16"
      height="8"
      viewBox="0 0 16 8"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6C2.89375 6 2 5.10625 2 4C2 2.89375 2.89375 2 4 2H7.4625C6.77187 0.80625 5.48125 0 4 0C1.79063 0 0 1.79063 0 4C0 6.20937 1.79063 8 4 8C5.47813 8 6.77187 7.19375 7.4625 6H4ZM12 8C10.5188 8 9.22813 7.19375 8.5375 6H12C13.1063 6 14 5.10625 14 4C14 2.89375 13.1031 2 12 2H8.5375C9.22813 0.80625 10.5219 0 12 0C14.2094 0 16 1.79063 16 4C16 6.20937 14.2094 8 12 8ZM3 4C3 3.44688 3.44688 3 4 3H12C12.5531 3 13 3.44688 13 4C13 4.55312 12.5531 5 12 5H4C3.44688 5 3 4.55312 3 4Z"
      />
    </svg>
  );
};

export const OtlsDownload = (props?: OtlsIconProps) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0H8V4H11L7 9L3 4H6V0ZM0 14V11H14V14H0Z"
      />
    </svg>
  );
};

export const OtlsView = (props?: OtlsIconProps) => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4C1.38125 1.60938 4.0375 0 7 0C9.9625 0 12.6187 1.60938 14 4C12.6187 6.39062 9.95938 8 7 8C4.04063 8 1.38437 6.39062 0 4ZM7 3C7 2.44688 6.55312 2 6 2C5.44688 2 5 2.44688 5 3C5 3.55312 5.44688 4 6 4C6.55312 4 7 3.55312 7 3ZM1.18125 4C1.75625 3.175 2.58125 2.47813 3.45 1.96563C3.83125 1.74063 4.23438 1.55313 4.65 1.40625C3.94375 2.04688 3.5 2.97187 3.5 4C3.5 5.02812 3.94375 5.95312 4.65 6.59375C4.23438 6.44688 3.83125 6.25938 3.45 6.03438C2.58125 5.52188 1.75625 4.825 1.18125 4ZM9.35 6.59375C9.76562 6.44688 10.1688 6.25938 10.55 6.03438C11.4188 5.52188 12.2406 4.825 12.8188 4C12.2438 3.175 11.4188 2.47813 10.55 1.96563C10.1688 1.74063 9.76562 1.55313 9.35 1.40625C10.0563 2.04688 10.5 2.97187 10.5 4C10.5 5.02812 10.0563 5.95312 9.35 6.59375Z"
      />
    </svg>
  );
};

export const OtlsPrint = (props?: OtlsIconProps) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4H12V2L10 0H3C2.44688 0 2 0.446875 2 1V4H1C0.45 4 0 4.45 0 5V10C0 10.55 0.45 11 1 11H2V11.0312V13C2 13.55 2.45 14 3 14H11C11.55 14 12 13.55 12 13V11.0312V11H13C13.55 11 14 10.55 14 10V5C14 4.45 13.55 4 13 4ZM3 1H9V3H11V5H3V1ZM11 12.9969V9H13V8H11H1V9H3V12.9969L3.00312 13H10.9969L11 12.9969ZM4 9H10V10H4V9ZM9 11H4V12H9V11Z"
      />
    </svg>
  );
};

export const OtlsStar = (props?: OtlsIconProps) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.97188 4.875L14 5.325L10.1875 8.81563L11.3375 14L7 11.2344L2.6625 14L3.8125 8.81563L0 5.325L5.02812 4.875L7 0L8.97188 4.875ZM4.1625 11.8594L7 10.05L9.84062 11.8594L9.0875 8.46875L11.6531 6.11875L8.275 5.81563L7 2.66563L5.725 5.81563L2.34687 6.11875L4.9125 8.46875L4.1625 11.8594Z"
      />
    </svg>
  );
};

export const OtlsStarFill = (props?: OtlsIconProps) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M7 11.2344L2.6625 14L3.8125 8.81563L0 5.325L5.02812 4.875L7 0L8.97188 4.875L14 5.325L10.1875 8.81563L11.3375 14L7 11.2344Z" />
    </svg>
  );
};

export const OtlsClose = (props?: OtlsIconProps) => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M7.75 1.31172L5.06172 4L7.75 6.68828L6.68828 7.75L4 5.06172L1.31172 7.75L0.25 6.68828L2.93828 4L0.25 1.31172L1.31172 0.25L4 2.93828L6.68828 0.25L7.75 1.31172Z" />
    </svg>
  );
};

export const OtlsCheck = (props?: OtlsIconProps) => {
  return (
    <svg
      width="15"
      height="11"
      viewBox="0 0 15 11"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M12.766 0.584351L14.1816 1.99998L5.18164 11L0.181641 5.99998L1.59727 4.58435L5.18164 8.17185L12.766 0.584351Z" />
    </svg>
  );
};
