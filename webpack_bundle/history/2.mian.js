(function(modules) {
        function __webpack_require__(moduleId){
            let module = {
                i: moduleId,
                l:false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
            module.l = true;
            return module.exports
        }
        __webpack_require__.n = function() {

        }
        return __webpack_require__('./src/index.js')
})({
    "./src/index.js": function(module, exports, __webpack_require__) {

    },
    "./src/title.js": function() {
        
    }
})