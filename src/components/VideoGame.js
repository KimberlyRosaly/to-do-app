import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

export default function VideoGame() {
  const gameContainer = useRef(null);

  useEffect(() => {
    // Initialize Pixi.js
    const app = new PIXI.Application({ width: 200, height: 200, backgroundColor: 0x1099bb });
    gameContainer.current.appendChild(app.view);

    // Create a sprite
    // const sprite = PIXI.Sprite.from('path/to/your-image.png');
    const sprite = PIXI.Sprite.from('https://static.vecteezy.com/system/resources/previews/001/187/389/non_2x/heart-png.png');
    sprite.anchor.set(0.1);
    sprite.x = app.screen.width / 2;
    sprite.y = app.screen.height / 2;


    // Add the sprite to the stage
    app.stage.addChild(sprite);

    // Render the scene
    app.renderer.render(app.stage);

    // Clean up Pixi.js resources on component unmount
    return () => {
      app.destroy();
    };
  }, []);

  return <div ref={gameContainer} />;
}
