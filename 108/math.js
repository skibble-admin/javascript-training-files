const constatnts = require("./consts");
function add(x, y) {
  return x + y;
}

function remove(x, y) {
  return x - y;
}

function sqrt(x) {
  return x * x;
}

const BOO = "FOO";
console.log(constatnts);

module.exports = { add, remove, sqrt, BOO };
