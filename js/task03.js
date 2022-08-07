// Третья задача:

// Скопируйте код task02.js в task03.js

// Добавьте 4-ый опциональный параметр у функции

//  4-ый опциональный параметр это строка:

//     если функция получает 'even', то функция возвращает массив чётных чисел
//     если функция получает 'odd', то функция возвращает массив нечётных чисел


console.log('------');

const arr3 = (length, m, n, str) => {
    if (length < 0) return;

    if (n < m) return arr3(length, n, m, str);

    const newArr = [...new Array(length)].map(
      () => Math.floor(Math.random() * (n + 1 - m)) + m
    );

    if (str === "even") {
        return newArr.filter((i) => !(i % 2));
    }
    if (str === "odd") {
        return newArr.filter((i) => i % 2);
    }

    return newArr;
};

console.log(arr3(15, -5, 10, "even"));