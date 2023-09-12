function changeContext(func, obj) {
  // return func(obj); // func is a standalone function that does not belong to obj,
  // so it will throw an error

  // return obj.func(); // This only works if func() is a method of obj

  const boundFunc = func.bind(obj); // Or: return func.bind(obj)();
  return boundFunc(); //// Now, you need to explicitly call boundFunc
  // to execute the original function with the new context.

  // Option 2 & 3:
  // return func.call(obj);
  // return func.apply(obj);
  // These 2 approaches will change the context of any function,
  // whether it's a method of obj or a standalone function.
}
/**************************************
 * NOTE:
 * 1) func.bind(obj): This method returns a new function that, when called,
 * will have obj as its this context. It does not immediately invoke the original function.
 * You would need to call the returned function separately.
 *
 * 2) func.call(obj): This method immediately invokes the original function with obj as its this context.
 * It does not return a new function; it directly executes the function.
 *
 */


// Tesing

class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}

const kristen = new Person('Kristen');
console.log(changeContext(extractName, kristen)); // => Kristen


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
