function func1(str) {
    return function (num2) {
        return str + num2
    }
}

console.log(func1('withAuthRedirect')(2));