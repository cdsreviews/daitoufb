(function(a) {
    a.fn.LineProgressbar = function(b) {
        b = a.extend({
            percentage: 100,
            ShowProgressCount: true,
            duration: 1200,
            unit: "%",
            animation: true,
            fillBackgroundColor: "#3498db",
            backgroundColor: "#EEEEEE",
            radius: "0px",
            height: "10px",
            width: "100%",
        }, b);
        a.options = b;
        return this.each(function(d, c) {
            a(c).html('<div class="progressbar"><div class="proggress"></div><div class="percentCount"></div></div>');
            var f = a(c).find(".proggress");
            var e = a(c).find(".progressbar");
            f.css({
                backgroundColor: b.fillBackgroundColor,
                height: b.height,
                borderRadius: b.radius,
            });
            e.css({
                width: b.width,
                backgroundColor: b.backgroundColor,
                borderRadius: b.radius,
            });
            if (b.animation) {
                f.animate({
                    width: b.percentage + "%",
                }, {
                    step: function(g) {
                        if (b.ShowProgressCount) {
                            a(c).find(".percentCount").text(Math.round(g) + b.unit)
                        }
                    },
                    duration: b.duration,
                })
            } else {
                f.css("width", b.percentage + "%");
                a(c).find(".percentCount").text(Math.round(b.percentage) + "%")
            }
        })
    }
})(jQuery);
$("[line-progressbar]").each(function() {
    var a = $(this);

    function b() {
        a.LineProgressbar({
            percentage: a.data("percentage"),
            unit: a.data("unit"),
            animation: a.data("animation"),
            ShowProgressCount: a.data("showcount"),
            duration: a.data("duration"),
            fillBackgroundColor: a.data("progress-color"),
            backgroundColor: a.data("bg-color"),
            radius: a.data("radius"),
            height: a.data("height"),
            width: a.data("width"),
        })
    }
    var c = 0;
    a.waypoint(function() {
        c += 1;
        if (c < 2) {
            b()
        }
    }, {
        offset: "100%",
        triggerOnce: true
    })
});