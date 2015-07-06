import React from 'react'
import a11y from 'react-a11y'

import {{PascalName}} from '../index.jsx'
import data from './data.js'
// this may or may not be used, so we require it to include the css for compilation
require('./entry.css')

// expose React for debugging
window.React = React
a11y(React)

React.render(<{{PascalName}} {...data} />, document.getElementById('app'))
