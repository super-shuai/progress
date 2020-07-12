function __webpack_require__ () {}

__webpack_require__.r = function(exports) {
    if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
};

/*
实质上就是把一个exports对象声明为了一个es模块
 __webpack_require__.r = function(exports) {
    exports[Symbol.toStringTag] = "Module";
    exports.__esModule = true;
}
*/
