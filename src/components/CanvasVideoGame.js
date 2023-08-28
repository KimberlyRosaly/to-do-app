// ________________________________________IMPORT
// IMPORT MODULES FROM REACT LIBRARY
import React from 'react';
// ________________________________________
// MANAGE S I D E   E F F E C T S   A N D   S T A T E
import {useEffect} from 'react';
// BUILT-IN HOOK > EXECUTE CALLBACK FUNCTION AFTER COMPONENT HAS RENDERED
import {useRef} from 'react';
// BUILT-IN HOOK > MUTABLE REFERENCE, PERSISTS ACROSS RE-RENDERS OF COMPONENT, RETURNS '.current' PROPERTY
// ________________________________________

export default function CanvasVideoGame() {

// REFERENCE OBJECT | FLAG | USED TO CHECK IF CANVAS OBJECT EXISTS OR NOT
// BY CHECKING '.current' PROPERTY, CAN DETERMINE PRESENSE AND PERFORM OPERATIONS
  const canvasRef = useRef(null);
  
  useEffect(() => {
    // 
    //  GRADIENT FILL & FRAME A RECTANGLE 
    // 
    const canvas = canvasRef.current;
      // REFERENCE THE <CANVAS> ELEMENT ON THE DOM
    const ctx = canvas.getContext('2d');
    // RETRIEVE THE SPECIFIED '2D' RENDERING CONTEXT FOR THE CANVAS OBJECT
    canvas.style.width = `75%`;
    canvas.style.height = '100%'; 
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    // ___________________________________________________________________
    // GRADIENT - COLOR STOPS:
    gradient.addColorStop(0, 'purple');
    gradient.addColorStop(0.5, 'red');
    gradient.addColorStop(1, 'orange');
    // ___________________________________________________________________
    ctx.fillStyle = gradient;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0,0,canvas.width, canvas.height);





  }, []);

  return (<div>
            <h4>C A N V A S   V I D E O   G A M E</h4>  
            <div><canvas ref={canvasRef}></canvas></div>
        </div>);
}
