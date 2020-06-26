// 什么是高阶函数

// 1.如果一个函数的参数是一个函数，即回调函数callback
// 2.如果一个函数返回一个函数当前这个函数也是回调函数

function say (...arg) {
    console.log(...arg)
}

Function.prototype.before = function (callback) {
    return (...arg) => {
        callback()
        this(...arg)
    }
}

const beforeSay = say.before(function() {
    console.log('先执行before')
})

beforeSay('dds','dfas')
