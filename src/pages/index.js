
import '@styles/global.less'

import { h, Fragment } from 'preact'
import { withHydration, HydrationData } from '@src/hydrate.js'

import { Page } from '@components/Page'
import { Button } from '@components/Button'

const HydratedButton = withHydration(Button)


export const Index = () => {
	return (
		<html>
			<head>
				<meta charset="UTF-8" />
				<link rel="stylesheet" href="index.css" />
		 	</head>
		 	<body>
		 		<Page title="Index">

		 			<HydratedButton href="#link-1" target="_blank">
		 				Hydrated button 1
		 			</HydratedButton>

		 			<HydratedButton href="#link-2">
		 				Hydrated button 2
		 			</HydratedButton>

		 			<Button href="#">
		 				Not a hydrated button
		 			</Button>
		 			
		 		</Page>
		 		<HydrationData />
		 		<script src="client.js" />
		 	</body>
		 </html>
	)
}