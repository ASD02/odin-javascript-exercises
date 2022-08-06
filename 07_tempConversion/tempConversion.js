const ftoc = function(f) {
  let c = (5/9) * (f - 32);
  return Number(c.toFixed(1));
};

const ctof = function(c) {
  let f = ((5/9) * c) + 32;
  return Number(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
