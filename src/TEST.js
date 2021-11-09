// function func1(str) {
//     return function (num2) {
//         return str + num2
//     }
// }
//
// console.log(func1('withAuthRedirect')(2))


// const arr = [1, 2, 3]
// console.log(arr.__proto__ === Array.prototype)
// console.log(Array.prototype.__proto__ === Object.prototype)
//
// let num = 4;
// console.log(num.__proto__ === Number.prototype)
// console.log(Number.prototype.__proto__ === Object.prototype)

class User {
    constructor(name) {
        this.name = name
    }
}

console.log(User.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)


const person1 = new User('Alex_1972');
console.log(person1.__proto__ === User.prototype)


class User2 extends User {
    constructor(name, age) {
        super(name);
        this.age = age
    }
}


const person2 = new User2('alex_win', 32)
console.log(person2.__proto__ === User2.prototype)
console.log(User2.__proto__ === User)
console.log(User2.prototype === person2.__proto__);
// console.log(User.prototype);


// class Rectangle {
//     constructor(height, width) {
//         this.name = 'Rectangle';
//         this.height = height;
//         this.width = width;
//     }
// }
//
// class Square extends Rectangle {
//     constructor(length) {
//         super(length, length);
//
//         this.name = 'Square';
//     }
// }
//
// const rec = new Square()