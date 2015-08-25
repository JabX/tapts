import Pixi = require('pixi.js')

import {Button, DishButton} from './button'
import {Dish} from '../model'

export interface IRegister
{
	display: number,
	dishes: Dish[]
}

export class Register extends Pixi.Container implements IRegister
{
	display = 0
	dishes = new Array<Dish>()
	
	private dishButtons = new Array<DishButton>()
	private numpad = new Array<Button>()
	
	constructor(dishes: Dish[]) {
		super();
		
		// Create dishButtons
		this.dishes = dishes;
		let dishCount = dishes.length;
		dishes.forEach((dish, i) => {
			let x = i >= dishCount / 2 ? 90 : 0;
			let y = 200 + 70 * (i % (dishCount / 2));
			this.dishButtons.push(new DishButton(x, y, 80, 60, dish, this.dishClick.bind(null, dish)));
		});
		this.dishButtons.forEach(button => this.addChild(button));
		
		// Create numpad buttons
		for (var i = 0; i < 10; i++) {
			let x = 200 + (i == 0 || i == 2 || i == 5 || i == 8 ? 60 : i == 1 || i == 4 || i == 7 ? 0 : 120);
			let y = 200 + (i > 6 ? 0 : i > 3 ? 120 : i > 0 ? 60 : 180);
			this.numpad.push(new Button(x, y, 50, 50, i.toString(), this.numpadClick.bind(null, i)));
		}
		this.numpad.forEach(key => this.addChild(key));
	}
	
	private numpadClick(n : number) {
		console.log(n);
	}
	
	private dishClick(dish: Dish) {
		console.log(dish.name, dish.price);
	}
}