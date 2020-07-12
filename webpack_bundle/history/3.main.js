/**
 * 手写异步加载的webpack
 * */
(function (modules) {
    let installedChunks = {
        main: 0
    }
    function webpackJsonpCallback() {
        let [chunkIds, moreModules] = data;
        let resolves = []
        for(let i=0; i < chunkIds; i++){
            let chunkId = chunkIds[i];
            let installedChunkData = installedChunks[chunkId]
            let resolve = installedChunkData[0]
            resolves.push(resolve)
            installedChunks[chunkId] = 0 // 表示已经加载成功了
        }
        // 把异步加载的代码块里面的模块合并到modules上面去
        for (moduleId in moreModules) {
            modules[moduleId] = moreModules[moduleId];
        }
        resolves.forEach(resolve) // resolve 一旦执行就意味着它对应的promise变成成功状态
    }

    function __webpack_require__(moduleId) {
        let module = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
        module.l = true;
        return module.exports
    }
    __webpack_require__.n = function () {

    }
    __webpack_require__.e = function (chunkId) {
        let installedChunkData;
        let promise = new Promise(function (resolve, reject){
            installedChunkData = [ resolve, reject ];
        })
        installedChunkData.push(promise); // [resolve, reject, promise]
        installedChunks[chunkId] = installedChunkData;
        let script = document.createElement("script");
        script.src = chunkId + '.js';
        document.head.appendChild(script);
        return promise;
    };
    
    __webpack_require__.t = function (value, mode) {
        // mode=7 0b0111
        if (mode & 0b0001) {
            value = require(value);
        }
        let ns = Object.create(null)
        ns.__esMoudle = true;
        ns.default = value;
        for(let key in value) {
            // 把value的属性合并到ns对象上去， 为了取值方便，统一
            ns[key] = value[key]
        }
        return ns;
    }

    window["webpackJsonp"] = [];
    let jsonArray = window["webpackJsonp"];
    jsonArray.push = webpackJsonpCallback
    
    return __webpack_require__('./src/index.js')
})({
    "./src/index.js": function (module, exports, __webpack_require__) {
        const importBtn = document.getElementById('import')
        importBtn.addEventListener('click', () => {
            __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./title */ "./src/title.js", 7)).then(res => {
                console.log(res)
            })
        })
    }
})