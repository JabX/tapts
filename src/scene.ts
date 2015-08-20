import Pixi = require('pixi.js');

import {Button} from './button'

export class MainScene extends Pixi.Container
{
    renderer : Pixi.WebGLRenderer | Pixi.CanvasRenderer;
    buttons = new Array<Pixi.Sprite>();
    
	constructor(renderer : Pixi.WebGLRenderer | Pixi.CanvasRenderer) {
		super();
        this.renderer = renderer;

		let background = Pixi.Sprite.fromImage('assets/button_test_BG.jpg');
		background.width = renderer.width;
		background.height = renderer.height;

        this.addChild(background);

        let buttonPositions = [
            175, 75,
            655, 75,
            410, 325,
            150, 465,
            685, 445
        ];
        
        for (let i = 0; i < 5; i++) {
            let button = new Button(buttonPositions[i*2], buttonPositions[i*2 + 1]);
            this.addChild(button);
            this.buttons.push(button);
        }
        
        // set some silly values...
        this.buttons[0].scale.set(1.2);
        this.buttons[2].rotation = Math.PI / 10;
        this.buttons[3].scale.set(0.8);
        this.buttons[4].scale.set(0.8,1.2);
        this.buttons[4].rotation = Math.PI;
    }
}