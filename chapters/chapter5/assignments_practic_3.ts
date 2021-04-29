// 3.	Расширьте разработанную на с. 139 реализацию паттерна фабрика, чтобы сделать ее безопаснее
//  ценой некоторой утраты абстрактности. Обновите реализацию, чтобы потребитель во время
//  компиляции знал, что вызов Shoe.create('boot') возвращает Boot,
//  а вызов Shoe.create('balletFlat') — BalletFlat (вместо ситуации, при которой оба возвращают Shoe).


type Shoe = {
  purpose: string
}

class BalletFlat implements Shoe {
  purpose = 'dancing'
}

class Boot implements Shoe {
  purpose = 'woodcutting'
}

class Sneaker implements Shoe {
  purpose = 'walking'
}

type ShoeCreator = {
  create(type: 'balletFlat'): BalletFlat
  create(type: 'boot'): Boot
  create(type: 'sneaker'): Sneaker
  create(type: unknown): unknown
}

let Shoe: ShoeCreator = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    if (type === 'balletFlat') {
        return new BalletFlat()
    } else if (type ===  'boot') {
        return new Boot()
    } else if (type ===  'sneaker') {
        return new Sneaker()
    } else {
        return type
    }
  }
}


Shoe.create('balletFlat') // BalletFlat
Shoe.create('boot') // Boot
Shoe.create('sneaker') // Sneaker
console.log(Shoe.create('MyBoot')) 