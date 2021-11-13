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
//
// class User {
//     constructor(name) {
//         this.name = name
//     }
// }
//
// console.log(User.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)
//
//
// const person1 = new User('Alex_1972');
// console.log(person1.__proto__ === User.prototype)
//
//
// class User2 extends User {
//     constructor(name, age) {
//         super(name);
//         this.age = age
//     }
// }
//
//
// const person2 = new User2('alex_win', 32)
// console.log(person2.__proto__ === User2.prototype)
// console.log(User2.__proto__ === User)
// console.log(User2.prototype === person2.__proto__);
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


//todo === палиндром

// function palindrom(str) {
//     str = str.toUpperCase().split('').filter(el => el !== ' ').join('')
//     let newStr = str.split('').filter(el => el !== ' ').reverse().join('')
//     return Object.is(newStr, str)
// }
//
// console.log(palindrom('carac carac  carac'));

//todo ===  заменить числа которые деляться на 3 на 5 и (на 3 и на 5)

// function fizzBuzz(num) {
//     let arr = []
//     beforeEach()
//     for (let i = 1; i <= num; i++) {
//         arr.push(i)
//     }
//     return arr.map(el => {
//         if (el % 3 === 0 && el % 5 === 0) {
//             return 'suzz-buzz'
//         }
//         if (el % 3 === 0) {
//             return 'suzz'
//         }
//         if (el % 5 === 0) {
//             return 'buzz'
//         }
//         return el
//     })
// }
// console.log(fizzBuzz(20));

//todo === найти сколько в строке у нас гласных

// function findVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
//     let count = 0
//     let arrStr = [...str]
//
//     arrStr.forEach(el => {
//         vowels.forEach(vowel => el === vowel && count++)
//     })
//
//     return count
// }
// function findVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
//     let count = 0
//     let arrStr = [...str.toLowerCase()]
//     arrStr.forEach(el => vowels.includes(el) && count++)
//
//     return count
// }
// function findVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return str.split('').filter(ltr => vowels.includes(ltr)).length;
// }
// console.log(findVowels('hellooo'));


