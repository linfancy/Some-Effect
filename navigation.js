(function () {
        var b = window,
            f = "chrome",
            g = "jstiming",
            k = "tick";
        (function () {
                function d(a) {
                    this.t = {};
                    this.tick = function (a, d, c) {
                        var e = void 0 != c ? c : (new Date).getTime();
                        this.t[a] = [e, d];
                        if (void 0 == c) try {
                            b.console.timeStamp("CSI/" + a)
                        } catch (h) {}
                    };
                    this[k]("start", null, a)
                }
                var a;
                b.performance && (a = b.performance.timing);
                var n = a ? new d(a.responseStart) : new d;
                b.jstiming = {
                    Timer: d,
                    load: n
                };
                if (a) {
                    var c = a.navigationStart,
                        h = a.responseStart;
                    0 = c && (b[g].srt = h - c)
                }
                if (a) {
                    var e = b[g].load;
                    0 = c && (e[k]("_wtsrt", void 0, c), e[k]("wtsrt_", "_wtsrt", h), e[k]("tbsd_", "wtsrt_"))
                }
                try {
                    a = null, b[f] && b[f].csi && (a = Math.floor(b[f].csi().pageT), e && 0 = d && b[g].load[k]("aft"))
                };
                var l = !1;

                function m() {
                    l || (l = !0, b[g].load[k]("firstScrollTime"))
                }
                b.addEventListener ? b.addEventListener("scroll", m, !1) : b.attachEvent("onscroll", m);
                })();
            })();