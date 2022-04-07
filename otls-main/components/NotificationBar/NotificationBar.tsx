import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler, ReactNode } from "react";
import Portal from "../Portal/Portal";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";

export interface NotificationBarProps {
  text: string;
  cta?: ReactNode;
  showCloseBtn?: boolean;
  onCloseHandler?: MouseEventHandler<HTMLButtonElement>;
}

const NotificationBar = ({
  text,
  cta,
  showCloseBtn = false,
  onCloseHandler,
}: NotificationBarProps) => {
  return (
    <Portal>
      <div className="bg-yellow">
        <div className="container">
          <div className="min-h-14-full py-2 flex gap-x-5 items-center justify-between font-bold text-sm">
            <p className="mb-0 text-gray-700">{text}</p>
            <div className="flex items-center gap-x-5">
              <span className="block whitespace-nowrap">{cta}</span>
              {showCloseBtn && (
                <button onClick={onCloseHandler!} className="leading-3">
                  <FontAwesomeIcon icon={regular("close")} fontSize="1rem" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default NotificationBar;
