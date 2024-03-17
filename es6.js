const person = {
  age: 20,
};
person.age = 23;
console.log(person); //* value of age has changed even though we are using a const to declare the object, this is because object is a non primitive data type and here it looks at the ref id where the object s stored in the memory of js and not at the value inside of it which is not const but the object itself is const.So, we can change the value inside of it but can't assign a new value the person itslef

//! person = 23;
//! console.log(person);-- not allowed

//??? Hoisting

// console.log(a); //* ref error- a is not defined
console.log(hoisted); //* the result in undefined.
// console.log(notHoistedhoisted); //! error
var hoisted = 30;
let notHoisted = 30;

//?? more on this later--------------------

console.log(getName);
getName(); //* we get I am a function--- function declarations are also hoisted
function getName() {
  console.log("I am a function");
}
// getName();

//??? hoisting with function expression
//!!! funcExp();--- not hoisted
var funcExp = function () {
  //* must be stored with var keyword
  console.log("not hoisted");
};

//??? hoisting with arrow function
//!!! arrowFunc();---not hoisted
var arrowFunc = () => {
  //* must be stored with var keyword
  console.log("not hoisted");
};

//!!! So, function expression and arrow function stored with var keyword will behave as a varibale itslef and hoisting doesn't work in both these cases, moreover in these cases undefined will be stored in the variable names insetad of the whole function code

//*** variables and functions defined with let and const keywords are not attcahed to the golbal scope or the global space insetad they have a differnet scope for themselves which is the Script scope ***/

//?? more on this later-------------

//??? let,const,script scope and Temporal Dead Zone

//??? not defined vs undefined

//* when we don't define any variable like a in our code and try to access the same vriable then we get ref error-- a is not defined

//* when we declare a variable in our code but don't assign it any value then in the memory creation phase js assigns it a value of undefined and allocates memory to it

//??? Printing strings on multiple line

//* old way

const str = "I am a string \n" + "in multi line";
console.log(str);

//* new way---better way

const newStr = `I am a new string
in multi line with the help of template literals.`;
console.log(newStr);

//??? Arrow function and this

console.log(this); //* in global scope this refers to the window object
const obj = {
  name: "dc",
  age: 26,
  job: "berozgaar",
  sayHello: function () {
    console.log("hello");
    console.log(this); //* inside this method this indicates to the object itself
    console.log(this.age);
    console.log(this.job);
    this.location = "canada"; //* attaching new properety via this to the object
    console.log(this.location);
  },
};
console.log(obj.sayHello);
obj.sayHello(); //* for a function call we don't need console.log
obj.name; //* for anything other than a function we need console.log to show it in the console
// console.log(obj.sayHello()); ///!!! we get undefined
console.log(obj.name); //* for anything other than a function we need console.log to show it in the console
console.log(obj.location);

//** case of normal function expression **/
const normalFuncExp = function () {
  console.log(this); //* this refers to the parent of the  function exp(which is in the global scope), in this case which is the global scope/object which is the window object
};
normalFuncExp();

//** now an arrow function doesn't have its own context, so this inside an arrow function indicates to its parent's context **/

const objarr = () => {
  console.log(this); //* this refers to the parent of the arrow function, in this case which is the global scope/object which is the window object
};
objarr();

//??? this and functions inside an object

//?? this with function expression inside an object
const shop = {
  price: 100,
  purchase: function () {
    console.log(this); //* here this refers to the object calling the function
    console.log(this.price); //* 100---as this is equivalent to shop
  },
};
shop.purchase();

//?? this with arrow function inside an object
const shop1 = {
  price1: 100,
  purchase: () => {
    console.log(this); //* here this refes to the global object(window)
    console.log(this.price1); //! undefined
  },
};
shop1.purchase();

//??? more complicated exmaple--method as function exp inside object and inside that we have an event listner which takes a callback function and inside that callback function this refers to the element on which the event listner is called

// const btn1 = document.querySelector("button");
// const shop4 = {
//   price: 300,
//   buy: () => {
//     console.log(this); //* here as the method itslef is a callback then this inside of this will point to its parent which is the global window object
//     btn.addEventListener("click", function () {
//       console.log(this);
//       console.log("I spent " + this.price);
//     });
//   },
// };

// shop4.buy();

const btn = document.querySelector("button");
const shop3 = {
  price: 300,
  buy: function () {
    console.log(this); //* upto this point that is before the callback func the this keyword refers to the object itself
    btn.addEventListener("click", function () {
      console.log(this); //* refers to the button itself
      console.log("I spent " + this.price);
    });
  },
};

shop3.buy();

//* for making it work change the callback function into an arrow function
const shop4 = {
  price: 300,
  buy: function () {
    console.log(this); //* upto this point that is before the callback func the this keyword refers to the object itself
    btn.addEventListener("click", () => {
      console.log(this); //* refers to the buttons parent which is buy method and inside that method the this refers to the obejct calling the buy method
      console.log("I spent " + this.price);
    });
  },
};

