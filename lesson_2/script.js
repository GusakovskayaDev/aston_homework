
// Написать функцию getLength, принимающую на вход валидное JS значение любого типа. Функция должна вывести в консоль длину (length) этого значения, если это возможно, иначе вывести в консоль 0.

function getLength(value){
	value?.length ? console.log(value.length) : console.log(0);
}

getLength('Hello');
getLength([1, 2, 3]);
getLength({ a: 1 });
getLength(42);
getLength(null);
getLength(undefined);

// Напишите функцию compare, принимающую на вход два объекта Node, и возвращающую true, если они имеют одинаковую структуру и значения и false в ином случае.

const tree1 = {
  value: 1,
  left: { value: 2, left: undefined, right: undefined },
  right: { value: 3, left: undefined, right: undefined },
};

const tree2 = {
  value: 1,
  left: { value: 2, left: undefined, right: undefined },
  right: { value: 3, left: undefined, right: undefined },
};

const tree3 = {
  value: 1,
  left: { value: 3, left: undefined, right: undefined },
  right: { value: 3, left: undefined, right: undefined },
};

const tree4 = {
  value: 1,
  left: { 
    value: 2, 
    left: { 
      value: 3, 
      left: null, 
      right: null 
    },
    right: null 
  },
  right: null
};

function compare(node1, node2) {
  const stack = [{ n1: node1, n2: node2 }];

  while (stack.length > 0) {
    const { n1, n2 } = stack.pop();

    if (n1 === undefined && n2 === undefined) continue;
    if (n1 === undefined || n2 === undefined || n1.value !== n2.value) return false;

    stack.push({ n1: n1.right, n2: n2.right });
    stack.push({ n1: n1.left, n2: n2.left });
  }

  return true;
}

console.log(compare(tree1, tree2));
console.log(compare(tree1, tree3));
console.log(compare(tree1, tree4));
