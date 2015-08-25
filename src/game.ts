import Pixi = require('pixi.js');

import {IButton, Button} from './components/button'
import {Tray, Dish} from './model'
import {IRegister, Register} from './components/register'

export interface IGame
{
	score: number,
	leftQueue: Tray[],
	rightQueue: Tray[]
	register: IRegister,
	askLeft: IButton,
	askRight: IButton,
	tapts: IButton
}

export class Game extends Pixi.Container
{
    renderer : Pixi.CanvasRenderer;

	constructor(renderer : Pixi.CanvasRenderer) {
		super();
        this.renderer = renderer;
        
        let dishes : Dish[] = [
            {name: 'Pizza', price: 3.37, image: ''},
            {name: 'Steak hache', price: 1.89, image: ''},
            {name: 'Faux filet', price: 3.25, image: ''},
            {name: 'Grand dessert', price: 1.86, image: ''},
            {name: 'Tomate Mozza', price: 1.54, image: ''},
            {name: 'Assiette de légumes', price: 1.47, image: ''}
        ]
        
        this.addChild(new Register(dishes));
    }
}