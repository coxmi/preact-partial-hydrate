
const path = require('path')
const root = path.resolve(__dirname + '/..')

module.exports = {
	"@root": root,
	"@src": path.resolve(root, './src'),
	"@pages": path.resolve(root, './src/pages'),
	"@components": path.resolve(root, './src/components'),
	"@styles": path.resolve(root, './src/styles')
}