var test = require('prova')
  , {{PascalName}} = require('./index.js')
  , newView = function newView(options){
    return new {{PascalName}}(options)
  }

test('{{PascalName}} Component: beforeInit functions', function(t){

  var view = newView()
  t.equal(
    typeof view
    , 'object'
    , 'creates an object'
  )

  t.end()
})

test('{{PascalName}} Component: custom method', function(t){
  var view = newView()

  t.end()
})
