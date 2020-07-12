(function(modules) {
    // The module cache
    var installedModules = {};

    // The require function 自己实现了一套commn.js的机制 __webpack__require()方法
    function __webpack_require__(moduleId) {

        // Check if module is in cache 检查模块是否在缓存（installedModules对象）中存在，如果存在直接缓存中的模块对象
        if(installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        // Create a new module (and put it into the cache) 为此模块创建一个新的模块并且放到缓存（installedModules对象）中
        var module = installedModules[moduleId] = {
            i: moduleId, // 模块id 模块标识符
            l: false,    // loaded 是否已经加载成功或者说初始化成功
            exports: {}  // 此模块的导出对象
        };

        // Execute the module function 执行模块函数
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        // Flag the module as loaded 把此模块设置成已经加载
        module.l = true;

        // Return the exports of the module 返回此模块的导出对象
        return module.exports;
    }

    // 把 modules 存在m的属性上面
    __webpack_require__.m = modules;

    // 把缓存（installedModules对象）放在c的属性上
    __webpack_require__.c = installedModules;

    // 兼容导出， 定于getter函数
    __webpack_require__.d = function(exports, name, getter) {
        if(!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, { enumerable: true, get: getter });
        }
    };

    // define __esModule on exports
    __webpack_require__.r = function(exports) {
        if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        }
        Object.defineProperty(exports, '__esModule', { value: true });
    };

    // create a fake namespace object
    // mode & 1: value is a module id, require it
    // mode & 2: merge all properties of value into the ns
    // mode & 4: return value when already ns object
    // mode & 8|1: behave like require
    __webpack_require__.t = function(value, mode) {
        if(mode & 1) value = __webpack_require__(value);
        if(mode & 8) return value;
        if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
        return ns;
    };

    // getDefaultExport function for compatibility with non-harmony modules 兼容转化
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ?
            function getDefault() { return module['default']; } :
            function getModuleExports() { return module; };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
    };

    // Object.prototype.hasOwnProperty.call
    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

    // __webpack_public_path__  公开访问路径
    __webpack_require__.p = "";


    // Load entry module and return exports 加载入口模块并且返回 exports
    return __webpack_require__(__webpack_require__.s = "./src/index.js"); // 入口模块id放在了s的 属性上
})

({
  "./src/index.js":(function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/title.js");
    console.log(_title__WEBPACK_IMPORTED_MODULE_0__["default"])}),

    "./src/title.js":(function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, "age", function() { return age; });
    __webpack_exports__["default"] = ('title_name');
    const age = 'title_age'})
});