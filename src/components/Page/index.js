
import { h } from 'preact'

export const Page = (props) => {
	return <div>
		<h1>{props.title}</h1>
		{props.children}
	</div>
}
