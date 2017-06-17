
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actionTypes = {
  GET_MESSAGES: 'GET_MESSAGES',
  GET_MATCH: 'GET_MATCH'
};

exports.default = actionTypes;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Andysign/projects/gdax-client/redux/types.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Andysign/projects/gdax-client/redux/types.js"); } } })();

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(566);

var _react2 = _interopRequireDefault(_react);

var _store = __webpack_require__(613);

var _nextReduxWrapper = __webpack_require__(638);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _Layout = __webpack_require__(610);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, null);
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.store)(App);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Andysign/projects/gdax-client/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Andysign/projects/gdax-client/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(566);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(590);

var _actions = __webpack_require__(611);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getMessages();
    }
  }, {
    key: 'renderCurrentPrice',
    value: function renderCurrentPrice() {
      if (this.props.matches) {
        return this.props.matches.map(function (order, id) {
          return _react2.default.createElement('div', { key: id }, order.price);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement('div', { className: 'price' }));
    }
  }]);

  return Layout;
}(_react.Component);

function mapStateToProps(_ref) {
  var gdax = _ref.gdax;
  var matches = gdax.matches;

  return {
    matches: matches
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(Layout);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Andysign/projects/gdax-client/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Andysign/projects/gdax-client/components/Layout.js"); } } })();

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessages = undefined;

var _types = __webpack_require__(581);

var _types2 = _interopRequireDefault(_types);

var _socket = __webpack_require__(666);

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var getMessages = exports.getMessages = function getMessages() {
  return function (dispatch) {
    var socket = (0, _socket2.default)('http://localhost:8000');
    var lastOrderTradeId = 0;
    var messages;
    socket.on('websocket', function (data) {
      messages = data.data;
      if (messages.type === 'match' && messages.trade_id > lastOrderTradeId) {
        console.log(messages);
        lastOrderTradeId = messages.trade_id;
        dispatch({ type: _types2.default.GET_MATCH, payload: messages });
      }
    });
  };
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Andysign/projects/gdax-client/redux/actions.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Andysign/projects/gdax-client/redux/actions.js"); } } })();

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(581);

var _types2 = _interopRequireDefault(_types);

var _redux = __webpack_require__(577);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {
  messages: {},
  matches: []
};

// REDUCERS
var gdax = function gdax() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var matchesQueue = state.matches;
  switch (action.type) {
    case _types2.default.GET_MESSAGES:
      return Object.assign({}, state, { messages: action.payload });
    case _types2.default.GET_MATCH:
      matchesQueue.unshift(action.payload);
      return Object.assign({}, state, { matches: matchesQueue });
    default:
      return state;
  }
};

var rootReducer = (0, _redux.combineReducers)({
  gdax: gdax
});

exports.default = rootReducer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Andysign/projects/gdax-client/redux/reducers.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Andysign/projects/gdax-client/redux/reducers.js"); } } })();

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _redux = __webpack_require__(577);

var _reduxThunk = __webpack_require__(662);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(612);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var createStoreWithMiddleware = (0, _redux.applyMiddleware)()(_redux.createStore);

var store = exports.store = function store(initialState) {
  return createStoreWithMiddleware(_reducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Andysign/projects/gdax-client/redux/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Andysign/projects/gdax-client/redux/store.js"); } } })();

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(606);


/***/ })

},[674]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC90eXBlcy5qcz9iOTg5YTE5Iiwid2VicGFjazovLy8uL3BhZ2VzPzY4YjZhYWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NjhiNmFhZSIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zLmpzPzY4YjZhYWUiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMuanM/NjhiNmFhZSIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS5qcz82OGI2YWFlIiwid2VicGFjazovLy93cyAoaWdub3JlZCk/NjhiNmFhZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFNO2dCQUVKO2FBQVc7QUFEWDs7a0JBSWEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZjs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU07Ozs7Ozs7Ozs7OzZCQUVGO2FBQU8sZ0RBQ1I7Ozs7Ozs7a0JBR1ksOENBQWlCLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWGhDOzs7O0FBQ0E7O0FBQ0E7O0lBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVOOzs7Ozs7Ozs7Ozt3Q0FFRjtXQUFLLE1BQ047Ozs7eUNBRUM7VUFBRyxLQUFLLE1BQU0sU0FDWjtvQkFBWSxNQUFNLFFBQVEsSUFBSSxVQUFDLE9BQU8sSUFDcEM7aUJBQU8sdUNBQUssS0FBVSxZQUN2QjtBQUNGLFNBSFE7QUFJVjs7Ozs2QkFFQzthQUFRLHFDQUNOLDZDQUFLLFdBR1I7Ozs7Ozs7QUFHSCxTQUFTLHNCQUF3QjtNQUFBO01BQ3hCLFVBQVcsS0FDbEI7OzthQUdEO0FBRkc7OztrQkFJVyx5QkFBUSxpQkFBaUIsU0FBUyxROzs7Ozs7Ozs7Ozs7Ozs7OztBQzlCakQ7Ozs7QUFDQTs7Ozs7Ozs7QUFFTyxJQUFNLG9DQUFjO1NBQU0sb0JBQy9CO1FBQUksU0FBUyxzQkFDYjtRQUFJLG1CQUNKO1FBQ0E7V0FBTyxHQUFHLGFBQWEsVUFBVSxNQUMvQjtpQkFBVyxLQUNYO1VBQUksU0FBUyxTQUFTLFdBQVcsU0FBUyxXQUFXLGtCQUNyRDtnQkFBUSxJQUNOOzJCQUFtQixTQUNuQjtpQkFBUyxFQUFDLE1BQU0sZ0JBQVksV0FBVyxTQUN4QztBQUNGO0FBQ0Y7QUFaMEI7QUFBcEIsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQOzs7O0FBQ0E7Ozs7OztBQUNBLElBQU07WUFFSjtXQUFTO0FBRFQ7O0FBSUY7QUFDQSxJQUFNLE9BQU8sZ0JBQWtDO01BQUE7TUFBQSxtQkFDN0M7O01BQUksZUFBZSxNQUNuQjtVQUFRLE9BQ047U0FBSyxnQkFDSDthQUFPLE9BQU8sT0FBTyxJQUFJLE9BQU8sRUFBRSxVQUFVLE9BQzlDO1NBQUssZ0JBQ0g7bUJBQWEsUUFBUSxPQUNyQjthQUFPLE9BQU8sT0FBTyxJQUFJLE9BQU8sRUFBRSxTQUNwQztBQUNFO2FBRUw7O0FBWEQ7O0FBY0EsSUFBTTtRQUE4QjtBQUNsQyxDQURrQjs7a0JBS0wsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmY7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLDRCQUE0QixxQ0FBbEM7O0FBRU8sSUFBTSx3QkFBUSxlQUFDLGNBQUQ7U0FBa0IsOENBQXVDLGNBQWMseUNBQXJEO0FBQWhDLEU7Ozs7Ozs7OztBQ05QLGUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFjdGlvblR5cGVzID0ge1xuICBHRVRfTUVTU0FHRVM6ICdHRVRfTUVTU0FHRVMnLFxuICBHRVRfTUFUQ0g6ICdHRVRfTUFUQ0gnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb25UeXBlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC90eXBlcy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL3JlZHV4L3N0b3JlLmpzJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxMYXlvdXQgLz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KHN0b3JlKShBcHApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmdldE1lc3NhZ2VzKCk7XG4gIH1cbiAgcmVuZGVyQ3VycmVudFByaWNlKCl7XG4gICAgaWYodGhpcy5wcm9wcy5tYXRjaGVzKXtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm1hdGNoZXMubWFwKChvcmRlciwgaWQpPT57XG4gICAgICAgIHJldHVybiA8ZGl2IGtleT17aWR9PntvcmRlci5wcmljZX08L2Rpdj5cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7Z2RheH0pIHtcbiAgY29uc3Qge21hdGNoZXN9ID0gZ2RheDtcbiAgcmV0dXJuIHtcbiAgICBtYXRjaGVzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBhY3Rpb25zKShMYXlvdXQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJpbXBvcnQgYWN0aW9uVHlwZXMgZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5cbmV4cG9ydCBjb25zdCBnZXRNZXNzYWdlcyA9ICgpID0+IGRpc3BhdGNoID0+IHtcbiAgdmFyIHNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjgwMDAnKTtcbiAgdmFyIGxhc3RPcmRlclRyYWRlSWQgPSAwO1xuICB2YXIgbWVzc2FnZXM7XG4gIHNvY2tldC5vbignd2Vic29ja2V0JywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBtZXNzYWdlcyA9IGRhdGEuZGF0YTtcbiAgICBpZiAobWVzc2FnZXMudHlwZSA9PT0gJ21hdGNoJyAmJiBtZXNzYWdlcy50cmFkZV9pZCA+IGxhc3RPcmRlclRyYWRlSWQpIHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlcylcbiAgICAgIGxhc3RPcmRlclRyYWRlSWQgPSBtZXNzYWdlcy50cmFkZV9pZDtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiBhY3Rpb25UeXBlcy5HRVRfTUFUQ0gsIHBheWxvYWQ6IG1lc3NhZ2VzfSk7XG4gICAgfVxuICB9KVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9hY3Rpb25zLmpzIiwiaW1wb3J0IGFjdGlvblR5cGVzIGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtZXNzYWdlczoge30sXG4gIG1hdGNoZXM6IFtdXG59O1xuXG4vLyBSRURVQ0VSU1xuY29uc3QgZ2RheCA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHZhciBtYXRjaGVzUXVldWUgPSBzdGF0ZS5tYXRjaGVzO1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5HRVRfTUVTU0FHRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgbWVzc2FnZXM6IGFjdGlvbi5wYXlsb2FkIH0pO1xuICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX01BVENIOlxuICAgICAgbWF0Y2hlc1F1ZXVlLnVuc2hpZnQoYWN0aW9uLnBheWxvYWQpO1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IG1hdGNoZXM6IG1hdGNoZXNRdWV1ZSB9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgZ2RheFxufSlcblxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1eC9yZWR1Y2Vycy5qcyIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUoKShjcmVhdGVTdG9yZSk7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IChpbml0aWFsU3RhdGUpID0+IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdXgvc3RvcmUuanMiLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyB3cyAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDY3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        