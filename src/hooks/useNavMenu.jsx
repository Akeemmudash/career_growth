import { useCallback, useEffect, useRef, useState } from "react";
import useStickyNav from "./useStickyNav";
import { navlinks } from "../utils";

const useMobileNavMenu = (setIsMobileMenuOpen) => {
  const prevLocation = useRef(window.location.hash);

  const handleCloseMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, [setIsMobileMenuOpen]);

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (prevLocation.current !== currentHash) {
        handleCloseMobileMenu();
        prevLocation.current = currentHash;
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [handleCloseMobileMenu]);

  return { handleCloseMobileMenu };
};

export { useMobileNavMenu };

const useNavMenu = () => {
  const { isHidden } = useStickyNav();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleOpenMobileOpen = () => setIsMobileMenuOpen(true);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      navlinks.forEach((id) => {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const handleClick = (id) => {
  //   document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  // };
  return {
    isHidden,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    handleOpenMobileOpen,
    activeSection,
  };
};

export { useNavMenu };
