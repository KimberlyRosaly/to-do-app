import React from 'react';

export const Sticker = ({art, background, display}) => {
    return(<>
    {/* STICKER STUFF WILL RENDER HERE */}
    <svg display={display} width="110" height="115" transform="translate(0,0)">
        <g>
            <title>GLOWING BACKGROUND LAYER</title>
            <g class="tree-svg" id="svg_21">
                {background}
            </g>
        </g>
                <g>
            <title>ART LAYER</title>
            <g stroke-width="4">
                {art}
            </g>
        </g>
    </svg>
    </>)
};