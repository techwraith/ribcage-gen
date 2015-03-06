var test = require('tape')
  , {{PascalName}}Step = require('./step.js')
  , sinon = require('sinon')
  , _ = require('lodash')
  , defaultOptions = {}
  , createView = function createView(options){
    return new {{PascalName}}Step(_.defaults(options || {}, defaultOptions))
  }
  , stopListening
  , setup = function setup(){
    stopListening = sinon.spy({{PascalName}}Step.prototype, 'stopListening')
  }
  , cleanup = function cleanup(){
    stopListening.restore()
  }

test('Step: {{PascalName}}: constructor', function(t){
  var view = createView()

  t.equal(
    typeof view
    , 'object'
    , 'creates an object'
  )

  t.end()
})

test('Step: {{PascalName}}#bindEvents', function (t){
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

test('Step: {{PascalName}}#beforeInit', function(t){
  var view = createView()
    , fn = view.beforeInit
    , options = defaultOptions

  fn.call(view, options)
  t.ok(
    view.state instanceof view.State
    , 'creates a state model'
  )

  t.end()
})
