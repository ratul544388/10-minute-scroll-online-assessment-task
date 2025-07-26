import { useEffect, useRef, useState } from "react";

export function useCrossTop<T extends HTMLDivElement>() {
  const bottomRef = useRef<T | null>(null);
  const [hasCrossedTop, setHasCrossedTop] = useState(false);

  useEffect(() => {
    const update = () => {
      if (bottomRef.current) {
        const { bottom } = bottomRef.current.getBoundingClientRect();
        setHasCrossedTop(bottom < 0);
      }
    };

    update();

    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { bottomRef, hasCrossedTop };
}
