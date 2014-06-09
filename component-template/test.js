var test = require('prova')
  , {{PascalName}} = require('./index.js')
  , newView = function newView(options){
    return new {{PascalName}}(options)
  }

test('{{PascalName}} Component: constructor', function(t){

  var view = newView()
  t.equal(
    typeof view
    , 'object'
    , 'creates an object'
  )

  t.end()
})

test('{{PascalName}} Component: beforeInit', function(t){
  var view = newView()

  t.end()
})
