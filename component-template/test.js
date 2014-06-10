var test = require('prova')
  , {{PascalName}} = require('./index.js')
  , createView = function createView(options){
    return new {{PascalName}}(options)
  }

test('{{PascalName}} Component: constructor', function(t){

  var view = createView()
  t.equal(
    typeof view
    , 'object'
    , 'creates an object'
  )

  t.end()
})

test('{{PascalName}} Component: beforeInit', function(t){
  var view = createView()

  t.end()
})
