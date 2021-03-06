'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _lib = require('../../lib');

var _MenuItem = require('../../collections/Menu/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An item of a pagination.
 */
var PaginationItem = function (_Component) {
  (0, _inherits3.default)(PaginationItem, _Component);

  function PaginationItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PaginationItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PaginationItem.__proto__ || Object.getPrototypeOf(PaginationItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var type = _this.props.type;


      if (type !== 'ellipsisItem') (0, _invoke3.default)(_this.props, 'onClick', e, _this.props);
    }, _this.handleKeyDown = function (e) {
      (0, _invoke3.default)(_this.props, 'onKeyDown', e, _this.props);
      if (_lib.keyboardKey.getCode(e) === _lib.keyboardKey.Enter) (0, _invoke3.default)(_this.props, 'onClick', e, _this.props);
    }, _this.handleOverrides = function () {
      return {
        onClick: _this.handleClick,
        onKeyDown: _this.handleKeyDown
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PaginationItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          type = _props.type;

      var disabled = this.props.disabled || type === 'ellipsisItem';

      return _MenuItem2.default.create(this.props, {
        defaultProps: {
          active: active,
          disabled: disabled,
          'aria-current': active,
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown,
          tabIndex: disabled ? -1 : 0
        },
        overrideProps: this.handleOverrides
      });
    }
  }]);
  return PaginationItem;
}(_react.Component);

PaginationItem._meta = {
  name: 'PaginationItem',
  parent: 'Pagination',
  type: _lib.META.TYPES.ADDON
};
PaginationItem.handledProps = ['active', 'disabled', 'onClick', 'onKeyDown', 'type'];
PaginationItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /** A pagination item can be active. */
  active: _propTypes2.default.bool,

  /** A pagination item can be disabled. */
  disabled: _propTypes2.default.bool,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _propTypes2.default.func,

  /**
   * Called on key down.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyDown: _propTypes2.default.func,

  /** A pagination should have a type. */
  type: _propTypes2.default.oneOf(['ellipsisItem', 'firstItem', 'prevItem', 'pageItem', 'nextItem', 'lastItem'])
} : {};


PaginationItem.create = (0, _lib.createShorthandFactory)(PaginationItem, function (content) {
  return { content: content };
});

exports.default = PaginationItem;