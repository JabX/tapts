import {IButton} from './components/button'

export interface Tray 
{
	dishes: Dish[]
	card: Card
}

export interface Dish 
{
	price: number,
	name: string,
	image: string
}

export interface Card
{
	number: number
}