shop4.buy();

//??? Enhanced Object Literals
//* 1) Computed property keys
const objectNew = {
  a: 1,
  b: 2,
};
//* now I want to pass the key as a computed value that is dynamically
const keyName = "a";
const objectNew1 = {
  [keyName]: 1,
  b: 2,
};
console.log(objectNew1.b);
console.log(objectNew1[keyName]);

//* 2) Method Definition Shorthand

const hello = {
  sayhii() {
    //* ommitting :function
    console.log("hi");
  },
};
hello.sayhii();

//* 3) Property Shorthand--passing values through variables
const id = 50;
const pass = "99";
const anyObj = {
  id: id,
  pass: pass,
};
console.log(anyObj.id);
console.log(anyObj.pass);
//* so here in the above code the id and value name is same so we can use a shortcut

const anyObj1 = {
  id, //* indicates that key and value both are same
  pass, //* indicates that key and value both are same
};
console.log(anyObj1.id);
console.log(anyObj1.pass);

//??? Destructuring---different ways of accessing items from array + object

//?? Destructuring Arrays
const arr = [1, 2, 3, 4, 5];
//* now we want to store the individual elements of this array into their individual variables---so we need to destructure the array
const [a, b, c, d, e] = arr;
console.log(a); //1
console.log(b); //2
console.log(c); //3
console.log(d); //4
console.log(e); //5

const arr2D = [
  [1, 2],
  [3, "4"],
  [5, 6],
];
const [x, y, z] = arr2D;
console.log(x, y, z);
//*** here we store the whole arrays inside the variables which is not the case incse of Object.entries ***/

//?? Destructuring Objects
const anotherObj = {
  name: "dc",
  age: 26,
  job: false,
};
// const { name } = anotherObj;
// const { age } = anotherObj;
// const { job } = anotherObj;
const { name, age, job } = anotherObj; // accessing the keys via variables
console.log(name, job, age);
// console.log(age);
// console.log(job);

const { name: fullName } = anotherObj; //* changing the key name to something else
console.log(fullName); //dc
// console.log(name);//dc

//??? Spread Opeartor

//?? Spreading Arrays--- used for copying/cloning array
const myArr = [1, 2, 4, 9];
// const newArr = myArr; //*copying by ref id
// console.log(newArr);
// newArr[0] = 100;
// console.log(myArr); //*copying by ref id--value cahnged in both array
// console.log(newArr); //*copying by ref id--value cahnged in both array
const sprededArr = [...myArr];
console.log(sprededArr); //* we get the exact copy of the original array
sprededArr[1] = 20;
console.log(sprededArr); // cahnged
console.log(myArr); // not changed
const myArr1 = [1, 2, 4, 9];
//*adding new item at the beginning of the new array which is spreaded
const sprededArr1 = ["new at beginning", ...myArr1];
console.log(sprededArr1);
const myArr2 = [1, 2, 4, 9];
//*adding new item at the end of the new array which is spreaded
const sprededArr2 = [...myArr2, "new at end"];
console.log(sprededArr2);

//?? Spreading Objects--- used for copying/cloning objects
const myObj = {
  inch: 3,
  gf: false,
  married: "no chance",
};
//?? Copying By Reference id
const newObj = myObj;
//* Here both the objects have same ref id or address in the memory of js---so any opeartion on the new obj will change the original obj as well.
console.log(newObj);
newObj.inch = 8; //?cahnging the key in newObj but the value in original obj has also changed--as both have same ref id in the memory
console.log(myObj.inch);
myObj.married = "gone"; //*cahnged the old
console.log(newObj.married); //*changed in the new as well works in both ways

//?? With spreading an obj we copy/clone the obj via just by values and not the ref id so, both the obj will have diff id or address in the memory
const myObj1 = {
  inch: 3,
  gf: false,
  married: "no chance",
};
const newObj1 = { ...myObj1 }; // just copying by value
console.log(myObj1);
myObj1.married = "got chance";
console.log(myObj1.married); //got chance
console.log(newObj1.married); //no chance
newObj1.gf = true;
console.log(newObj1.gf); //true
console.log(myObj1.gf); //false

//?? This concept works same with arrays as well

//? To add new property during spread---provide as key:value pair
const newObj2 = { kids: "not available", ...myObj1 };
console.log(newObj2);
const newObj3 = { ...myObj1, kids: "not available" };
console.log(newObj3);

//? changing values
const newObj4 = { ...myObj1, inch: 9 }; //* the value that we want to change must be provided after the original array has been spread
console.log(newObj4);

//??? Rest parameter
function rest(a, ...b) {
  console.log(a, b);
}
rest(1, 2, 3, 4, 5, 6, 7, 8, 9); //1 is stored in a and rest all arguments are stored as array in the rest parameter b

//??? Object.keys,Object.values,Object.entries
const kingObj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.keys(kingObj)); //* returns an array of the keys of the object

console.log(Object.values(kingObj)); //* returns an array of the values of the object

