import Pixi = require('pixi.js');

import {IButton, Button} from './components/button'
import {ITray} from './model'
import {IRegister, Register} from './components/register'

export interface IGame
{
	score: number,
	leftQueue: Array<ITray>,
	rightQueue: Array<ITray>
	register: IRegister,
	askLeft: IButton,
	askRight: IButton,
	tapts: IButton
}

export class Game extends Pixi.Container
{
    renderer : Pixi.CanvasRenderer;
    buttons = new Array<Button>();

	constructor(renderer : Pixi.CanvasRenderer) {
		super();
        this.renderer = renderer;
        
        this.buttons = [
            new Button(400, 0, 150, 80, 'Pizza', () => alert('Pizza')),
            new Button(500, 400, 100, 80, 'Steak', () => alert('Steak')),
            new Button(0, 400, 200, 80, 'Faux filet', () => alert('Faux filet')),
            new Button(200, 50, 100, 80, 'Grand dessert', () => alert('Grand dessert')),
            new Button(300, 150, 90, 80, 'Tomate Mozza', () => alert('Tomate Mozza'))
        ]

        this.buttons.forEach(button => this.addChild(button));
        
        this.addChild(new Register());
    }
}