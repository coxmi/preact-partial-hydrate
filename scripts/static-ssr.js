// TODO: static site gen!


// allow jsx and es6+

	require('@babel/register')

	const fs = require('fs')
	const path = require('path')
	const preact = require('preact-render-to-string')
	const render = preact.render


// render Index component to /index.html

	const indexVDom = require('./../src/pages/index.js').Index()
	const html = render(indexVDom, false, { pretty : true })

	fs.writeFile(path.join(__dirname, './../dist/index.html'), html, (err) => {
	    if (err) return console.log(err);
	})