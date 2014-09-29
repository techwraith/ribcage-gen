'use strict';

var hbsDir = require('hbs-dir')
  , change = require('change-case')
  , path = require('path')
  , typeMap = {
    backbone: 'backbone-component-template'
    , react: 'react-component-template'
  }

// aliases for the type map
typeMap.jsx = typeMap.react

module.exports = function (options, cb) {
  if (!options) throw new Error('optionsa are required')

  var nameParts = options.target.split(path.sep)
  , name = nameParts[nameParts.length - 1]
  , opts = {
    origin: path.join(__dirname, typeMap[options.type])
    , target: path.join(process.cwd(), options.target)
    , context: {
        PascalName: change.pascalCase(name)
      , camelName: change.camelCase(name)
      , name: name
      }
    }

  hbsDir(opts, cb.bind(null, opts.context))
}
