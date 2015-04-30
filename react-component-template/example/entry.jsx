import React from 'react'
import {{PascalName}} from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React

React.render(<{{PascalName}} {...data} />, document.getElementById('app'))
