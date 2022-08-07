// Вторая задача:


// Продолжаем работать с предыдущей функцией

// Функция принимает еще два параметра n и m

// Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
// m и n включительно

// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

console.log('------');

const arr2 = (length, m, n) => {
    if (length < 0) return;

    if (n < m) return arr(length, n, m);

    const newArr2 = [...new Array(length)].map(
      () => Math.floor(Math.random() * (n + 1 - m)) + m
    );

    return newArr2;
};

console.log(arr2(15, -5, 10));