var test = require('tape')
  , {{PascalName}} = require('./index.js')
  , sinon = require('sinon')
  , _ = require('lodash')
  , defaultOptions = {}
  , createView = function createView(options){
    return new {{PascalName}}(_.defaults(options || {}, defaultOptions))
  }
  , stopListening
  , setup = function setup(){
    stopListening = sinon.spy({{PascalName}}.prototype, 'stopListening')
  }
  , cleanup = function cleanup(){
    stopListening.restore()
  }

test('{{PascalName}}: constructor', function constructorTest(t){
  var view = createView()

  t.equal(
    typeof view
    , 'object'
    , 'creates an object'
  )

  t.end()
})

test('{{PascalName}}#bindEvents', function bindEventsTest(t){
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

test('{{PascalName}}#beforeInit', function beforeInitTest(t){
  var view = createView()
    , fn = view.beforeInit

  fn.call(view, defaultOptions)
  t.ok(
    view.state instanceof view.State
    , 'creates a state model'
  )

  t.end()
})

test('{{PascalName}}#context', function contextTest(t){
  var view = createView()
    , fn = view.context

  t.deepEqual(
    fn.call(view)
    , view.state.toJSON()
    , 'uses the state to pass variables to the template'
  )

  t.end()
})
