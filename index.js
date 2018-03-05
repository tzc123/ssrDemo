const path = require('path')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const home = require('./ssr/app')

console.log('component:', home.component)
console.log('element:', home.element)

const htmlString1 = ReactDOMServer.renderToString(React.createElement(home.component))
const htmlString2 = ReactDOMServer.renderToString(home.element)

console.log('htmlString1:', htmlString1)
console.log('htmlString2:', htmlString2)