var $ = require('jquery')
  , Backbone = require('backbone')
  , {{PascalName}}Step = require('../step.js')
  , $body = $('body')
  , {{camelName}}Step

Backbone.$ = $

// Show us how the {{PascalName}} component works
{{camelName}}Step = new {{PascalName}}Step({
})
$body.append({{camelName}}Step.el)
