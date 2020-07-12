let obj = {};
let ageValue = 10;
// 可以在对象上定义一个新的属性，或者修改一个对象现有的属性。并且返回这个对象
Object.defineProperty(obj, 'age', {
    // value: 20,           // 直接指定 value的值
    // writable: true,      // 表示是否可以修改value值
    get() {                 // get 函数
        return ageValue;
    },
    set(newValue) {         // set 函数
        ageValue = newValue * 2;
    },
    enumerable: true,       // 可以每局 for in 循环 或者能看到到改属性
    configurable: true      // 此属性是否可以删除
})

console.log(obj)
console.log(obj.age)