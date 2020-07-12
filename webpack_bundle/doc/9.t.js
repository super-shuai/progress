function __webpack_require__ () {}
// 用法是吧一个任意模块都变成一个es模块, 例如：import().then(res => {}) 不管是一个common.js模块还是es6模块，都会变成es6模块
// create a fake namespace object  创建一个假的命名空间
// mode & 1: value is a module id, require it , value 是一个模块id,需要用__webpack_require__来加载
// mode & 2: merge all properties of value into the ns, 
// mode & 4: return value when already ns object, 如果已经是ns对象了， 直接返回
// mode & 8|1: behave like require, 1|8 等同于 require
__webpack_require__.t = function(value, mode) {
    if(mode & 1) value = __webpack_require__(value);
    if(mode & 8) return value;
    if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    if(mode & 2 && typeof value != 'string'){
        for(var key in value){
            __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
        }
    }
    return ns;
};

let modules = {
    moduleA: function (module, exports) {
        exports.value = 'moduleA'
    },
    moduleB: function (module, exports) {
        exports.__esModule = true;
        exports.default = { value: 'moduleB' }
    }
}

__webpack_require__.t("moduleA",  0b0001)

/**
 * mode 是写死的
 */