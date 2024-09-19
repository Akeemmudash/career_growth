import { AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.svg";
import { m } from "framer-motion";
import {
  menuItemVariants,
  mobileMenuVariants,
  navVisibiltyVariants,
} from "../../utils/variants";
import { createPortal } from "react-dom";
import { useMobileNavMenu, useNavMenu } from "../../hooks/useNavMenu";
import { navlinks } from "../../utils";

const Navbar = () => {
  const {
    isHidden,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    handleOpenMobileOpen,
    activeSection,
  } = useNavMenu();
  return (
    <>
      <m.nav
        variants={navVisibiltyVariants}
        className="w-full shadow-lg py-4 sticky top-0 left-0 bg-white z-50"
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className="container flex w-full">
          <a href="/" className="flex items-center gap-2">
            <span>
              <img src={logo} alt="logo" className="w-14 md:w-16 lg:w-20" />
            </span>
            <span className="text-base  sm:text-xl md:text-2xl lg:text-3xl text-dark-blue-500 font-medium">
              Career Growth
            </span>
          </a>
          <div className="ml-auto flex items-center">
            <ul className="navigation__links  hidden items-center gap-2 lg:flex">
              {navlinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className={`${
                      activeSection === link
                        ? "text-sky-blue-300"
                        : "text-dark-blue-500 hover:scale-105"
                    } block capitalize px-4  transition-transform active:scale-95`}
                  >
                    {link.replace("-", " ")}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={handleOpenMobileOpen}
              className="inline-flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-md p-2 text-gray-400 lg:hidden"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </m.nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNavMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            activeSection={activeSection}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

export function MobileNavMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  activeSection,
}) {
  const { handleCloseMobileMenu } = useMobileNavMenu(setIsMobileMenuOpen);
  return createPortal(
    <div className="fixed z-[1001]">
      <m.div
        onClick={handleCloseMobileMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="backdrop"
      />
      <m.nav
        initial={{ translate: "-100%" }}
        animate={{ translate: "0%" }}
        exit={{ translate: "-100%", transition: { delay: 0.5 } }}
        className="fixed left-0 top-0 z-10 h-screen w-full max-w-sm bg-white p-10 lg:hidden shadow-md"
      >
        <div className="mobileNavHead mb-20 flex items-center justify-between">
          <div className="">
            <img src={logo} alt="logo" className="w-20" />
          </div>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={handleCloseMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>{" "}
        </div>

        <m.ul
          variants={mobileMenuVariants}
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          className="flex flex-col justify-start pb-3 pt-2"
        >
          {navlinks.map((link) => (
            <m.li variants={menuItemVariants} key={link}>
              <a
                href={`#${link}`}
                className={`text-dark-blue-500 block capitalize py-4 hover:scale-105 transition-transform active:scale-95 ${
                  activeSection === link
                    ? "text-sky-blue-100"
                    : "text-dark-blue-500"
                } `}
              >
                {link.replace("-", " ")}
              </a>
            </m.li>
          ))}
        </m.ul>
      </m.nav>
    </div>,
    document.getElementById("portal")
  );
}
