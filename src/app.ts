import Pixi = require('pixi.js');
import {IDish, ITray} from "./game";
import {MainScene} from './scene'

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

let renderer = new Pixi.CanvasRenderer(800, 600);
document.body.appendChild(renderer.view);

let stage = new MainScene(renderer);

function animate() {
    renderer.render(stage);
    requestAnimationFrame(animate);
}

animate();