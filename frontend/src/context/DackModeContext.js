// DarkModeContext.js
import  { createContext, useState } from "react";
import PropTypes from "prop-types";

const DarkModeContext = createContext();


// Define PropTypes for DarkModeProvider
DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,  // Validate 'children' as required
};

export { DarkModeContext, DarkModeProvider };

const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <DarkModeContext.Provider value={{ dark, darkModeHandler }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
