import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import Image from "next/image";
import style from "./user-avatar.module.scss";

interface UserAvatarProps {
  src: string;
  size?: "small" | "medium" | "large";
  rounded?: boolean;
  alt?: string;
}

const UserAvatar = ({ src, size, rounded, alt }: UserAvatarProps) => {
  const imgSize = size == "medium" ? 80 : size == "small" ? 48 : 100;
  return (
    <div
      className={combineCSSClasses(
        style["user-avatar-container"],
        size ? style[size] : style["medium"],
        rounded ? style["rounded"] : ""
      )}
    >
      {src ? (
        <Image
          src={src}
          data-testid="user-avatar"
          layout="responsive"
          width={imgSize}
          height={imgSize}
          alt={alt || "user-avatar-img"}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserAvatar;
