import React, { useContext } from 'react'

import ThemeContext from "../context/theme-context";
import LukeBad from "../../images/Luke_whining.jpeg";
import LukeGood from "../../images/luke_handsome.jpeg";

import C3P0Good from "../../images/c3p0-good.jpeg";
import C3P0Bad from "../../images/c3p0-bad.jpeg";

import R2D2Good from "../../images/r2d2-good.jpeg";
import R2D2Bad from "../../images/r2d2-bad.jpeg";

import VaderGood from "../../images/vader-good.jpeg";
import VaderBad from "../../images/vader-home.jpeg";

import LeiaGood from "../../images/leia-good.jpeg";
import LeiaBad from "../../images/leia-bad.jpeg";

import Owen from "../../images/owen-lars.jpeg";
import Beru from "../../images/Beru.jpeg";

import R5D4 from "../../images/R5-D4.png";

import Biggs from "../../images/Biggs.jpeg";

import ObiGood from "../../images/obi-wan-good.jpeg";
import ObiBad from "../../images/obi-wan-bad.webp";

const Images = (props) => {

    const ctx = useContext(ThemeContext)

    const getImages = () => {
        switch(props.name) {
            case "Luke Skywalker":
                if(ctx.darkSide) {
                    return <img src={LukeBad} style={{ maxWidth : 350 }} alt="Luke Skywalker"></img>
                }
                if(!ctx.darkSide) {
                    return <img src={LukeGood} style={{ maxWidth : 350 }} alt="Luke Skywalker"></img>
                }
                break;
            case "C-3PO":
                if(ctx.darkSide) {
                    return <img src={C3P0Bad} style={{ maxWidth : 350 }} alt="C3P0"></img>
                }

                if(!ctx.darkSide) {
                    return <img src={C3P0Good} style={{ maxWidth : 350 }} alt="C3P0"></img>
                }
                break;
            case "R2-D2":
                if(ctx.darkSide) {
                    return <img src={R2D2Bad} style={{ maxWidth : 350 }} alt="R2D2"></img>
                }

                if(!ctx.darkSide) {
                    return <img src={R2D2Good} style={{ maxWidth : 350 }} alt="R2D2"></img>
                }
                break;
            case "Darth Vader":
                if(ctx.darkSide) {
                    return <img src={VaderBad} style={{ maxWidth : 350 }} alt="Darth Vader"></img>
                }

                if(!ctx.darkSide) {
                    return <img src={VaderGood} style={{ maxWidth : 350 }} alt="Darth Vader"></img>
                }
                break;
            case "Leia Organa":
                if(ctx.darkSide) {
                    return <img src={LeiaBad} style={{ maxWidth : 350 }} alt="Leia Organa"></img>
                }

                if(!ctx.darkSide) {
                    return <img src={LeiaGood} style={{ maxWidth : 350 }} alt="Leia Organa"></img>
                }
                break;
            case "Owen Lars":
                return <img src={Owen} style={{ maxWidth : 350 }} alt="Owen Lars"></img>
            case "Beru Whitesun lars":
                return <img src={Beru} style={{ maxWidth : 350 }} alt="Aunt Beru"></img>
            case "R5-D4":
                return <img src={R5D4} style={{ maxWidth : 350 }} alt="r5d4"></img>
            case "Biggs Darklighter":
                return <img src={Biggs} style={{ maxWidth : 350 }} alt="Biggs"></img>
            case "Obi-Wan Kenobi":
                if(ctx.darkSide) {
                    return <img src={ObiBad} style={{ maxWidth : 350 }} alt="Obi-wan Kenobi"></img>
                }

                if(!ctx.darkSide) {
                    return <img src={ObiGood} style={{ maxWidth : 350 }} alt="Obi-wan Kenobi"></img>
                }
                break;
            default:
                console.log("I have a bad feeling about this");
        }
    }
    

    return (
        <div className="col-12 text-center">
            {getImages()}
        </div>
    )
}

export default Images;