const resolve = require("path").resolve;
const aliasesOptions = require("react-app-rewire-aliases").aliasesOptions;

module.exports = (config, env) =>
  (config = aliasesOptions({
    "@assets": resolve(__dirname, "src/assets"),
    "@containers": resolve(__dirname, "src/containers"),
    "@components": resolve(__dirname, "src/components"),
    "@common": resolve(__dirname, "src/components/common"),
    "@utils": resolve(__dirname, "src/utils"),
    "@redux": resolve(__dirname, "src/redux"),
    "@scss": resolve(__dirname, "src/scss"),
    "@share": resolve(__dirname, "src/components/share")
  })(config, env));
