var Base = require('ribcage-view')
  , _ = require('lodash')
  , State = require('ampersand-state').extend({
    extraProperties: 'reject'
  })

var {{PascalName}} = Base.extend({

  template: require('./template.html.hbs')

, className: '{{name}}'

, State: State.extend({
    props: {

    }
  })

, events: {
    // 'keyup input': 'onInputKeyup'
  }

// DOM Events
// , onInputKeyup: function onInputKeyup(e){
//    this.state.text = e.target.value
//   }

// Backbone Events
, bindEvents: function bindEvents(){
    // always stopListening so we don't reattach multiple listeners
    if (this.state) this.stopListening(this.state)

    // listen to state, model, etc… events
    // this.listenTo(this.state, 'change:text', this.onStateChangeText)
  }

// e.g.
// , onStateChangeText: function onStateChangeText(state, value){
//     console.log(value)
//   }

// Create Subviews
// , createSubviewX: function createSubviewX(){
//     return new SubviewX({})
//   }

// Lifecycle Methods
, beforeInit: function beforeInit(options){
    this.state = new this.State(_.omit(options, ['model', 'collection']))
  }

// instantiate subviews
, afterInit: function afterInit(){
    // e.g.
    // this.subviewX = this.createSubviewX()
  }

, afterRender: function afterRender(){
    // e.g.
    // this.appendSubview(this.subviewX)
  }

, context: function context(){
    return this.state.toJSON()
  }

})

module.exports = {{PascalName}}
