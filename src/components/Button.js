
import { h, Fragment } from 'preact'


const randomHex = () => '#' + Math.floor(Math.random() * 16777215).toString(16)


const clickHandler = (event) => {
	event.preventDefault() 
	event.currentTarget.style.color = randomHex()
}


export const Button = (props) => {
	return (
		<a href={props.href} target={props.target} onClick={clickHandler}>
		  {props.children}
		</a>
	)	
}
