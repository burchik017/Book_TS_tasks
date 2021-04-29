// 3. Как забронировать отпуск, который начнется сразу? 
//      Обновите перегруженную функцию reserve из этой главы (см. подраздел «Типы перегруженных функций» на с. 83),
//      добавив третью сигнатуру вызова, которая получает только место назначения без явной даты отправки. 
//      Обновите реализацию функции reserve, чтобы она поддерживала новую перегруженную сигнатуру. 

type Reserved = {
    (from: Date, to: Date, destination: string): unknown
    (from: Date, destination: string): unknown
    (destination: string): unknown
  }
  
  let reserve: Reserved = (
    fromOrDestination: Date | string,
    toOrDestination?: Date | string,
    destination?: string
  ) => {
    if (fromOrDestination instanceof Date && toOrDestination instanceof Date && destination !== undefined ) {
      // Book a one-way trip
      console.log('1')
    } else if ( fromOrDestination instanceof Date && typeof toOrDestination === 'string' ) {
      // Book a round trip
        console.log('2')
    } else if (typeof fromOrDestination === 'string') {
      // Book a trip which began immediately
        console.log('3')
    }
  }
  
  console.log(reserve(new Date(), new Date(), 'bali'))
  console.log(reserve(new Date(), new Date().toISOString()))
  console.log(reserve('bali'))