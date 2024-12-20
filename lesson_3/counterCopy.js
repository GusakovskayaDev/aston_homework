// import cloneDeep from 'lodash/cloneDeep';

// Задание 2 – Скопировать объект counter всеми возможными способами;
// Способ 1 - Object.assign() (поверхностное копирование)
// Способ 2 - Object.create (поверхностное копирование)
// Способ 3 - Оператор Spread (поверхностное копирование)
// Способ 4 - JSON.stringify() и JSON.parse() (глубокое копирование)
// Способ 5 - Lodash (глубокое копирование)
// Способ 6 - structuredClone()(глубокое копирование)
// Способ 7 - Собственная функция (глубокое копирование)
// Способ 8 - Паттерн "Прототип" (поверхностное копирование)

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

// Комментарий:
// Object.assign() выполняет только поверхностное копирование объектов. Это означает, что если объект содержит вложенные объекты или массивы, они будут скопированы по ссылке, а не по значению. Изменения во вложенных объектах отразятся как на оригинале, так и на копии. Проверим это на практике. Да, действительно, теорию подтверждаю.
// const original = {
//   name: 'John',
//   nested: { age: 30 }
// };
// const clone = Object.assign({}, original);
// clone.nested.age = '23';
// clone.name = 'Elena';
// console.log(clone);
// console.log(original);

// __________________________________________________________________________________________
// Способ 2 - Object.create (поверхностное копирование)
// const counterCopy = Object.create(counter);
// console.log(counterCopy);

// Комментарий:
// Object.create() создает новый объект с указанным объектом в качестве его прототипа. Это значит, что новый объект будет иметь доступ к свойствам и методам, которые есть в прототипе. Проверим это. Да, действительно, новый объект имеет прототип старого объекта и да, метод `increment` выполняется. В примере выше новый объект оказался пустым, так как Object.create() не имеет собственных свойств.
// const counterCopy = Object.create(counter);
// console.log(Object.getPrototypeOf(counterCopy));
// counterCopy.increment();
// console.log(counterCopy.count);

// В теории Object.create() делает поверхностное копирование объектов, это значит, что вложенные объекты будут общими для исходного и клонированного объекта. Это может привести к тому, что изменения в одном объекте могут повлиять на другой. Проверим это. Да, действительно, изменения вложенных свойств отображаются в исходном объекте.
// const original = {
//   name: 'John',
//   nested: { age: 30 }
// };
// const clone = Object.create(original);
// clone.name = 'Polina';
// console.log(original.name);
// console.log(clone.name);
// clone.nested.age = '23';
// console.log(original);
// console.log(clone);
// console.log(Object.getPrototypeOf(clone));
// console.log(clone.nested === original.nested);

// __________________________________________________________________________________________
// Способ 3 - Оператор Spread (поверхностное копирование)
// const counterCopy = { ...counter };
// console.log(counterCopy);

// __________________________________________________________________________________________
// Способ 4 - JSON (глубокое копирование)
// const counterCopy = JSON.parse(JSON.stringify(counter));
// console.log(counterCopy);

// Комментарий:
// К сожалению, JSON.parse(JSON.stringify()) не копирует функции и методы, мы убедились в этом в примере выше.
// Также JSON.parse(JSON.stringify()) не может обрабатывать такие значения, как undefined, Symbol, и специальные объекты, например, Map, Set, Date, и т.д. Проверим это на практике. Да, действительно, JSON.parse(JSON.stringify()) не поддерживает клонирование некоторых типов данных.
// const original = {
// 	date: new Date(),
// 	set: new Set([1, 2, 3]),
// 	map: new Map([[1, 2]]),
// 	symb: Symbol(1)
// };
// let copy = JSON.parse(JSON.stringify(original));
// console.log(copy);
// console.log(copy.date);
// console.log(copy.set);
// console.log(copy.map);
// console.log(copy.symb);
// __________________________________________________________________________________________
// Способ 5 - Lodash (глубокое копирование)
// const counterClone = cloneDeep(counter);
// console.log(counterClone);

// __________________________________________________________________________________________
// Способ 6 - structuredClone()(глубокое копирование)
// const anotherCounter = { count: 0 }
// const counterCopy = structuredClone(anotherCounter);
// console.log(counterCopy);

// Комментарий:
// К сожалению, метод structuredClone() отбрасывает функции при клонировании. Так как в объекте `counter` были методы, structuredClone() выбрасывает исключение `DataCloneError`. Поэтому был создан новый объект без методов для дальнешего копирования.

// В теории structuredClone() не может копировать  DOM-узлы. Проверим это на практике. Да, действительно structuredClone() не может клонировать узлы DOM.
// structuredClone({ el: document.body });

// В теории structuredClone() теряет цепочки прототипов. Проверим это на практике. Да, действительно, getPrototypeOf для structuredClone() вернул прототип объекта, а не экземпляра.
// class MyClass {
// 	constructor() {
// 			this.name = "Polina";
// 	}
// 	myPrototype(){ return 'Прототип'}
// }
// const instance = new MyClass();
// const clonedInstance = structuredClone(instance);
// console.log(Object.getPrototypeOf(instance));
// console.log(instance.myPrototype());
// console.log(Object.getPrototypeOf(clonedInstance));
// console.log(clonedInstance.myPrototype());

// В теории structuredClone() не клонирует некоторые типы данных, такие как Error, Symbol, и объекты типа Map, Set. Проверим это на практике. Из приведенных ниже примеров видно, что structuredClone() МОЖЕТ клонировать типы данных Error, Map и Set, а вот с типом Symbol теория подтверждается, действительно, structuredClone() выбрасывает исключение `DataCloneError`.
// const original = {
// 	set: new Set([1, 2, 3]),
// 	map: new Map([[1, 2]]),
// 	// symb: Symbol('description'),
// 	err: new Error('Error'),
// };
// const copy = structuredClone(original);
// console.log(copy);


// В теории structuredClone() не поддерживает дескрипторы свойств. Проверим это на практике. Теорие НЕ подтверждается, structuredClone() поддерживает дескрипторы.
// const myObject = {
// 	get value() {
// 			return 42;
// 	}
// };
// const clonedObject = structuredClone(myObject);
// console.log(clonedObject.value); 
// console.log(Object.getOwnPropertyDescriptor(clonedObject, 'value')); 

// __________________________________________________________________________________________

// Способ 7 - Собственная функция (глубокое копирование)
// function deepCopy(obj) {
// 	if (obj === null || typeof obj !== 'object') {
// 			return obj;
// 	}

// 	const copy = Array.isArray(obj) ? [] : {};

// 	for (let key in obj) {
// 			if (obj.hasOwnProperty(key)) {
// 					copy[key] = deepCopy(obj[key]);
// 			}
// 	}

// 	return copy;
// }

// const copiedCounter = deepCopy(counter);
// copiedCounter.increment();
// console.log(copiedCounter.count);
// console.log(copiedCounter == counter);

// __________________________________________________________________________________________

// Способ 8 - Паттерн "Прототип" (поверхностное копирование)
// function createCounter() {}
// createCounter.prototype = Object.create(counter);
// const counterCopy = new createCounter();
// counterCopy.increment();
// console.log(counterCopy.count);