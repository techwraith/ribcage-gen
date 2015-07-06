import React from 'react'
import {{PascalName}} from '../index.jsx'
import data from './data.js'
import styles from './entry.css'
import a11y from 'react-a11y'

// expose React for debugging
window.React = React
a11y(React)

React.render(<{{PascalName}} {...data} />, document.getElementById('app'))
