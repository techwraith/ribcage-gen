import React from 'react'
import a11y from 'react-a11y'

import {{PascalName}} from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React
a11y(React)

React.render(<{{PascalName}} {...data} />, document.getElementById('app'))
