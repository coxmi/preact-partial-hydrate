
import { h, Fragment } from 'preact'
import { withHydration, HydrationData } from '@/hydrate.js'

import { Page } from '@components/Page.js'
import { Button } from '@components/Button.js'
const HydratedButton = withHydration(Button)


export const Index = () => {
	return (
		<html>
			<head>
				<meta charset="UTF-8" />
				<style>
					{`
						body {
							font-family: -apple-system, BlinkMacSystemFont, sans-serif;
						}

						* {
							margin:0.3em 0.1em;
						}
					`}
				</style>		 		
		 	</head>
		 	<body>
		 		<Page title="Index">

		 			<HydratedButton href="http://cool.com" target="_blank">
		 				Hydrated button
		 			</HydratedButton>

		 			<HydratedButton href="http://a+second+cool+button.com">
		 				Also a hydrated button
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