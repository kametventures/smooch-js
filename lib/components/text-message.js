'use strict';

exports.__esModule = true;
exports.TextMessage = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _html = require('../utils/html');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextMessage = exports.TextMessage = function (_Component) {
    (0, _inherits3.default)(TextMessage, _Component);

    function TextMessage() {
        (0, _classCallCheck3.default)(this, TextMessage);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
    }

    TextMessage.prototype.render = function render() {
        var _this2 = this;

        var text = this.props.text.split('\n').map(function (item, index) {
            if (!item.trim()) {
                return _react2.default.createElement('br', { key: index });
            }

            var linkOptions = {
                target: '_blank',
                class: 'link'
            };

            var isAppUser = _this2.props.role === 'appUser';

            if (!isAppUser && _this2.props.linkColor) {
                linkOptions.style = 'color: #' + _this2.props.linkColor;
            }

            var innerHtml = (0, _html.createMarkup)((0, _html.autolink)((0, _html.escapeHtml)(item), linkOptions));

            return _react2.default.createElement(
                'span',
                { key: index },
                _react2.default.createElement('span', { dangerouslySetInnerHTML: innerHtml }),
                _react2.default.createElement('br', null)
            );
        });

        return _react2.default.createElement(
            'span',
            { className: this.props.className },
            text
        );
    };

    return TextMessage;
}(_react.Component);

TextMessage.propTypes = {
    text: _react2.default.PropTypes.string.isRequired,
    className: _react2.default.PropTypes.string,
    role: _react2.default.PropTypes.string.isRequired
};