const resolve = require("path").resolve;
const aliasesOptions = require("react-app-rewire-aliases").aliasesOptions;

module.exports = (config, env) =>
  (config = aliasesOptions({
    "@pages": resolve(__dirname, "src/components/pages"),
    "@organisms": resolve(__dirname, "src/components/organisms"),
    "@molecules": resolve(__dirname, "src/components/molecules"),
    "@atoms": resolve(__dirname, "src/components/atoms"),
    "@assets": resolve(__dirname, "src/assets")
  })(config, env));
