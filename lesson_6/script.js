
// Решить (без использования IDE, естественно) типовые задачи - написать порядок и вывод в консоли:
// 1) __________________________________________
// console.log('1');
// setTimeout(() => console.log('2'), 1);
// let promiseNew = new Promise((resolve) => {
//   console.log('3');
//   resolve();
// });
// promiseNew.then(() => console.log('4'));
// setTimeout(() => console.log('5'));
// console.log('6');
// Вывод: 1, 3, 6, 4, 2, 5

// 2) __________________________________________
// let promiseTree = new Promise((resolve, reject) => {
//   resolve("a");
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//   }, 0);
//   console.log("3");
// });
// Вывод: 1, 3, 2

// 3) __________________________________________
// let promiseTwo = new Promise((resolve, reject) => {
//   resolve("a");
// });
// promiseTwo
// .then((res) => {
//   return res + "b";
// })
// .then((res) => {
//   return res + "с";
// })
// .finally((res) => {
//   return res + "!!!!!!!";
// })
// .catch((res) => {
//   return res + "d";
// })
// .then((res) => {
//   console.log(res);
// });
// Вывод: abc

// 4) __________________________________________
// function doSmth() {
// return Promise.resolve("123");
// }
// doSmth()
// .then(function (a) {
//   console.log("1", a);
// 	return a;
// })
// .then(function (b) {
//   console.log("2", b);
//   return Promise.reject("321");
// })
// .catch(function (err) {
//   console.log("3", err);
// })
// .then(function (c) {
//   console.log("4", c);
// 	return c;
// });
// Вывод: 
// 1, 123
// 2, 123
// 3, 321
// 4, undefined

// 5) __________________________________________
// console.log("1");
// setTimeout(function () {
//   console.log("2");
// }, 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");
// Вывод: 1, 4, 3, 2

// _______________________________________________________________________________________________________

// Продвинутое:
// 1) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
// const myArray = [10, 20, 30, 40, 50];
// function passArray(arr) {
//   arr.forEach((value, index) => {
//     setTimeout(() => {
//       console.log(index);
//     }, index * 3000);
//   });
// }

// passArray(myArray);

// _______________________________________________________________________________________________________

// 2) Решить (без использования IDE, естественно) - написать порядок и вывод в консоли:
Promise.resolve("A")
  .then(function (a) {
    console.log(2, a);
    return "B";
  })
  .then(function (a) {
    Promise.resolve("C")
      .then(function (a) {
        console.log(7, a);
      })
      .then(function (a) {
        console.log(8, a);
      });
    console.log(3, a);
    return a;
  })
  .then(function (a) {
    Promise.resolve("D")
      .then(function (a) {
        console.log(9, a);
      })
      .then(function (a) {
        console.log(10, a);
      });
    console.log(4, a);
  })
  .then(function (a) {
    console.log(5, a);
  });

console.log(1);

setTimeout(function () {
  console.log(6);
}, 0);

// Вывод: 
// 1
// 2, A
// 7, C
// 8, undefined
// 3, B
// 9, D
// 10, undefined
// 4, B
// 5, undefined
// 6