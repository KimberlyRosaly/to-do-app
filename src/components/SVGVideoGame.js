// ________________________________________IMPORTs
import React from 'react'
import { SVGTree } from '../components/stickers/SVGTree' // BRACKETS INDICATE ARROW FUNCTION EXPORT
import SVGMoon from '../components/stickers/SVGMoon'
// ________________________________________IMPORTend


export default function SVGVideoGame() {
    return(<div className="svg-container"> 
            <SVGTree />
            <SVGMoon />
        </div>);
}