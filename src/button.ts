import Pixi = require('pixi.js');

export class Button extends Pixi.Container
{
	texture: Pixi.Graphics;
	textureDown: Pixi.Graphics;
	click: () => void;
	
	text: Pixi.Text;
	
	constructor(x: number, y: number, w: number, h: number, text: string, click: () => void) {
		super();
		
		this.click = click;
		
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
		
		let words = text.split(' ');
		if (words.length == 2)
			text = words[0] + '\n' + words[1];
		
		this.text = new Pixi.Text(text, {font: "26px tapts-text", fill: "white", align: "center"}, 4)
		
		this.text.x = x + w / 2 - this.text.width / 2;
		this.text.y = y + h / 2 - this.text.height / 2;
		this.addChild(this.text);

		// Events
		this.on('mousedown', this.onButtonDown)
			.on('touchstart', this.onButtonDown)
			.on('mouseup', this.onButtonUp)
			.on('touchend', this.onButtonUp);
	}
	
	onButtonDown() {
        this.removeChild(this.texture);
		this.addChildAt(this.textureDown, 0);
		this.text.x += 3;
		this.text.y += 3;
    }

	onButtonUp() {
		this.removeChild(this.textureDown);
		this.addChildAt(this.texture, 0);
		this.text.x -= 3;
		this.text.y -= 3;
	}
}