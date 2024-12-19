
// Задание 1 – Создать объект counter всеми возможными способами;
// Способ 1 - Литерал объекта
// Способ 2 - new Object()
// Способ 3 - Object.create()
// Способ 4 - Object.assign()
// Способ 5 - Object.fromEntries()
// Способ 6 - Функция-конструктор
// Способ 7 - Class
// Способ 8 - Фабричная функция
// Способ 9 - Object.defineProperties()
// Способ 10 - Module

// __________________________________________________________________________________________

// Способ 1 - Литерал объекта
// const сounter = {
// 	count: 0,
// 	increment(){
// 		this.count++;
// 	},
// 	decrement() {
// 		this.count--;
// 	},
// 	reset() {
// 		this.count = 0;
// 	},
// }

// for(let i = 0; i < 4; i++){
// 	сounter.increment();
// 	console.log(сounter.count)
// }

// __________________________________________________________________________________________

// Способ 2 - new Object()
// const counter = new Object();

// counter.count = 0;
// counter.increment = function () {
//   this.count++;
// };
// counter.decrement = function () {
//   this.count--;
// };
// counter.reset = function () {
//   this.count = 0;
// };

// for(let i = 0; i < 4; i++){
// 	counter.increment();
// 	console.log(counter.count);
// }


// __________________________________________________________________________________________

// Способ 3 - Object.create()
// const properties = {
//   count: {
//     value: 0,
//     writable: true,
//     enumerable: true,
//   },
//   increment: {
//     value: function () {
//       this.count++;
//     },
//     writable: true,
//   },
//   decrement: {
//     value: function () {
//       this.count--;
//     },
//     writable: true,
//   },
// };

// const counter = Object.create({}, properties);
// counter.increment();
// console.log(counter.count);

// __________________________________________________________________________________________

// Способ 4 - Object.assign()

// const properties = {
//   count: 0,
//   increment() {
//     this.count++;
//   },
//   decrement() {
//     this.count--;
//   },
//   reset() {
//     this.count = 0;
//   },
// };

// const counter = Object.assign({}, properties);
// counter.increment();
// console.log(counter.count);

// __________________________________________________________________________________________

// Способ 5 - Object.fromEntries()
// const properties = [
//   ['count', 0],
//   [
//     'increment',
//     function () {
//       this.count++;
//     },
//   ],
//   [
//     'decrement',
//     function () {
//       this.count--;
//     },
//   ],
// ]

// const counter = Object.fromEntries(properties);
// console.log(counter);
// counter.increment();
// console.log(counter.count);

// __________________________________________________________________________________________

// Способ 6 - Функция-конструктор
// function Counter(){
// 	this.count = 0;
// }
// Counter.prototype.increment = function(){
// 	this.count++;
// }
// Counter.prototype.decrement = function () {
//   this.count--;
// }
// Counter.prototype.reset = function () {
//   this.count = 0;
// }
// const counter = new Counter();
// counter.increment();
// console.log(counter.count);

// __________________________________________________________________________________________

// Способ 7 - Class
// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }

//   decrement() {
//     this.count--;
//   }

//   reset() {
//     this.count = 0;
//   }
// }
// const counter = new Counter();
// counter.increment();
// console.log(counter.count);

// __________________________________________________________________________________________

// Способ 8 - Фабричная функция
// function createCounter() {
//   return {
//     count: 0,
//     increment() {
//       this.count++;
//     },
//     decrement() {
//       this.count--;
//     },
//     reset() {
//       this.count = 0;
//     },
//   };
// }

// const counter = createCounter();
// counter.increment();
// console.log(counter.count);

// __________________________________________________________________________________________

// Способ 9 - Object.defineProperties()
// const counter = {};
// const properties = {
//   count: {
//     value: 0,
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   },
//   increment: {
//     value: function () {
//       this.count++;
//     },
//   },
//   decrement: {
//     value: function () {
//       this.count--;
//     },
//   },
//   reset: {
//     value: function () {
//       this.count = 0;
//     },
//   },
// };
// Object.defineProperties(counter, properties);
// counter.increment();
// console.log(counter.count);

// __________________________________________________________________________________________

// Способ 10 - Module
// export const counter = {
//   count: 0,
//   increment() {
//     this.count++;
//   },
//   decrement() {
//     this.count--;
//   },
//   reset() {
//     this.count = 0;
//   },
// };
// counter.increment();
// console.log(counter.count);