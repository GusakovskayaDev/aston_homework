








// КОПИРОВАНИЕ
// Способ 3 - Object.create()
// Особенности: 
// + Прототипное наследование - следовательно - оптимизация памяти, так как методы унаследованные через прототип хранятся в одном месте, а не копируются в каждый экземпляр. Это экономит память.
// + Можно создавать собственные свойства.
// + Изолированное поведение объектов, это означает, что при изменении второго объекта, первый останется неизменным.
// - Не имеет собственных свойств.

// const prototype = {
//   count: 0,
//   increment() {
//     this.count++;
//   },
//   decrement() {
//     this.count--;
//   },
// };

// const counter = Object.create(prototype);

// console.log(counter);
// counter.increment();
// console.log(counter.count);
// console.log(counter.hasOwnProperty('increment')); // Метод hasOwnProperty показывает, что increment НЕ является собственным свойством объекта counter. Оно берется из прототипа.

// counter.reset = function(){
// 	this.count = 0;
// }
// counter.reset();
// console.log(counter.count);
// console.log(counter.hasOwnProperty('reset')); // Метод hasOwnProperty показывает, что increment ЯВЛЯЕТСЯ собственным свойством объекта counter.

// counter.count = 5
// console.log(counter.count);
// console.log(prototype.count);


// --------------------------
// Особенности: 
// - поверхностное копирование. Object.assign() копирует свойства только на первом уровне, вложенные объекты на втором уровне будут ссылаться на оргинальный объект.

// const prototype = {
//   count: 0,
// 	instruction: {
// 		title: 'Счетчик',
// 		description: 'Поставь его в цикл, чтобы он считал количество иттераций'
// 	},
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

// const counter = Object.assign({}, prototype);

// console.log(counter); 
// console.log(counter.hasOwnProperty('reset')); // Имеет собственные свойства

// counter.count = 5;
// console.log(counter.count);
// console.log(prototype.count); // Первый объект изолирован
// console.log(counter);

// console.log(counter.instruction.title); 
// console.log(prototype.instruction.title);
// counter.instruction.title = 'Был счетчик, стал Блендер' // изменили вложенное свойство второго ообъекта
// console.log(counter.instruction.title);
// console.log(prototype.instruction.title); // изменение затронуло оргинал