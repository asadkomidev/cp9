import { useEffect, useState } from "react";

export const usePlaceholders = (placeholders: string[]) => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  useEffect(() => {
    let interval: any;
    const startAnimation = () => {
      interval = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
      }, 5000);
    };
    startAnimation();
    return () => clearInterval(interval);
  }, [placeholders.length]);

  return currentPlaceholder;
};
