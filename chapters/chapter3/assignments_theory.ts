// Какой тип выведет TypeScript для каждого из этих значений?
let a = 1042 // number
let b = 'apples and oranges' // string
const c = 'pineapples' // 'pineapples'
let d = [true, true, false] // boolean[]
let e = {type: 'ficus'} // {type: string}
let f = [1, false] // (number | boolean)[]
const g = [3] // number[]
let h = null // any

// 2. Почему каждый из этих примеров выдает ошибку?

let i: 3 = 3
i = 4 //  Ошибка TS2322: тип '4' не может быть присвоен типу '3'.

//  4 не может быть просвоено числовому значению чё стандарное значение равно 3

////////////////
let j = [1, 2, 3]
j.push(4)
j.push('5') // Ошибка TS2345: аргумент типа '5' не может быть присвоен параметру типа 'number'.

// тк тип j являеться number[], то строковое значение "5", занести в массив не получится

////////////////
let k: never = 4 // Ошибка TSTS2322: тип '4' не может  быть присвоен типу 'never'.

// тип 'never', это тип функции, который никогда ничего не возвращает (выбрасывает исключение или выполняется бес- конечно)


////////////////
let l: unknown = 4
let m = l * 2 //Ошибка TS2571: объект имеет тип 'unknown'.

// для корректного выполнения необходимо уточнить тип, if (typeof l === 'number') {let m = l * 2 // number }