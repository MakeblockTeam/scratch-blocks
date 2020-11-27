// module.exports = require('imports-loader?Blockly=../shim/blocks_compressed_horizontal-blockly_compressed_horizontal-messages,goog=../shim/blockly_compressed_horizontal.goog!exports-loader?Blockly!../msg/scratch_msgs');
module.exports = (() => {
  var obj = require("imports-loader?this=>window!exports-loader?Blockly&goog!../blockly/blockly_horizontal");
  window.Blockly = obj.Blockly;
  window.goog = obj.goog;
  require("../blockly/blocks/common");
  require("../blockly/blocks/horizontal");
  require("../msg/messages");
  require("../msg/scratch_msgs");
  window.Blockly = null;
  window.goog = null;
  return obj.Blockly;
})();
