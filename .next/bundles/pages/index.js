window.__NEXT_REGISTER_PAGE('/', function() {
  var comp = (module.exports = webpackJsonp(
    [5],
    {
      /***/ /***/ 544: function(module, exports, __webpack_require__) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.initStore = exports.changeName = exports.reducer = exports.actionTypes = undefined;

        var _redux = __webpack_require__(542);

        var _reduxThunk = __webpack_require__(575);

        var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var initialState = {
          auther: 'andy'
        };

        var actionTypes = (exports.actionTypes = {
          CHANGE_NAME: 'CHANGE_NAME'
        });

        // REDUCERS
        var reducer = (exports.reducer = function reducer() {
          var state = arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : initialState;
          var action = arguments[1];

          switch (action.type) {
            case actionTypes.CHANGE_NAME:
              return Object.assign({}, state, { auther: action.auther });
            default:
              return state;
          }
        });

        // ACTIONS
        var changeName = (exports.changeName = function changeName(name) {
          return function(dispatch) {
            return dispatch({ type: actionTypes.CHANGE_NAME, auther: name });
          };
        });

        var initStore = (exports.initStore = function initStore() {
          var initialState = arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : initialState;

          return (0, _redux.createStore)(
            reducer,
            initialState,
            (0, _redux.applyMiddleware)(_reduxThunk2.default)
          );
        });

        (function register() {
          /* react-hot-loader/webpack */ if (true) {
            if (typeof __REACT_HOT_LOADER__ === 'undefined') {
              return;
            }
            if (typeof module.exports === 'function') {
              __REACT_HOT_LOADER__.register(
                module.exports,
                'module.exports',
                '/Users/Andysign/projects/gdax-client/redux/store.js'
              );
              return;
            }
            for (var key in module.exports) {
              if (!Object.prototype.hasOwnProperty.call(module.exports, key)) {
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
                '/Users/Andysign/projects/gdax-client/redux/store.js'
              );
            }
          }
        })();

        /***/
      },

      /***/ /***/ 553: function(module, exports, __webpack_require__) {
        'use strict';
        /* WEBPACK VAR INJECTION */ (function(__resourceQuery) {
          Object.defineProperty(exports, '__esModule', {
            value: true
          });

          var _createClass = (function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          })();

          var _react = __webpack_require__(12);

          var _react2 = _interopRequireDefault(_react);

          var _store = __webpack_require__(544);

          var _nextReduxWrapper = __webpack_require__(564);

          var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

          var _Layout = __webpack_require__(565);

          var _Layout2 = _interopRequireDefault(_Layout);

          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (!self) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return call &&
              (typeof call === 'object' || typeof call === 'function')
              ? call
              : self;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof superClass
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  enumerable: false,
                  writable: true,
                  configurable: true
                }
              }
            );
            if (superClass)
              Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass);
          }

          var App = (function(_Component) {
            _inherits(App, _Component);

            function App() {
              _classCallCheck(this, App);

              return _possibleConstructorReturn(
                this,
                (App.__proto__ || Object.getPrototypeOf(App))
                  .apply(this, arguments)
              );
            }

            _createClass(App, [
              {
                key: 'render',
                value: function render() {
                  return _react2.default.createElement(_Layout2.default, null);
                }
              }
            ]);

            return App;
          })(_react.Component);

          exports.default = (0, _nextReduxWrapper2.default)(
            _store.initStore,
            null,
            null
          )(App);

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

            var qs = __webpack_require__(85);
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

      /***/ /***/ 565: function(module, exports, __webpack_require__) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(12);

        var _react2 = _interopRequireDefault(_react);

        var _reactRedux = __webpack_require__(547);

        var _store = __webpack_require__(544);

        var _redux = __webpack_require__(542);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === 'object' || typeof call === 'function')
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var Layout = (function(_Component) {
          _inherits(Layout, _Component);

          function Layout() {
            _classCallCheck(this, Layout);

            return _possibleConstructorReturn(
              this,
              (Layout.__proto__ || Object.getPrototypeOf(Layout))
                .apply(this, arguments)
            );
          }

          _createClass(Layout, [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                console.log();
              }
            },
            {
              key: 'render',
              value: function render() {
                var _this2 = this;

                return _react2.default.createElement(
                  'div',
                  {
                    onClick: function onClick() {
                      return _this2.props.changeName('new Andy');
                    }
                  },
                  this.props.auther
                );
              }
            }
          ]);

          return Layout;
        })(_react.Component);

        function mapStateToProps(_ref) {
          var auther = _ref.auther;

          return {
            auther: auther
          };
        }

        function mapDispatchToProps(dispatch) {
          return {
            changeName: (0, _redux.bindActionCreators)(
              _store.changeName,
              dispatch
            )
          };
        }

        exports.default = (0, _reactRedux.connect)(
          mapStateToProps,
          mapDispatchToProps
        )(Layout);

        (function register() {
          /* react-hot-loader/webpack */ if (true) {
            if (typeof __REACT_HOT_LOADER__ === 'undefined') {
              return;
            }
            if (typeof module.exports === 'function') {
              __REACT_HOT_LOADER__.register(
                module.exports,
                'module.exports',
                '/Users/Andysign/projects/gdax-client/components/Layout.js'
              );
              return;
            }
            for (var key in module.exports) {
              if (!Object.prototype.hasOwnProperty.call(module.exports, key)) {
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
                '/Users/Andysign/projects/gdax-client/components/Layout.js'
              );
            }
          }
        })();

        /***/
      },

      /***/ /***/ 582: function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(553);

        /***/
      }
    },
    [582]
  ));
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlZHV4L3N0b3JlLmpzPzBiY2MyZDAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/MGJjYzJkMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz8wYmNjMmQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBhdXRoZXI6ICdhbmR5J1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xuICBDSEFOR0VfTkFNRTogJ0NIQU5HRV9OQU1FJ1xufTtcblxuLy8gUkVEVUNFUlNcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYWN0aW9uVHlwZXMuQ0hBTkdFX05BTUU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgYXV0aGVyOiBhY3Rpb24uYXV0aGVyIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbi8vIEFDVElPTlNcbmV4cG9ydCBjb25zdCBjaGFuZ2VOYW1lID0gbmFtZSA9PiBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6IGFjdGlvblR5cGVzLkNIQU5HRV9OQU1FLCBhdXRoZXI6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IGluaXRpYWxTdGF0ZSkgPT4ge1xuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvc3RvcmUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAnLi4vcmVkdXgvc3RvcmUuanMnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPExheW91dCAvPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlLCBudWxsLCBudWxsKShBcHApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNoYW5nZU5hbWUgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY2hhbmdlTmFtZSgnbmV3IEFuZHknKX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmF1dGhlcn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHsgYXV0aGVyIH0pIHtcbiAgcmV0dXJuIHtcbiAgICBhdXRoZXJcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgY2hhbmdlTmFtZTogYmluZEFjdGlvbkNyZWF0b3JzKGNoYW5nZU5hbWUsIGRpc3BhdGNoKVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShMYXlvdXQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQVBBO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQUE7Ozs7Ozs7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFNQTtBQUFBO0FBQ0E7O0FBR0E7QUFGQTs7O0FBSUE7O0FBRUE7QUFBQTs7O0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
  return { page: comp.default };
});
