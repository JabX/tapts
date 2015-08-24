import {IButton} from './components/button'

export interface ITray 
{
	dishes: Array<IDish>,
	card: ICard
}

export interface IDish 
{
	price: number,
	name: string,
	image: string
}

export interface ICard
{
	number: number
}