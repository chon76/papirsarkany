import Link from "next/link";

import CartDropDown from "./CartDropDown";
import NavMenuItem from "./NavMenuItem";
import HamburgerIcon from "@/assets/hamburger.svg";
import { NavbarItems } from "@/lib/types";

type MobileNavbarProps = {
  navbarItems: NavbarItems;
};

export default function MobileNavbar({ navbarItems }: MobileNavbarProps) {
  return (
    <div className="d-navbar border-b-4 border-black bg-white">
      <div className="d-navbar-start gap-1">
        <div className="d-dropdown">
          <div
            tabIndex={0}
            role="button"
            className="d-btn d-btn-ghost lg:hidden"
          >
            <HamburgerIcon className="h-5 w-5" />
          </div>
          <ul
            tabIndex={0}
            className="d-menu d-dropdown-content z-[1] mt-5 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {navbarItems.rightItems.map((navbarItem) => (
              <NavMenuItem key={crypto.randomUUID()} href={navbarItem.href}>
                {navbarItem.children}
              </NavMenuItem>
            ))}
            <div className="d-divider m-0"></div>
            {navbarItems.leftItems.map((navbarItem) => (
              <NavMenuItem key={crypto.randomUUID()} href={navbarItem.href}>
                {navbarItem.children}
              </NavMenuItem>
            ))}
          </ul>
        </div>

        <div className="flex-none">
          <CartDropDown />
        </div>
      </div>

      <div className="d-navbar-end">
        <Link
          href={"/"}
          className="d-btn d-btn-ghost normal-case min-[320px]:text-xl"
        >
          papirsarkany.hu
        </Link>
      </div>
    </div>
  );
}