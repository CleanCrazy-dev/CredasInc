import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import styles from "./course-editor.module.scss";

interface CourseEditorProps {
  content?: string;
}

const CourseEditor = ({ content }: CourseEditorProps) => {
  return (
    <div className={styles["editor"]}>
      <div className={combineCSSClasses("p-8px", styles["editor-toolbar"])}>
        <div className="d-flex gap-2 flex-wrap">
          <div className={styles["btn-containers"]}>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H3.61875C4.40938 0 5 0.034375 5.3875 0.1C5.775 0.165625 6.125 0.303125 6.43125 0.5125C6.7375 0.721875 6.99375 1 7.2 1.34687C7.40625 1.69375 7.50625 2.08437 7.50625 2.51562C7.50625 2.98438 7.37813 3.4125 7.12813 3.80312C6.875 4.19375 6.53125 4.4875 6.1 4.68437C6.70937 4.8625 7.17812 5.16562 7.50625 5.59062C7.83437 6.01562 7.99688 6.52188 7.99688 7.09688C7.99688 7.55313 7.89062 7.99375 7.67812 8.42188C7.46875 8.85312 7.17812 9.19687 6.8125 9.45312C6.44688 9.70938 5.99687 9.86875 5.45937 9.92813C5.12187 9.96563 4.3125 9.9875 3.02187 9.99687H0V0ZM2 1.66562V3.97813H2.96563C3.75312 3.97813 4.24062 3.96563 4.43125 3.94375C4.77813 3.90313 5.04688 3.78125 5.24687 3.58437C5.44375 3.3875 5.54375 3.125 5.54375 2.80312C5.54375 2.49375 5.45937 2.24062 5.2875 2.05C5.11562 1.85625 4.8625 1.7375 4.525 1.7C4.325 1.67813 3.75 1.66562 2.8 1.66562H2ZM2 8.31875V5.64375L3.27187 5.64062C4.19063 5.64062 4.7875 5.6875 5.0625 5.78438C5.3375 5.87813 5.54688 6.03125 5.69375 6.24062C5.84062 6.45 5.9125 6.70625 5.9125 7.00625C5.9125 7.3625 5.82188 7.64375 5.63125 7.85625C5.44062 8.06875 5.19688 8.2 4.89687 8.25625C4.7 8.29688 4.24062 8.31875 3.5125 8.31875H2Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.7875 1L8 0H6.0625H4.0625H2.2125L2 1H3.85L2.15 9H0.2125L0 10H1.9375H3.9375H5.7875L6 9H4.15L5.85 1H7.7875Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 7V0H8V7C8 9.2 5.99062 10 4 10C2.00938 10 0 9.2 0 7V0H2V7C2 7.3625 2.10938 7.5 2.32188 7.63438C2.69063 7.86562 3.3 8 4 8C4.7 8 5.30937 7.86562 5.67812 7.63438C5.89062 7.5 6 7.3625 6 7ZM8 12V11H0V12H8Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.3094 5C12.3125 4.25313 12.45 3.70625 12.7312 3.35938C13.0156 3.0125 13.3813 2.8375 13.8344 2.8375C14.1344 2.8375 14.3875 2.93438 14.6 3.12812C14.8125 3.32187 14.9562 3.60938 15.0406 3.99375L15.9125 3.84687C15.8094 3.27187 15.575 2.825 15.2094 2.5125C14.8438 2.2 14.3719 2.04375 13.7969 2.04375C13.3438 2.04375 12.9187 2.15625 12.5344 2.39062C12.1469 2.62188 11.8594 2.96875 11.6687 3.42812C11.4844 3.87812 11.3906 4.40313 11.3844 5.00313H10.5875V4.93437C10.5875 4.52187 10.5344 4.13438 10.4281 3.775C10.3219 3.41563 10.175 3.10625 9.98438 2.85C9.79688 2.59687 9.55625 2.39687 9.26562 2.25625C8.975 2.11562 8.66562 2.04375 8.34062 2.04375C7.75 2.04375 7.26875 2.3 6.89062 2.8125V0H6V5H4.59375V4.19375C4.59375 3.76562 4.57812 3.46562 4.55 3.30312C4.49688 3.0375 4.40313 2.81875 4.26875 2.64375C4.13438 2.47187 3.92812 2.325 3.64687 2.2125C3.36562 2.1 2.99688 2.04063 2.54375 2.04063C2.0875 2.04063 1.6875 2.10625 1.34063 2.24062C0.99375 2.375 0.73125 2.56562 0.546875 2.81562C0.365625 3.06562 0.234375 3.39062 0.153125 3.79688L1.03125 3.925C1.12812 3.51875 1.275 3.2375 1.47812 3.07812C1.68125 2.91875 1.99062 2.8375 2.4125 2.8375C2.86562 2.8375 3.20625 2.94688 3.43438 3.16563C3.60313 3.325 3.6875 3.60313 3.6875 3.99688C3.6875 4.03125 3.6875 4.11562 3.68125 4.25C3.3375 4.37813 2.80625 4.49062 2.08125 4.58437C1.725 4.63125 1.45937 4.67812 1.28437 4.73125C1.075 4.79375 0.88125 4.88438 0.70625 5H0V6H0.0375C0.0125 6.11875 0 6.24062 0 6.36875C0 6.84375 0.15625 7.2375 0.46875 7.54375C0.78125 7.85 1.22813 8 1.80938 8C2.1625 8 2.49062 7.94063 2.79688 7.8125C3.10313 7.68437 3.425 7.47187 3.75625 7.16875H3.75938C3.78438 7.4375 3.84375 7.80313 3.9375 8.00313H4.875C4.7625 7.78438 4.6875 7.42812 4.64687 7.1875C4.61562 7 4.59687 6.60313 4.59062 6.00313H5.99687V8.00313H6.82812V8V7.15625C7.18437 7.71875 7.675 8 8.3 8C8.92813 8 9.46562 7.73438 9.91562 7.2C10.1844 6.88125 10.3719 6.48125 10.4781 6.00313H11.4719C11.575 6.50313 11.7656 6.91563 12.0437 7.2375C12.4844 7.74688 13.0656 8.00313 13.7906 8.00313C14.3687 8.00313 14.8562 7.81563 15.2531 7.44688C15.6313 7.09375 15.8719 6.6125 15.9781 6.00313H15.9938V5.00313H12.3094V5ZM3.5375 6.33125C3.40937 6.6125 3.2125 6.83437 2.94375 7C2.675 7.1625 2.36875 7.24375 2.02187 7.24375C1.67188 7.24375 1.40937 7.15625 1.22812 6.9875C1.04688 6.8125 0.95625 6.6 0.95625 6.34062C0.95625 6.21875 0.978125 6.10625 1.02188 6H3.63437C3.6125 6.12813 3.57812 6.24062 3.5375 6.33125ZM7.25 3.3875C6.96562 3.75313 6.82188 4.28438 6.82188 4.97813C6.82188 4.98438 6.82188 4.99375 6.81875 5.00313H9.67188C9.66875 4.26562 9.53438 3.72188 9.25937 3.36875C8.9875 3.0125 8.65625 2.8375 8.26562 2.8375C7.875 2.8375 7.53437 3.01875 7.25 3.3875ZM9.24687 6.65312C8.9625 7.02187 8.62187 7.20625 8.23125 7.20625C7.74687 7.20625 7.36562 6.95625 7.08437 6.45937C7.01562 6.3375 6.95937 6.18437 6.91875 6H9.5625C9.4875 6.25938 9.38437 6.47813 9.24687 6.65312ZM13.7875 7.20938C14.1406 7.20938 14.4344 7.09375 14.6688 6.85938C14.8656 6.6625 15.0031 6.375 15.0844 6.00313H12.4125C12.4813 6.28438 12.5844 6.5125 12.7219 6.6875C12.9938 7.03438 13.35 7.20938 13.7875 7.20938Z"
                  fill="#495057"
                />
              </svg>
            </button>
          </div>

          <div className={styles["btn-containers"]}>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 6.29375L4.20625 3.5L7 0.70625L6.29375 0L3.5 2.79375L0.70625 0L0 0.70625L2.79375 3.5L0 6.29375L0.70625 7L3.5 4.20625L6.29375 7L7 6.29375ZM11.9906 8H9.44687C9.5375 7.88125 9.6625 7.75625 9.75937 7.675C9.85312 7.60313 9.9625 7.52812 10.0875 7.45C10.1185 7.43139 10.1497 7.4126 10.1812 7.39365C10.2765 7.33624 10.374 7.27749 10.475 7.21875C10.6719 7.10938 10.8625 6.99062 11.0469 6.87187C11.2312 6.75 11.3938 6.61875 11.5344 6.475C11.675 6.33125 11.7875 6.16875 11.8719 5.99375C11.9563 5.81875 12 5.61562 12 5.39062C12 5.17812 11.9563 4.98438 11.8687 4.8125C11.7781 4.64062 11.6531 4.49375 11.4844 4.37187C11.3188 4.25313 11.1125 4.15938 10.8719 4.09375C10.6313 4.02812 10.3562 3.99688 10.0531 3.99688C9.39688 3.99688 8.80937 4.13438 8.2875 4.4125V5.36562C8.75937 5.03125 9.25313 4.8625 9.76875 4.8625C10.0688 4.8625 10.2906 4.91875 10.4344 5.025C10.5813 5.13438 10.6531 5.29375 10.6531 5.50313C10.6531 5.60938 10.6313 5.7125 10.5875 5.80625C10.5437 5.9 10.475 5.99375 10.3844 6.0875C10.2937 6.17812 10.1812 6.27188 10.05 6.36563C9.91875 6.45938 9.7625 6.55625 9.5875 6.65938C9.42188 6.75938 9.24375 6.86875 9.05937 6.99063C8.875 7.1125 8.70312 7.25313 8.54688 7.4125C8.39062 7.57188 8.25937 7.75 8.15625 7.95C8.05313 8.15 8 8.37813 8 8.62813V9H11.9906V8Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.9906 4H9.44687C9.5375 3.88125 9.6625 3.75625 9.75937 3.67812C9.85312 3.60625 9.9625 3.53125 10.0875 3.45312C10.1185 3.43452 10.1497 3.41573 10.1811 3.39679C10.2764 3.33937 10.374 3.28062 10.475 3.22187C10.6719 3.1125 10.8625 2.99375 11.0469 2.875C11.2312 2.75312 11.3938 2.62188 11.5344 2.47813C11.675 2.33438 11.7875 2.17188 11.8719 1.99688C11.9563 1.82188 12 1.61875 12 1.39375C12 1.18125 11.9563 0.9875 11.8687 0.815625C11.7781 0.64375 11.6531 0.496875 11.4844 0.375C11.3188 0.25625 11.1125 0.1625 10.8719 0.096875C10.6313 0.03125 10.3562 0 10.0531 0C9.39688 0 8.80937 0.1375 8.2875 0.415625V1.36563C8.75937 1.03125 9.25313 0.8625 9.76875 0.8625C10.0688 0.8625 10.2906 0.91875 10.4344 1.025C10.5813 1.13437 10.6531 1.29375 10.6531 1.50312C10.6531 1.60938 10.6313 1.7125 10.5875 1.80625C10.5437 1.9 10.475 1.99375 10.3844 2.0875C10.2937 2.17813 10.1812 2.27187 10.05 2.36562C9.91875 2.45937 9.7625 2.55625 9.5875 2.65937C9.42188 2.75937 9.24375 2.86875 9.05937 2.99062C8.875 3.1125 8.70312 3.25312 8.54688 3.4125C8.39062 3.57187 8.25937 3.75 8.15625 3.95C8.05313 4.15 8 4.37813 8 4.62813V5H11.9906V4ZM7 10.2937L4.20625 7.5L7 4.70625L6.29375 4L3.5 6.79375L0.70625 4L0 4.70625L2.79375 7.5L0 10.2937L0.70625 11L3.5 8.20625L6.29375 11L7 10.2937Z"
                  fill="#495057"
                />
              </svg>
            </button>
          </div>
          <div className={styles["btn-containers"]}>
            <button
              className={combineCSSClasses(
                styles["grey-btn"],
                styles["btn-active"],
                "btn"
              )}
            >
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 1H12V0H0V1ZM0 2H9V3H0V2ZM12 4H0V5H12V4ZM0 6H9V7H0V6ZM12 8H0V9H12V8ZM0 10H9V11H0V10Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 1H12V0H0V1ZM2 3H10V2H2V3ZM12 5H0V4H12V5ZM2 7H10V6H2V7ZM12 9H0V8H12V9ZM2 11H10V10H2V11Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0H12V1H0V0ZM0 3H12V2H0V3ZM0 9H12V8H0V9ZM12 7H0V6H12V7ZM0 5H12V4H0V5ZM12 11H0V10H12V11Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0V1H0V0H12ZM12 4H0V5H12V4ZM3 3H12V2H3V3ZM0 9V8H12V9H0ZM3 7H12V6H3V7ZM3 11V10H12V11H3Z"
                  fill="#495057"
                />
              </svg>
            </button>
          </div>
          <div className={styles["btn-containers"]}>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 1H14V0H0V1ZM6 2H14V3H6V2ZM14 4H6V5H14V4ZM6 6H14V7H6V6ZM14 8H6V9H14V8ZM6 10H14V11H6V10ZM14 12H0V13H14V12ZM0 3L4 6.5L0 10V3Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 1H14V0H0V1ZM6 2H14V3H6V2ZM14 4H6V5H14V4ZM6 6H14V7H6V6ZM14 8H6V9H14V8ZM6 10H14V11H6V10ZM14 12H0V13H14V12ZM0 6.5L4 3V10L0 6.5Z"
                  fill="#495057"
                />
              </svg>
            </button>
          </div>

          <div className={styles["btn-containers"]}>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 4V0L1.48125 0.003125C1.32187 0.125 1.14062 0.234375 0.94375 0.3375C0.74375 0.4375 0.534375 0.521875 0.309375 0.5875V1.3125C0.534375 1.24375 0.953125 1.04062 1 1V4H2ZM14 1H5V2H14V1ZM14 6H5V7H14V6ZM5 11H14V12H5V11ZM1.08438 8.28125H2.99375V9H0V8.70312C0 8.50313 0.0375 8.32187 0.115625 8.1625C0.19375 8.00313 0.290625 7.85938 0.40625 7.73125C0.521875 7.60312 0.65 7.49062 0.790625 7.39375L0.801066 7.38656L0.801096 7.38654C0.937772 7.29238 1.06561 7.20431 1.1875 7.12812C1.31875 7.04687 1.43437 6.96875 1.53437 6.89062C1.63437 6.81562 1.71875 6.74062 1.78437 6.66562C1.85312 6.59062 1.90313 6.51562 1.9375 6.44062C1.97187 6.36562 1.9875 6.28437 1.9875 6.19687C1.9875 6.02812 1.93438 5.9 1.825 5.81562C1.71563 5.72812 1.55 5.6875 1.325 5.6875C0.9375 5.6875 0.56875 5.82187 0.215625 6.09062V5.32812C0.60625 5.10625 1.04688 4.99687 1.54062 4.99687C1.76875 4.99687 1.97188 5.02187 2.15313 5.075C2.33438 5.12812 2.4875 5.20312 2.6125 5.3C2.7375 5.39687 2.83438 5.51562 2.9 5.65312C2.96563 5.79062 3 5.94375 3 6.11562C3 6.29688 2.96875 6.45625 2.90313 6.6C2.84063 6.74062 2.75313 6.86875 2.65 6.98438C2.54375 7.1 2.42188 7.20625 2.28437 7.3C2.14687 7.39687 2.00312 7.4875 1.85312 7.57812C1.78936 7.61798 1.72686 7.65783 1.66564 7.69688L1.5625 7.7625C1.46875 7.825 1.3875 7.88438 1.31562 7.94375C1.24375 8.00313 1.1875 8.0625 1.14688 8.11875C1.10625 8.175 1.08438 8.23125 1.08438 8.28125ZM0 13.0625V13.8062C0.303125 13.9344 0.7 14 1.18438 14C1.75313 14 2.19687 13.8875 2.51875 13.6781C2.84063 13.4688 3 13.1844 3 12.8219C3 12.5813 2.90625 12.3812 2.7125 12.2156C2.51875 12.0531 2.25625 11.9531 1.925 11.9187V11.9062C2.54688 11.7781 2.85938 11.4625 2.85938 10.9563C2.85938 10.6719 2.725 10.4406 2.45625 10.2625C2.1875 10.0844 1.8125 9.99687 1.33125 9.99687C0.890625 9.99687 0.50625 10.0656 0.175 10.2031V10.9C0.471875 10.7344 0.778125 10.65 1.09375 10.65C1.56562 10.65 1.8 10.8062 1.8 11.1219C1.8 11.4563 1.49375 11.625 0.88125 11.625H0.478125V12.275H0.915625C1.23438 12.275 1.4875 12.3219 1.66875 12.4156C1.85313 12.5094 1.94375 12.6437 1.94375 12.8156C1.94375 12.9812 1.86875 13.1125 1.72187 13.2062C1.575 13.3 1.36875 13.3469 1.10312 13.3469C0.68125 13.3469 0.315625 13.25 0 13.0625Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 1.5C0 0.671875 0.671875 0 1.5 0C2.32812 0 3 0.671875 3 1.5C3 2.32812 2.32812 3 1.5 3C0.671875 3 0 2.32812 0 1.5ZM14 1H5V2H14V1ZM14 6H5V7H14V6ZM5 11H14V12H5V11ZM1.5 5C0.671875 5 0 5.67188 0 6.5C0 7.32812 0.671875 8 1.5 8C2.32812 8 3 7.32812 3 6.5C3 5.67188 2.32812 5 1.5 5ZM0 11.5C0 10.6719 0.671875 10 1.5 10C2.32812 10 3 10.6719 3 11.5C3 12.3281 2.32812 13 1.5 13C0.671875 13 0 12.3281 0 11.5Z"
                  fill="#495057"
                />
              </svg>
            </button>
          </div>
          <div className={styles["btn-containers"]}>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.75 0H9.25L6 10H7.5L8.3125 7.5H11.6875L12.5 10H14L10.75 0ZM0 10L2.03125 4H2.96563L4.99687 10H4.09062L3.5625 8.4375H1.43438L0.90625 10H0ZM2.5 5.29375L1.75312 7.5H3.24687L2.5 5.29375ZM10 2.30625L8.8 6H11.2L10 2.30625Z"
                  fill="#495057"
                />
              </svg>
            </button>
          </div>

          <div className={styles["btn-containers"]}>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6C2.89375 6 2 5.10625 2 4C2 2.89375 2.89375 2 4 2H7.4625C6.77187 0.80625 5.48125 0 4 0C1.79063 0 0 1.79063 0 4C0 6.20937 1.79063 8 4 8C5.47813 8 6.77187 7.19375 7.4625 6H4ZM12 8C10.5188 8 9.22813 7.19375 8.5375 6H12C13.1063 6 14 5.10625 14 4C14 2.89375 13.1031 2 12 2H8.5375C9.22813 0.80625 10.5219 0 12 0C14.2094 0 16 1.79063 16 4C16 6.20937 14.2094 8 12 8ZM3 4C3 3.44688 3.44688 3 4 3H12C12.5531 3 13 3.44688 13 4C13 4.55312 12.5531 5 12 5H4C3.44688 5 3 4.55312 3 4Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.5 3.05V0H7.5V3.05C7.6625 3.01875 7.82812 3 8 3C8.17188 3 8.3375 3.01875 8.5 3.05ZM4 10C2.89375 10 2 9.10625 2 8C2 6.89375 2.89687 6 4 6H7.4625C6.77187 4.80625 5.48125 4 4 4C1.79063 4 0 5.79063 0 8C0 10.2094 1.79063 12 4 12C5.47813 12 6.77187 11.1938 7.4625 10H4ZM8.5375 10C9.22813 11.1938 10.5188 12 12 12C14.2094 12 16 10.2094 16 8C16 5.79063 14.2094 4 12 4C10.5219 4 9.22813 4.80625 8.5375 6H12C13.1031 6 14 6.89375 14 8C14 9.10625 13.1063 10 12 10H8.5375ZM4.46563 1.25937L6.62187 3.41563C6.34062 3.6 6.1 3.84062 5.91563 4.12187L3.75938 1.96563L4.46563 1.25937ZM10.0844 4.12187L12.2406 1.96563L11.5344 1.25937L9.37813 3.41563C9.65938 3.6 9.9 3.84062 10.0844 4.12187ZM7.5 12.95C7.6625 12.9812 7.82812 13 8 13C8.17188 13 8.3375 12.9812 8.5 12.95V16H7.5V12.95ZM5.91563 11.8781L3.75938 14.0344L4.46563 14.7406L6.62187 12.5844C6.34062 12.4 6.1 12.1594 5.91563 11.8781ZM11.5344 14.7406L9.37813 12.5844C9.65938 12.4 9.9 12.1594 10.0844 11.8781L12.2406 14.0344L11.5344 14.7406Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 0H1C0.45 0 0 0.45 0 1V11C0 11.55 0.45 12 1 12H1.00312H12.9969H13C13.55 12 14 11.55 14 11V1C14 0.45 13.55 0 13 0ZM13 8.5L11 6.5L8.5 9L4.5 5L1 8.5V1.00312L1.00312 1H13L13.0031 1.00312L13 8.5ZM10 4.5C10 3.67188 9.32812 3 8.5 3C7.67188 3 7 3.67188 7 4.5C7 5.32812 7.67188 6 8.5 6C9.32812 6 10 5.32812 10 4.5Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.06875 0L10.0344 0.259375L6.92812 12L5.9625 11.7406L9.06875 0ZM4.70625 9.29375L1.41562 6L4.70937 2.70625L4 2L0 6L4 10L4.70625 9.29375ZM16 6L12 10L11.2937 9.29375L14.5844 6L11.2937 2.70625L12 2L16 6Z"
                  fill="#495057"
                />
              </svg>
            </button>
          </div>

          <div className={styles["btn-containers"]}>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 0V9H12H9V13H0V0H13ZM1 12H4V9H1V12ZM4 8H1V5H4V8ZM1 4H4V1H1V4ZM8 12H5V9H8V12ZM5 8H8V5H5V8ZM8 4H5V1H8V4ZM12 1H9V4H12V1ZM9 8V5H12V8H9ZM15 13V12H14H13V10H12V12H10V13H12V14V15H13V14V13H14H15Z"
                  fill="#495057"
                />
              </svg>
            </button>
          </div>
          <div className={styles["btn-containers"]}>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 4H15V0H0V4ZM14 5H1V14H14V5ZM2 6V9H5V6H2ZM6 9V6H9V9H6ZM10 6V9H13V6H10ZM13 10V13H10V10H13ZM9 10H6V13H9V10ZM5 10V13H2V10H5Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 0H1V9H14V0ZM0 14H15V10H0V14ZM5 8V5H2V8H5ZM9 5V8H6V5H9ZM13 8V5H10V8H13ZM10 4V1H13V4H10ZM9 1H6V4H9V1ZM2 4V1H5V4H2Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0V15H4V0H0ZM14 14V1H5V14H14ZM6 5H9V2H6V5ZM9 9H6V6H9V9ZM6 13H9V10H6V13ZM10 10H13V13H10V10ZM13 9V6H10V9H13ZM10 2H13V5H10V2Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 0V15H14V0H10ZM9 14V1H0V14H9ZM8 2H5V5H8V2ZM5 6H8V9H5V6ZM8 10H5V13H8V10ZM4 13H1V10H4V13ZM4 9V6H1V9H4ZM4 5H1V2H4V5Z"
                  fill="#495057"
                />
              </svg>
            </button>
          </div>

          <div className={styles["btn-containers"]}>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 4V0H2V4H15ZM7 5H0V9H7V5ZM15 14V10H2V14H15ZM6 13V11H3V13H6ZM16 9V5H14V9H16ZM10 11V13H7V11H10ZM14 13V11H11V13H14ZM6 3V1H3V3H6ZM10 1V3H7V1H10ZM14 3V1H11V3H14ZM13 8.79291L11.2071 7L13 5.20709L12.2929 4.5L10.5 6.29291L8.70709 4.5L8 5.20709L9.79291 7L8 8.79291L8.70709 9.5L10.5 7.70709L12.2929 9.5L13 8.79291Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 0H5V2H9V0ZM5 9V16H9V9H5ZM14 1H10V14H14V1ZM13 10H11V13H13V10ZM11 6H13V9H11V6ZM13 2H11V5H13V2ZM4 1H0V14H4V1ZM3 10H1V13H3V10ZM1 6H3V9H1V6ZM3 2H1V5H3V2ZM8.79291 3L7 4.79291L5.20709 3L4.5 3.70709L6.29291 5.5L4.5 7.29291L5.20709 8L7 6.20709L8.79291 8L9.5 7.29291L7.70709 5.5L9.5 3.70709L8.79291 3Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0V13H13V0H0ZM12 4H10V5H12V8H10V9H12V12H9V10H8V12H5V10H4V12H1V9H3V8H1V5H3V4H1V1H4V3H5V1H8V3H9V1H12V4ZM9 8.29375L7.20625 6.5L9 4.70625L8.29375 4L6.5 5.79375L4.70625 4L4 4.70625L5.79375 6.5L4 8.29375L4.70625 9L6.5 7.20625L8.29375 9L9 8.29375Z"
                  fill="#495057"
                />
              </svg>
            </button>
          </div>
          <div className={styles["btn-containers"]}>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 14V0H13V14H0ZM8 1H5V3H8V1ZM1 1H4V3H1V1ZM1 13H4V11H1V13ZM8 13H5V11H8V13ZM9 13H12V11H9V13ZM12 10H1V4H12V10ZM9 3H12V1H9V3Z"
                  fill="#495057"
                />
              </svg>
            </button>
            <button className={combineCSSClasses(styles["grey-btn"], "btn")}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 0V13H13V0H0ZM1 1H6V3H1V1ZM4 6H6V4H4V6ZM1 4H3V6H1V4ZM6 7H1V9H6V7ZM1 12V10H6V12H1ZM9 4H7V6H9V4ZM12 12H7V10H12V12ZM7 9H12V7H7V9ZM12 6H10V4H12V6ZM7 3H12V1H7V3Z"
                  fill="#495057"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={combineCSSClasses("p-8px", styles["editor-body"])}
        contentEditable={true}
        suppressContentEditableWarning={true}
      >
        Article text
      </div>
    </div>
  );
};

export default CourseEditor;
