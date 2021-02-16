"use strict";

/* let arr = [5, 9, 13, 46, 78, 1563, 122, 786, 23, 47]; */

/* 4. В заданном одномерном массиве:
- ввести номер позиции и вывести элемент массива на этой позиции
- все четные элементы заменить на ноль
- все элементы на нечетных позициях заменить на 1
- минимальное и максимальное значения поменять местами */

//1)
/* 
let index = +prompt('Enter index');
console.log(`Your index is ${index}. Your element is ${arr[index]}`); */

//2)
/* for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arr[i] = 0;
    }
}
console.log(arr); */

//3)
/* for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
        arr[i] = 1;
    }
}
console.log(arr); */

//4)
/* let minIndex = arr.indexOf(Math.min(...arr));
let maxIndex = arr.indexOf(Math.max(...arr));
[arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]]
console.log(arr); */


/* 5. Перестановка элементов одномерного массива (первый с последним, второй с предпоследним и т.д. */

/* for (let i = 1; i < arr.length - 1; i++) {
    [arr[i - 1], arr[arr.length - i]] = [arr[arr.length - i], arr[i - 1]];
}
console.log(arr); */

/* 6. Подсчитать количество четных чисел на диагоналях двумерного массива */

let sum = 0;
let arr = [
    [1,   2,  3,  4], 
    [5,   6,  7,  8],
    [9,  10, 11, 12],
    [13, 14, 13, 16],
];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (i == j && arr[i][j] % 2 == 0) sum++;
        arr[i].reverse();
        if (i == j && arr[i][j] % 2 == 0) sum++; 
    }
}
console.log(sum); 