// 1. Перечислить какие бывают алгоритмы сортировок?

// Сортировка вставками (Insertion Sort)
// На каждой итерации удаляет один элемент из входного массива, находит его место в уже отсортированной части и вставляет туда. Повторяется, пока все элементы не будут обработаны.
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(`insertionSort - ${insertionSort([1, 4, 6, 8, 7, 5, 2])}`);

// ________________________________________________________________________________

// Сортировка выбором (Selection Sort)
// Находит минимальный элемент из оставшейся неотсортированной части массива и меняет его местами с первым элементом этой части. Повторяется, пока весь массив не станет отсортированным.
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
console.log(`selectionSort - ${selectionSort([1, 4, 6, 8, 7, 5, 2])}`);

// ________________________________________________________________________________

// Сортировка пузырьком (Bubble Sort)
// Проходит по массиву, сравнивая соседние элементы, и меняет их местами, если они стоят в неправильном порядке. Этот процесс повторяется, пока массив не станет полностью отсортированным.
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
console.log(`bubbleSort - ${bubbleSort([1, 4, 6, 8, 7, 5, 2])}`);

// ________________________________________________________________________________

// Быстрая сортировка (Quick Sort)
// Выбирает опорный элемент (pivot), делит массив на две части: элементы меньше опорного и элементы больше. Затем рекурсивно сортирует обе части. Собирает все части в один отсортированный массив.
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => x < pivot);
  const right = arr.filter((x) => x > pivot);
  const equal = arr.filter((x) => x === pivot);
  return [...quickSort(left), ...equal, ...quickSort(right)];
}
console.log(`quickSort - ${quickSort([1, 4, 6, 8, 7, 5, 2])}`);

// ________________________________________________________________________________

// Сортировка слиянием (Merge Sort)
// Делит массив на две части до тех пор, пока каждая часть не станет из одного элемента. Затем объединяет (сливает) части обратно, попутно сортируя их.
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return [...result, ...left, ...right];
}
console.log(`mergeSort - ${mergeSort([1, 4, 6, 8, 7, 5, 2])}`);

// ________________________________________________________________________________

// Пирамидальная сортировка (Heap Sort)
// Преобразует массив в двоичную кучу, где на вершине — максимальный элемент. Удаляет вершину, помещая её в конец массива, и восстанавливает кучу. Повторяет до сортировки всего массива.
function heapSort(arr) {
  const heapify = (arr, length, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < length && arr[left] > arr[largest]) largest = left;
    if (right < length && arr[right] > arr[largest]) largest = right;
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, length, largest);
    }
  };
  for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--)
    heapify(arr, arr.length, i);
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}
console.log(`heapSort - ${heapSort([1, 4, 6, 8, 7, 5, 2])}`);

// ________________________________________________________________________________

// 2. Создать объект Person несколькими способами, после создать объект AnotherPerson, чтобы в нём были доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.

// Задание можно сделать очень многими способами, я запуталась в том, как лучше показать исполнение, пожтому применила разные подходы:

// Способ 1 - Можно создать Класс, который используем для создания объектов Person и AnotherPerson, которым доступны все методы класса, включая logInfo.
class Person {
  constructor(name, age) {
   this.name = name;
   this.age = age;
  }

	logInfo() {console.log(`Info: ${this.name} - ${this.age}`)}
}

const person = new Person('Oleg', 30);
person.logInfo();
const anotherPerson = new Person('Elena', 24);
anotherPerson.logInfo();

// Способ 2 - Можно создать Класс Person, для создания объектов Person и AnotherPerson, затем в прототип класса добавить метод, который будет доустпен всем объектам.
// class Person {
//   constructor(name, age) {
//    this.name = name;
//    this.age = age;
//   }

// 	hello(){ console.log(`Hello, i am ${this.name}!`) }
// }
// Person.prototype.logInfo = function(){
// 	console.log(`Info: ${this.name} - ${this.age}`)
// }
// const person = new Person('Oleg', 30);
// person.logInfo();
// const anotherPerson = new Person('Elena', 24);
// anotherPerson.logInfo();

// Способ 3 - Создать функцию-конструктор для создания объектов, добавить в прототип метод logInfo, который также будет доступен всем объектам, созданным через эту функцию-конструктор
// function Person(name, age) {
//   this.name = name;
// 	this.age = age;
// }
// Person.prototype.logInfo = function(){
// 		console.log(`Info: ${this.name} - ${this.age}`)
// 	}
// const person = new Person('Oleg', 30);
// const anotherPerson = new Person('Elena', 24);
// person.logInfo();
// anotherPerson.logInfo();

// Способ 4 - Создать обычные объекты, добавить в прототип объектов метод, который также будет доступен ВСЕМ объектам. (но я бы так не делала, но как вариант)
// const Person = {name: 'Oleg'}
// const AnotherPerson = {name: 'Elena'}
// Object.prototype.logInfo = function () {
// 	  console.log(`This is ${this.name}`);
// 	};
// Person.logInfo();
// AnotherPerson.logInfo();

// Способ 5 - Ссылаться на на метод в каждом объекте. Вариант так себе, потому что когда будет много объектов, вряд ли им будет удобно пользоваться.
// const logInfo = function () { console.log(`Info: ${this.name} - ${this.age}`) };

// const Person = { name: 'Oleg', age: 30, logInfo };
// const AnotherPerson = { name: 'Elena', age: 25, logInfo };

// Person.logInfo();
// AnotherPerson.logInfo();

// ________________________________________________________________________________

// 3. Создать класс SuperPerson c get и set для поля name и конструктором, сделать класс наследник от класса SuperPerson.
class SuperPerson {
	constructor(name) {
			this._name = name;
	}

	get name() {
			return this._name;
	}

	set name(newName) {
			this._name = newName;
	}

	logInfo() {
			console.log(`SuperPerson: ${this.name}`);
	}
}

class Hero extends SuperPerson {
	constructor(name, power) {
			super(name);
			this._power = power;
		}

	get power() { return this._power; }
	set power(newPower) { this._power = newPower }

	logInfo() {
			console.log(`Hero: ${this.name}, Power: ${this.power}`);
	}
}

const superPerson = new SuperPerson('Andrey');
console.log(superPerson.name);
superPerson.name = 'Elena';
console.log(superPerson.name);

const hero = new Hero('Spiderman', 'Sticky');
hero.logInfo();
hero.name = 'Batman';
hero.power = 'Powerfull';
hero.logInfo();

// ________________________________________________________________________________

// 4. Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;

function firstSum(arr, total) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[i] + arr[j] === total) {
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}
console.log(firstSum(arr, total));

// ________________________________________________________________________________

// 5. Оценить сложность вашего алгоритма для функции firstSum (хотя бы пару строк в качестве объяснения).

// Алгоритм имеет квадратичную сложность, из-за двух вложенных циклов для перебора всех возможных пар чисел в массиве. Можно оптимизировать с помощью хеш-таблицы:
// Сложность оптимизированного алгоритма О(n), так как мы проходим по массиву один раз, а операции с хеш-таблицей выполняются за О(1).

const arrOptima = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const totalOptima = 13;
function firstSumOptima(arr, total) {
    const seen = new Set();
    for (let num of arr) {
        const complement = total - num;
        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.add(num);
    }
    return null; 
}
console.log(firstSumOptima(arrOptima, totalOptima));
