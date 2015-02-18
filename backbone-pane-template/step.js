'use strict';

var Base = require('ribcage-view')
  , _ = require('lodash')
  , State = require('ampersand-state').extend({
    // forces you define all properties on the state model
    // this helps catch bugs and makes code more readable
    extraProperties: 'reject'
    // output the derived properties and the props in toJSON
    , toJSON: function toJSON(){
      return _.extend(this.serialize(), this.getAttributes({derived: true}))
    }
  })
  , {{PascalName}}Step

{{PascalName}}Step = Base.extend({

  template: require('./template.html.hbs')

, className: '{{camelName}}Step'

, State: State.extend({
    props: {

    }
  })

// Backbone Events
, bindEvents: function bindEvents(){
    // always stopListening so we don't reattach multiple listeners
    if (this.state){
      this.stopListening(this.state)
      // listen to state, model, etc… events
      // this.listenTo(this.state, 'change:text', this.onStateChangeText)
    }
  }

// e.g.
// , onStateChangeText: function onStateChangeText(state, value){
//     console.log(value)
//   }

// helper methods
// e.g.
// , findModelIndex: function findModelIndex(model){
//     this.collection.findIndex(model)
//   }

// public methods
// e.g.
// , getLabel: function getLabel(){
//     return this.state.label
//   }
//
// , setLabel: function setLabel(label){
//     this.state.label = label
//   }

// Create Subviews
// , createSubviewName: function createSubviewName(){
//     return new SubviewName({})
//   }

// Lifecycle Methods
, beforeInit: function beforeInit(options){
    // check for required props
    var requiredProps = this.State.prototype._definition

    _.each(requiredProps, function eachRequiredProp(setting, prop){
      if (setting.required && _.isUndefined(options[prop]))
        throw new Error(this.className + ' requires ' + prop)
    }, this)

    this.state = new this.State(options)
  }

, afterInit: function afterInit(){
    // this.subviewName = this.createSubviewName()
  }

// , beforeRender: function beforeRender(){
//   }

, afterRender: function afterRender(){
    // this.appendSubview(this.SubviewName)
  }

})

module.exports = {{PascalName}}Step
