"use client";
import { ComponentProps, MouseEvent, useEffect } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

type CustomLinkProps = ComponentProps<typeof NextLink>;

const Link: React.FC<CustomLinkProps> = ({ children, href, ...rest }) => {
  const pathname = usePathname();

  useEffect(() => {
    console.log(`pathname changed so hiding the loader: ${pathname}`);
    NProgress.done();
  }, [pathname]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    // this is not comprehensive but it's a good start, you can add more conditions if needed
    const wontNavigate =
      pathname === href ||
      href.toString().startsWith("#") ||
      rest.target === "_blank" ||
      e.ctrlKey;

    NProgress.start();
    if (wontNavigate) {
      console.log(`wontNavigate is true so hiding the loader: ${href}`);

      return NProgress.done();
    }

    return;
  };

  return (
    <>
      <NextLink {...rest} href={href} onClick={handleClick}>
        {children}
      </NextLink>
    </>
  );
};

export default Link;
