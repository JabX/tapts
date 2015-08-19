export interface IGame
{
	score: number,
	leftQueue: Array<ITray>,
	rightQueue: Array<ITray>
	register: IRegister,
	askLeft: IButton,
	askRight: IButton,
	tapts: IButton
}

export interface IButton
{
	text: string,
	dish?: IDish,
	click(): () => void
}

export interface IRegister
{
	screen: string,
	dishButtons: Array<IButton>,
	numpad: Array<IButton>
}

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