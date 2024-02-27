import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Icons } from "./icons";

export function NavLink(
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  return (
    <a
      {...props}
      target={props.target ?? "_blank"}
      rel="noreferrer"
      className={cn(
        "btn btn-ghost hover:underline text-[12px] lg:text-[18px]",
        props.className
      )}
    >
      {props.children}
    </a>
  );
}

export function Header() {
  const [color, setcolor] = useState(false);

  function changeNavBg() {
    window.scrollY >= 90 ? setcolor(true) : setcolor(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);

    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-20">
      <div
        className={cn(
          "navbar w-full md:px-8 md:py-4 lg:px-12 lg:py-6",
          color && "bg-white/15"
        )}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <img className="w-20 h-auto" src="/logo.png" />
            </div>
          </div>

          <a className="btn btn-ghost text-xl hidden lg:flex">
            <img className="" src="/logo.svg" />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex"></div>

        <div className="navbar-end gap-4 lg:gap-8">
          <NavLink href="/" target="_self">
            Home
          </NavLink>

          <NavLink href="https://ide.betteridea.dev/">
            IDE <Icons.arrowLink className="h-4 w-4" />
          </NavLink>

          <NavLink href="#" target="_self">
            Team
          </NavLink>
        </div>
      </div>
    </header>
  );
}
