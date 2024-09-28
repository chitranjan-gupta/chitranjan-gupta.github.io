import { useState, useEffect } from "react";

const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<boolean>(
    () =>
      typeof window !== "undefined" &&
      localStorage.getItem("color-scheme") === "true"
  );

  useEffect(() => {
    if (colorScheme) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    localStorage.setItem("color-scheme", colorScheme.toString());
  }, [colorScheme]);

  return { colorScheme, setColorScheme };
};

export default useColorScheme;
