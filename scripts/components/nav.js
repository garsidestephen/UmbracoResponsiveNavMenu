import $ from "jquery";

class Nav {
    static init() {
        this.$navMenu = $('.js-nav-menu');
        this.$navBurger = $('.js-nav-burger');
        this.$navSubs = $('.js-nav-sub');

        this.initEvents();
    }

    static initEvents() {
        this.$navBurger.on('click', () => {
            if (this.$navMenu.hasClass('js-nav-active')) {
                this.$navMenu.removeClass('js-nav-active nav__menu__list--active');
                this.$navBurger.removeClass('icon--burger-active');
            }
            else {
                this.$navMenu.addClass('js-nav-active nav__menu__list--active');
                this.$navBurger.addClass('icon--burger-active');
            }
        });

        this.$navSubs.on('click', e => {
            const $subMenu = $(e.currentTarget).closest('li').find('ul');

            if ($subMenu.length) {              

                if ($subMenu.hasClass('js-nav-sub-active')) {
                    $subMenu.removeClass('js-nav-sub-active nav__menu__list__item__sub-list--active');
                }
                else {
                    // Close any other active menus
                    $('.js-nav-sub-active').removeClass('js-nav-sub-active nav__menu__list__item__sub-list--active');

                    // Open ours
                    $subMenu.addClass('js-nav-sub-active nav__menu__list__item__sub-list--active');
                }

                return false;
            }
        });
    }
}

export { Nav };