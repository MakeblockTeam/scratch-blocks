module.exports = require('imports-loader?Blockly=../shim/vertical/messages,goog=../shim/vertical/goog!exports-loader?Blockly!../../msg/scratch_msgs');

// module.exports = (() => {
//   var obj = require("imports-loader?this=>window!exports-loader?Blockly&goog!../blockly/blockly_vertical.js");
//   window.Blockly = obj.Blockly;
//   window.goog = obj.goog;
//   require("../blockly/blocks/common");
//   require("../blockly/blocks/vertical");
//   require("../msg/messages");
//   require("../msg/scratch_msgs");
//   window.Blockly = null;
//   window.goog = null;
//   obj.Blockly.goog = obj.goog;
//   return obj.Blockly;
// })();
