import Pixi = require('pixi.js');

export class Button extends Pixi.Sprite
{
	textureIdle = Pixi.Texture.fromImage('assets/button.png');
    textureDown = Pixi.Texture.fromImage('assets/buttonDown.png');
    textureOver = Pixi.Texture.fromImage('assets/buttonOver.png');
	
	isOver: boolean;
	isDown: boolean;
	
	constructor(x : number, y : number) {
		super();
		
		this._texture = this.textureIdle;
		this.buttonMode = true;
		this.anchor.set(0.5);
		this.interactive = true;
		
		this.position.x = x;
		this.position.y = y;

		this.on('mousedown', this.onButtonDown)
			.on('touchstart', this.onButtonDown)
			
			.on('mouseup', this.onButtonUp)
			.on('touchend', this.onButtonUp)
			.on('mouseupoutside', this.onButtonUp)
			.on('touchendoutside', this.onButtonUp)
	
			.on('mouseover', this.onButtonOver)
			
			.on('mouseout', this.onButtonOut)
	}
	
	onButtonDown() {
        this.isDown = true;
        this.texture = this.textureDown;
        this.alpha = 1;
    }

	onButtonUp() {
		this.isDown = false;
	
		if (this.isOver)
			this.texture = this.textureOver;
		else
			this.texture = this.textureIdle;
	}
	
	onButtonOver() {
		this.isOver = true;
	
		if (!this.isDown)
			this.texture = this.textureOver;
	}
	
	onButtonOut() {
		this.isOver = false;
	
		if (!this.isDown)
			this.texture = this.textureIdle;
	}
}