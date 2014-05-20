var hbsDir = require('hbs-dir')
var change = require('change-case')
var path = require('path')

module.exports = function (target, cb) {
  var nameParts = target.split(path.sep)
  , name = nameParts[nameParts.length - 1]
  , opts = {
    origin: path.join(__dirname, './component-template/')
  , target: path.join(process.cwd(), target)
  , context: {
      PascalName: change.pascalCase(name)
    , camelName: change.camelCase(name)
    , name: name
    }
  }
  hbsDir(opts, cb)
}
