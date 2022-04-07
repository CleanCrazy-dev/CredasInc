// https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.js

import { useState, useEffect, ReactElement } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link, { LinkProps } from "next/link";
import React, { Children } from "react";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";

export interface ActiveLinkProps extends React.PropsWithChildren<LinkProps> {
  activeClassName?: string;
  href: string;
  as?: string;
}

const ActiveLink = ({
  children,
  activeClassName = "active",
  ...props
}: ActiveLinkProps) => {
  const router = useRouter();

  const child = Children.only(children);
  const childClassName = (child as ReactElement)?.props?.className || "";
  const [className, setClassName] = useState(childClassName);

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (router?.isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(props.as || props.href, location.href)
        .pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(router?.asPath || "", location.href)
        .pathname;

      const newClassName = activePathname.includes(linkPathname)
        ? combineCSSClasses(childClassName, activeClassName)
        : childClassName;

      if (newClassName !== className) {
        setClassName(newClassName);
      }
    }
  }, [
    router,
    props.as,
    props.href,
    activeClassName,
    childClassName,
    setClassName,
    className,
  ]);

  return (
    <Link {...props}>
      {React.cloneElement(child as ReactElement, {
        className: className || null,
      })}
    </Link>
  );
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
};

export default ActiveLink;
