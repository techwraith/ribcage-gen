var $ = require('jquery')
  , Backbone = require('backbone')
  , {{PascalName}} = require('../index.js')
  , $body = $('body')
  , {{camelName}}

Backbone.$ = $

// Show us how the {{PascalName}} component works
{{camelName}} = new {{PascalName}}({
})
$body.append({{camelName}}.el)
