export default {


    lazyLoadNavi(index) {
        const self = this;
        const thumbUrl = self.options.thumbUrl;

         if(!thumbUrl){
            return;
        }
        const middleCount = self.getMiddleShowingCountInNav();

       

        var start = index - middleCount - 2;
        var end = index + middleCount + 2;
        if (start < 0) {
            start = 0;
        }

        for (let i = start; i < end; i++) {
            var $item = $(self.items).eq(i);

            if (!$item.length) {
                break;
            }
            var $img = $item.find("img");

            $img.attr("src", self.images[i].attributes[thumbUrl].value);

        }
    },

    getMiddleShowingCountInNav() {
        const self = this;
        var $navbar = $(self.navbar);
        var navWidth =$navbar.width();
        var navImgWidth = $navbar.find("li:first").width();
        return Math.floor(navWidth / navImgWidth / 2);
    }
}