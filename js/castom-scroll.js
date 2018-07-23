/* jQuery Custom Scroll plugin v0.6.6 | (c) 2015 Mostovoy Andrey | https://github.com/standy/custom-scroll/blob/master/LICENSE */
!function (t) {
    function i(i, n) {
        function s() {
            v.on("DOMMouseScroll mousewheel", function (i) {
                var o = t(this), r = this.scrollTop, e = this.scrollHeight, n = o.height(), s = "DOMMouseScroll" == i.type ? -40 * i.originalEvent.detail : i.originalEvent.wheelDelta, l = s > 0;
                (l ? 0 === r : r === e - n) && i.preventDefault()
            })
        }

        function l(o, r) {
            i["scroll" + r.Dir](0);
            var e = n.prefix + "bar" + r.suffix, s = i.children("." + e);
            s.length || (s = t(n.barHtml).addClass(e).appendTo(i)), s.on("mousedown touchstart", function (t) {
                t.preventDefault();
                var i = v["scroll" + r.Dir](), e = t[r.clientAxis] || t.originalEvent.changedTouches && t.originalEvent.changedTouches[0][r.clientAxis], n = a(o, r).ratio;
                y.on("mousemove.custom-scroll touchmove.custom-scroll", function (t) {
                    t.preventDefault();
                    var o = t[r.clientAxis] || t.originalEvent.changedTouches && t.originalEvent.changedTouches[0][r.clientAxis];
                    v["scroll" + r.Dir](i + (o - e) / n)
                }), y.on("mouseup.custom-scroll touchend.custom-scroll", function () {
                    y.off(".custom-scroll")
                })
            }), H[o] = s
        }

        function a(t, o) {
            var r = 0 | v.prop("scroll" + o.Dim), e = i["inner" + o.Dim](), s = v["inner" + o.Dim](), l = e - n["offset" + o.Dir] - n["offset" + o.Dir2];
            m["x" == t ? "y" : "x"] || (l -= n["track" + o.Dim]);
            var a = Math.max(l * e / r | 0, n["barMin" + o.Dim]), c = (l - a) / (r - s);
            return {ratio: c, dim: e, scroll: l, total: r, bar: a}
        }

        function c() {
            t.each(u, d)
        }

        function d(t, o) {
            var r = a(t, o);
            if (r.total) {
                var e = v["scroll" + o.Dir]();
                if (p[t].scrollPos !== e || p[t].scroll !== r.scroll || p[t].total !== r.total) {
                    p[t] = r, p[t].scrollPos = e;
                    var s = r.bar >= r.scroll;
                    s !== m[t] && (i.toggleClass(n.prefix + "hidden" + o.suffix, s), m[t] = s);
                    var l = e * r.ratio;
                    0 > l && (l = 0), l > r.scroll - r.bar && (l = r.scroll - r.bar), H[t][o.dim](r.bar).css(o.dir, n["offset" + o.Dir] + l)
                }
            }
        }

        function h() {
            t.each(u, function (t) {
                H[t].remove()
            }), i.removeClass(n.prefix + "container").removeData("custom-scroll").css({
                padding: "",
                maxHeight: ""
            }), v.contents().appendTo(i), v.remove()
        }

        var f = i.data("custom-scroll");
        n = f ? f.options : t.extend({}, o, n);
        var u = {}, p = {}, m = {x: +n.vertical, y: +n.horizontal};
        if (n.horizontal && (u.x = e, p.x = {}), n.vertical && (u.y = r, p.y = {}), i.hasClass(n.prefix + "container") && f)return f.updateBars(), f;
        var v = i.children("." + n.prefix + "inner");
        v.length || (v = i.wrapInner('<div class="' + n.prefix + 'inner"></div>').children()), i.addClass(n.prefix + "container");
        var g = t('<div class="' + n.prefix + 'inner" />').width(100).height(100).appendTo("body").css({overflow: "scroll"})[0], x = g.offsetWidth - g.clientWidth, D = g.offsetHeight - g.clientHeight;
        g.parentElement.removeChild(g), n.vertical ? (v.css({
            paddingLeft: i.css("paddingLeft"),
            paddingRight: i.css("paddingRight"),
            marginRight: -x + "px"
        }), i.css({
            paddingLeft: 0,
            paddingRight: 0
        })) : v.css({overflowY: "hidden"}), n.horizontal ? (v.css({
            marginBottom: -D + "px",
            paddingBottom: D + "px"
        }), i.css({paddingTop: 0, paddingBottom: 0})) : v.css({overflowX: "hidden"});
        var b = i.css("maxHeight");
        parseInt(b) && (i.css("maxHeight", "none"), v.css("maxHeight", b)), i.scrollTop(0);
        var y = t("body"), H = {};
        t.each(u, l), v.on("scroll", c), c(), n.preventParentScroll && s();
        var T = {$container: i, $bar: H.y, $barX: H.x, $inner: v, destroy: h, updateBars: c, options: n};
        return i.data("custom-scroll", T), T
    }

    t.fn.customScroll = function (r) {
        return this.length ? "destroy" === r ? (this.each(function () {
            var i = t(this).data("custom-scroll");
            i && i.destroy()
        }), this) : 1 === this.length ? i(this, r) : void this.each(function () {
            i(t(this), r)
        }) : t.extend(o, r)
    };
    var o = {
        prefix: "custom-scroll_",
        barMinHeight: 10,
        barMinWidth: 10,
        offsetTop: 0,
        offsetBottom: 0,
        offsetLeft: 0,
        offsetRight: 0,
        trackWidth: 10,
        trackHeight: 10,
        barHtml: "<div />",
        vertical: !0,
        horizontal: !0,
        preventParentScroll: !0
    }, r = {
        dim: "height",
        Dim: "Height",
        dir: "top",
        Dir: "Top",
        dir2: "bottom",
        Dir2: "Bottom",
        clientAxis: "clientY",
        suffix: "-y"
    }, e = {
        dim: "width",
        Dim: "Width",
        dir: "left",
        Dir: "Left",
        dir2: "right",
        Dir2: "Right",
        clientAxis: "clientX",
        suffix: "-x"
    }
}(jQuery);