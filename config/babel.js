
const alias = require('./alias.js')


module.exports = function(api) {

    api.cache(true);

    return {
        "presets": [ 
            "@babel/preset-env" 
        ],
        "plugins": [
            ["module-resolver", { alias }],
            [ 
                "@babel/plugin-transform-react-jsx", 
                {
                    "pragma": "h",
                    "pragmaFrag": "Fragment"
                }
            ]
        ]
    }

}
