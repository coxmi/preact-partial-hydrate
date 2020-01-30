
import { h, Fragment } from 'preact'


// stores all hydration data with id
const _hydrationData = {}
let _id = 0;


export const getHydrationData = () => JSON.stringify(_hydrationData)


export const withHydration = (Component) => (props) => {

	const name = Component.name || Component.prototype.constructor.name
	const componentID = ++_id
	_hydrationData[componentID] = { name, props }

	return <>
		<script type="application/hydration-marker" data-id={componentID} />
		<Component {...props} />
	</>
}


export const HydrationData = () => (
	<script 
		type="application/hydration-data" 
		dangerouslySetInnerHTML={{  __html: getHydrationData() }}
	/>
)