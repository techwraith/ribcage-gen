var hbsDir = require('hbs-dir')

module.exports = function (target, cb) {
  hbsDir('./compontent-template', target, cb)
}
