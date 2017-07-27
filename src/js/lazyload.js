import * as $ from './utilities';

export default {


    lazyLoadNavi(index) {
        const self = this;
        const thumbUrl = self.options.thumbUrl;

        if (!thumbUrl) {
            return;
        }
        const middleCount = self.getMiddleShowingCountInNav();



        var start = index - middleCount - 2;
        var end = index + middleCount + 2;
        if (start < 0) {
            start = 0;
        }
        if (end > self.items.length) {
            end = self.items.length;
        }

        for (let i = start; i < end; i++) {
            var item = self.items[i];

            var img = $.getByTag(item, "img")[0];
            img.src = self.images[i].attributes[thumbUrl].value;

        }
    },

    getMiddleShowingCountInNav() {
        const self = this;
        const navbar = self.navbar;
        var navWidth = navbar.clientWidth;
        var navImgWidth = navbar.getElementsByTagName('li')[0].clientWidth;
        return Math.floor(navWidth / navImgWidth / 2);
    }
}