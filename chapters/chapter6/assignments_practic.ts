// 1. Для каждой пары приведенных ниже типов определите их совместимость и объясните свой выбор.
//  Рассуждайте выражениями подтипизации и вариантности, а в случае сомнений обратитесь к 
//  правилам из начала главы (если и это не поможет, то просто напечатайте их в редакторе, чтобы проверить)



// Определения в процессе !!!!!!!!!!!!!!!!!!!!!!




// а) 1 и number;
let a: number
a = 1 as 1


// б) number и 1;
let b: 1
b = 2 as number

// в) string и number | string;
let c: number | string
c = 'ccc' as string


// г) boolean и number;
let d: number
d= true as boolean


// д) number[] и (number | string)[];
let e: (number | string)[]
e = [1] as number[]


// е) (number | string)[] и number[];
let f: number[]
f = [1] as (number | string)[]


// ж) {a: true} и {a: boolean};
let g: {a: boolean}
g = {a: true} as {a: true}


// з) {a: {b: [string]}} и {a: {b: [number | string]}};
let i: {a: {b: [number | string]}}
i = {a: {b: ['str']}} as {a: {b: [string]}}


// и) (a: number) => string и (b: number) => string;
let h: (b: number) => string
h = ((b: number) => '1') as (a: number) => string;

// к) (a: number) => string и (a: string) => string;
let j: (a: string) => string
j = ((a: string) => 'jjj') as (a: number) => string;


// л) (a: number | string) => string и (a: string) => string;
let k: (a: string) => string
k = ((a: string) => 'jjj') as (a: number | string) => string;

