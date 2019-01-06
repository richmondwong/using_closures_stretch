var wrapLog = function (callback, name) {
  return function(a, b) {
    console.log(name, "(" + a + "," + b + ") => " + callback(a, b))
  }
};

var area = function (x, y) {
  return x * y;
};

var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
