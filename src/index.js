module.exports = function check(str, bracketsConfig) {
  return JSON.stringify(str)==JSON.stringify(bracketsConfig);
}
