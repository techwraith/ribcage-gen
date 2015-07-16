import test from 'tape'
import {{PascalName}} from './index.jsx'
import React from 'react'
import {addons} from 'react/addons'
import testTree from 'react-test-tree'
import defaultProps from './example/data.js'
const {TestUtils} = addons
const {isElement} = TestUtils

test('{{PascalName}}: constructor', (t) => {
  const {{camelName}} = React.createElement({{PascalName}}, defaultProps)

  t.ok(
    isElement({{camelName}})
    , 'is a valid react component'
  )

  t.end()
})

// I'm a sample test, you probably want to delete me
test('{{PascalName}}: render', (t) => {
  const name = 'john doe'
  const tree = testTree(<{{PascalName}} {...defaultProps} />)

  t.equal(
    tree.title.innerText
    , name
    , 'puts the name prop in the title'
  )

  tree.dispose()
  t.end()
})

