

import { h, render, createElement } from 'preact'
import { Button } from '@components/Button'

const components = {
	Button
}

// get hydration data and markers

const data = JSON.parse(document.querySelector('script[type="application/hydration-data"').innerHTML)
const markers = document.querySelectorAll('script[type="application/hydration-marker"]')

// rehydrate (actually just re-renders) individual components

markers.forEach(marker => {

	const el = marker.nextElementSibling
	const id = marker.getAttribute('data-id')
	const props = data[id].props || {}
	const name = data[id].name || ''
	const Component = components[name] || {}

	const VDom = () => createElement(Component, props)
	render(<VDom />, el.parentElement, el)
})
