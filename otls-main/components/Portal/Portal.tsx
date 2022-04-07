import { ReactNode } from "react";
import { useRef } from "react";
import { ReactPortal, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal: ({ children }: { children: ReactNode }) => ReactPortal | null = ({
  children,
}) => {
  const [mounted, setMounted] = useState(false);
  const el = useRef<HTMLElement | null>(null);

  useEffect(() => {
    el.current = document.getElementById("app_portal");
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted && el.current
    ? createPortal(children, el.current as HTMLElement)
    : null;
};

export default Portal;
