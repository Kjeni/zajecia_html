(function($) {
    $.fn.carousel = function(config) {
        const options = $.extend({
            animationTime : 700,
            pauseTime     : 3000,
            onScroll      : function() {},
            auto          : false
        }, config);

        return this.each(function() {
            const $this = $(this);

            const $ul = $this.find(".carousel-list");
            const $li = $ul.find(".carousel-list-el");
            const $prevBtn = $this.find(".carousel-prev");
            const $nextBtn = $this.find(".carousel-next");
            let time = null;

            $ul.append($li.clone(true)).append($li.clone(true));

            const autoNext = function() {
                if (options.auto) {
                    clearTimeout(time);
                    time = setTimeout(function() {
                        scrollNext()
                    }, options.pauseTime);
                }
            };

            const scrollPrev = () => {
                if (!$ul.is(":animated")) {
                    const $li = $ul.find(".carousel-list-el");
                    $ul.css("margin-left", -$li.last().outerWidth(true));
                    $li.first().before($li.last());
                    $ul.animate({
                        "margin-left": 0
                    }, options.animationTime, () => {
                        options.onScroll();
                    });

                    autoNext();
                }
            };

            const scrollNext = () => {
                if (!$ul.is(":animated")) {
                    const $li = $ul.find(".carousel-list-el");

                    $ul.animate({
                        "margin-left": -$li.outerWidth(true)
                    }, options.animationTime, () => {
                        $li.last().after($li.first());
                        $ul.css({"margin-left": 0});
                        options.onScroll();

                        autoNext();
                    });
                }
            };

            $prevBtn.bind("click", e => {
                e.preventDefault();
                scrollPrev();
            });

            $nextBtn.bind("click", e => {
                e.preventDefault();
                scrollNext();
            });

            autoNext();
        });
    }
})(jQuery);
