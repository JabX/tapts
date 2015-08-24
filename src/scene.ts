import Pixi = require('pixi.js');

import {Button} from './button'

export class MainScene extends Pixi.Container
{
    renderer : Pixi.CanvasRenderer;
    buttons = new Array<Button>();

	constructor(renderer : Pixi.CanvasRenderer) {
		super();
        this.renderer = renderer;
        
        this.buttons = [
            new Button(5, 5, 150, 80, 'Pizza', () => alert('Pizza')),
            new Button(150, 5, 100, 80, 'Steak', () => alert('Steak')),
            new Button(5, 200, 200, 80, 'Faux filet', () => alert('Faux filet')),
            new Button(200, 50, 100, 80, 'Grand dessert', () => alert('Grand dessert')),
            new Button(300, 60, 90, 80, 'Tomate Mozza', () => alert('Tomate Mozza'))
        ]
        
        this.buttons.forEach(button => this.addChild(button));
    }
}