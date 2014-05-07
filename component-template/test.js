var test = require('prova')
  , {{PascalName}} = require('./index.js')

test('{{PascalName}} Component: lifecycle functions', function(t){

  var {{camelName}} = new {{PascalName}}()
  t.equal(
    typeof {{camelName}}
    , 'object'
    , 'creates an object'
  )

  t.end()
})

test('{{PascalName}} Component: custom method', function(t){
  var {{camelName}} = new {{PascalName}}()

  t.end()
})
