const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route

  const chars = strNums.split(",");
  const nums = chars.map(char => Number(char));

  return nums;
}


module.exports = { convertStrNums };