import test from 'tape'
import React from 'react'
import {addons} from 'react/addons'
import {{PascalName}} from './index.jsx'
const {TestUtils} = addons
const {Simulate, renderIntoDocument, isElement, createRenderer} = TestUtils
const getReactNode = (dom, node) => TestUtils.findRenderedDOMComponentWithTag(dom, node)
const getDOMNode = (dom, node) => getReactNode(dom, node).getDOMNode()
const getDOMNodes = (dom, type) => TestUtils.scryRenderedDOMComponentsWithTag(dom, type)
const getDOMNodeText = (dom, node) => getDOMNode(dom, node).textContent

test('{{PascalName}}: constructor', (t) => {
  const {{camelName}} = React.createElement({{PascalName}})
  t.ok(
    isElement({{camelName}})
    , 'is a valid react component'
  )

  t.end()
})

// TODO: delete me. I'm just an example!
test('{{PascalName}} rendered DOM', (t) => {
  const name = 'Bert'
  const {{camelName}} = React.createElement({{PascalName}}, {name})
  const dom = renderIntoDocument({{camelName}})

  t.equal(
    getDOMNodeText(dom, 'h1')
    , name
    , 'renders the `name` prop'
  )

  t.end()
})
