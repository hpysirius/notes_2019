(function (modules) {
    /***
     * webpackJsonp 用于从异步加载的文件中安装模块。
     * 把 webpackJsonp 挂载到全局是为了方便在其它文件中调用。
     *
     * @param chunkIds 异步加载的文件中存放的需要安装的模块对应的 Chunk ID
     * @param moreModules 异步加载的文件中存放的需要安装的模块列表
     * @param executeModules 在异步加载的文件中存放的需要安装的模块都安装成功后，需要执行的模块对应的 index
     */
    window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
      // 把 moreModules 添加到 modules 对象中
      // 把所有 chunkIds 对应的模块都标记成已经加载成功 
      var moduleId, chunkId, i = 0, resolves = [], result;
      for (; i < chunkIds.length; i++) {
        chunkId = chunkIds[i];
        if (installedChunks[chunkId]) {
          resolves.push(installedChunks[chunkId][0]);
        }
        installedChunks[chunkId] = 0;
      }
      for (moduleId in moreModules) {
        if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
          modules[moduleId] = moreModules[moduleId];
        }
      }
      while (resolves.length) {
        resolves.shift()();
      }
    };
  
    // 缓存已经安装的模块
    var installedModules = {};
  
    // 存储每个 Chunk 的加载状态；
    // 键为 Chunk 的 ID，值为0代表已经加载成功
    var installedChunks = {
      1: 0
    };
  
    // 模拟 require 语句，和上面介绍的一致
    function __webpack_require__(moduleId) {
      // ... 省略和上面一样的内容
    }
  
    /**
     * 用于加载被分割出去的，需要异步加载的 Chunk 对应的文件
     * @param chunkId 需要异步加载的 Chunk 对应的 ID
     * @returns {Promise}
     */
    __webpack_require__.e = function requireEnsure(chunkId) {
      // 从上面定义的 installedChunks 中获取 chunkId 对应的 Chunk 的加载状态
      var installedChunkData = installedChunks[chunkId];
      // 如果加载状态为0表示该 Chunk 已经加载成功了，直接返回 resolve Promise
      if (installedChunkData === 0) {
        return new Promise(function (resolve) {
          resolve();
        });
      }
  
      // installedChunkData 不为空且不为0表示该 Chunk 正在网络加载中
      if (installedChunkData) {
        // 返回存放在 installedChunkData 数组中的 Promise 对象
        return installedChunkData[2];
      }
  
      // installedChunkData 为空，表示该 Chunk 还没有加载过，去加载该 Chunk 对应的文件
      var promise = new Promise(function (resolve, reject) {
        installedChunkData = installedChunks[chunkId] = [resolve, reject];
      });
      installedChunkData[2] = promise;
  
      // 通过 DOM 操作，往 HTML head 中插入一个 script标签去异步加载 Chunk 对应的 JavaScript文件
      var head = document.getElementsByTagName('head')[0];
      var script= document.createElement('script');
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;
      script.timeout = 120000;
  
      // 文件的路径为配置的 publicPath、chunkId 拼接而成
      script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
  
      // 设置异步加载的最长超时时间
      var timeout = setTimeout(onScriptComplete, 120000);
      script.onerror = script.onload = onScriptComplete;
  
      // 在 script加载和执行完成时回调
      function onScriptComplete() {
        // 防止内存泄露
        script.onerror = script.onload = null;
        clearTimeout(timeout);
  
        // 去检查 chunkId 对应的 Chunk 是否安装成功，安装成功时才会存在于 installedChunks 中
        var chunk = installedChunks[chunkId];
        if (chunk !== 0) {
          if (chunk) {
            chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
          }
          installedChunks[chunkId] = undefined;
        }
      };
      head.appendChild(script);
  
      return promise;
    };
  
    // 加载并执行入口模块，和上面介绍的一致
    return __webpack_require__(__webpack_require__.s = 0);
  })
  (
    // 存放所有没有经过异步加载的，随着执行入口文件加载的模块
    [
      // main.js 对应的模块
      (function (module, exports, __webpack_require__) {
        // 通过 __webpack_require__.e 去异步加载 show.js 对应的 Chunk
        __webpack_require__.e(0).then(__webpack_require__.bind(null, 1)).then((show) => {
          // 执行 show 函数
          show('Webpack');
        });
      })
    ]
  );

// (function (modules) {
//     function __webpack_require__(moduleId) {

//         // Check if module is in cache
//         if (installedModules[moduleId]) {
//             return installedModules[moduleId].exports;
//         }
//         // Create a new module (and put it into the cache)
//         var module = installedModules[moduleId] = {
//             i: moduleId,
//             l: false,
//             exports: {},
//             hot: hotCreateModule(moduleId),
//             parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
//             children: []
//         };

//         // Execute the module function
//         modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));

//         // Flag the module as loaded
//         module.l = true;

//         // Return the exports of the module
//         return module.exports;
//     }

//     __webpack_require__.r = function (exports) {
//         if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
//             Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
//         }
//         Object.defineProperty(exports, '__esModule', { value: true });
//     };
// })({
//     "./src/show.js":

//         (function (module, __webpack_exports__, __webpack_require__) {

//             "use strict";
//             eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return show; });\nfunction show(content) {\n  window.document.getElementById('app').innerText = 'Hello,' + content;\n}\n\n// 通过 CommonJS 规范导出 show 函数\n\n\n\n//# sourceURL=webpack:///./src/show.js?");

//         })
// })