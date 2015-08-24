import Pixi = require('pixi.js')

import {Game} from './game'

let renderer = new Pixi.CanvasRenderer(800, 600);
document.body.appendChild(renderer.view);

let stage = new Game(renderer);

function animate() {
    renderer.render(stage);
    requestAnimationFrame(animate);
}

animate();