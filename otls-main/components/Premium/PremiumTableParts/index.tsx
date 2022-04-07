import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactNode, ReactText } from "react";

export const TableHeadCell = ({
  name,
  price,
  description,
  link,
}: {
  name: string;
  price?: string;
  description?: string;
  link?: {
    label: string;
    url: string;
  };
}) => {
  return (
    <div className="flex flex-col text-2.5xl h-full pb-4">
      <span className="text-primary">{name}</span>
      {price && <span className="text-gray-700 font-normal">{price}</span>}
      {description && (
        <span className="text-gray-700 font-normal text-lg">{description}</span>
      )}
      {link && (
        <Link href={link.url} passHref={true}>
          <a className="text-gray-700 font-normal underline">{link.label}</a>
        </Link>
      )}
    </div>
  );
};

export const TableFootCell = ({
  name,
  link,
  description,
}: {
  name: string;
  link: {
    label: string;
    url: string;
  };
  description?: string;
}) => {
  return (
    <div className="flex flex-col text-2.5xl justify-between h-40 min-h-full">
      <div className="flex flex-col">
        <span>{name}</span>
        {description && (
          <span className="text-gray-700 font-normal text-lg">
            {description}
          </span>
        )}
      </div>
      <span className="mt-6">
        <Link href={link.url} passHref={true}>
          <a className="btn btn-primary btn-lg py-3">{link.label}</a>
        </Link>
      </span>
    </div>
  );
};

export const tableDataCell = (
  type: "empty" | "check" | "text",
  content?: ReactText | ReactNode
) => {
  switch (type) {
    case "check":
      return (
        <FontAwesomeIcon
          icon={solid("check")}
          className="text-2xl text-gray-600"
        />
      );
      break;
    case "text":
      return <span className="font-normal text-gray-600">{content}</span>;
      break;
    default:
      return <span className="font-normal text-2.5xl text-gray-600">—</span>;
  }
};
