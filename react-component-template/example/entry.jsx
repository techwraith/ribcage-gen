import React from 'react'
import ReactDOM from 'react-dom'
import a11y from 'react-a11y'

import {{PascalName}} from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React
a11y(ReactDOM)

ReactDOM.render(<{{PascalName}} {...data} />, document.getElementById('app'))
