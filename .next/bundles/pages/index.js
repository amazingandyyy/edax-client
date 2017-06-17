window.__NEXT_REGISTER_PAGE('/', function() {
  var comp = (module.exports = webpackJsonp(
    [5],
    {
      /***/ /***/ 561: function(module, exports, __webpack_require__) {
        'use strict';
        /* WEBPACK VAR INJECTION */ (function(__resourceQuery) {
          Object.defineProperty(exports, '__esModule', {
            value: true
          });

          var _react = __webpack_require__(588);

          var _react2 = _interopRequireDefault(_react);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }

          exports.default = function() {
            return _react2.default.createElement('div', null, 'hey');
          };

          (function register() {
            /* react-hot-loader/webpack */ if (true) {
              if (typeof __REACT_HOT_LOADER__ === 'undefined') {
                return;
              }
              if (typeof module.exports === 'function') {
                __REACT_HOT_LOADER__.register(
                  module.exports,
                  'module.exports',
                  '/Users/Andysign/projects/gdax-client/pages/index.js'
                );
                return;
              }
              for (var key in module.exports) {
                if (
                  !Object.prototype.hasOwnProperty.call(module.exports, key)
                ) {
                  continue;
                }
                var namedExport = void 0;
                try {
                  namedExport = module.exports[key];
                } catch (err) {
                  continue;
                }
                __REACT_HOT_LOADER__.register(
                  namedExport,
                  key,
                  '/Users/Andysign/projects/gdax-client/pages/index.js'
                );
              }
            }
          })();
          (function(Component, route) {
            if (false) return;
            if (false) return;

            var qs = __webpack_require__(83);
            var params = qs.parse(__resourceQuery.slice(1));
            if (params.entry == null) return;

            module.hot.accept();
            Component.__route = route;

            if (module.hot.status() === 'idle') return;

            var components = next.router.components;
            for (var r in components) {
              if (!components.hasOwnProperty(r)) continue;

              if (components[r].Component.__route === route) {
                next.router.update(r, Component);
              }
            }
          })(module.exports.default || module.exports, '/');

          /* WEBPACK VAR INJECTION */
        }.call(exports, '?entry'));

        /***/
      },

      /***/ /***/ 562: function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(561);

        /***/
      }
    },
    [562]
  ));
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz83Yzg2NTQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7a0JBRWU7U0FBTSIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gPGRpdj5oZXk8L2Rpdj47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=
  return { page: comp.default };
});
