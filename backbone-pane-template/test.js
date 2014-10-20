var test = require('prova')
  , {{PascalName}} = require('./index.js')
  , sinon = require('sinon')
  , createView = function createView(options){
    return new {{PascalName}}(options)
  }
  , stopListening
  , setup = function setup(){
    stopListening = sinon.spy({{PascalName}}.prototype, 'stopListening')
  }
  , cleanup = function cleanup(){
    stopListening.restore()
  }

test('Pane: {{PascalName}}: constructor', function(t){
  var view = createView()

  t.equal(
    typeof view
    , 'object'
    , 'creates an object'
  )

  t.end()
})

test('Pane: {{PascalName}}#bindEvents', function (t){
  var view = createView()
    , fn = view.bindEvents

  setup()

  // call bind events
  fn.call(view)
  t.equal(
    stopListening.callCount
    , 1
    , 'calls stopListening so that events aren\'t bound multiple times'
  )
  t.ok(
    stopListening.calledWith(view.state)
    , 'calls stopListening with the state so that not all listeners are removed'
  )

  cleanup()
  t.end()
})

test('Pane: {{PascalName}}#beforeInit', function(t){
  var view = createView()
    , fn = view.beforeInit
    , options = {}

  fn.call(view, options)
  t.ok(
    view.state instanceof view.State
    , 'creates a state model'
  )

  t.end()
})

test('Pane: {{PascalName}} properties', function(t){
  var view = createView()

  t.ok(
    view.navBarTitle
    , 'sets a title'
  )

  t.ok(
    view.navBarRightButton
    , 'sets a right button'
  )

  t.end()
})
