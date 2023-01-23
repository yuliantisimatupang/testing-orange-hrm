// module.exports = {
//   default: `--format-options '{"snippetInterface": "synchronous"}'`
// }
let common = [
  'features/**/*.feature',
  '--require step-definitions/**/*.js',
  '--publish-quiet'
].join(' ');

module.exports = {
  default: common, 
}