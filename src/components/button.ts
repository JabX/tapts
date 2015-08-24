import Pixi = require('pixi.js')

import {IDish} from '../model'

export interface IButton
{
	text: string,
	click: () => void
}

export interface IDishButton
{
	dish: IDish
}

export class Button extends Pixi.Container implements IButton
{
	text: string
	click: () => void
	
	private texture: Pixi.Graphics
	private textureDown: Pixi.Graphics;
	private label: Pixi.Text
	
	constructor(x: number, y: number, w: number, h: number, text: string, click: () => void) {
		super();
		
		this.click = click;
		this.text = text;
		
		// Init
		this.buttonMode = true;
		this.interactive = true;
		this.hitArea = new Pixi.Rectangle(x, y, w, h);
		
		this.position.x = x;
		this.position.y = y;
		
		// Constructing the button
		this.texture = new Pixi.Graphics()
			.beginFill(0x202020)
			.drawRect(x + 5, y + 5, w, h)
			.endFill()
			.beginFill(0x252525)
			.drawRect(x, y, w, h)
			.endFill();
			
		this.textureDown = new Pixi.Graphics()
			.beginFill(0x202020)
			.drawRect(x + 5, y + 5, w, h)
			.endFill()
			.beginFill(0x252525)
			.drawRect(x + 3, y + 3, w, h)
			.endFill();
			
		this.addChild(this.texture);
		
		// Format text to fit in the given button size
		let words = text.split(' ');
		
		let wrappedText = words[0];
		words.forEach( (word, i) => {
			if (i != 0)
				(wrappedText + word).length > w / 18 ? wrappedText += '\n' + word : wrappedText += ' ' + word;
		});
		
		let fontSize = 26;
		this.label = new Pixi.Text(wrappedText, {font: fontSize + 'px tapts-text', fill: 'white', align: 'center'}, 4);
		
		while (this.label.width > 0.9 * w || this.label.height > 0.9 * h) {
			fontSize--;
			this.label = new Pixi.Text(wrappedText, {font: fontSize + 'px tapts-text', fill: 'white', align: 'center'}, 4);
		}
		
		this.label.x = x + w / 2 - this.label.width / 2;
		this.label.y = y + h / 2 - this.label.height / 2;
		this.addChild(this.label);

		// Events
		this.on('mousedown', this.onButtonDown)
			.on('touchstart', this.onButtonDown)
			.on('mouseup', this.onButtonUp)
			.on('touchend', this.onButtonUp)
			.on('mouseupoutside', this.onButtonUp)
        	.on('touchendoutside', this.onButtonUp);
	}
	
	private isDown = false
	
	private onButtonDown(e: Event) {
		if (!this.isDown) {
			this.removeChild(this.texture);
			this.addChildAt(this.textureDown, 0);
			this.label.x += 3;
			this.label.y += 3;
			this.isDown = true;
		}
    }

	private onButtonUp(e: Event) {
		if(this.isDown) {
			this.removeChild(this.textureDown);
			this.addChildAt(this.texture, 0);
			this.label.x -= 3;
			this.label.y -= 3;
			this.isDown = false;
		}
	}
}

export class DishButton extends Button implements IDishButton
{
	dish: IDish
	
	constructor(x: number, y: number, w: number, h: number, dish: IDish, click: () => void) {
		this.dish = dish;
		super(x, y, w, h, dish.name, click);
	}
}