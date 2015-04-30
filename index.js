'use strict'

var hbsDir = require('hbs-dir')
  , change = require('change-case')
  , path = require('path')
  , typeMap = {
    backbone: 'backbone-component-template'
    , react: 'react-component-template'
    , pane: 'backbone-pane-template'
  }

// aliases for the type map
typeMap.jsx = typeMap.react

module.exports = function ribcageGen (options, cb) {
  if (!options) throw new Error('options are required')
  if (!typeMap[options.type]) throw new Error('type ' + options.type + ' not found')

  var nameParts = options.target.split(path.sep)
  , name = nameParts[nameParts.length - 1]
  , opts = {
    origin: path.join(__dirname, typeMap[options.type])
    , target: path.join(process.cwd(), options.target)
    , context: {
        PascalName: change.pascalCase(name)
        , camelName: change.camelCase(name)
        , titleName: change.titleCase(name)
        , name: name
      }
  }
  , successCallback = function successCallback () {
    cb(opts.context)
  }

  hbsDir(opts, successCallback)
}
