## common.js 加载 common.js

``` js
{
    "./src/index.js": (function(module, exports, __webpack_require__) {
        let title = __webpack_require__( /*! ./title */ "./src/title.js")
        console.log(title.name)
        console.log(title.age)
    }),
    "./src/title.js": (function(module, exports) {
        exports.name = 'title_name';
        exports.age = 'title_age'
    })
}
```

## common.js 加载 es6

``` js
{
    "./src/index.js": (function(module, exports, __webpack_require__) {
        let title = __webpack_require__("./src/title.js")
        console.log(title.name)
        console.log(title.age)
    }),

    "./src/title.js": (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        // 表明这是一个es6
        __webpack_require__.r(__webpack_exports__);
        // 给__webpack_exports__增加一个age属性值
        __webpack_require__.d(__webpack_exports__, "age", function() {
            return age;
        });
        // 默认导出如何兼容 是往导出对象上挂载一个default属性
        __webpack_exports__["default"] = (name = 'title_name');
        // 导出一个age
        const age = 'title_age'
    })
}
```

## es6 加载 es6

``` js
{
    "./src/index.js": (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var _title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./title */ "./src/title.js");
        console.log(_title__WEBPACK_IMPORTED_MODULE_0__["default"])
        console.log(_title__WEBPACK_IMPORTED_MODULE_0__["age"])
    }),
    "./src/title.js": (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "age", function() {
            return age;
        });
        __webpack_exports__["default"] = (name = 'title_name');
        const age = 'title_age'
    })

}
```

## es6 加载 common.js

``` js
{
    "./src/index.js": (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var _title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( "./src/title.js");
        // 判断title是否是es6的，兼容es或者common.js模块
        var _title__WEBPACK_IMPORTED_MODULE_0___default =__webpack_require__.n(_title__WEBPACK_IMPORTED_MODULE_0__);

        console.log(_title__WEBPACK_IMPORTED_MODULE_0___default.a)
        console.log(_title__WEBPACK_IMPORTED_MODULE_0__["age"])
    }),

    "./src/title.js": (function(module, exports) {
        module.exports = {
            name: 'title_name',
            age: 'title_age'
        }
    })
}
```
- 1.如果模块是用commit.js写入的，则不需要做任何的转换
- 2.如果模块里有 export 或者 import __webpack_require__.r() 为此模块加上一个 __esModule属性
- 如果有默认导入的话 __webpack_require__.n() 得到默认导入 就是默认导入了
- 如果是批量导入的话 直接取属性值就可以了
