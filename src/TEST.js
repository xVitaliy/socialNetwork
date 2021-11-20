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


//todo === add bank function

// const output = {
//     usd: [10000, 30000],
//     gbp: [9000, 0],
//     eur: [0, 7000],
//     uah: [10000, 0],
// }
//
// function banking(arr) {
//     let output = {}
//     arr.forEach(item => {
//         let [currency, type, value] = item;
//         if (!output[currency]) output[currency] = [0, 0]
//         output[currency][type === 'buy' ? 0 : 1] += value
//     })
//
//     return output
// }
//
// console.log(banking(input));

// function banking(arr) {
//     let output = {}
//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i][0];
//         if (!output[`${val}`]) output[`${val}`] = [0, 0]
//         output[`${val}`][arr[i][1] === 'buy' ? 0 : 1] += arr[i][2]
//     }
//     return output
// }
// console.log(banking(input));

// const input = [
//     ['usd', 'buy', 10000],
//     ['usd', 'sell', 5000],
//     ['gbp', 'buy', 9000],
//     ['eur', 'sell', 7000],
//     ['uah', 'buy', 10000],
//     ['usd', 'sell', 25000],
// ]
// const output = {
//     usd: [10000, 30000],
//     gbp: [9000, 0],
//     eur: [0, 7000],
//     uah: [10000, 0],
// }
// let result = input.reduce((acc, item) => {
// в аккумулятор по ключу item[0] мы присваиваем текущее значение если оно существует или [0,0]
//     acc[item[0]] = acc[item[0]] || [0, 0]
//     acc[item[0]][item[1] === 'buy' ? 0 : 1] += item[2]
//     return acc
// }, {})
// console.log(result)


// todo binary search

// const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 1010];
//
// function binarySearch(arr, el) {
//     let left = -1;
//     let right = arr.length
//     while (right - left > 1) {
//         let middle = Math.floor((right + left) / 2)
//         if (arr[middle] === el) {
//             return middle
//         }
//         if (arr[middle] > el) {
//             right = middle
//         } else {
//             left = middle
//         }
//     }
//     return -1
// }
//
// console.log(binarySearch(arr, 88));


