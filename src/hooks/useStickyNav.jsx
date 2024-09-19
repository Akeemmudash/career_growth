import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function useStickyNav() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) setIsHidden(true);
    else {
      setIsHidden(false);
    }
  });
  return { isHidden };
}
