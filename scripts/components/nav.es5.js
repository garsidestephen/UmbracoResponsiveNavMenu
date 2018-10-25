'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Nav = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nav = function () {
    function Nav() {
        _classCallCheck(this, Nav);
    }

    _createClass(Nav, null, [{
        key: 'init',
        value: function init() {
            this.$navMenu = (0, _jquery2.default)('.js-nav-menu');
            this.$navBurger = (0, _jquery2.default)('.js-nav-burger');
            this.$navSubs = (0, _jquery2.default)('.js-nav-sub');

            this.initEvents();
        }
    }, {
        key: 'initEvents',
        value: function initEvents() {
            var _this = this;

            this.$navBurger.on('click', function () {
                if (_this.$navMenu.hasClass('js-nav-active')) {
                    _this.$navMenu.removeClass('js-nav-active nav__menu__list--active');
                    _this.$navBurger.removeClass('icon--burger-active');
                } else {
                    _this.$navMenu.addClass('js-nav-active nav__menu__list--active');
                    _this.$navBurger.addClass('icon--burger-active');
                }
            });

            this.$navSubs.on('click', function (e) {
                var $subMenu = (0, _jquery2.default)(e.currentTarget).closest('li').find('ul');

                if ($subMenu.length) {

                    if ($subMenu.hasClass('js-nav-sub-active')) {
                        $subMenu.removeClass('js-nav-sub-active nav__menu__list__item__sub-list--active');
                    } else {
                        // Close any other active menus
                        (0, _jquery2.default)('.js-nav-sub-active').removeClass('js-nav-sub-active nav__menu__list__item__sub-list--active');

                        // Open ours
                        $subMenu.addClass('js-nav-sub-active nav__menu__list__item__sub-list--active');
                    }

                    return false;
                }
            });
        }
    }]);

    return Nav;
}();

exports.Nav = Nav;