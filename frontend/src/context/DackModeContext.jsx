// DarkModeContext.js
import  { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const DarkModeContext = createContext();




const DarkModeProvider = ({ children }) => {
  // Define PropTypes for DarkModeProvider
  DarkModeProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate 'children' as required
  };

  const getInitialMode = () => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return userPrefersDark;
  };

  const [dark, setDark] = useState(getInitialMode);

  // Toggle dark mode and save the preference to localStorage
  const darkModeHandler = () => {
    setDark((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode)); // Save to localStorage
      return newMode;
    });
  };

  // Apply the dark class to the body element based on the dark mode state
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <DarkModeContext.Provider value={{ dark, darkModeHandler }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
