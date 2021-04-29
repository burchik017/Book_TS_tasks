// 4. Обновите реализацию call из этой главы 
//  (см. подраздел «Использование ограниченного полиморфизма для моделирования арности» на с. 105),
//  чтобы она работала только для функций, чей второй аргумент является string.
//   Для остальных функций реализация должна проваливаться при компиляции.


function call<T extends [unknown, string, ...unknown[]], R> ( 
  f: (...args: T) => R, ...args: T
): R {
  return f(...args)
}

function fill (length: number, value: string, a: number): string[] { 
  return Array.from({length}, () => value + a)
}

console.log(call(fill, 5, '2', 4))