import test from 'tape'
import HelloWorld from './index.jsx'
import React from 'react'
import {addons} from 'react/addons'
import testTree from 'react-test-tree'
const {TestUtils} = addons
const {isElement} = TestUtils

test('HelloWorld: constructor', (t) => {
  const helloWorld = React.createElement(HelloWorld)

  t.ok(
    isElement(helloWorld)
    , 'is a valid react component'
  )

  t.end()
})

// I'm a sample test, you probably want to delete me
test('HelloWorld: render', (t) => {
  const name = 'john doe'
  const tree = testTree(<HelloWorld name={name} />)

  t.equal(
    tree.title.innerText
    , name
    , 'puts the name prop in the title'
  )

  t.end()
})

