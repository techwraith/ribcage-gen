import test from 'tape'
import {{PascalName}} from './index.jsx'
import React from 'react'
import {addons} from 'react/addons'
import testTree from 'react-test-tree'
const {TestUtils} = addons
const {isElement} = TestUtils

test('{{PascalName}}: constructor', (t) => {
  const {{camelName}} = React.createElement({{PascalName}})

  t.ok(
    isElement({{camelName}})
    , 'is a valid react component'
  )

  t.end()
})

// I'm a sample test, you probably want to delete me
test('{{PascalName}}: render', (t) => {
  const name = 'john doe'
  const tree = testTree(<{{PascalName}} name={name} />)

  t.equal(
    tree.title.innerText
    , name
    , 'puts the name prop in the title'
  )

  t.end()
})

