
// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
// Способ 1 - Function Declaration
// Способ 2 - Function Expression
// Способ 3 - new Function()
// Способ 4 - Стрелочная функция
// Способ 5 - Анонимная функция
// Способ 6 - Асинхронная функция
// Способ 7 - Функция-конструктор
// Способ 8 - Class
// Способ 9 - Привязка контекста
// Способ 10 - Функция-генератор

// __________________________________________________________________________________________

const counter = {
	count: 0,
	increment(){
		this.count++;
	},
	decrement() {
		this.count--;
	},
	reset() {
		this.count = 0;
	},
}

// __________________________________________________________________________________________

// Способ 1 - Function Declaration
// function createMakeCounter(){
// 	this.count = 0;
// }
// createMakeCounter.prototype = counter;
// const makeCounter = new createMakeCounter();
// makeCounter.increment();
// console.log(makeCounter.count);

// __________________________________________________________________________________________
// Способ 2 - Function Expression
// const makeFunction = function createMakeCounter(){
// 	this.count = 0;
// }
// makeFunction.prototype = counter;
// const makeCounter = new makeFunction();
// makeCounter.increment();
// console.log(makeCounter.count);

// __________________________________________________________________________________________
// Способ 3 - new Function()
// const makeFunction = new Function();
// makeFunction.prototype = counter;
// const makeCounter = new makeFunction();
// makeCounter.increment();
// console.log(makeCounter.count);

// __________________________________________________________________________________________
// Способ 4 - Стрелочная функция
// const createMakeCounter = () => {
// 	let myObject = Object.create(counter);
// 	myObject.count = 0;
// 	return myObject;
// };
// const makeCounter = createMakeCounter();
// makeCounter.increment();
// console.log(makeCounter.count);

// __________________________________________________________________________________________
// Способ 5 - Анонимная функция
// const makeFunction = function(){
// 	this.count = 0;
// }
// makeFunction.prototype = counter;
// const makeCounter = new makeFunction();
// makeCounter.increment();
// console.log(makeCounter.count);

// __________________________________________________________________________________________
// Способ 6 - Асинхронная функция
// async function createMakeCounter() {
// 	await new Promise(resolve => setTimeout(resolve, 100));
// 	return {
// 			count: this.count,
// 			increment: this.increment,
// 			decrement: this.decrement,
// 			reset: this.reset
// 	};
// }

// const bindedMakeCounter = createMakeCounter.bind(counter);

// async function initCounter() {
// 		const makeCounter = await bindedMakeCounter();
// 		makeCounter.increment();
// 		console.log(makeCounter.count);
// }

// initCounter();

// __________________________________________________________________________________________

// Способ 7 - Функция-конструктор
// function createMakeCounter() {
// 	return counter;
// }
// const makeCounter = createMakeCounter();
// makeCounter.increment();
// console.log(makeCounter.count);

// __________________________________________________________________________________________

// Способ 8 - Class
// class Counter {
// 	constructor(counter) {
// 			this.count = counter.count;
// 			this.increment = counter.increment;
// 			this.decrement = counter.decrement;
// 			this.reset = counter.reset;
// 	}
// }
// const makeCounter = new Counter(counter);
// makeCounter.increment();
// console.log(makeCounter.count);

// __________________________________________________________________________________________

// Способ 9 - Привязка контекста
// function createMakeCounter() {
// 	return {
// 		count: this.count,
// 		increment: this.increment,
// 		decrement: this.decrement,
// 		reset: this.reset,
// 	};
// }

// const bindedMakeCounter = createMakeCounter.bind(counter);
// const makeCounter = bindedMakeCounter();
// makeCounter.increment();
// console.log(makeCounter.count);

// __________________________________________________________________________________________

// Способ 10 - Функция-генератор
// function* createMakeCounter() {
// 	yield {
// 			count: this.count,
// 			increment: this.increment,
// 			decrement: this.decrement,
// 			reset: this.reset
// 	};
// }
// const bindedMakeCounter = createMakeCounter.bind(counter);
// const generator = bindedMakeCounter();
// const makeCounter = generator.next().value; 

// makeCounter.increment();
// console.log(makeCounter.count);

// __________________________________________________________________________________________