console.log(Object.entries(kingObj)); //* returns a nested array consisting key value pairs

let entry = Object.entries(kingObj); // nested array of arrays with key value pairs
const value = Object.values(kingObj);

for (let a of entry) {
  console.log(a);
}

for (const [a, b] of entry) {
  console.log(a, b);
  //** Here we only need two variables in desturtured form as we are storing the values inside of the array, we are not storing the arrays inside a and b instead we store the values inside of the array which is in key value pair **/
}

for (const i of value) {
  console.log(i); //1,2,3
}

// for (const [i, p, q] of value) {
//   console.log(i, p, q); //1,2,3
// }---not allowed

//?? Callback Hell

// function register(cb) {
//   setTimeout(() => {
//     console.log("register");
//     cb();
//   }, 3000);
// }

// function mssg(cb) {
//   setTimeout(() => {
//     console.log("mssg");
//     cb();
//   }, 4000);
// }

// function login(cb) {
//   setTimeout(() => {
//     console.log("login");
//     cb();
//   }, 2000);
// }

// function getData(cb) {
//   setTimeout(() => {
//     console.log("getData");
//     cb();
//   }, 0);
// }

// function setData() {
//   setTimeout(() => {
//     console.log("setData");
//   }, 1000);
// }

// register(() => {
//   mssg(() => {
//     login(() => {
//       getData(() => {
//         setData();
//       });
//     });
//   });
// });

//??? Promise---we don't need callback functions

function register1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register1");
      resolve();
    }, 6000);
  });
}

function mssg1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("mssg1");
      resolve();
    }, 7000);
  });
}

function login1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login1");
      resolve();
    }, 4000);
  });
}

function getData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject("error while getting data");
      console.log("getData1");
    }, 1000);
  });
}

function setData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("setData1");
      resolve();
    }, 2000);
  });
}

// register1()
//   .then(mssg1)
//   .then(login1)
//   .then(getData1)
//   .then(setData1)
//   .catch((err) => {
//     console.log(err);
//   });
//* don't call the function inside .then() method don't use ()

//??? Async Await

async function authenticate() {
  try {
    await register1();
    await mssg1();
    await login1();
    await getData1();
    await setData1();
  } catch {
    console.log("Error");
    throw new Error("Error at authenticate");
    //??? manually throwing an error inside the authenticate function
  }
}

authenticate()
  .then(() => {
    console.log("Good Job");
  })
  .catch((err) => {
    console.log("Ugly error: " + err);
  }); //* this async function itslef returns a promsie, so we can use .then() on this as well

//??? filter array method

const findArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultArr = findArr.filter((num) => {
  if (num < 5) {
    return true;
  } else {
    false;
  }
});
console.log(resultArr); //[1,2,3,4]
//* filter method returns an array with all the items that matchs the condition

//??? find array method
const findArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultArr1 = findArr1.find((num) => {
  if (num < 5) {
    return true;
  } else {
    false;
  }
});
console.log(resultArr1); //1
//* in case of find as soon as one condition is matched the loop breaks and the next conditions are never checked so, it never check 2<5,3<5 and 4<5 values so we only get 1 as result

//??? findIndex array method
const resultArr2 = findArr1.findIndex((num) => {
  if (num < 5) {
    return true;
  } else {
    false;
  }
});
console.log(resultArr2);
//??? map method

const mapArr = [
  { firstName: "Debajit", lastName: "Chakraborty" },
  { firstName: "Coding", lastName: "Master" },
];
const resultMap = mapArr.map((user) => {
  return {
    fullName: `${user.firstName}  ${user.lastName}`,
  };
});
console.log(resultMap);
//* map also returns an array and its length remains the same as of that original array---it returns the same thing as we return from the map method itself

//??? some array method

const someArr = [10, 20, 30, 40];
const resultSome = someArr.some((num) => {
  // console.log(num);
  return num < 30; //* for some and every just give a condition and it will check the condition and return true or false
});
console.log(resultSome); //true

//??? some array method

const everyArr = [10, 20, 30, 40];
const resultEvery = everyArr.every((num) => {
  return num < 40; //* for some and every just give a condition and it will check the condition and return true or false
});
console.log(resultEvery); //false

//??? Set and Map

//?? Set---used to get the unique values of an array

const setArr = [1, 2, 3, 1, 4, 2, 5, 6, 5];
const uniqueNumbers = new Set(setArr);
console.log(uniqueNumbers);
console.log(Array.from(uniqueNumbers));

const setArr1 = new Set();
console.log(setArr1);
setArr1.add(10);
setArr1.add(20);
setArr1.add(30);
setArr1.add(10);
setArr1.add(20);
console.log(setArr1);

//?? Map(it's an object)---to store values as key value pairs

const urls = new Map();
urls.set("language", "Javascript"); //* by set method
urls.set("rank", 1);
console.log(urls);
console.log(urls.size); //2---gives no of element in the map

console.log(urls.get("rank")); //using get method //1
console.log(urls.get("language")); //Javascript
