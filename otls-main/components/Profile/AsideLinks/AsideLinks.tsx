import Link from "next/link";

export interface AsideLinksProps {
  groups: {
    groupName?: string;
    links: {
      label: string;
      url: string;
    }[];
  }[];
}

const AsideLinks = ({ groups }: AsideLinksProps) => {
  return (
    <div>
      {groups.map(({ groupName, links }, index) => (
        <div key={index} className="mt-10 first:mt-0">
          {groupName && (
            <p className="text-primary text-sm uppercase tracking-widest font-bold mb-2">
              {groupName}
            </p>
          )}
          <ul className="p-0 m-0 flex flex-col gap-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.url} passHref={true}>
                  <a className="text-gray-700 text-base-sm">{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AsideLinks;
