class Dog {
	constructor(name) {
		this.name = name;
	}

	static makeJet() {
		return new Dog("Jet"); // Create a new instance with the name "Jet"
	}

	changeName(newName) {
		return this.name = newName;
	}

	speak(word) {
		return `${this.name} says ${word}`;
	}
}

// Testing

let dog1 = Dog.makeJet(); // returns an object
// To call a static method of a class in JavaScript,
// we use the class name followed by the method name,
// without needing to create an instance of the class.

console.log(dog1.name);                 // Jet
console.log(dog1.speak("hello"));       // Jet says hello
console.log(dog1.changeName("Freyja")); // Freyja
console.log(dog1.name);                 // Freyja
console.log(dog1.speak("hello"));       // Freyja says hello

let dog2 = Dog.makeJet();
console.log(dog2.name);                 // Jet


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
