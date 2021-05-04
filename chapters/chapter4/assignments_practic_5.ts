//TO REVIEW BY IS
// С последней подзадачей не справился



// 5. Реализуйте небольшую типобезопасную библиотеку для проверки утверждений — is.
//  Начните с типов. По завершении вы должны иметь возможность использовать
//   ее следующим образом:
  // –– Сравнить string и string 
    // is('string', 'otherstring') // false 
  // –– Сравнить boolean и boolean
    //  is(true, false) // false 
  // –– Сравнить number и number 
    // is(42, 42) // true 
  // –– Сравнение двух различных типов должно выдавать ошибку при компиляции
    // is(10, 'foo') // Ошибка TS2345: аргумент типа '"foo"' не может быть присвоен параметру типа 'number'. 
  // –– (Сложно.) Нужно иметь возможность передать любое число аргументов 
  // is([1], [1, 2], [1, 2, 3]) // false 


  
    let is = <T extends unknown>( 
        a: T,
        b: T
    ) => {
        return a === b
    }

    // console.log(is('2', '3'))
    // console.log(is(true, false))
    // console.log(is(3, 3))
    // console.log(is(2, '3')) 