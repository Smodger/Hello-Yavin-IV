import React, { useContext } from 'react';
import ThemeContext from "./context/theme-context";
import lighSideImg from '../images/lightside-home.jpeg';
import darkSideImg from "../images/vader-home.jpeg";

const Home = () => {

    const ctx = useContext(ThemeContext);

    const getImages = () => {
        if(ctx.darkSide) {
            return { backgroundImage: `url(${darkSideImg})`}
        }
        if(!ctx.darkSide) {
            return { backgroundImage: `url(${lighSideImg})`}
        }
    }

    let contextConditionalClass = ctx.darkSide ? "dark-side" : "light-side";

    return (
        <div className={`homepage ${contextConditionalClass}`} style={getImages()}></div>
    )
}

export default Home;
