#!/usr/bin/env node
'use strict';

var gen = require('../index')
  , argv = require('minimist')(process.argv.slice(2))
  , type = argv.t || argv.type || 'backbone'

gen({target: argv._[0], type: type}, function (names) {
  console.log('created the ' + names.PascalName + ' component')
})
