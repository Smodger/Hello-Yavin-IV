import React, { useState } from "react";

const ThemeContext = React.createContext({
    darkSide : true,
    toggleDarkSide : () => {}
});

export const ThemeContextProvider = (props) => {
    const [darkSide, setDarkSide] = useState(false);

    const toggleDarkSide = () => {
        setDarkSide((darkSide) => !darkSide)
    }

    return (
        <ThemeContext.Provider value={{ darkSide : darkSide, toggleTheme : toggleDarkSide }}>
            {props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeContext;