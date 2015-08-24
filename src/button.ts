import Pixi = require('pixi.js');

export class Button extends Pixi.Container
{
	texture: Pixi.Graphics;
	textureDown: Pixi.Graphics;
	
	click: () => void; // Action to execute when the button is clicked
	
	text: Pixi.Text;
	
	constructor(x: number, y: number, w: number, h: number, text: string, click: () => void) {
		super();
		
		this.click = click;
		
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
		this.text = new Pixi.Text(wrappedText, {font: fontSize + 'px tapts-text', fill: 'white', align: 'center'}, 4);
		
		while (this.text.width > 0.9 * w || this.text.height > 0.9 * h) {
			fontSize--;
			this.text = new Pixi.Text(wrappedText, {font: fontSize + 'px tapts-text', fill: 'white', align: 'center'}, 4);
		}
		
		this.text.x = x + w / 2 - this.text.width / 2;
		this.text.y = y + h / 2 - this.text.height / 2;
		this.addChild(this.text);

		// Events
		this.on('mousedown', this.onButtonDown)
			.on('touchstart', this.onButtonDown)
			.on('mouseup', this.onButtonUp)
			.on('touchend', this.onButtonUp)
			.on('mouseupoutside', this.onButtonUp)
        	.on('touchendoutside', this.onButtonUp);
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