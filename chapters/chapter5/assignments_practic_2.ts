// 2. Когда вы помечаете конструктор класса как private, это означает, что вы не можете инстанцировать или
//  расширять класс. Что происходит, когда вместо этого вы помечаете его как protected?
//   Поработайте с этим в редакторе и постарайтесь разобраться. 

  // protected тот же private - такой метод (свойство), доступ к которому можно получить только из
  //  того же класса (или объекта того же класса).
  // protected тот же private но доступен в наследниках


class User {
    private name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public displayInfo(): void {
        console.log("name: " + this.name + "; age: " + this.age);
    }
}


class Employee extends User {
 
    private company: string;

    constructor(name: string, age: number, company: string) {
        super(name, age);
        this.company = company;
    }
    public showData(): void {
        console.log("Age: " + this.age);
        console.log("Name: " + this.name); // не работает, так как name - private
    }
}

let employee = new Employee('nAmE', 17, 'abc')
console.log(employee.displayInfo())
console.log(employee.showData())