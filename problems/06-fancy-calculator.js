const Calculator = require("./02-calculator.js");

class FancyCalculator extends Calculator {
	constructor() {
	  super();
	}

	setTotal(newTotal) {
	  return this.total = newTotal;
	}

	modulo(num) {
	  return this.total %= num;
	}

	squared() {
	  return this.total *= this.total;
	}
  }

// Testing
let fancyCalculator = new FancyCalculator();
console.log(fancyCalculator.setTotal(5)); // => 5
console.log(fancyCalculator.squared());   // => 25
console.log(fancyCalculator.modulo(4));   // => 1
console.log(fancyCalculator.total)        // => 1

// can use instance methods on the Calculator class
console.log(fancyCalculator.add(9))       // => 10


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
