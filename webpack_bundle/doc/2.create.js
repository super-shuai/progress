let ns1 = {}
console.log(ns1, Object.getPrototypeOf(ns1))
let ns2 = Object.create(null) // 使用它创建的对象没有任何的属性，可以当做一个非常干净的map来用，没有原型
console.log(ns2, Object.getPrototypeOf(ns2))

// 一般对象循环要判断,要不然会遍历原型上的属性
for (let key in ns1) {
    console.log(key)
    if (ns1.hasOwnProperty(key)) {
        console.log(key)
    }
}

// Object.create() 原理
Object.create = function (proto) {
    function F () {}
    return new F()
}