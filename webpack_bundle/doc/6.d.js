function __webpack_require__ () {}
// Object.prototype.hasOwnProperty简写
__webpack_require__.o = function (object, property) {
    // 判断object身上有没有property属性
    return Object.prototype.hasOwnProperty.call(object, property);
}
// 给exprot添加一个属性，属性的取值 方式就是getter
__webpack_require__.d = function(exports, name, getter) {
    if(!__webpack_require__.o(exports, name)) {
        Object.defineProperty(exports, name, { 
            enumerable: true,  // 可枚举
            get: getter 
        });
    }
};