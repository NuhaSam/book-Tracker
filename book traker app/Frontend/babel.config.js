export default {
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false, // <== ADD THIS
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  }
  // get presets() {
  //   return this._presets;
  // },
  // set presets(value) {
  //   this._presets = value;
  // },
}