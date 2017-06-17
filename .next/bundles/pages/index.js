window.__NEXT_REGISTER_PAGE('/', function() {
  var comp = (module.exports = webpackJsonp(
    [5],
    {
      /***/ /***/ 571: function(module, exports, __webpack_require__) {
        'use strict';
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        exports.initStore = exports.changeName = exports.reducer = exports.actionTypes = undefined;

        var _redux = __webpack_require__(570);

        var _reduxThunk = __webpack_require__(622);

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
                '/Users/Andysign/projects/gdax-client/store.js'
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
                '/Users/Andysign/projects/gdax-client/store.js'
              );
            }
          }
        })();

        /***/
      },

      /***/ /***/ 586: function(module, exports, __webpack_require__) {
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

          var _react = __webpack_require__(563);

          var _react2 = _interopRequireDefault(_react);

          var _store = __webpack_require__(571);

          var _nextReduxWrapper = __webpack_require__(599);

          var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

          var _Page = __webpack_require__(588);

          var _Page2 = _interopRequireDefault(_Page);

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
                  return _react2.default.createElement(_Page2.default, null);
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

      /***/ /***/ 588: function(module, exports, __webpack_require__) {
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

        var _react = __webpack_require__(563);

        var _react2 = _interopRequireDefault(_react);

        var _reactRedux = __webpack_require__(575);

        var _store = __webpack_require__(571);

        var _redux = __webpack_require__(570);

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

        var Page = (function(_Component) {
          _inherits(Page, _Component);

          function Page() {
            _classCallCheck(this, Page);

            return _possibleConstructorReturn(
              this,
              (Page.__proto__ || Object.getPrototypeOf(Page))
                .apply(this, arguments)
            );
          }

          _createClass(Page, [
            {
              key: 'componentDidMount',
              value: function componentDidMount() {
                console.log();
              }
              // cclick(){
              //   console.log('eee')
              //   //
              // }
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

          return Page;
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
        )(Page);

        (function register() {
          /* react-hot-loader/webpack */ if (true) {
            if (typeof __REACT_HOT_LOADER__ === 'undefined') {
              return;
            }
            if (typeof module.exports === 'function') {
              __REACT_HOT_LOADER__.register(
                module.exports,
                'module.exports',
                '/Users/Andysign/projects/gdax-client/components/Page.js'
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
                '/Users/Andysign/projects/gdax-client/components/Page.js'
              );
            }
          }
        })();

        /***/
      },

      /***/ /***/ 629: function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(586);

        /***/
      }
    },
    [629]
  ));
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcz9mMjYxODE3Iiwid2VicGFjazovLy8uL3BhZ2VzP2YyNjE4MTciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlLmpzP2YyNjE4MTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNO1VBQ0k7QUFBUjs7QUFHSyxJQUFNO2VBQ0U7QUFBYjs7QUFHRjtBQUNPLElBQU0sNEJBQVUsbUJBQWtDO01BQUE7TUFBQSxtQkFDdkQ7O1VBQVEsT0FDTjtTQUFLLFlBQ0g7YUFBTyxPQUFPLE9BQU8sSUFBSSxPQUFPLEVBQUUsUUFBUSxPQUM1QztBQUNFO2FBRUw7O0FBUE07O0FBU1A7QUFDTyxJQUFNLGtDQUFhO1NBQVEsb0JBQ2hDO1dBQU8sU0FBUyxFQUFFLE1BQU0sWUFBWSxhQUFhLFFBQ2xEO0FBRnlCO0FBQW5COztBQUlBLElBQU0sZ0NBQVkscUJBQWlDO01BQUEsbUZBQ3hEOztTQUFPLHdCQUFZLFNBQVMsY0FBYyx5Q0FDM0M7QUFGTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCUDs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU07Ozs7Ozs7Ozs7OzZCQUVGO2FBQU8sOENBQ1I7Ozs7Ozs7a0JBR1ksa0RBQXFCLE1BQU0sTUFBTSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hoRDs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTTs7Ozs7Ozs7Ozs7d0NBRUY7Y0FDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs2QkFDUzttQkFDUDs7NkJBQ0UsdUJBQUssU0FBUztpQkFBTSxPQUFLLE1BQU0sV0FBVztBQUN2QyxXQURILE9BQ1EsTUFHWDs7Ozs7OztBQUdILFNBQVMsc0JBQTRCO01BQUEsY0FDbkM7OztZQUdEO0FBRkc7OztBQUlKLFNBQVMsbUJBQW1CLFVBQzFCOztnQkFDYyxrREFFZjtBQUZHOzs7a0JBSVcseUJBQVEsaUJBQWlCLG9CQUFvQixNIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYXV0aGVyOiAnYW5keSdcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgQ0hBTkdFX05BTUU6ICdDSEFOR0VfTkFNRSdcbn07XG5cbi8vIFJFRFVDRVJTXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGFjdGlvblR5cGVzLkNIQU5HRV9OQU1FOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGF1dGhlcjogYWN0aW9uLmF1dGhlciB9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG4vLyBBQ1RJT05TXG5leHBvcnQgY29uc3QgY2hhbmdlTmFtZSA9IG5hbWUgPT4gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiBhY3Rpb25UeXBlcy5DSEFOR0VfTkFNRSwgYXV0aGVyOiBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9IChpbml0aWFsU3RhdGUgPSBpbml0aWFsU3RhdGUpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4uL3N0b3JlLmpzJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFBhZ2UgLz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSwgbnVsbCwgbnVsbCkoQXBwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjaGFuZ2VOYW1lIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coKTtcbiAgfVxuICAvLyBjY2xpY2soKXtcbiAgLy8gICBjb25zb2xlLmxvZygnZWVlJylcbiAgLy8gICAvL1xuICAvLyB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmNoYW5nZU5hbWUoJ25ldyBBbmR5Jyl9PlxuICAgICAgICB7dGhpcy5wcm9wcy5hdXRoZXJ9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGF1dGhlciB9KSB7XG4gIHJldHVybiB7XG4gICAgYXV0aGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGNoYW5nZU5hbWU6IGJpbmRBY3Rpb25DcmVhdG9ycyhjaGFuZ2VOYW1lLCBkaXNwYXRjaClcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUGFnZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1BhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9
  return { page: comp.default };
});
