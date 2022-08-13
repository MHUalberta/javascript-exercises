const ftoc = function(f) {
  let nonRoundedC = (f - 32) * (5/9);
  return Math.round(nonRoundedC*10)/10;
};

const ctof = function(c) {
  let nonRoundedF = c * (9/5) +32;
  return Math.round(nonRoundedF*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
