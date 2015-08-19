import Pixi = require('pixi.js');
import {IDish, ITray} from "./game";

let getPrice = (input : IDish) => input.price;

let dish : IDish = {
    price: 3.57,
    name: "Pizza",
    image: "images/pizza.png"
}

let tray : ITray = {
    dishes: [dish],
    card: {number : 26100}
}

console.log(getPrice(dish));

let renderer = Pixi.autoDetectRenderer(800, 600);
document.body.appendChild(renderer.view);

// create the root of the scene graph
let stage = new Pixi.Container();

// create a background...
let background = Pixi.Sprite.fromImage('assets/button_test_BG.jpg');
background.width = renderer.width;
background.height = renderer.height;

// add background to stage...
stage.addChild(background);

// create some textures from an image path
let textureButton = Pixi.Texture.fromImage('assets/button.png');
let textureButtonDown = Pixi.Texture.fromImage('assets/buttonDown.png');
let textureButtonOver = Pixi.Texture.fromImage('assets/buttonOver.png');

let buttons = new Array<Pixi.Sprite>();

let buttonPositions = [
    175, 75,
    655, 75,
    410, 325,
    150, 465,
    685, 445
];

for (let i = 0; i < 5; i++)
{
    let button = new Pixi.Sprite(textureButton);
    button.buttonMode = true;

    button.anchor.set(0.5);

    button.position.x = buttonPositions[i*2];
    button.position.y = buttonPositions[i*2 + 1];

    // make the button interactive...
    button.interactive = true;
	
	

    button
        // set the mousedown and touchstart callback...
        .on('mousedown', onButtonDown)
        .on('touchstart', onButtonDown)

        // set the mouseup and touchend callback...
        .on('mouseup', onButtonUp)
        .on('touchend', onButtonUp)
        .on('mouseupoutside', onButtonUp)
        .on('touchendoutside', onButtonUp)

        // set the mouseover callback...
        .on('mouseover', onButtonOver)

        // set the mouseout callback...
        .on('mouseout', onButtonOut)

    // add it to the stage
    stage.addChild(button);

    // add button to array
    buttons.push(button);
}

// set some silly values...
buttons[0].scale.set(1.2);

buttons[2].rotation = Math.PI / 10;

buttons[3].scale.set(0.8);

buttons[4].scale.set(0.8,1.2);
buttons[4].rotation = Math.PI;


animate();

function animate() {
    // render the stage
    renderer.render(stage);

    requestAnimationFrame(animate);
}

function onButtonDown()
{
    this.isdown = true;
    this.texture = textureButtonDown;
    this.alpha = 1;
}

function onButtonUp()
{
    this.isdown = false;

    if (this.isOver)
    {
        this.texture = textureButtonOver;
    }
    else
    {
        this.texture = textureButton;
    }
}

function onButtonOver()
{
    this.isOver = true;

    if (this.isdown)
    {
        return;
    }

    this.texture = textureButtonOver;
}

function onButtonOut()
{
    this.isOver = false;

    if (this.isdown)
    {
        return;
    }

    this.texture = textureButton;
}
