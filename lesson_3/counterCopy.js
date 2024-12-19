import cloneDeep from 'lodash/cloneDeep';

// Задание 2 – Скопировать объект counter всеми возможными способами;
// Способ 1 - Object.assign() (поверхностное копирование)
// Способ 2 - Object.create (поверхностное копирование)
// Способ 3 - Оператор Spread (поверхностное копирование)
// Способ 4 - JSON (глубокое копирование)
// Способ 5 - Lodash (глубокое копирование)
// Способ 6 - structuredClone()(глубокое копирование)

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

// Способ 1 - Object.assign() (поверхностное копирование)
// const counterCopy = Object.assign({}, counter);
// console.log(counterCopy);

// __________________________________________________________________________________________
// Способ 2 - Object.create (поверхностное копирование)
// const counterCopy = Object.create(counter);
// console.log(counterCopy);

// __________________________________________________________________________________________
// Способ 3 - Оператор Spread (поверхностное копирование)
// const counterCopy = { ...counter };
// console.log(counterCopy);

// __________________________________________________________________________________________
// Способ 4 - JSON (глубокое копирование)
// const counterCopy = JSON.parse(JSON.stringify(counter));
// console.log(counterCopy);

// __________________________________________________________________________________________
// Способ 5 - Lodash (глубокое копирование)
// const counterClone = cloneDeep(counter);
// console.log(counterClone);

// __________________________________________________________________________________________
// Способ 6 - structuredClone()(глубокое копирование)
// const anotherCounter = { count: 0 }
// const counterCopy = structuredClone(anotherCounter);
// console.log(counterCopy);

// __________________________________________________________________________________________
