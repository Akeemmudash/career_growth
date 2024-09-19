export const navVisibiltyVariants = {
  visible: {
    y: 0,
  },
  hidden: {
    y: "-100%",
  },
};

export const menuItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  closed: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.2,
    },
  },
};
export const mobileMenuVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
