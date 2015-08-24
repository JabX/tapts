import Pixi = require('pixi.js')

import {IButton, IDishButton, Button, DishButton} from './button'

export interface IRegister
{
	display: number,
	dishButtons: Array<IDishButton>,
	numpad: Array<IButton>
}

export class Register extends Pixi.Container implements IRegister
{
	display = 0
	dishButtons = new Array<DishButton>()
	numpad = new Array<Button>()
	
	constructor() {
		super();
		
		// Create numpad buttons
		for (var i = 0; i < 10; i++) {
			let x = i == 0 || i == 2 || i == 5 || i == 8 ? 30 : i == 1 || i == 4 || i == 7 ? 0 : 60;
			let y = i > 6 ? 0 : i > 3 ? 30 : i > 0 ? 60 : 90;
			this.numpad.push(new Button(x, y, 50, 50, i.toString(), () => this.numpadClick(i))); // Wrong, needs proper currying to work
		}
		
		this.numpad.forEach(key => this.addChild(key));
	}
	
	private numpadClick(n : number) {
		console.log(n);
	}
}