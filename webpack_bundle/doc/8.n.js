function __webpack_require__() {}
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
__webpack_require__.n = function(module) {
    // 如果moduke.__esModule属性的话说明这个模块是一个es module, 那么返回的是 module.default
    // 如果没有__esModule属性，说明这是一个普通的common.js模块，那么直接返回module
    var getter = module && module.__esModule ?
        function getDefault() { return module['default']; } :
        function getModuleExports() { return module; };
    // 添加d属性
        __webpack_require__.d(getter, 'a', getter);
    return getter;
};

let obj = { name: 'zhufeng' }

let get = __webpack_require__.n(obj)

console.log(get.a)

// 当webpack得到一个模块之后，会遍历这个模块的所有语句，如果发现任意一个export import 节点。就会认定这个es6模块，就会导出的时候增加__esModule = ture 属性