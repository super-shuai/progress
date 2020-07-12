console.log(Object.prototype.toString.call('zf')) // [object String]
console.log(Object.prototype.toString.call([1, 2, 3])) // [object Array]
console.log(Object.prototype.toString.call(3)) // [object Number]
console.log(Object.prototype.toString.call(true)) // [object Boolean]
console.log(Object.prototype.toString.call(undefined)) // [object Undefined]
console.log(Object.prototype.toString.call(null)) // [object Null]

let obj = {}
Object.defineProperty(obj, Symbol.toStringTag, {value: 'Module'})

obj[Symbol.toStringTag] = 'Module' // 等价

console.log(Object.prototype.toString.call(obj)) // [object Module]