(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[212], {
    431: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return n
            }
        });
        let n = (0,
        i(6021).Z)("Disc", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }], ["circle", {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }]])
    },
    2061: function(t, e, i) {
        "use strict";
        var n, r;
        t.exports = (null == (n = i.g.process) ? void 0 : n.env) && "object" == typeof (null == (r = i.g.process) ? void 0 : r.env) ? i.g.process : i(435)
    },
    435: function(t) {
        !function() {
            var e = {
                229: function(t) {
                    var e, i, n, r = t.exports = {};
                    function s() {
                        throw Error("setTimeout has not been defined")
                    }
                    function o() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function a(t) {
                        if (e === setTimeout)
                            return setTimeout(t, 0);
                        if ((e === s || !e) && setTimeout)
                            return e = setTimeout,
                            setTimeout(t, 0);
                        try {
                            return e(t, 0)
                        } catch (i) {
                            try {
                                return e.call(null, t, 0)
                            } catch (i) {
                                return e.call(this, t, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            e = "function" == typeof setTimeout ? setTimeout : s
                        } catch (t) {
                            e = s
                        }
                        try {
                            i = "function" == typeof clearTimeout ? clearTimeout : o
                        } catch (t) {
                            i = o
                        }
                    }();
                    var l = []
                      , u = !1
                      , h = -1;
                    function c() {
                        u && n && (u = !1,
                        n.length ? l = n.concat(l) : h = -1,
                        l.length && d())
                    }
                    function d() {
                        if (!u) {
                            var t = a(c);
                            u = !0;
                            for (var e = l.length; e; ) {
                                for (n = l,
                                l = []; ++h < e; )
                                    n && n[h].run();
                                h = -1,
                                e = l.length
                            }
                            n = null,
                            u = !1,
                            function(t) {
                                if (i === clearTimeout)
                                    return clearTimeout(t);
                                if ((i === o || !i) && clearTimeout)
                                    return i = clearTimeout,
                                    clearTimeout(t);
                                try {
                                    i(t)
                                } catch (e) {
                                    try {
                                        return i.call(null, t)
                                    } catch (e) {
                                        return i.call(this, t)
                                    }
                                }
                            }(t)
                        }
                    }
                    function p(t, e) {
                        this.fun = t,
                        this.array = e
                    }
                    function f() {}
                    r.nextTick = function(t) {
                        var e = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var i = 1; i < arguments.length; i++)
                                e[i - 1] = arguments[i];
                        l.push(new p(t,e)),
                        1 !== l.length || u || a(d)
                    }
                    ,
                    p.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    r.title = "browser",
                    r.browser = !0,
                    r.env = {},
                    r.argv = [],
                    r.version = "",
                    r.versions = {},
                    r.on = f,
                    r.addListener = f,
                    r.once = f,
                    r.off = f,
                    r.removeListener = f,
                    r.removeAllListeners = f,
                    r.emit = f,
                    r.prependListener = f,
                    r.prependOnceListener = f,
                    r.listeners = function(t) {
                        return []
                    }
                    ,
                    r.binding = function(t) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    r.cwd = function() {
                        return "/"
                    }
                    ,
                    r.chdir = function(t) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    r.umask = function() {
                        return 0
                    }
                }
            }
              , i = {};
            function n(t) {
                var r = i[t];
                if (void 0 !== r)
                    return r.exports;
                var s = i[t] = {
                    exports: {}
                }
                  , o = !0;
                try {
                    e[t](s, s.exports, n),
                    o = !1
                } finally {
                    o && delete i[t]
                }
                return s.exports
            }
            n.ab = "//";
            var r = n(229);
            t.exports = r
        }()
    },
    6629: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "BailoutToCSR", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let n = i(5274);
        function r(t) {
            let {reason: e, children: i} = t;
            if ("undefined" == typeof window)
                throw new n.BailoutToCSRError(e);
            return i
        }
    },
    1453: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "PreloadCss", {
            enumerable: !0,
            get: function() {
                return s
            }
        });
        let n = i(288)
          , r = i(1976);
        function s(t) {
            let {moduleIds: e} = t;
            if ("undefined" != typeof window)
                return null;
            let i = (0,
            r.getExpectedRequestStore)("next/dynamic css")
              , s = [];
            if (i.reactLoadableManifest && e) {
                let t = i.reactLoadableManifest;
                for (let i of e) {
                    if (!t[i])
                        continue;
                    let e = t[i].files.filter(t => t.endsWith(".css"));
                    s.push(...e)
                }
            }
            return 0 === s.length ? null : (0,
            n.jsx)(n.Fragment, {
                children: s.map(t => (0,
                n.jsx)("link", {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: i.assetPrefix + "/_next/" + encodeURI(t),
                    as: "style"
                }, t))
            })
        }
    },
    3286: function(t, e, i) {
        "use strict";
        i.d(e, {
            v: function() {
                return tD
            }
        });
        var n = i(8652)
          , r = i(1479)
          , s = i(1872)
          , o = i(8151);
        let a = {
            current: !1
        };
        var l = i(757);
        let u = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
        function h(t, e, i, n) {
            if (t === e && i === n)
                return l.Z;
            let r = e => (function(t, e, i, n, r) {
                let s, o;
                let a = 0;
                do
                    (s = u(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o;
                while (Math.abs(s) > 1e-7 && ++a < 12);
                return o
            }
            )(e, 0, 1, t, i);
            return t => 0 === t || 1 === t ? t : u(r(t), e, n)
        }
        var c = i(2739)
          , d = i(5728);
        let p = h(.33, 1.53, .69, .99)
          , f = (0,
        d.M)(p)
          , m = (0,
        c.o)(f)
          , v = t => (t *= 2) < 1 ? .5 * f(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
        var g = i(225)
          , y = i(4551)
          , x = i(7052)
          , P = i(1478)
          , T = i(5620)
          , w = i(6934);
        let b = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (w.P.test(t) || "0" === t) && !t.startsWith("url("))
          , S = t => null !== t;
        function A(t, {repeat: e, repeatType: i="loop"}, n) {
            let r = t.filter(S)
              , s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
            return s && void 0 !== n ? n : r[s]
        }
        class E {
            constructor({autoplay: t=!0, delay: e=0, type: i="keyframes", repeat: n=0, repeatDelay: r=0, repeatType: s="loop", ...o}) {
                this.isStopped = !1,
                this.hasAttemptedResolve = !1,
                this.createdAt = x.X.now(),
                this.options = {
                    autoplay: t,
                    delay: e,
                    type: i,
                    repeat: n,
                    repeatDelay: r,
                    repeatType: s,
                    ...o
                },
                this.updateFinishedPromise()
            }
            calcStartTime() {
                return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
            }
            get resolved() {
                return this._resolved || this.hasAttemptedResolve || (0,
                P.m)(),
                this._resolved
            }
            onKeyframesResolved(t, e) {
                this.resolvedAt = x.X.now(),
                this.hasAttemptedResolve = !0;
                let {name: i, type: r, velocity: s, delay: o, onComplete: l, onUpdate: u, isGenerator: h} = this.options;
                if (!h && !function(t, e, i, r) {
                    let s = t[0];
                    if (null === s)
                        return !1;
                    if ("display" === e || "visibility" === e)
                        return !0;
                    let o = t[t.length - 1]
                      , a = b(s, e)
                      , l = b(o, e);
                    return (0,
                    T.K)(a === l, `You are trying to animate ${e} from "${s}" to "${o}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${o} via the \`style\` property.`),
                    !!a && !!l && (function(t) {
                        let e = t[0];
                        if (1 === t.length)
                            return !0;
                        for (let i = 0; i < t.length; i++)
                            if (t[i] !== e)
                                return !0
                    }(t) || ("spring" === i || (0,
                    n.xD)(i)) && r)
                }(t, i, r, s)) {
                    if (a.current || !o) {
                        u && u(A(t, this.options, e)),
                        l && l(),
                        this.resolveFinishedPromise();
                        return
                    }
                    this.options.duration = 0
                }
                let c = this.initPlayback(t, e);
                !1 !== c && (this._resolved = {
                    keyframes: t,
                    finalKeyframe: e,
                    ...c
                },
                this.onPostResolved())
            }
            onPostResolved() {}
            then(t, e) {
                return this.currentFinishedPromise.then(t, e)
            }
            flatten() {
                this.options.type = "keyframes",
                this.options.ease = "linear"
            }
            updateFinishedPromise() {
                this.currentFinishedPromise = new Promise(t => {
                    this.resolveFinishedPromise = t
                }
                )
            }
        }
        var M = i(1064)
          , D = i(5614)
          , V = i(7352);
        function C(t, e, i) {
            return (i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }
        var R = i(4694)
          , k = i(2511)
          , L = i(8172);
        function j(t, e) {
            return i => i > 0 ? e : t
        }
        let F = (t, e, i) => {
            let n = t * t
              , r = i * (e * e - n) + n;
            return r < 0 ? 0 : Math.sqrt(r)
        }
          , B = [R.$, k.m, L.J]
          , O = t => B.find(e => e.test(t));
        function I(t) {
            let e = O(t);
            if ((0,
            T.K)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`),
            !e)
                return !1;
            let i = e.parse(t);
            return e === L.J && (i = function({hue: t, saturation: e, lightness: i, alpha: n}) {
                t /= 360,
                i /= 100;
                let r = 0
                  , s = 0
                  , o = 0;
                if (e /= 100) {
                    let n = i < .5 ? i * (1 + e) : i + e - i * e
                      , a = 2 * i - n;
                    r = C(a, n, t + 1 / 3),
                    s = C(a, n, t),
                    o = C(a, n, t - 1 / 3)
                } else
                    r = s = o = i;
                return {
                    red: Math.round(255 * r),
                    green: Math.round(255 * s),
                    blue: Math.round(255 * o),
                    alpha: n
                }
            }(i)),
            i
        }
        let $ = (t, e) => {
            let i = I(t)
              , n = I(e);
            if (!i || !n)
                return j(t, e);
            let r = {
                ...i
            };
            return t => (r.red = F(i.red, n.red, t),
            r.green = F(i.green, n.green, t),
            r.blue = F(i.blue, n.blue, t),
            r.alpha = (0,
            V.t)(i.alpha, n.alpha, t),
            k.m.transform(r))
        }
        ;
        var W = i(1554)
          , U = i(560)
          , N = i(2852);
        let X = new Set(["none", "hidden"]);
        function z(t, e) {
            return i => (0,
            V.t)(t, e, i)
        }
        function Y(t) {
            return "number" == typeof t ? z : "string" == typeof t ? (0,
            N.t)(t) ? j : U.$.test(t) ? $ : Z : Array.isArray(t) ? K : "object" == typeof t ? U.$.test(t) ? $ : H : j
        }
        function K(t, e) {
            let i = [...t]
              , n = i.length
              , r = t.map( (t, i) => Y(t)(t, e[i]));
            return t => {
                for (let e = 0; e < n; e++)
                    i[e] = r[e](t);
                return i
            }
        }
        function H(t, e) {
            let i = {
                ...t,
                ...e
            }
              , n = {};
            for (let r in i)
                void 0 !== t[r] && void 0 !== e[r] && (n[r] = Y(t[r])(t[r], e[r]));
            return t => {
                for (let e in n)
                    i[e] = n[e](t);
                return i
            }
        }
        let Z = (t, e) => {
            let i = w.P.createTransformer(e)
              , n = (0,
            w.V)(t)
              , r = (0,
            w.V)(e);
            return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? X.has(t) && !r.values.length || X.has(e) && !n.values.length ? X.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t : (0,
            W.z)(K(function(t, e) {
                var i;
                let n = []
                  , r = {
                    color: 0,
                    var: 0,
                    number: 0
                };
                for (let s = 0; s < e.values.length; s++) {
                    let o = e.types[s]
                      , a = t.indexes[o][r[o]]
                      , l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    n[s] = l,
                    r[o]++
                }
                return n
            }(n, r), r.values), i) : ((0,
            T.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            j(t, e))
        }
        ;
        function _(t, e, i) {
            return "number" == typeof t && "number" == typeof e && "number" == typeof i ? (0,
            V.t)(t, e, i) : Y(t)(t, e)
        }
        var q = i(9273);
        function G(t, e, i) {
            let n = Math.max(e - 5, 0);
            return (0,
            q.R)(i - t(n), e - n)
        }
        let J = {
            stiffness: 100,
            damping: 10,
            mass: 1,
            velocity: 0,
            duration: 800,
            bounce: .3,
            visualDuration: .3,
            restSpeed: {
                granular: .01,
                default: 2
            },
            restDelta: {
                granular: .005,
                default: .5
            },
            minDuration: .01,
            maxDuration: 10,
            minDamping: .05,
            maxDamping: 1
        };
        function Q(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        let tt = ["duration", "bounce"]
          , te = ["stiffness", "damping", "mass"];
        function ti(t, e) {
            return e.some(e => void 0 !== t[e])
        }
        function tn(t=J.visualDuration, e=J.bounce) {
            let i;
            let s = "object" != typeof t ? {
                visualDuration: t,
                keyframes: [0, 1],
                bounce: e
            } : t
              , {restSpeed: o, restDelta: a} = s
              , l = s.keyframes[0]
              , u = s.keyframes[s.keyframes.length - 1]
              , h = {
                done: !1,
                value: l
            }
              , {stiffness: c, damping: d, mass: p, duration: f, velocity: m, isResolvedFromDuration: v} = function(t) {
                let e = {
                    velocity: J.velocity,
                    stiffness: J.stiffness,
                    damping: J.damping,
                    mass: J.mass,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!ti(t, te) && ti(t, tt)) {
                    if (t.visualDuration) {
                        let i = 2 * Math.PI / (1.2 * t.visualDuration)
                          , n = i * i
                          , r = 2 * (0,
                        D.u)(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                        e = {
                            ...e,
                            mass: J.mass,
                            stiffness: n,
                            damping: r
                        }
                    } else {
                        let i = function({duration: t=J.duration, bounce: e=J.bounce, velocity: i=J.velocity, mass: n=J.mass}) {
                            let s, o;
                            (0,
                            T.K)(t <= (0,
                            r.w)(J.maxDuration), "Spring duration must be 10 seconds or less");
                            let a = 1 - e;
                            a = (0,
                            D.u)(J.minDamping, J.maxDamping, a),
                            t = (0,
                            D.u)(J.minDuration, J.maxDuration, (0,
                            r.X)(t)),
                            a < 1 ? (s = e => {
                                let n = e * a
                                  , r = n * t;
                                return .001 - (n - i) / Q(e, a) * Math.exp(-r)
                            }
                            ,
                            o = e => {
                                let n = e * a * t
                                  , r = Math.pow(a, 2) * Math.pow(e, 2) * t
                                  , o = Q(Math.pow(e, 2), a);
                                return (n * i + i - r) * Math.exp(-n) * (-s(e) + .001 > 0 ? -1 : 1) / o
                            }
                            ) : (s = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1),
                            o = e => t * t * (i - e) * Math.exp(-e * t));
                            let l = function(t, e, i) {
                                let n = i;
                                for (let i = 1; i < 12; i++)
                                    n -= t(n) / e(n);
                                return n
                            }(s, o, 5 / t);
                            if (t = (0,
                            r.w)(t),
                            isNaN(l))
                                return {
                                    stiffness: J.stiffness,
                                    damping: J.damping,
                                    duration: t
                                };
                            {
                                let e = Math.pow(l, 2) * n;
                                return {
                                    stiffness: e,
                                    damping: 2 * a * Math.sqrt(n * e),
                                    duration: t
                                }
                            }
                        }(t);
                        (e = {
                            ...e,
                            ...i,
                            mass: J.mass
                        }).isResolvedFromDuration = !0
                    }
                }
                return e
            }({
                ...s,
                velocity: -(0,
                r.X)(s.velocity || 0)
            })
              , g = m || 0
              , y = d / (2 * Math.sqrt(c * p))
              , x = u - l
              , P = (0,
            r.X)(Math.sqrt(c / p))
              , w = 5 > Math.abs(x);
            if (o || (o = w ? J.restSpeed.granular : J.restSpeed.default),
            a || (a = w ? J.restDelta.granular : J.restDelta.default),
            y < 1) {
                let t = Q(P, y);
                i = e => u - Math.exp(-y * P * e) * ((g + y * P * x) / t * Math.sin(t * e) + x * Math.cos(t * e))
            } else if (1 === y)
                i = t => u - Math.exp(-P * t) * (x + (g + P * x) * t);
            else {
                let t = P * Math.sqrt(y * y - 1);
                i = e => {
                    let i = Math.exp(-y * P * e)
                      , n = Math.min(t * e, 300);
                    return u - i * ((g + y * P * x) * Math.sinh(n) + t * x * Math.cosh(n)) / t
                }
            }
            let b = {
                calculatedDuration: v && f || null,
                next: t => {
                    let e = i(t);
                    if (v)
                        h.done = t >= f;
                    else {
                        let n = 0;
                        y < 1 && (n = 0 === t ? (0,
                        r.w)(g) : G(i, t, e));
                        let s = Math.abs(n) <= o
                          , l = Math.abs(u - e) <= a;
                        h.done = s && l
                    }
                    return h.value = h.done ? u : e,
                    h
                }
                ,
                toString: () => {
                    let t = Math.min((0,
                    n.iI)(b), n.EO)
                      , e = (0,
                    n.wk)(e => b.next(t * e).value, t, 30);
                    return t + "ms " + e
                }
            };
            return b
        }
        function tr({keyframes: t, velocity: e=0, power: i=.8, timeConstant: n=325, bounceDamping: r=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: h}) {
            let c, d;
            let p = t[0]
              , f = {
                done: !1,
                value: p
            }
              , m = t => void 0 !== a && t < a || void 0 !== l && t > l
              , v = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l
              , g = i * e
              , y = p + g
              , x = void 0 === o ? y : o(y);
            x !== y && (g = x - p);
            let P = t => -g * Math.exp(-t / n)
              , T = t => x + P(t)
              , w = t => {
                let e = P(t)
                  , i = T(t);
                f.done = Math.abs(e) <= u,
                f.value = f.done ? x : i
            }
              , b = t => {
                m(f.value) && (c = t,
                d = tn({
                    keyframes: [f.value, v(f.value)],
                    velocity: G(T, t, f.value),
                    damping: r,
                    stiffness: s,
                    restDelta: u,
                    restSpeed: h
                }))
            }
            ;
            return b(0),
            {
                calculatedDuration: null,
                next: t => {
                    let e = !1;
                    return (d || void 0 !== c || (e = !0,
                    w(t),
                    b(t)),
                    void 0 !== c && t >= c) ? d.next(t - c) : (e || w(t),
                    f)
                }
            }
        }
        let ts = h(.42, 0, 1, 1)
          , to = h(0, 0, .58, 1)
          , ta = h(.42, 0, .58, 1)
          , tl = t => Array.isArray(t) && "number" != typeof t[0]
          , tu = {
            linear: l.Z,
            easeIn: ts,
            easeInOut: ta,
            easeOut: to,
            circIn: g.Z7,
            circInOut: g.X7,
            circOut: g.Bn,
            backIn: f,
            backInOut: m,
            backOut: p,
            anticipate: v
        }
          , th = t => {
            if ((0,
            n.qE)(t)) {
                (0,
                T.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,i,n,r] = t;
                return h(e, i, n, r)
            }
            return "string" == typeof t ? ((0,
            T.k)(void 0 !== tu[t], `Invalid easing type '${t}'`),
            tu[t]) : t
        }
        ;
        var tc = i(5043);
        function td({duration: t=300, keyframes: e, times: i, ease: n="easeInOut"}) {
            let r = tl(n) ? n.map(th) : th(n)
              , s = {
                done: !1,
                value: e[0]
            }
              , o = function(t, e, {clamp: i=!0, ease: n, mixer: r}={}) {
                let s = t.length;
                if ((0,
                T.k)(s === e.length, "Both input and output ranges must be the same length"),
                1 === s)
                    return () => e[0];
                if (2 === s && e[0] === e[1])
                    return () => e[1];
                let o = t[0] === t[1];
                t[0] > t[s - 1] && (t = [...t].reverse(),
                e = [...e].reverse());
                let a = function(t, e, i) {
                    let n = []
                      , r = i || _
                      , s = t.length - 1;
                    for (let i = 0; i < s; i++) {
                        let s = r(t[i], t[i + 1]);
                        if (e) {
                            let t = Array.isArray(e) ? e[i] || l.Z : e;
                            s = (0,
                            W.z)(t, s)
                        }
                        n.push(s)
                    }
                    return n
                }(e, n, r)
                  , u = a.length
                  , h = i => {
                    if (o && i < t[0])
                        return e[0];
                    let n = 0;
                    if (u > 1)
                        for (; n < t.length - 2 && !(i < t[n + 1]); n++)
                            ;
                    let r = (0,
                    tc.Y)(t[n], t[n + 1], i);
                    return a[n](r)
                }
                ;
                return i ? e => h((0,
                D.u)(t[0], t[s - 1], e)) : h
            }((i && i.length === e.length ? i : function(t) {
                let e = [0];
                return function(t, e) {
                    let i = t[t.length - 1];
                    for (let n = 1; n <= e; n++) {
                        let r = (0,
                        tc.Y)(0, e, n);
                        t.push((0,
                        V.t)(i, 1, r))
                    }
                }(e, t.length - 1),
                e
            }(e)).map(e => e * t), e, {
                ease: Array.isArray(r) ? r : e.map( () => r || ta).splice(0, e.length - 1)
            });
            return {
                calculatedDuration: t,
                next: e => (s.value = o(e),
                s.done = e >= t,
                s)
            }
        }
        let tp = t => {
            let e = ({timestamp: e}) => t(e);
            return {
                start: () => s.Wi.update(e, !0),
                stop: () => (0,
                s.Pn)(e),
                now: () => s.frameData.isProcessing ? s.frameData.timestamp : x.X.now()
            }
        }
          , tf = {
            decay: tr,
            inertia: tr,
            tween: td,
            keyframes: td,
            spring: tn
        }
          , tm = t => t / 100;
        class tv extends E {
            constructor(t) {
                super(t),
                this.holdTime = null,
                this.cancelTime = null,
                this.currentTime = 0,
                this.playbackSpeed = 1,
                this.pendingPlayState = "running",
                this.startTime = null,
                this.state = "idle",
                this.stop = () => {
                    if (this.resolver.cancel(),
                    this.isStopped = !0,
                    "idle" === this.state)
                        return;
                    this.teardown();
                    let {onStop: t} = this.options;
                    t && t()
                }
                ;
                let {name: e, motionValue: i, element: n, keyframes: r} = this.options
                  , s = (null == n ? void 0 : n.KeyframeResolver) || P.e;
                this.resolver = new s(r, (t, e) => this.onKeyframesResolved(t, e),e,i,n),
                this.resolver.scheduleResolve()
            }
            flatten() {
                super.flatten(),
                this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
            }
            initPlayback(t) {
                let e, i;
                let {type: r="keyframes", repeat: s=0, repeatDelay: o=0, repeatType: a, velocity: l=0} = this.options
                  , u = (0,
                n.xD)(r) ? r : tf[r] || td;
                u !== td && "number" != typeof t[0] && (e = (0,
                W.z)(tm, _(t[0], t[1])),
                t = [0, 100]);
                let h = u({
                    ...this.options,
                    keyframes: t
                });
                "mirror" === a && (i = u({
                    ...this.options,
                    keyframes: [...t].reverse(),
                    velocity: -l
                })),
                null === h.calculatedDuration && (h.calculatedDuration = (0,
                n.iI)(h));
                let {calculatedDuration: c} = h
                  , d = c + o;
                return {
                    generator: h,
                    mirroredGenerator: i,
                    mapPercentToKeyframes: e,
                    calculatedDuration: c,
                    resolvedDuration: d,
                    totalDuration: d * (s + 1) - o
                }
            }
            onPostResolved() {
                let {autoplay: t=!0} = this.options;
                M.P.mainThread++,
                this.play(),
                "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
            }
            tick(t, e=!1) {
                let {resolved: i} = this;
                if (!i) {
                    let {keyframes: t} = this.options;
                    return {
                        done: !0,
                        value: t[t.length - 1]
                    }
                }
                let {finalKeyframe: n, generator: r, mirroredGenerator: s, mapPercentToKeyframes: o, keyframes: a, calculatedDuration: l, totalDuration: u, resolvedDuration: h} = i;
                if (null === this.startTime)
                    return r.next(0);
                let {delay: c, repeat: d, repeatType: p, repeatDelay: f, onUpdate: m} = this.options;
                this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)),
                e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1)
                  , g = this.speed >= 0 ? v < 0 : v > u;
                this.currentTime = Math.max(v, 0),
                "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                let y = this.currentTime
                  , x = r;
                if (d) {
                    let t = Math.min(this.currentTime, u) / h
                      , e = Math.floor(t)
                      , i = t % 1;
                    !i && t >= 1 && (i = 1),
                    1 === i && e--,
                    (e = Math.min(e, d + 1)) % 2 && ("reverse" === p ? (i = 1 - i,
                    f && (i -= f / h)) : "mirror" === p && (x = s)),
                    y = (0,
                    D.u)(0, 1, i) * h
                }
                let P = g ? {
                    done: !1,
                    value: a[0]
                } : x.next(y);
                o && (P.value = o(P.value));
                let {done: T} = P;
                g || null === l || (T = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                let w = null === this.holdTime && ("finished" === this.state || "running" === this.state && T);
                return w && void 0 !== n && (P.value = A(a, this.options, n)),
                m && m(P.value),
                w && this.finish(),
                P
            }
            get duration() {
                let {resolved: t} = this;
                return t ? (0,
                r.X)(t.calculatedDuration) : 0
            }
            get time() {
                return (0,
                r.X)(this.currentTime)
            }
            set time(t) {
                t = (0,
                r.w)(t),
                this.currentTime = t,
                null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
            }
            get speed() {
                return this.playbackSpeed
            }
            set speed(t) {
                let e = this.playbackSpeed !== t;
                this.playbackSpeed = t,
                e && (this.time = (0,
                r.X)(this.currentTime))
            }
            play() {
                if (this.resolver.isScheduled || this.resolver.resume(),
                !this._resolved) {
                    this.pendingPlayState = "running";
                    return
                }
                if (this.isStopped)
                    return;
                let {driver: t=tp, onPlay: e, startTime: i} = this.options;
                this.driver || (this.driver = t(t => this.tick(t))),
                e && e();
                let n = this.driver.now();
                null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = n) : this.startTime = null != i ? i : this.calcStartTime(),
                "finished" === this.state && this.updateFinishedPromise(),
                this.cancelTime = this.startTime,
                this.holdTime = null,
                this.state = "running",
                this.driver.start()
            }
            pause() {
                var t;
                if (!this._resolved) {
                    this.pendingPlayState = "paused";
                    return
                }
                this.state = "paused",
                this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0
            }
            complete() {
                "running" !== this.state && this.play(),
                this.pendingPlayState = this.state = "finished",
                this.holdTime = null
            }
            finish() {
                this.teardown(),
                this.state = "finished";
                let {onComplete: t} = this.options;
                t && t()
            }
            cancel() {
                null !== this.cancelTime && this.tick(this.cancelTime),
                this.teardown(),
                this.updateFinishedPromise()
            }
            teardown() {
                this.state = "idle",
                this.stopDriver(),
                this.resolveFinishedPromise(),
                this.updateFinishedPromise(),
                this.startTime = this.cancelTime = null,
                this.resolver.cancel(),
                M.P.mainThread--
            }
            stopDriver() {
                this.driver && (this.driver.stop(),
                this.driver = void 0)
            }
            sample(t) {
                return this.startTime = 0,
                this.tick(t, !0)
            }
        }
        let tg = new Set(["opacity", "clipPath", "filter", "transform"]);
        var ty = i(4311);
        let tx = (0,
        i(5647).X)( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
          , tP = {
            anticipate: v,
            backInOut: m,
            circInOut: g.X7
        };
        class tT extends E {
            constructor(t) {
                super(t);
                let {name: e, motionValue: i, element: n, keyframes: r} = this.options;
                this.resolver = new y.s(r, (t, e) => this.onKeyframesResolved(t, e),e,i,n),
                this.resolver.scheduleResolve()
            }
            initPlayback(t, e) {
                var i;
                let {duration: r=300, times: s, ease: o, type: a, motionValue: l, name: u, startTime: h} = this.options;
                if (!l.owner || !l.owner.current)
                    return !1;
                if ("string" == typeof o && (0,
                n.Vc)() && o in tP && (o = tP[o]),
                i = this.options,
                (0,
                n.xD)(i.type) || "spring" === i.type || !(0,
                n.hR)(i.ease)) {
                    let {onComplete: e, onUpdate: i, motionValue: n, element: l, ...u} = this.options
                      , h = function(t, e) {
                        let i = new tv({
                            ...e,
                            keyframes: t,
                            repeat: 0,
                            delay: 0,
                            isGenerator: !0
                        })
                          , n = {
                            done: !1,
                            value: t[0]
                        }
                          , r = []
                          , s = 0;
                        for (; !n.done && s < 2e4; )
                            r.push((n = i.sample(s)).value),
                            s += 10;
                        return {
                            times: void 0,
                            keyframes: r,
                            duration: s - 10,
                            ease: "linear"
                        }
                    }(t, u);
                    1 === (t = h.keyframes).length && (t[1] = t[0]),
                    r = h.duration,
                    s = h.times,
                    o = h.ease,
                    a = "keyframes"
                }
                let c = function(t, e, i, {delay: r=0, duration: s=300, repeat: o=0, repeatType: a="loop", ease: l="easeInOut", times: u}={}) {
                    let h = {
                        [e]: i
                    };
                    u && (h.offset = u);
                    let c = (0,
                    n.eB)(l, s);
                    Array.isArray(c) && (h.easing = c),
                    ty.f.value && M.P.waapi++;
                    let d = t.animate(h, {
                        delay: r,
                        duration: s,
                        easing: Array.isArray(c) ? "linear" : c,
                        fill: "both",
                        iterations: o + 1,
                        direction: "reverse" === a ? "alternate" : "normal"
                    });
                    return ty.f.value && d.finished.finally( () => {
                        M.P.waapi--
                    }
                    ),
                    d
                }(l.owner.current, u, t, {
                    ...this.options,
                    duration: r,
                    times: s,
                    ease: o
                });
                return c.startTime = null != h ? h : this.calcStartTime(),
                this.pendingTimeline ? ((0,
                n._F)(c, this.pendingTimeline),
                this.pendingTimeline = void 0) : c.onfinish = () => {
                    let {onComplete: i} = this.options;
                    l.set(A(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise()
                }
                ,
                {
                    animation: c,
                    duration: r,
                    times: s,
                    type: a,
                    ease: o,
                    keyframes: t
                }
            }
            get duration() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {duration: e} = t;
                return (0,
                r.X)(e)
            }
            get time() {
                let {resolved: t} = this;
                if (!t)
                    return 0;
                let {animation: e} = t;
                return (0,
                r.X)(e.currentTime || 0)
            }
            set time(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.currentTime = (0,
                r.w)(t)
            }
            get speed() {
                let {resolved: t} = this;
                if (!t)
                    return 1;
                let {animation: e} = t;
                return e.playbackRate
            }
            set speed(t) {
                let {resolved: e} = this;
                if (!e)
                    return;
                let {animation: i} = e;
                i.playbackRate = t
            }
            get state() {
                let {resolved: t} = this;
                if (!t)
                    return "idle";
                let {animation: e} = t;
                return e.playState
            }
            get startTime() {
                let {resolved: t} = this;
                if (!t)
                    return null;
                let {animation: e} = t;
                return e.startTime
            }
            attachTimeline(t) {
                if (this._resolved) {
                    let {resolved: e} = this;
                    if (!e)
                        return l.Z;
                    let {animation: i} = e;
                    (0,
                    n._F)(i, t)
                } else
                    this.pendingTimeline = t;
                return l.Z
            }
            play() {
                if (this.isStopped)
                    return;
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                "finished" === e.playState && this.updateFinishedPromise(),
                e.play()
            }
            pause() {
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e} = t;
                e.pause()
            }
            stop() {
                if (this.resolver.cancel(),
                this.isStopped = !0,
                "idle" === this.state)
                    return;
                this.resolveFinishedPromise(),
                this.updateFinishedPromise();
                let {resolved: t} = this;
                if (!t)
                    return;
                let {animation: e, keyframes: i, duration: n, type: s, ease: o, times: a} = t;
                if ("idle" === e.playState || "finished" === e.playState)
                    return;
                if (this.time) {
                    let {motionValue: t, onUpdate: e, onComplete: l, element: u, ...h} = this.options
                      , c = new tv({
                        ...h,
                        keyframes: i,
                        duration: n,
                        type: s,
                        ease: o,
                        times: a,
                        isGenerator: !0
                    })
                      , d = (0,
                    r.w)(this.time);
                    t.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10)
                }
                let {onStop: l} = this.options;
                l && l(),
                this.cancel()
            }
            complete() {
                let {resolved: t} = this;
                t && t.animation.finish()
            }
            cancel() {
                let {resolved: t} = this;
                t && t.animation.cancel()
            }
            static supports(t) {
                let {motionValue: e, name: i, repeatDelay: n, repeatType: r, damping: s, type: o} = t;
                if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
                    return !1;
                let {onUpdate: a, transformTemplate: l} = e.owner.getProps();
                return tx() && i && tg.has(i) && !a && !l && !n && "mirror" !== r && 0 !== s && "inertia" !== o
            }
        }
        var tw = i(6767);
        let tb = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , tS = t => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , tA = {
            type: "keyframes",
            duration: .8
        }
          , tE = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , tM = (t, {keyframes: e}) => e.length > 2 ? tA : tw.G.has(t) ? t.startsWith("scale") ? tS(e[1]) : tb : tE
          , tD = (t, e, i, l={}, u, h) => c => {
            let d = (0,
            n.ev)(l, t) || {}
              , p = d.delay || l.delay || 0
              , {elapsed: f=0} = l;
            f -= (0,
            r.w)(p);
            let m = {
                keyframes: Array.isArray(i) ? i : [null, i],
                ease: "easeOut",
                velocity: e.getVelocity(),
                ...d,
                delay: -f,
                onUpdate: t => {
                    e.set(t),
                    d.onUpdate && d.onUpdate(t)
                }
                ,
                onComplete: () => {
                    c(),
                    d.onComplete && d.onComplete()
                }
                ,
                name: t,
                motionValue: e,
                element: h ? void 0 : u
            };
            !function({when: t, delay: e, delayChildren: i, staggerChildren: n, staggerDirection: r, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...h}) {
                return !!Object.keys(h).length
            }(d) && (m = {
                ...m,
                ...tM(t, m)
            }),
            m.duration && (m.duration = (0,
            r.w)(m.duration)),
            m.repeatDelay && (m.repeatDelay = (0,
            r.w)(m.repeatDelay)),
            void 0 !== m.from && (m.keyframes[0] = m.from);
            let v = !1;
            if (!1 !== m.type && (0 !== m.duration || m.repeatDelay) || (m.duration = 0,
            0 !== m.delay || (v = !0)),
            (a.current || o.c.skipAnimations) && (v = !0,
            m.duration = 0,
            m.delay = 0),
            v && !h && void 0 !== e.get()) {
                let t = A(m.keyframes, d);
                if (void 0 !== t)
                    return s.Wi.update( () => {
                        m.onUpdate(t),
                        m.onComplete()
                    }
                    ),
                    new n.sP([])
            }
            return !h && tT.supports(m) ? new tT(m) : new tv(m)
        }
    },
    4287: function(t, e, i) {
        "use strict";
        i.d(e, {
            d: function() {
                return f
            }
        });
        var n = i(9201)
          , r = i(8652)
          , s = i(1084)
          , o = i(7182)
          , a = i(4340)
          , l = i(4384)
          , u = i(3286)
          , h = i(1872);
        function c(t, e, {delay: i=0, transitionOverride: n, type: c}={}) {
            var d;
            let {transition: p=t.getDefaultTransition(), transitionEnd: f, ...m} = e;
            n && (p = n);
            let v = []
              , g = c && t.animationState && t.animationState.getState()[c];
            for (let e in m) {
                let n = t.getValue(e, null !== (d = t.latestValues[e]) && void 0 !== d ? d : null)
                  , o = m[e];
                if (void 0 === o || g && function({protectedKeys: t, needsAnimating: e}, i) {
                    let n = t.hasOwnProperty(i) && !0 !== e[i];
                    return e[i] = !1,
                    n
                }(g, e))
                    continue;
                let c = {
                    delay: i,
                    ...(0,
                    r.ev)(p || {}, e)
                }
                  , f = !1;
                if (window.MotionHandoffAnimation) {
                    let i = (0,
                    l.s)(t);
                    if (i) {
                        let t = window.MotionHandoffAnimation(i, e, h.Wi);
                        null !== t && (c.startTime = t,
                        f = !0)
                    }
                }
                (0,
                a.K)(t, e),
                n.start((0,
                u.v)(e, n, o, t.shouldReduceMotion && s.z.has(e) ? {
                    type: !1
                } : c, t, f));
                let y = n.animation;
                y && v.push(y)
            }
            return f && Promise.all(v).then( () => {
                h.Wi.update( () => {
                    f && (0,
                    o.C)(t, f)
                }
                )
            }
            ),
            v
        }
        function d(t, e, i={}) {
            var r;
            let s = (0,
            n.x)(t, e, "exit" === i.type ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0)
              , {transition: o=t.getDefaultTransition() || {}} = s || {};
            i.transitionOverride && (o = i.transitionOverride);
            let a = s ? () => Promise.all(c(t, s, i)) : () => Promise.resolve()
              , l = t.variantChildren && t.variantChildren.size ? (n=0) => {
                let {delayChildren: r=0, staggerChildren: s, staggerDirection: a} = o;
                return function(t, e, i=0, n=0, r=1, s) {
                    let o = []
                      , a = (t.variantChildren.size - 1) * n
                      , l = 1 === r ? (t=0) => t * n : (t=0) => a - t * n;
                    return Array.from(t.variantChildren).sort(p).forEach( (t, n) => {
                        t.notify("AnimationStart", e),
                        o.push(d(t, e, {
                            ...s,
                            delay: i + l(n)
                        }).then( () => t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(o)
                }(t, e, r + n, s, a, i)
            }
            : () => Promise.resolve()
              , {when: u} = o;
            if (!u)
                return Promise.all([a(), l(i.delay)]);
            {
                let[t,e] = "beforeChildren" === u ? [a, l] : [l, a];
                return t().then( () => e())
            }
        }
        function p(t, e) {
            return t.sortNodePosition(e)
        }
        function f(t, e, i={}) {
            let r;
            if (t.notify("AnimationStart", e),
            Array.isArray(e))
                r = Promise.all(e.map(e => d(t, e, i)));
            else if ("string" == typeof e)
                r = d(t, e, i);
            else {
                let s = "function" == typeof e ? (0,
                n.x)(t, e, i.custom) : e;
                r = Promise.all(c(t, s, i))
            }
            return r.then( () => {
                t.notify("AnimationComplete", e)
            }
            )
        }
    },
    2755: function(t, e, i) {
        "use strict";
        i.d(e, {
            M: function() {
                return n
            }
        });
        let n = "data-" + (0,
        i(8933).D)("framerAppearId")
    },
    4384: function(t, e, i) {
        "use strict";
        i.d(e, {
            s: function() {
                return r
            }
        });
        var n = i(2755);
        function r(t) {
            return t.props[n.M]
        }
    },
    6089: function(t, e, i) {
        "use strict";
        i.d(e, {
            C: function() {
                return n
            }
        });
        let n = t => Array.isArray(t)
    },
    3244: function(t, e, i) {
        "use strict";
        i.d(e, {
            M: function() {
                return g
            }
        });
        var n = i(288)
          , r = i(5192)
          , s = i(9272)
          , o = i(7090)
          , a = i(3925)
          , l = i(2378);
        class u extends r.Component {
            getSnapshotBeforeUpdate(t) {
                let e = this.props.childRef.current;
                if (e && t.isPresent && !this.props.isPresent) {
                    let t = e.offsetParent
                      , i = t instanceof HTMLElement && t.offsetWidth || 0
                      , n = this.props.sizeRef.current;
                    n.height = e.offsetHeight || 0,
                    n.width = e.offsetWidth || 0,
                    n.top = e.offsetTop,
                    n.left = e.offsetLeft,
                    n.right = i - n.width - n.left
                }
                return null
            }
            componentDidUpdate() {}
            render() {
                return this.props.children
            }
        }
        function h(t) {
            let {children: e, isPresent: i, anchorX: s} = t
              , o = (0,
            r.useId)()
              , a = (0,
            r.useRef)(null)
              , h = (0,
            r.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0
            })
              , {nonce: c} = (0,
            r.useContext)(l._);
            return (0,
            r.useInsertionEffect)( () => {
                let {width: t, height: e, top: n, left: r, right: l} = h.current;
                if (i || !a.current || !t || !e)
                    return;
                a.current.dataset.motionPopId = o;
                let u = document.createElement("style");
                return c && (u.nonce = c),
                document.head.appendChild(u),
                u.sheet && u.sheet.insertRule('\n          [data-motion-pop-id="'.concat(o, '"] {\n            position: absolute !important;\n            width: ').concat(t, "px !important;\n            height: ").concat(e, "px !important;\n            ").concat("left" === s ? "left: ".concat(r) : "right: ".concat(l), "px !important;\n            top: ").concat(n, "px !important;\n          }\n        ")),
                () => {
                    document.head.removeChild(u)
                }
            }
            , [i]),
            (0,
            n.jsx)(u, {
                isPresent: i,
                childRef: a,
                sizeRef: h,
                children: r.cloneElement(e, {
                    ref: a
                })
            })
        }
        let c = t => {
            let {children: e, initial: i, isPresent: s, onExitComplete: l, custom: u, presenceAffectsLayout: c, mode: p, anchorX: f} = t
              , m = (0,
            o.h)(d)
              , v = (0,
            r.useId)()
              , g = (0,
            r.useCallback)(t => {
                for (let e of (m.set(t, !0),
                m.values()))
                    if (!e)
                        return;
                l && l()
            }
            , [m, l])
              , y = (0,
            r.useMemo)( () => ({
                id: v,
                initial: i,
                isPresent: s,
                custom: u,
                onExitComplete: g,
                register: t => (m.set(t, !1),
                () => m.delete(t))
            }), c ? [Math.random(), g] : [s, g]);
            return (0,
            r.useMemo)( () => {
                m.forEach( (t, e) => m.set(e, !1))
            }
            , [s]),
            r.useEffect( () => {
                s || m.size || !l || l()
            }
            , [s]),
            "popLayout" === p && (e = (0,
            n.jsx)(h, {
                isPresent: s,
                anchorX: f,
                children: e
            })),
            (0,
            n.jsx)(a.O.Provider, {
                value: y,
                children: e
            })
        }
        ;
        function d() {
            return new Map
        }
        var p = i(774);
        let f = t => t.key || "";
        function m(t) {
            let e = [];
            return r.Children.forEach(t, t => {
                (0,
                r.isValidElement)(t) && e.push(t)
            }
            ),
            e
        }
        var v = i(3617);
        let g = t => {
            let {children: e, custom: i, initial: a=!0, onExitComplete: l, presenceAffectsLayout: u=!0, mode: h="sync", propagate: d=!1, anchorX: g="left"} = t
              , [y,x] = (0,
            p.oO)(d)
              , P = (0,
            r.useMemo)( () => m(e), [e])
              , T = d && !y ? [] : P.map(f)
              , w = (0,
            r.useRef)(!0)
              , b = (0,
            r.useRef)(P)
              , S = (0,
            o.h)( () => new Map)
              , [A,E] = (0,
            r.useState)(P)
              , [M,D] = (0,
            r.useState)(P);
            (0,
            v.L)( () => {
                w.current = !1,
                b.current = P;
                for (let t = 0; t < M.length; t++) {
                    let e = f(M[t]);
                    T.includes(e) ? S.delete(e) : !0 !== S.get(e) && S.set(e, !1)
                }
            }
            , [M, T.length, T.join("-")]);
            let V = [];
            if (P !== A) {
                let t = [...P];
                for (let e = 0; e < M.length; e++) {
                    let i = M[e]
                      , n = f(i);
                    T.includes(n) || (t.splice(e, 0, i),
                    V.push(i))
                }
                return "wait" === h && V.length && (t = V),
                D(m(t)),
                E(P),
                null
            }
            let {forceRender: C} = (0,
            r.useContext)(s.p);
            return (0,
            n.jsx)(n.Fragment, {
                children: M.map(t => {
                    let e = f(t)
                      , r = (!d || !!y) && (P === M || T.includes(e));
                    return (0,
                    n.jsx)(c, {
                        isPresent: r,
                        initial: (!w.current || !!a) && void 0,
                        custom: i,
                        presenceAffectsLayout: u,
                        mode: h,
                        onExitComplete: r ? void 0 : () => {
                            if (!S.has(e))
                                return;
                            S.set(e, !0);
                            let t = !0;
                            S.forEach(e => {
                                e || (t = !1)
                            }
                            ),
                            t && (null == C || C(),
                            D(b.current),
                            d && (null == x || x()),
                            l && l())
                        }
                        ,
                        anchorX: g,
                        children: t
                    }, e)
                }
                )
            })
        }
    },
    774: function(t, e, i) {
        "use strict";
        i.d(e, {
            oO: function() {
                return s
            }
        });
        var n = i(5192)
          , r = i(3925);
        function s(t=!0) {
            let e = (0,
            n.useContext)(r.O);
            if (null === e)
                return [!0, null];
            let {isPresent: i, onExitComplete: s, register: o} = e
              , a = (0,
            n.useId)();
            (0,
            n.useEffect)( () => {
                if (t)
                    return o(a)
            }
            , [t]);
            let l = (0,
            n.useCallback)( () => t && s && s(a), [a, s, t]);
            return !i && s ? [!1, l] : [!0]
        }
    },
    9272: function(t, e, i) {
        "use strict";
        i.d(e, {
            p: function() {
                return n
            }
        });
        let n = (0,
        i(5192).createContext)({})
    },
    2378: function(t, e, i) {
        "use strict";
        i.d(e, {
            _: function() {
                return n
            }
        });
        let n = (0,
        i(5192).createContext)({
            transformPagePoint: t => t,
            isStatic: !1,
            reducedMotion: "never"
        })
    },
    3925: function(t, e, i) {
        "use strict";
        i.d(e, {
            O: function() {
                return n
            }
        });
        let n = (0,
        i(5192).createContext)(null)
    },
    225: function(t, e, i) {
        "use strict";
        i.d(e, {
            Bn: function() {
                return o
            },
            X7: function() {
                return a
            },
            Z7: function() {
                return s
            }
        });
        var n = i(2739)
          , r = i(5728);
        let s = t => 1 - Math.sin(Math.acos(t))
          , o = (0,
        r.M)(s)
          , a = (0,
        n.o)(s)
    },
    2739: function(t, e, i) {
        "use strict";
        i.d(e, {
            o: function() {
                return n
            }
        });
        let n = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
    },
    5728: function(t, e, i) {
        "use strict";
        i.d(e, {
            M: function() {
                return n
            }
        });
        let n = t => e => 1 - t(1 - e)
    },
    5990: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return o
            }
        });
        var n = i(8151);
        let r = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
        var s = i(4311);
        function o(t, e) {
            let i = !1
              , o = !0
              , a = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , l = () => i = !0
              , u = r.reduce( (t, i) => (t[i] = function(t, e) {
                let i = new Set
                  , n = new Set
                  , r = !1
                  , o = !1
                  , a = new WeakSet
                  , l = {
                    delta: 0,
                    timestamp: 0,
                    isProcessing: !1
                }
                  , u = 0;
                function h(e) {
                    a.has(e) && (c.schedule(e),
                    t()),
                    u++,
                    e(l)
                }
                let c = {
                    schedule: (t, e=!1, s=!1) => {
                        let o = s && r ? i : n;
                        return e && a.add(t),
                        o.has(t) || o.add(t),
                        t
                    }
                    ,
                    cancel: t => {
                        n.delete(t),
                        a.delete(t)
                    }
                    ,
                    process: t => {
                        if (l = t,
                        r) {
                            o = !0;
                            return
                        }
                        r = !0,
                        [i,n] = [n, i],
                        i.forEach(h),
                        e && s.f.value && s.f.value.frameloop[e].push(u),
                        u = 0,
                        i.clear(),
                        r = !1,
                        o && (o = !1,
                        c.process(t))
                    }
                };
                return c
            }(l, e ? i : void 0),
            t), {})
              , {read: h, resolveKeyframes: c, update: d, preRender: p, render: f, postRender: m} = u
              , v = () => {
                let r = n.c.useManualTiming ? a.timestamp : performance.now();
                i = !1,
                n.c.useManualTiming || (a.delta = o ? 1e3 / 60 : Math.max(Math.min(r - a.timestamp, 40), 1)),
                a.timestamp = r,
                a.isProcessing = !0,
                h.process(a),
                c.process(a),
                d.process(a),
                p.process(a),
                f.process(a),
                m.process(a),
                a.isProcessing = !1,
                i && e && (o = !1,
                t(v))
            }
              , g = () => {
                i = !0,
                o = !0,
                a.isProcessing || t(v)
            }
            ;
            return {
                schedule: r.reduce( (t, e) => {
                    let n = u[e];
                    return t[e] = (t, e=!1, r=!1) => (i || g(),
                    n.schedule(t, e, r)),
                    t
                }
                , {}),
                cancel: t => {
                    for (let e = 0; e < r.length; e++)
                        u[r[e]].cancel(t)
                }
                ,
                state: a,
                steps: u
            }
        }
    },
    1872: function(t, e, i) {
        "use strict";
        i.d(e, {
            Pn: function() {
                return s
            },
            Wi: function() {
                return r
            },
            frameData: function() {
                return o
            },
            yL: function() {
                return a
            }
        });
        var n = i(757);
        let {schedule: r, cancel: s, state: o, steps: a} = (0,
        i(5990).Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z, !0)
    },
    7052: function(t, e, i) {
        "use strict";
        let n;
        i.d(e, {
            X: function() {
                return a
            }
        });
        var r = i(8151)
          , s = i(1872);
        function o() {
            n = void 0
        }
        let a = {
            now: () => (void 0 === n && a.set(s.frameData.isProcessing || r.c.useManualTiming ? s.frameData.timestamp : performance.now()),
            n),
            set: t => {
                n = t,
                queueMicrotask(o)
            }
        }
    },
    7445: function(t, e, i) {
        "use strict";
        function n(t) {
            return null !== t && "object" == typeof t && "function" == typeof t.start
        }
        i.d(e, {
            E: function() {
                return i7
            }
        });
        var r, s, o, a = i(4287), l = i(6089);
        function u(t, e) {
            if (!Array.isArray(e))
                return !1;
            let i = e.length;
            if (i !== t.length)
                return !1;
            for (let n = 0; n < i; n++)
                if (e[n] !== t[n])
                    return !1;
            return !0
        }
        function h(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        let c = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , d = ["initial", ...c]
          , p = d.length;
        var f = i(9201);
        let m = [...c].reverse()
          , v = c.length;
        function g(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        function y() {
            return {
                animate: g(!0),
                whileInView: g(),
                whileHover: g(),
                whileTap: g(),
                whileDrag: g(),
                whileFocus: g(),
                exit: g()
            }
        }
        class x {
            constructor(t) {
                this.isMounted = !1,
                this.node = t
            }
            update() {}
        }
        class P extends x {
            constructor(t) {
                super(t),
                t.animationState || (t.animationState = function(t) {
                    let e = e => Promise.all(e.map( ({animation: e, options: i}) => (0,
                    a.d)(t, e, i)))
                      , i = y()
                      , r = !0
                      , s = e => (i, n) => {
                        var r;
                        let s = (0,
                        f.x)(t, n, "exit" === e ? null === (r = t.presenceContext) || void 0 === r ? void 0 : r.custom : void 0);
                        if (s) {
                            let {transition: t, transitionEnd: e, ...n} = s;
                            i = {
                                ...i,
                                ...n,
                                ...e
                            }
                        }
                        return i
                    }
                    ;
                    function o(o) {
                        let {props: a} = t
                          , c = function t(e) {
                            if (!e)
                                return;
                            if (!e.isControllingVariants) {
                                let i = e.parent && t(e.parent) || {};
                                return void 0 !== e.props.initial && (i.initial = e.props.initial),
                                i
                            }
                            let i = {};
                            for (let t = 0; t < p; t++) {
                                let n = d[t]
                                  , r = e.props[n];
                                (h(r) || !1 === r) && (i[n] = r)
                            }
                            return i
                        }(t.parent) || {}
                          , g = []
                          , y = new Set
                          , x = {}
                          , P = 1 / 0;
                        for (let e = 0; e < v; e++) {
                            var T;
                            let d = m[e]
                              , p = i[d]
                              , f = void 0 !== a[d] ? a[d] : c[d]
                              , v = h(f)
                              , w = d === o ? p.isActive : null;
                            !1 === w && (P = e);
                            let b = f === c[d] && f !== a[d] && v;
                            if (b && r && t.manuallyAnimateOnMount && (b = !1),
                            p.protectedKeys = {
                                ...x
                            },
                            !p.isActive && null === w || !f && !p.prevProp || n(f) || "boolean" == typeof f)
                                continue;
                            let S = (T = p.prevProp,
                            "string" == typeof f ? f !== T : !!Array.isArray(f) && !u(f, T))
                              , A = S || d === o && p.isActive && !b && v || e > P && v
                              , E = !1
                              , M = Array.isArray(f) ? f : [f]
                              , D = M.reduce(s(d), {});
                            !1 === w && (D = {});
                            let {prevResolvedValues: V={}} = p
                              , C = {
                                ...V,
                                ...D
                            }
                              , R = e => {
                                A = !0,
                                y.has(e) && (E = !0,
                                y.delete(e)),
                                p.needsAnimating[e] = !0;
                                let i = t.getValue(e);
                                i && (i.liveStyle = !1)
                            }
                            ;
                            for (let t in C) {
                                let e = D[t]
                                  , i = V[t];
                                if (!x.hasOwnProperty(t))
                                    ((0,
                                    l.C)(e) && (0,
                                    l.C)(i) ? u(e, i) : e === i) ? void 0 !== e && y.has(t) ? R(t) : p.protectedKeys[t] = !0 : null != e ? R(t) : y.add(t)
                            }
                            p.prevProp = f,
                            p.prevResolvedValues = D,
                            p.isActive && (x = {
                                ...x,
                                ...D
                            }),
                            r && t.blockInitialAnimation && (A = !1);
                            let k = !(b && S) || E;
                            A && k && g.push(...M.map(t => ({
                                animation: t,
                                options: {
                                    type: d
                                }
                            })))
                        }
                        if (y.size) {
                            let e = {};
                            if ("boolean" != typeof a.initial) {
                                let i = (0,
                                f.x)(t, Array.isArray(a.initial) ? a.initial[0] : a.initial);
                                i && i.transition && (e.transition = i.transition)
                            }
                            y.forEach(i => {
                                let n = t.getBaseTarget(i)
                                  , r = t.getValue(i);
                                r && (r.liveStyle = !0),
                                e[i] = null != n ? n : null
                            }
                            ),
                            g.push({
                                animation: e
                            })
                        }
                        let w = !!g.length;
                        return r && (!1 === a.initial || a.initial === a.animate) && !t.manuallyAnimateOnMount && (w = !1),
                        r = !1,
                        w ? e(g) : Promise.resolve()
                    }
                    return {
                        animateChanges: o,
                        setActive: function(e, n) {
                            var r;
                            if (i[e].isActive === n)
                                return Promise.resolve();
                            null === (r = t.variantChildren) || void 0 === r || r.forEach(t => {
                                var i;
                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                            }
                            ),
                            i[e].isActive = n;
                            let s = o(e);
                            for (let t in i)
                                i[t].protectedKeys = {};
                            return s
                        },
                        setAnimateFunction: function(i) {
                            e = i(t)
                        },
                        getState: () => i,
                        reset: () => {
                            i = y(),
                            r = !0
                        }
                    }
                }(t))
            }
            updateAnimationControlsSubscription() {
                let {animate: t} = this.node.getProps();
                n(t) && (this.unmountControls = t.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {animate: t} = this.node.getProps()
                  , {animate: e} = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
            }
            unmount() {
                var t;
                this.node.animationState.reset(),
                null === (t = this.unmountControls) || void 0 === t || t.call(this)
            }
        }
        let T = 0;
        class w extends x {
            constructor() {
                super(...arguments),
                this.id = T++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                let {isPresent: t, onExitComplete: e} = this.node.presenceContext
                  , {isPresent: i} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === i)
                    return;
                let n = this.node.animationState.setActive("exit", !t);
                e && !t && n.then( () => {
                    e(this.id)
                }
                )
            }
            mount() {
                let {register: t, onExitComplete: e} = this.node.presenceContext || {};
                e && e(this.id),
                t && (this.unmount = t(this.id))
            }
            unmount() {}
        }
        var b = i(757)
          , S = i(8652)
          , A = i(5620)
          , E = i(3286);
        function M(t, e, i, n={
            passive: !0
        }) {
            return t.addEventListener(e, i, n),
            () => t.removeEventListener(e, i)
        }
        function D(t) {
            return {
                point: {
                    x: t.pageX,
                    y: t.pageY
                }
            }
        }
        let V = t => e => (0,
        S.DJ)(e) && t(e, D(e));
        function C(t, e, i, n) {
            return M(t, e, V(i), n)
        }
        function R({top: t, left: e, right: i, bottom: n}) {
            return {
                x: {
                    min: e,
                    max: i
                },
                y: {
                    min: t,
                    max: n
                }
            }
        }
        var k = i(7352);
        function L(t) {
            return t.max - t.min
        }
        function j(t, e, i, n=.5) {
            t.origin = n,
            t.originPoint = (0,
            k.t)(e.min, e.max, t.origin),
            t.scale = L(i) / L(e),
            t.translate = (0,
            k.t)(i.min, i.max, t.origin) - t.originPoint,
            (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1),
            (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
        }
        function F(t, e, i, n) {
            j(t.x, e.x, i.x, n ? n.originX : void 0),
            j(t.y, e.y, i.y, n ? n.originY : void 0)
        }
        function B(t, e, i) {
            t.min = i.min + e.min,
            t.max = t.min + L(e)
        }
        function O(t, e, i) {
            t.min = e.min - i.min,
            t.max = t.min + L(e)
        }
        function I(t, e, i) {
            O(t.x, e.x, i.x),
            O(t.y, e.y, i.y)
        }
        let $ = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , W = () => ({
            x: $(),
            y: $()
        })
          , U = () => ({
            min: 0,
            max: 0
        })
          , N = () => ({
            x: U(),
            y: U()
        });
        function X(t) {
            return [t("x"), t("y")]
        }
        function z(t) {
            return void 0 === t || 1 === t
        }
        function Y({scale: t, scaleX: e, scaleY: i}) {
            return !z(t) || !z(e) || !z(i)
        }
        function K(t) {
            return Y(t) || H(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
        }
        function H(t) {
            var e, i;
            return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
        }
        function Z(t, e, i, n, r) {
            return void 0 !== r && (t = n + r * (t - n)),
            n + i * (t - n) + e
        }
        function _(t, e=0, i=1, n, r) {
            t.min = Z(t.min, e, i, n, r),
            t.max = Z(t.max, e, i, n, r)
        }
        function q(t, {x: e, y: i}) {
            _(t.x, e.translate, e.scale, e.originPoint),
            _(t.y, i.translate, i.scale, i.originPoint)
        }
        function G(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function J(t, e, i, n, r=.5) {
            let s = (0,
            k.t)(t.min, t.max, r);
            _(t, e, i, s, n)
        }
        function Q(t, e) {
            J(t.x, e.x, e.scaleX, e.scale, e.originX),
            J(t.y, e.y, e.scaleY, e.scale, e.originY)
        }
        function tt(t, e) {
            return R(function(t, e) {
                if (!e)
                    return t;
                let i = e({
                    x: t.left,
                    y: t.top
                })
                  , n = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: i.y,
                    left: i.x,
                    bottom: n.y,
                    right: n.x
                }
            }(t.getBoundingClientRect(), e))
        }
        function te(t) {
            return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        var ti = i(2836)
          , tn = i(4340)
          , tr = i(1479);
        let ts = (t, e) => Math.abs(t - e);
        var to = i(1554)
          , ta = i(1872);
        class tl {
            constructor(t, e, {transformPagePoint: i, dragSnapToOrigin: n=!1}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.updatePoint = () => {
                    var t, e;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let i = tc(this.lastMoveEventInfo, this.history)
                      , n = null !== this.startEvent
                      , r = (t = i.offset,
                    e = {
                        x: 0,
                        y: 0
                    },
                    Math.sqrt(ts(t.x, e.x) ** 2 + ts(t.y, e.y) ** 2) >= 3);
                    if (!n && !r)
                        return;
                    let {point: s} = i
                      , {timestamp: o} = ta.frameData;
                    this.history.push({
                        ...s,
                        timestamp: o
                    });
                    let {onStart: a, onMove: l} = this.handlers;
                    n || (a && a(this.lastMoveEvent, i),
                    this.startEvent = this.lastMoveEvent),
                    l && l(this.lastMoveEvent, i)
                }
                ,
                this.handlePointerMove = (t, e) => {
                    if (t.target instanceof Element && t.target.hasPointerCapture && void 0 !== t.pointerId)
                        try {
                            if (!t.target.hasPointerCapture(t.pointerId))
                                return
                        } catch (t) {}
                    this.lastMoveEvent = t,
                    this.lastMoveEventInfo = tu(e, this.transformPagePoint),
                    ta.Wi.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t, e) => {
                    (0,
                    S.th)(t, "release"),
                    this.end();
                    let {onEnd: i, onSessionEnd: n, resumeAnimation: r} = this.handlers;
                    if (this.dragSnapToOrigin && r && r(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let s = tc("pointercancel" === t.type || "lostpointercapture" === t.type ? this.lastMoveEventInfo : tu(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, s),
                    n && n(t, s)
                }
                ,
                !(0,
                S.DJ)(t))
                    return;
                this.dragSnapToOrigin = n,
                this.handlers = e,
                this.transformPagePoint = i;
                let r = tu(D(t), this.transformPagePoint)
                  , {point: s} = r
                  , {timestamp: o} = ta.frameData;
                this.history = [{
                    ...s,
                    timestamp: o
                }];
                let {onSessionStart: a} = e;
                a && a(t, tc(r, this.history)),
                (0,
                S.th)(t, "set"),
                this.removeListeners = (0,
                to.z)(C(t.currentTarget, "pointermove", this.handlePointerMove), C(t.currentTarget, "pointerup", this.handlePointerUp), C(t.currentTarget, "pointercancel", this.handlePointerUp), C(t.currentTarget, "lostpointercapture", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                (0,
                ta.Pn)(this.updatePoint)
            }
        }
        function tu(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function th(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function tc({point: t}, e) {
            return {
                point: t,
                delta: th(t, td(e)),
                offset: th(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let i = t.length - 1
                      , n = null
                      , r = td(t);
                    for (; i >= 0 && (n = t[i],
                    !(r.timestamp - n.timestamp > (0,
                    tr.w)(.1))); )
                        i--;
                    if (!n)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = (0,
                    tr.X)(r.timestamp - n.timestamp);
                    if (0 === s)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = {
                        x: (r.x - n.x) / s,
                        y: (r.y - n.y) / s
                    };
                    return o.x === 1 / 0 && (o.x = 0),
                    o.y === 1 / 0 && (o.y = 0),
                    o
                }(e, 0)
            }
        }
        function td(t) {
            return t[t.length - 1]
        }
        var tp = i(5043)
          , tf = i(5614);
        function tm(t, e, i) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
            }
        }
        function tv(t, e) {
            let i = e.min - t.min
              , n = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([i,n] = [n, i]),
            {
                min: i,
                max: n
            }
        }
        function tg(t, e, i) {
            return {
                min: ty(t, e),
                max: ty(t, i)
            }
        }
        function ty(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let tx = new WeakMap;
        class tP {
            constructor(t) {
                this.openDragLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = N(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                let {presenceContext: i} = this.visualElement;
                if (i && !1 === i.isPresent)
                    return;
                let {dragSnapToOrigin: n} = this.getProps();
                this.panSession = new tl(t,{
                    onSessionStart: t => {
                        let {dragSnapToOrigin: i} = this.getProps();
                        i ? this.pauseAnimation() : this.stopAnimation(),
                        e && this.snapToCursor(D(t).point)
                    }
                    ,
                    onStart: (t, e) => {
                        let {drag: i, dragPropagation: n, onDragStart: r} = this.getProps();
                        if (i && !n && (this.openDragLock && this.openDragLock(),
                        this.openDragLock = (0,
                        S.KV)(i),
                        !this.openDragLock))
                            return;
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        X(t => {
                            let e = this.getAxisMotionValue(t).get() || 0;
                            if (ti.aQ.test(e)) {
                                let {projection: i} = this.visualElement;
                                if (i && i.layout) {
                                    let n = i.layout.layoutBox[t];
                                    if (n) {
                                        let t = L(n);
                                        e = parseFloat(e) / 100 * t
                                    }
                                }
                            }
                            this.originPoint[t] = e
                        }
                        ),
                        r && ta.Wi.postRender( () => r(t, e)),
                        (0,
                        tn.K)(this.visualElement, "transform");
                        let {animationState: s} = this.visualElement;
                        s && s.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (t, e) => {
                        let {dragPropagation: i, dragDirectionLock: n, onDirectionLock: r, onDrag: s} = this.getProps();
                        if (!i && !this.openDragLock)
                            return;
                        let {offset: o} = e;
                        if (n && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let i = null;
                                return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"),
                                i
                            }(o),
                            null !== this.currentDirection && r && r(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", e.point, o),
                        this.updateAxis("y", e.point, o),
                        this.visualElement.render(),
                        s && s(t, e)
                    }
                    ,
                    onSessionEnd: (t, e) => this.stop(t, e),
                    resumeAnimation: () => X(t => {
                        var e;
                        return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
                    }
                    )
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: n
                })
            }
            stop(t, e) {
                let i = this.isDragging;
                if (this.cancel(),
                !i)
                    return;
                let {velocity: n} = e;
                this.startAnimation(n);
                let {onDragEnd: r} = this.getProps();
                r && ta.Wi.postRender( () => r(t, e))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: t, animationState: e} = this.visualElement;
                t && (t.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: i} = this.getProps();
                !i && this.openDragLock && (this.openDragLock(),
                this.openDragLock = null),
                e && e.setActive("whileDrag", !1)
            }
            updateAxis(t, e, i) {
                let {drag: n} = this.getProps();
                if (!i || !tT(t, n, this.currentDirection))
                    return;
                let r = this.getAxisMotionValue(t)
                  , s = this.originPoint[t] + i[t];
                this.constraints && this.constraints[t] && (s = function(t, {min: e, max: i}, n) {
                    return void 0 !== e && t < e ? t = n ? (0,
                    k.t)(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? (0,
                    k.t)(i, t, n.max) : Math.min(t, i)),
                    t
                }(s, this.constraints[t], this.elastic[t])),
                r.set(s)
            }
            resolveConstraints() {
                var t;
                let {dragConstraints: e, dragElastic: i} = this.getProps()
                  , n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout
                  , r = this.constraints;
                e && te(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(t, {top: e, left: i, bottom: n, right: r}) {
                    return {
                        x: tm(t.x, i, r),
                        y: tm(t.y, e, n)
                    }
                }(n.layoutBox, e) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: tg(t, "left", "right"),
                        y: tg(t, "top", "bottom")
                    }
                }(i),
                r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && X(t => {
                    !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let i = {};
                        return void 0 !== e.min && (i.min = e.min - t.min),
                        void 0 !== e.max && (i.max = e.max - t.min),
                        i
                    }(n.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: i} = this.getProps();
                if (!e || !te(e))
                    return !1;
                let n = e.current;
                (0,
                A.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: r} = this.visualElement;
                if (!r || !r.layout)
                    return !1;
                let s = function(t, e, i) {
                    let n = tt(t, i)
                      , {scroll: r} = e;
                    return r && (G(n.x, r.offset.x),
                    G(n.y, r.offset.y)),
                    n
                }(n, r.root, this.visualElement.getTransformPagePoint())
                  , o = {
                    x: tv((t = r.layout.layoutBox).x, s.x),
                    y: tv(t.y, s.y)
                };
                if (i) {
                    let t = i(function({x: t, y: e}) {
                        return {
                            top: e.min,
                            right: t.max,
                            bottom: e.max,
                            left: t.min
                        }
                    }(o));
                    this.hasMutatedConstraints = !!t,
                    t && (o = R(t))
                }
                return o
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: i, dragElastic: n, dragTransition: r, dragSnapToOrigin: s, onDragTransitionEnd: o} = this.getProps()
                  , a = this.constraints || {};
                return Promise.all(X(o => {
                    if (!tT(o, e, this.currentDirection))
                        return;
                    let l = a && a[o] || {};
                    s && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: i ? t[o] : 0,
                        bounceStiffness: n ? 200 : 1e6,
                        bounceDamping: n ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...r,
                        ...l
                    };
                    return this.startAxisValueAnimation(o, u)
                }
                )).then(o)
            }
            startAxisValueAnimation(t, e) {
                let i = this.getAxisMotionValue(t);
                return (0,
                tn.K)(this.visualElement, t),
                i.start((0,
                E.v)(t, i, 0, e, this.visualElement, !1))
            }
            stopAnimation() {
                X(t => this.getAxisMotionValue(t).stop())
            }
            pauseAnimation() {
                X(t => {
                    var e;
                    return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
                }
                )
            }
            getAnimationState(t) {
                var e;
                return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
            }
            getAxisMotionValue(t) {
                let e = `_drag${t.toUpperCase()}`
                  , i = this.visualElement.getProps();
                return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
            }
            snapToCursor(t) {
                X(e => {
                    let {drag: i} = this.getProps();
                    if (!tT(e, i, this.currentDirection))
                        return;
                    let {projection: n} = this.visualElement
                      , r = this.getAxisMotionValue(e);
                    if (n && n.layout) {
                        let {min: i, max: s} = n.layout.layoutBox[e];
                        r.set(t[e] - (0,
                        k.t)(i, s, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: t, dragConstraints: e} = this.getProps()
                  , {projection: i} = this.visualElement;
                if (!te(e) || !i || !this.constraints)
                    return;
                this.stopAnimation();
                let n = {
                    x: 0,
                    y: 0
                };
                X(t => {
                    let e = this.getAxisMotionValue(t);
                    if (e && !1 !== this.constraints) {
                        let i = e.get();
                        n[t] = function(t, e) {
                            let i = .5
                              , n = L(t)
                              , r = L(e);
                            return r > n ? i = (0,
                            tp.Y)(e.min, e.max - n, t.min) : n > r && (i = (0,
                            tp.Y)(t.min, t.max - r, e.min)),
                            (0,
                            tf.u)(0, 1, i)
                        }({
                            min: i,
                            max: i
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: r} = this.visualElement.getProps();
                this.visualElement.current.style.transform = r ? r({}, "") : "none",
                i.root && i.root.updateScroll(),
                i.updateLayout(),
                this.resolveConstraints(),
                X(e => {
                    if (!tT(e, t, null))
                        return;
                    let i = this.getAxisMotionValue(e)
                      , {min: r, max: s} = this.constraints[e];
                    i.set((0,
                    k.t)(r, s, n[e]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                tx.set(this.visualElement, this);
                let t = C(this.visualElement.current, "pointerdown", t => {
                    let {drag: e, dragListener: i=!0} = this.getProps();
                    e && i && this.start(t)
                }
                )
                  , e = () => {
                    let {dragConstraints: t} = this.getProps();
                    te(t) && t.current && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: i} = this.visualElement
                  , n = i.addEventListener("measure", e);
                i && !i.layout && (i.root && i.root.updateScroll(),
                i.updateLayout()),
                ta.Wi.read(e);
                let r = M(window, "resize", () => this.scalePositionWithinConstraints())
                  , s = i.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
                    this.isDragging && e && (X(e => {
                        let i = this.getAxisMotionValue(e);
                        i && (this.originPoint[e] += t[e].translate,
                        i.set(i.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return () => {
                    r(),
                    t(),
                    n(),
                    s && s()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: i=!1, dragPropagation: n=!1, dragConstraints: r=!1, dragElastic: s=.35, dragMomentum: o=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: i,
                    dragPropagation: n,
                    dragConstraints: r,
                    dragElastic: s,
                    dragMomentum: o
                }
            }
        }
        function tT(t, e, i) {
            return (!0 === e || e === t) && (null === i || i === t)
        }
        class tw extends x {
            constructor(t) {
                super(t),
                this.removeGroupControls = b.Z,
                this.removeListeners = b.Z,
                this.controls = new tP(t)
            }
            mount() {
                let {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || b.Z
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        let tb = t => (e, i) => {
            t && ta.Wi.postRender( () => t(e, i))
        }
        ;
        class tS extends x {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = b.Z
            }
            onPointerDown(t) {
                this.session = new tl(t,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint()
                })
            }
            createPanHandlers() {
                let {onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: n} = this.node.getProps();
                return {
                    onSessionStart: tb(t),
                    onStart: tb(e),
                    onMove: i,
                    onEnd: (t, e) => {
                        delete this.session,
                        n && ta.Wi.postRender( () => n(t, e))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = C(this.node.current, "pointerdown", t => this.onPointerDown(t))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
        var tA = i(288)
          , tE = i(5192)
          , tM = i(774)
          , tD = i(9272);
        let tV = (0,
        tE.createContext)({})
          , tC = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function tR(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let tk = {
            correct: (t, e) => {
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!ti.px.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let i = tR(t, e.target.x)
                  , n = tR(t, e.target.y);
                return `${i}% ${n}%`
            }
        };
        var tL = i(6934)
          , tj = i(2852);
        let tF = {}
          , {schedule: tB, cancel: tO} = (0,
        i(5990).Z)(queueMicrotask, !1);
        class tI extends tE.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: n} = this.props
                  , {projection: r} = t;
                !function(t) {
                    for (let e in t)
                        tF[e] = t[e],
                        (0,
                        tj.f)(e) && (tF[e].isCSSVariable = !0)
                }(tW),
                r && (e.group && e.group.add(r),
                i && i.register && n && i.register(r),
                r.root.didUpdate(),
                r.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                r.setOptions({
                    ...r.options,
                    onExitComplete: () => this.safeToRemove()
                })),
                tC.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: i, drag: n, isPresent: r} = this.props
                  , s = i.projection;
                return s && (s.isPresent = r,
                n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(),
                t.isPresent === r || (r ? s.promote() : s.relegate() || ta.Wi.postRender( () => {
                    let t = s.getStack();
                    t && t.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                tB.postRender( () => {
                    !t.currentAnimation && t.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: i} = this.props
                  , {projection: n} = t;
                n && (n.scheduleCheckAfterUnmount(),
                e && e.group && e.group.remove(n),
                i && i.deregister && i.deregister(n))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                t && t()
            }
            render() {
                return null
            }
        }
        function t$(t) {
            let[e,i] = (0,
            tM.oO)()
              , n = (0,
            tE.useContext)(tD.p);
            return (0,
            tA.jsx)(tI, {
                ...t,
                layoutGroup: n,
                switchLayoutGroup: (0,
                tE.useContext)(tV),
                isPresent: e,
                safeToRemove: i
            })
        }
        let tW = {
            borderRadius: {
                ...tk,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: tk,
            borderTopRightRadius: tk,
            borderBottomLeftRadius: tk,
            borderBottomRightRadius: tk,
            boxShadow: {
                correct: (t, {treeScale: e, projectionDelta: i}) => {
                    let n = tL.P.parse(t);
                    if (n.length > 5)
                        return t;
                    let r = tL.P.createTransformer(t)
                      , s = "number" != typeof n[0] ? 1 : 0
                      , o = i.x.scale * e.x
                      , a = i.y.scale * e.y;
                    n[0 + s] /= o,
                    n[1 + s] /= a;
                    let l = (0,
                    k.t)(o, a, .5);
                    return "number" == typeof n[2 + s] && (n[2 + s] /= l),
                    "number" == typeof n[3 + s] && (n[3 + s] /= l),
                    r(n)
                }
            }
        };
        var tU = i(5490)
          , tN = i(8005)
          , tX = i(4384)
          , tz = i(7052)
          , tY = i(9571);
        let tK = (t, e) => t.depth - e.depth;
        class tH {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                (0,
                tY.y4)(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                (0,
                tY.cl)(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(tK),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        var tZ = i(1064)
          , t_ = i(4311)
          , tq = i(514)
          , tG = i(896);
        function tJ(t) {
            let e = (0,
            tN.i)(t) ? t.get() : t;
            return (0,
            tG.p)(e) ? e.toValue() : e
        }
        var tQ = i(225);
        let t0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , t1 = t0.length
          , t2 = t => "string" == typeof t ? parseFloat(t) : t
          , t5 = t => "number" == typeof t || ti.px.test(t);
        function t3(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let t7 = t9(0, .5, tQ.Bn)
          , t4 = t9(.5, .95, b.Z);
        function t9(t, e, i) {
            return n => n < t ? 0 : n > e ? 1 : i((0,
            tp.Y)(t, e, n))
        }
        function t8(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function t6(t, e) {
            t8(t.x, e.x),
            t8(t.y, e.y)
        }
        function et(t, e) {
            t.translate = e.translate,
            t.scale = e.scale,
            t.originPoint = e.originPoint,
            t.origin = e.origin
        }
        function ee(t, e, i, n, r) {
            return t -= e,
            t = n + 1 / i * (t - n),
            void 0 !== r && (t = n + 1 / r * (t - n)),
            t
        }
        function ei(t, e, [i,n,r], s, o) {
            !function(t, e=0, i=1, n=.5, r, s=t, o=t) {
                if (ti.aQ.test(e) && (e = parseFloat(e),
                e = (0,
                k.t)(o.min, o.max, e / 100) - o.min),
                "number" != typeof e)
                    return;
                let a = (0,
                k.t)(s.min, s.max, n);
                t === s && (a -= e),
                t.min = ee(t.min, e, i, a, r),
                t.max = ee(t.max, e, i, a, r)
            }(t, e[i], e[n], e[r], e.scale, s, o)
        }
        let en = ["x", "scaleX", "originX"]
          , er = ["y", "scaleY", "originY"];
        function es(t, e, i, n) {
            ei(t.x, e, en, i ? i.x : void 0, n ? n.x : void 0),
            ei(t.y, e, er, i ? i.y : void 0, n ? n.y : void 0)
        }
        function eo(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function ea(t) {
            return eo(t.x) && eo(t.y)
        }
        function el(t, e) {
            return t.min === e.min && t.max === e.max
        }
        function eu(t, e) {
            return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
        }
        function eh(t, e) {
            return eu(t.x, e.x) && eu(t.y, e.y)
        }
        function ec(t) {
            return L(t.x) / L(t.y)
        }
        function ed(t, e) {
            return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
        }
        class ep {
            constructor() {
                this.members = []
            }
            add(t) {
                (0,
                tY.y4)(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if ((0,
                tY.cl)(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let i = this.members.findIndex(e => t === e);
                if (0 === i)
                    return !1;
                for (let t = i; t >= 0; t--) {
                    let i = this.members[t];
                    if (!1 !== i.isPresent) {
                        e = i;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                let i = this.lead;
                if (t !== i && (this.prevLead = i,
                this.lead = t,
                t.show(),
                i)) {
                    i.instance && i.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = i,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    i.snapshot && (t.snapshot = i.snapshot,
                    t.snapshot.latestValues = i.animationValues || i.latestValues),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                    let {crossfade: n} = t.options;
                    !1 === n && i.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t => {
                    let {options: e, resumingFrom: i} = t;
                    e.onExitComplete && e.onExitComplete(),
                    i && i.options.onExitComplete && i.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t => {
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        let ef = {
            nodes: 0,
            calculatedTargetDeltas: 0,
            calculatedProjections: 0
        }
          , em = ["", "X", "Y", "Z"]
          , ev = {
            visibility: "hidden"
        }
          , eg = 0;
        function ey(t, e, i, n) {
            let {latestValues: r} = e;
            r[t] && (i[t] = r[t],
            e.setStaticValue(t, 0),
            n && (n[t] = 0))
        }
        function ex({attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: n, resetTransform: r}) {
            return class {
                constructor(t={}, i=null == e ? void 0 : e()) {
                    this.id = eg++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.hasCheckedOptimisedAppear = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.scheduleUpdate = () => this.update(),
                    this.projectionUpdateScheduled = !1,
                    this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = () => {
                        this.projectionUpdateScheduled = !1,
                        t_.f.value && (ef.nodes = ef.calculatedTargetDeltas = ef.calculatedProjections = 0),
                        this.nodes.forEach(ew),
                        this.nodes.forEach(eV),
                        this.nodes.forEach(eC),
                        this.nodes.forEach(eb),
                        t_.f.addProjectionMetrics && t_.f.addProjectionMetrics(ef)
                    }
                    ,
                    this.resolvedRelativeTargetAt = 0,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = t,
                    this.root = i ? i.root || i : this,
                    this.path = i ? [...i.path, i] : [],
                    this.parent = i,
                    this.depth = i ? i.depth + 1 : 0;
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new tH)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new tq.L),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let i = this.eventHandlers.get(t);
                    i && i.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                mount(e, i=this.root.hasTreeAnimated) {
                    if (this.instance)
                        return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                    this.instance = e;
                    let {layoutId: n, layout: r, visualElement: s} = this.options;
                    if (s && !s.current && s.mount(e),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    i && (r || n) && (this.isLayoutDirty = !0),
                    t) {
                        let i;
                        let n = () => this.root.updateBlockedByResize = !1;
                        t(e, () => {
                            this.root.updateBlockedByResize = !0,
                            i && i(),
                            i = function(t, e) {
                                let i = tz.X.now()
                                  , n = ({timestamp: e}) => {
                                    let r = e - i;
                                    r >= 250 && ((0,
                                    ta.Pn)(n),
                                    t(r - 250))
                                }
                                ;
                                return ta.Wi.read(n, !0),
                                () => (0,
                                ta.Pn)(n)
                            }(n, 0),
                            tC.hasAnimatedSinceResize && (tC.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(eD))
                        }
                        )
                    }
                    n && this.root.registerSharedNode(n, this),
                    !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeLayoutChanged: i, layout: n}) => {
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let r = this.options.transition || s.getDefaultTransition() || eB
                          , {onLayoutAnimationStart: o, onLayoutAnimationComplete: a} = s.getProps()
                          , l = !this.targetLayout || !eh(this.targetLayout, n)
                          , u = !e && i;
                        if (this.options.layoutRoot || this.resumeFrom || u || e && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, u);
                            let e = {
                                ...(0,
                                S.ev)(r, "layout"),
                                onPlay: o,
                                onComplete: a
                            };
                            (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || eD(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = n
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let t = this.getStack();
                    t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    (0,
                    ta.Pn)(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(eR),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: t} = this.options;
                    return t && t.getProps().transformTemplate
                }
                willUpdate(t=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                        if (e.hasCheckedOptimisedAppear = !0,
                        e.root === e)
                            return;
                        let {visualElement: i} = e.options;
                        if (!i)
                            return;
                        let n = (0,
                        tX.s)(i);
                        if (window.MotionHasOptimisedAnimation(n, "transform")) {
                            let {layout: t, layoutId: i} = e.options;
                            window.MotionCancelOptimisedAnimation(n, "transform", ta.Wi, !(t || i))
                        }
                        let {parent: r} = e;
                        r && !r.hasCheckedOptimisedAppear && t(r)
                    }(this),
                    this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot"),
                        e.options.layoutRoot && e.willUpdate(!1)
                    }
                    let {layoutId: e, layout: i} = this.options;
                    if (void 0 === e && !i)
                        return;
                    let n = this.getTransformTemplate();
                    this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                update() {
                    if (this.updateScheduled = !1,
                    this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(eA);
                        return
                    }
                    this.isUpdating || this.nodes.forEach(eE),
                    this.isUpdating = !1,
                    this.nodes.forEach(eM),
                    this.nodes.forEach(eP),
                    this.nodes.forEach(eT),
                    this.clearAllSnapshots();
                    let t = tz.X.now();
                    ta.frameData.delta = (0,
                    tf.u)(0, 1e3 / 60, t - ta.frameData.timestamp),
                    ta.frameData.timestamp = t,
                    ta.frameData.isProcessing = !0,
                    ta.yL.update.process(ta.frameData),
                    ta.yL.preRender.process(ta.frameData),
                    ta.yL.render.process(ta.frameData),
                    ta.frameData.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    tB.read(this.scheduleUpdate))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(eS),
                    this.sharedNodes.forEach(ek)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                    ta.Wi.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    ta.Wi.postRender( () => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    this.snapshot || !this.instance || (this.snapshot = this.measure(),
                    !this.snapshot || L(this.snapshot.measuredBox.x) || L(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++)
                            this.path[t].updateScroll();
                    let t = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = N(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: e} = this.options;
                    e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e) {
                        let e = n(this.instance);
                        this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: e,
                            offset: i(this.instance),
                            wasRoot: this.scroll ? this.scroll.isRoot : e
                        }
                    }
                }
                resetTransform() {
                    if (!r)
                        return;
                    let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                      , e = this.projectionDelta && !ea(this.projectionDelta)
                      , i = this.getTransformTemplate()
                      , n = i ? i(this.latestValues, "") : void 0
                      , s = n !== this.prevTransformTemplateValue;
                    t && (e || K(this.latestValues) || s) && (r(this.instance, n),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let i = this.measurePageBox()
                      , n = this.removeElementScroll(i);
                    return t && (n = this.removeTransform(n)),
                    e$((e = n).x),
                    e$(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: i,
                        layoutBox: n,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    var t;
                    let {visualElement: e} = this.options;
                    if (!e)
                        return N();
                    let i = e.measureViewportBox();
                    if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(eU))) {
                        let {scroll: t} = this.root;
                        t && (G(i.x, t.offset.x),
                        G(i.y, t.offset.y))
                    }
                    return i
                }
                removeElementScroll(t) {
                    var e;
                    let i = N();
                    if (t6(i, t),
                    null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
                        return i;
                    for (let e = 0; e < this.path.length; e++) {
                        let n = this.path[e]
                          , {scroll: r, options: s} = n;
                        n !== this.root && r && s.layoutScroll && (r.wasRoot && t6(i, t),
                        G(i.x, r.offset.x),
                        G(i.y, r.offset.y))
                    }
                    return i
                }
                applyTransform(t, e=!1) {
                    let i = N();
                    t6(i, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let n = this.path[t];
                        !e && n.options.layoutScroll && n.scroll && n !== n.root && Q(i, {
                            x: -n.scroll.offset.x,
                            y: -n.scroll.offset.y
                        }),
                        K(n.latestValues) && Q(i, n.latestValues)
                    }
                    return K(this.latestValues) && Q(i, this.latestValues),
                    i
                }
                removeTransform(t) {
                    let e = N();
                    t6(e, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let i = this.path[t];
                        if (!i.instance || !K(i.latestValues))
                            continue;
                        Y(i.latestValues) && i.updateSnapshot();
                        let n = N();
                        t6(n, i.measurePageBox()),
                        es(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
                    }
                    return K(this.latestValues) && es(e, this.latestValues),
                    e
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ta.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(t=!1) {
                    var e, i, n, r;
                    let s = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                    let o = !!this.resumingFrom || this !== s;
                    if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                        return;
                    let {layout: a, layoutId: l} = this.options;
                    if (this.layout && (a || l)) {
                        if (this.resolvedRelativeTargetAt = ta.frameData.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = N(),
                            this.relativeTargetOrigin = N(),
                            I(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            t6(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if ((this.target || (this.target = N(),
                            this.targetWithTransforms = N()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(),
                            i = this.target,
                            n = this.relativeTarget,
                            r = this.relativeParent.target,
                            B(i.x, n.x, r.x),
                            B(i.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : t6(this.target, this.layout.layoutBox),
                            q(this.target, this.targetDelta)) : t6(this.target, this.layout.layoutBox),
                            this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let t = this.getClosestProjectingParent();
                                t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = N(),
                                this.relativeTargetOrigin = N(),
                                I(this.relativeTargetOrigin, this.target, t.target),
                                t6(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            t_.f.value && ef.calculatedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    return !this.parent || Y(this.parent.latestValues) || H(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    var t;
                    let e = this.getLead()
                      , i = !!this.resumingFrom || this !== e
                      , n = !0;
                    if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1),
                    i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1),
                    this.resolvedRelativeTargetAt === ta.frameData.timestamp && (n = !1),
                    n)
                        return;
                    let {layout: r, layoutId: s} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(r || s))
                        return;
                    t6(this.layoutCorrected, this.layout.layoutBox);
                    let o = this.treeScale.x
                      , a = this.treeScale.y;
                    !function(t, e, i, n=!1) {
                        let r, s;
                        let o = i.length;
                        if (o) {
                            e.x = e.y = 1;
                            for (let a = 0; a < o; a++) {
                                s = (r = i[a]).projectionDelta;
                                let {visualElement: o} = r.options;
                                (!o || !o.props.style || "contents" !== o.props.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && Q(t, {
                                    x: -r.scroll.offset.x,
                                    y: -r.scroll.offset.y
                                }),
                                s && (e.x *= s.x.scale,
                                e.y *= s.y.scale,
                                q(t, s)),
                                n && K(r.latestValues) && Q(t, r.latestValues))
                            }
                            e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1),
                            e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, i),
                    e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox,
                    e.targetWithTransforms = N());
                    let {target: l} = e;
                    if (!l) {
                        this.prevProjectionDelta && (this.createProjectionDeltas(),
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta && this.prevProjectionDelta ? (et(this.prevProjectionDelta.x, this.projectionDelta.x),
                    et(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
                    F(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.treeScale.x === o && this.treeScale.y === a && ed(this.projectionDelta.x, this.prevProjectionDelta.x) && ed(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l)),
                    t_.f.value && ef.calculatedProjections++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    var e;
                    if (null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(),
                    t) {
                        let t = this.getStack();
                        t && t.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                createProjectionDeltas() {
                    this.prevProjectionDelta = W(),
                    this.projectionDelta = W(),
                    this.projectionDeltaWithTransform = W()
                }
                setAnimationOrigin(t, e=!1) {
                    let i;
                    let n = this.snapshot
                      , r = n ? n.latestValues : {}
                      , s = {
                        ...this.latestValues
                    }
                      , o = W();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !e;
                    let a = N()
                      , l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , u = this.getStack()
                      , h = !u || u.members.length <= 1
                      , c = !!(l && !h && !0 === this.options.crossfade && !this.path.some(eF));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e => {
                        let n = e / 1e3;
                        if (eL(o.x, t.x, n),
                        eL(o.y, t.y, n),
                        this.setTargetDelta(o),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var u, d, p, f;
                            I(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            p = this.relativeTarget,
                            f = this.relativeTargetOrigin,
                            ej(p.x, f.x, a.x, n),
                            ej(p.y, f.y, a.y, n),
                            i && (u = this.relativeTarget,
                            d = i,
                            el(u.x, d.x) && el(u.y, d.y)) && (this.isProjectionDirty = !1),
                            i || (i = N()),
                            t6(i, this.relativeTarget)
                        }
                        l && (this.animationValues = s,
                        function(t, e, i, n, r, s) {
                            r ? (t.opacity = (0,
                            k.t)(0, void 0 !== i.opacity ? i.opacity : 1, t7(n)),
                            t.opacityExit = (0,
                            k.t)(void 0 !== e.opacity ? e.opacity : 1, 0, t4(n))) : s && (t.opacity = (0,
                            k.t)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                            for (let r = 0; r < t1; r++) {
                                let s = `border${t0[r]}Radius`
                                  , o = t3(e, s)
                                  , a = t3(i, s);
                                (void 0 !== o || void 0 !== a) && (o || (o = 0),
                                a || (a = 0),
                                0 === o || 0 === a || t5(o) === t5(a) ? (t[s] = Math.max((0,
                                k.t)(t2(o), t2(a), n), 0),
                                (ti.aQ.test(a) || ti.aQ.test(o)) && (t[s] += "%")) : t[s] = a)
                            }
                            (e.rotate || i.rotate) && (t.rotate = (0,
                            k.t)(e.rotate || 0, i.rotate || 0, n))
                        }(s, r, this.latestValues, n, c, h)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = n
                    }
                    ,
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                }
                startAnimation(t) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation && ((0,
                    ta.Pn)(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = ta.Wi.update( () => {
                        tC.hasAnimatedSinceResize = !0,
                        tZ.P.layout++,
                        this.currentAnimation = function(t, e, i) {
                            let n = (0,
                            tN.i)(0) ? 0 : (0,
                            tU.BX)(0);
                            return n.start((0,
                            E.v)("", n, 1e3, i)),
                            n.animation
                        }(0, 0, {
                            ...t,
                            onUpdate: e => {
                                this.mixTargetDelta(e),
                                t.onUpdate && t.onUpdate(e)
                            }
                            ,
                            onStop: () => {
                                tZ.P.layout--
                            }
                            ,
                            onComplete: () => {
                                tZ.P.layout--,
                                t.onComplete && t.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let t = this.getStack();
                    t && t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: i, layout: n, latestValues: r} = t;
                    if (e && i && n) {
                        if (this !== t && this.layout && n && eW(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                            i = this.target || N();
                            let e = L(this.layout.layoutBox.x);
                            i.x.min = t.target.x.min,
                            i.x.max = i.x.min + e;
                            let n = L(this.layout.layoutBox.y);
                            i.y.min = t.target.y.min,
                            i.y.max = i.y.min + n
                        }
                        t6(e, i),
                        Q(e, r),
                        F(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                    }
                }
                registerSharedNode(t, e) {
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new ep),
                    this.sharedNodes.get(t).add(e);
                    let i = e.options.initialPromotionConfig;
                    e.promote({
                        transition: i ? i.transition : void 0,
                        preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: i}={}) {
                    let n = this.getStack();
                    n && n.promote(this, i),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetSkewAndRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: i} = t;
                    if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0),
                    !e)
                        return;
                    let n = {};
                    i.z && ey("z", t, n, this.animationValues);
                    for (let e = 0; e < em.length; e++)
                        ey(`rotate${em[e]}`, t, n, this.animationValues),
                        ey(`skew${em[e]}`, t, n, this.animationValues);
                    for (let e in t.render(),
                    n)
                        t.setStaticValue(e, n[e]),
                        this.animationValues && (this.animationValues[e] = n[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t) {
                    var e, i;
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible)
                        return ev;
                    let n = {
                        visibility: ""
                    }
                      , r = this.getTransformTemplate();
                    if (this.needsReset)
                        return this.needsReset = !1,
                        n.opacity = "",
                        n.pointerEvents = tJ(null == t ? void 0 : t.pointerEvents) || "",
                        n.transform = r ? r(this.latestValues, "") : "none",
                        n;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = tJ(null == t ? void 0 : t.pointerEvents) || ""),
                        this.hasProjected && !K(this.latestValues) && (e.transform = r ? r({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let o = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(),
                    n.transform = function(t, e, i) {
                        let n = ""
                          , r = t.x.translate / e.x
                          , s = t.y.translate / e.y
                          , o = (null == i ? void 0 : i.z) || 0;
                        if ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                        (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                        i) {
                            let {transformPerspective: t, rotate: e, rotateX: r, rotateY: s, skewX: o, skewY: a} = i;
                            t && (n = `perspective(${t}px) ${n}`),
                            e && (n += `rotate(${e}deg) `),
                            r && (n += `rotateX(${r}deg) `),
                            s && (n += `rotateY(${s}deg) `),
                            o && (n += `skewX(${o}deg) `),
                            a && (n += `skewY(${a}deg) `)
                        }
                        let a = t.x.scale * e.x
                          , l = t.y.scale * e.y;
                        return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                        n || "none"
                    }(this.projectionDeltaWithTransform, this.treeScale, o),
                    r && (n.transform = r(o, n.transform));
                    let {x: a, y: l} = this.projectionDelta;
                    for (let t in n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
                    s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = o.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : n.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0,
                    tF) {
                        if (void 0 === o[t])
                            continue;
                        let {correct: e, applyTo: i, isCSSVariable: r} = tF[t]
                          , a = "none" === n.transform ? o[t] : e(o[t], s);
                        if (i) {
                            let t = i.length;
                            for (let e = 0; e < t; e++)
                                n[i[e]] = a
                        } else
                            r ? this.options.visualElement.renderState.vars[t] = a : n[t] = a
                    }
                    return this.options.layoutId && (n.pointerEvents = s === this ? tJ(null == t ? void 0 : t.pointerEvents) || "" : "none"),
                    n
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t => {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(eA),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function eP(t) {
            t.updateLayout()
        }
        function eT(t) {
            var e;
            let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: n} = t.layout
                  , {animationType: r} = t.options
                  , s = i.source !== t.layout.source;
                "size" === r ? X(t => {
                    let n = s ? i.measuredBox[t] : i.layoutBox[t]
                      , r = L(n);
                    n.min = e[t].min,
                    n.max = n.min + r
                }
                ) : eW(r, i.layoutBox, e) && X(n => {
                    let r = s ? i.measuredBox[n] : i.layoutBox[n]
                      , o = L(e[n]);
                    r.max = r.min + o,
                    t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                    t.relativeTarget[n].max = t.relativeTarget[n].min + o)
                }
                );
                let o = W();
                F(o, e, i.layoutBox);
                let a = W();
                s ? F(a, t.applyTransform(n, !0), i.measuredBox) : F(a, e, i.layoutBox);
                let l = !ea(o)
                  , u = !1;
                if (!t.resumeFrom) {
                    let n = t.getClosestProjectingParent();
                    if (n && !n.resumeFrom) {
                        let {snapshot: r, layout: s} = n;
                        if (r && s) {
                            let o = N();
                            I(o, i.layoutBox, r.layoutBox);
                            let a = N();
                            I(a, e, s.layoutBox),
                            eh(o, a) || (u = !0),
                            n.options.layoutRoot && (t.relativeTarget = a,
                            t.relativeTargetOrigin = o,
                            t.relativeParent = n)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: i,
                    delta: a,
                    layoutDelta: o,
                    hasLayoutChanged: l,
                    hasRelativeLayoutChanged: u
                })
            } else if (t.isLead()) {
                let {onExitComplete: e} = t.options;
                e && e()
            }
            t.options.transition = void 0
        }
        function ew(t) {
            t_.f.value && ef.nodes++,
            t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
        }
        function eb(t) {
            t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
        }
        function eS(t) {
            t.clearSnapshot()
        }
        function eA(t) {
            t.clearMeasurements()
        }
        function eE(t) {
            t.isLayoutDirty = !1
        }
        function eM(t) {
            let {visualElement: e} = t.options;
            e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function eD(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0,
            t.isProjectionDirty = !0
        }
        function eV(t) {
            t.resolveTargetDelta()
        }
        function eC(t) {
            t.calcProjection()
        }
        function eR(t) {
            t.resetSkewAndRotation()
        }
        function ek(t) {
            t.removeLeadSnapshot()
        }
        function eL(t, e, i) {
            t.translate = (0,
            k.t)(e.translate, 0, i),
            t.scale = (0,
            k.t)(e.scale, 1, i),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function ej(t, e, i, n) {
            t.min = (0,
            k.t)(e.min, i.min, n),
            t.max = (0,
            k.t)(e.max, i.max, n)
        }
        function eF(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let eB = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , eO = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
          , eI = eO("applewebkit/") && !eO("chrome/") ? Math.round : b.Z;
        function e$(t) {
            t.min = eI(t.min),
            t.max = eI(t.max)
        }
        function eW(t, e, i) {
            return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(ec(e) - ec(i)))
        }
        function eU(t) {
            var e;
            return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        }
        let eN = ex({
            attachResizeListener: (t, e) => M(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        })
          , eX = {
            current: void 0
        }
          , ez = ex({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!eX.current) {
                    let t = new eN({});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    eX.current = t
                }
                return eX.current
            }
            ,
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        });
        function eY(t, e, i) {
            let {props: n} = t;
            t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === i);
            let r = n["onHover" + i];
            r && ta.Wi.postRender( () => r(e, D(e)))
        }
        class eK extends x {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = (0,
                S.Mr)(t, (t, e) => (eY(this.node, e, "Start"),
                t => eY(this.node, t, "End"))))
            }
            unmount() {}
        }
        class eH extends x {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let t = !1;
                try {
                    t = this.node.current.matches(":focus-visible")
                } catch (e) {
                    t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = (0,
                to.z)(M(this.node.current, "focus", () => this.onFocus()), M(this.node.current, "blur", () => this.onBlur()))
            }
            unmount() {}
        }
        function eZ(t, e, i) {
            let {props: n} = t;
            if (t.current instanceof HTMLButtonElement && t.current.disabled)
                return;
            t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === i);
            let r = n["onTap" + ("End" === i ? "" : i)];
            r && ta.Wi.postRender( () => r(e, D(e)))
        }
        class e_ extends x {
            mount() {
                let {current: t} = this.node;
                t && (this.unmount = (0,
                S.OD)(t, (t, e) => (eZ(this.node, e, "Start"),
                (t, {success: e}) => eZ(this.node, t, e ? "End" : "Cancel")), {
                    useGlobalTarget: this.node.props.globalTapTarget
                }))
            }
            unmount() {}
        }
        let eq = new WeakMap
          , eG = new WeakMap
          , eJ = t => {
            let e = eq.get(t.target);
            e && e(t)
        }
          , eQ = t => {
            t.forEach(eJ)
        }
          , e0 = {
            some: 0,
            all: 1
        };
        class e1 extends x {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                let {viewport: t={}} = this.node.getProps()
                  , {root: e, margin: i, amount: n="some", once: r} = t
                  , s = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof n ? n : e0[n]
                };
                return function(t, e, i) {
                    let n = function({root: t, ...e}) {
                        let i = t || document;
                        eG.has(i) || eG.set(i, {});
                        let n = eG.get(i)
                          , r = JSON.stringify(e);
                        return n[r] || (n[r] = new IntersectionObserver(eQ,{
                            root: t,
                            ...e
                        })),
                        n[r]
                    }(e);
                    return eq.set(t, i),
                    n.observe(t),
                    () => {
                        eq.delete(t),
                        n.unobserve(t)
                    }
                }(this.node.current, s, t => {
                    let {isIntersecting: e} = t;
                    if (this.isInView === e || (this.isInView = e,
                    r && !e && this.hasEnteredView))
                        return;
                    e && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", e);
                    let {onViewportEnter: i, onViewportLeave: n} = this.node.getProps()
                      , s = e ? i : n;
                    s && s(t)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                let {props: t, prevProps: e} = this.node;
                ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                    return i => t[i] !== e[i]
                }(t, e)) && this.startObserver()
            }
            unmount() {}
        }
        let e2 = (0,
        tE.createContext)({
            strict: !1
        });
        var e5 = i(2378);
        let e3 = (0,
        tE.createContext)({});
        function e7(t) {
            return n(t.animate) || d.some(e => h(t[e]))
        }
        function e4(t) {
            return !!(e7(t) || t.variants)
        }
        function e9(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        var e8 = i(8194);
        let e6 = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , it = {};
        for (let t in e6)
            it[t] = {
                isEnabled: e => e6[t].some(t => !!e[t])
            };
        let ie = Symbol.for("motionComponentSymbol");
        var ii = i(3925)
          , ir = i(3617)
          , is = i(2755)
          , io = i(6767);
        function ia(t, {layout: e, layoutId: i}) {
            return io.G.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!tF[t] || "opacity" === t)
        }
        let il = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
        var iu = i(8822);
        let ih = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , ic = io._.length;
        function id(t, e, i) {
            let {style: n, vars: r, transformOrigin: s} = t
              , o = !1
              , a = !1;
            for (let t in e) {
                let i = e[t];
                if (io.G.has(t)) {
                    o = !0;
                    continue
                }
                if ((0,
                tj.f)(t)) {
                    r[t] = i;
                    continue
                }
                {
                    let e = il(i, iu.j[t]);
                    t.startsWith("origin") ? (a = !0,
                    s[t] = e) : n[t] = e
                }
            }
            if (!e.transform && (o || i ? n.transform = function(t, e, i) {
                let n = ""
                  , r = !0;
                for (let s = 0; s < ic; s++) {
                    let o = io._[s]
                      , a = t[o];
                    if (void 0 === a)
                        continue;
                    let l = !0;
                    if (!(l = "number" == typeof a ? a === (o.startsWith("scale") ? 1 : 0) : 0 === parseFloat(a)) || i) {
                        let t = il(a, iu.j[o]);
                        if (!l) {
                            r = !1;
                            let e = ih[o] || o;
                            n += `${e}(${t}) `
                        }
                        i && (e[o] = t)
                    }
                }
                return n = n.trim(),
                i ? n = i(e, r ? "" : n) : r && (n = "none"),
                n
            }(e, t.transform, i) : n.transform && (n.transform = "none")),
            a) {
                let {originX: t="50%", originY: e="50%", originZ: i=0} = s;
                n.transformOrigin = `${t} ${e} ${i}`
            }
        }
        let ip = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function im(t, e, i) {
            for (let n in e)
                (0,
                tN.i)(e[n]) || ia(n, i) || (t[n] = e[n])
        }
        let iv = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function ig(t) {
            return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || iv.has(t)
        }
        let iy = t => !ig(t);
        try {
            (r = require("@emotion/is-prop-valid").default) && (iy = t => t.startsWith("on") ? !ig(t) : r(t))
        } catch (t) {}
        let ix = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function iP(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (ix.indexOf(t) > -1 || /[A-Z]/u.test(t))
                return !0;
            return !1
        }
        let iT = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , iw = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function ib(t, e, i) {
            return "string" == typeof t ? t : ti.px.transform(e + i * t)
        }
        function iS(t, {attrX: e, attrY: i, attrScale: n, originX: r, originY: s, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...u}, h, c) {
            if (id(t, u, c),
            h) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: d, style: p, dimensions: f} = t;
            d.transform && (f && (p.transform = d.transform),
            delete d.transform),
            f && (void 0 !== r || void 0 !== s || p.transform) && (p.transformOrigin = function(t, e, i) {
                let n = ib(e, t.x, t.width)
                  , r = ib(i, t.y, t.height);
                return `${n} ${r}`
            }(f, void 0 !== r ? r : .5, void 0 !== s ? s : .5)),
            void 0 !== e && (d.x = e),
            void 0 !== i && (d.y = i),
            void 0 !== n && (d.scale = n),
            void 0 !== o && function(t, e, i=1, n=0, r=!0) {
                t.pathLength = 1;
                let s = r ? iT : iw;
                t[s.offset] = ti.px.transform(-n);
                let o = ti.px.transform(e)
                  , a = ti.px.transform(i);
                t[s.array] = `${o} ${a}`
            }(d, o, a, l, !1)
        }
        let iA = () => ({
            ...ip(),
            attrs: {}
        })
          , iE = t => "string" == typeof t && "svg" === t.toLowerCase();
        var iM = i(7514)
          , iD = i(7090);
        let iV = t => (e, i) => {
            let r = (0,
            tE.useContext)(e3)
              , s = (0,
            tE.useContext)(ii.O)
              , o = () => (function({scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: i}, r, s, o) {
                let a = {
                    latestValues: function(t, e, i, r) {
                        let s = {}
                          , o = r(t, {});
                        for (let t in o)
                            s[t] = tJ(o[t]);
                        let {initial: a, animate: l} = t
                          , u = e7(t)
                          , h = e4(t);
                        e && h && !u && !1 !== t.inherit && (void 0 === a && (a = e.initial),
                        void 0 === l && (l = e.animate));
                        let c = !!i && !1 === i.initial
                          , d = (c = c || !1 === a) ? l : a;
                        if (d && "boolean" != typeof d && !n(d)) {
                            let e = Array.isArray(d) ? d : [d];
                            for (let i = 0; i < e.length; i++) {
                                let n = (0,
                                iM.o)(t, e[i]);
                                if (n) {
                                    let {transitionEnd: t, transition: e, ...i} = n;
                                    for (let t in i) {
                                        let e = i[t];
                                        if (Array.isArray(e)) {
                                            let t = c ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (s[t] = e)
                                    }
                                    for (let e in t)
                                        s[e] = t[e]
                                }
                            }
                        }
                        return s
                    }(r, s, o, t),
                    renderState: e()
                };
                return i && (a.onMount = t => i({
                    props: r,
                    current: t,
                    ...a
                }),
                a.onUpdate = t => i(t)),
                a
            }
            )(t, e, r, s);
            return i ? o() : (0,
            iD.h)(o)
        }
        ;
        function iC(t, e, i) {
            var n;
            let {style: r} = t
              , s = {};
            for (let o in r)
                ((0,
                tN.i)(r[o]) || e.style && (0,
                tN.i)(e.style[o]) || ia(o, t) || (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n ? void 0 : n.liveStyle) !== void 0) && (s[o] = r[o]);
            return s
        }
        let iR = {
            useVisualState: iV({
                scrapeMotionValuesFromProps: iC,
                createRenderState: ip
            })
        };
        function ik(t, e) {
            try {
                e.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
            } catch (t) {
                e.dimensions = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }
            }
        }
        var iL = i(8933);
        function ij(t, {style: e, vars: i}, n, r) {
            for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)),
            i)
                t.style.setProperty(s, i[s])
        }
        let iF = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function iB(t, e, i, n) {
            for (let i in ij(t, e, void 0, n),
            e.attrs)
                t.setAttribute(iF.has(i) ? i : (0,
                iL.D)(i), e.attrs[i])
        }
        function iO(t, e, i) {
            let n = iC(t, e, i);
            for (let i in t)
                ((0,
                tN.i)(t[i]) || (0,
                tN.i)(e[i])) && (n[-1 !== io._.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
            return n
        }
        let iI = ["x", "y", "width", "height", "cx", "cy", "r"]
          , i$ = {
            useVisualState: iV({
                scrapeMotionValuesFromProps: iO,
                createRenderState: iA,
                onUpdate: ({props: t, prevProps: e, current: i, renderState: n, latestValues: r}) => {
                    if (!i)
                        return;
                    let s = !!t.drag;
                    if (!s) {
                        for (let t in r)
                            if (io.G.has(t)) {
                                s = !0;
                                break
                            }
                    }
                    if (!s)
                        return;
                    let o = !e;
                    if (e)
                        for (let i = 0; i < iI.length; i++) {
                            let n = iI[i];
                            t[n] !== e[n] && (o = !0)
                        }
                    o && ta.Wi.read( () => {
                        ik(i, n),
                        ta.Wi.render( () => {
                            iS(n, r, iE(i.tagName), t.transformTemplate),
                            iB(i, n)
                        }
                        )
                    }
                    )
                }
            })
        };
        var iW = i(367)
          , iU = i(7712);
        let iN = {
            current: null
        }
          , iX = {
            current: !1
        };
        var iz = i(5024)
          , iY = i(560)
          , iK = i(6602)
          , iH = i(5893);
        let iZ = [...iK.$, iY.$, tL.P]
          , i_ = t => iZ.find((0,
        iH.l)(t))
          , iq = new WeakMap;
        var iG = i(1478);
        let iJ = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
        class iQ {
            scrapeMotionValuesFromProps(t, e, i) {
                return {}
            }
            constructor({parent: t, props: e, presenceContext: i, reducedMotionConfig: n, blockInitialAnimation: r, visualState: s}, o={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.KeyframeResolver = iG.e,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = () => this.notify("Update", this.latestValues),
                this.render = () => {
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.renderScheduledAt = 0,
                this.scheduleRender = () => {
                    let t = tz.X.now();
                    this.renderScheduledAt < t && (this.renderScheduledAt = t,
                    ta.Wi.render(this.render, !1, !0))
                }
                ;
                let {latestValues: a, renderState: l, onUpdate: u} = s;
                this.onUpdate = u,
                this.latestValues = a,
                this.baseTarget = {
                    ...a
                },
                this.initialValues = e.initial ? {
                    ...a
                } : {},
                this.renderState = l,
                this.parent = t,
                this.props = e,
                this.presenceContext = i,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = n,
                this.options = o,
                this.blockInitialAnimation = !!r,
                this.isControllingVariants = e7(e),
                this.isVariantNode = e4(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: h, ...c} = this.scrapeMotionValuesFromProps(e, {}, this);
                for (let t in c) {
                    let e = c[t];
                    void 0 !== a[t] && (0,
                    tN.i)(e) && e.set(a[t], !1)
                }
            }
            mount(t) {
                this.current = t,
                iq.set(t, this),
                this.projection && !this.projection.instance && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach( (t, e) => this.bindToMotionValue(e, t)),
                iX.current || function() {
                    if (iX.current = !0,
                    e8.j) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)")
                              , e = () => iN.current = t.matches;
                            t.addListener(e),
                            e()
                        } else
                            iN.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || iN.current),
                this.parent && this.parent.children.add(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let t in this.projection && this.projection.unmount(),
                (0,
                ta.Pn)(this.notifyUpdate),
                (0,
                ta.Pn)(this.render),
                this.valueSubscriptions.forEach(t => t()),
                this.valueSubscriptions.clear(),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent && this.parent.children.delete(this),
                this.events)
                    this.events[t].clear();
                for (let t in this.features) {
                    let e = this.features[t];
                    e && (e.unmount(),
                    e.isMounted = !1)
                }
                this.current = null
            }
            bindToMotionValue(t, e) {
                let i;
                this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                let n = io.G.has(t);
                n && this.onBindTransform && this.onBindTransform();
                let r = e.on("change", e => {
                    this.latestValues[t] = e,
                    this.props.onUpdate && ta.Wi.preRender(this.notifyUpdate),
                    n && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , s = e.on("renderRequest", this.scheduleRender);
                window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)),
                this.valueSubscriptions.set(t, () => {
                    r(),
                    s(),
                    i && i(),
                    e.owner && e.stop()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            updateFeatures() {
                let t = "animation";
                for (t in it) {
                    let e = it[t];
                    if (!e)
                        continue;
                    let {isEnabled: i, Feature: n} = e;
                    if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)),
                    this.features[t]) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(),
                        e.isMounted = !0)
                    }
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : N()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            update(t, e) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = t,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = e;
                for (let e = 0; e < iJ.length; e++) {
                    let i = iJ[e];
                    this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                    delete this.propEventSubscriptions[i]);
                    let n = t["on" + i];
                    n && (this.propEventSubscriptions[i] = this.on(i, n))
                }
                this.prevMotionValues = function(t, e, i) {
                    for (let n in e) {
                        let r = e[n]
                          , s = i[n];
                        if ((0,
                        tN.i)(r))
                            t.addValue(n, r);
                        else if ((0,
                        tN.i)(s))
                            t.addValue(n, (0,
                            tU.BX)(r, {
                                owner: t
                            }));
                        else if (s !== r) {
                            if (t.hasValue(n)) {
                                let e = t.getValue(n);
                                !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                            } else {
                                let e = t.getStaticValue(n);
                                t.addValue(n, (0,
                                tU.BX)(void 0 !== e ? e : r, {
                                    owner: t
                                }))
                            }
                        }
                    }
                    for (let n in i)
                        void 0 === e[n] && t.removeValue(n);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue(),
                this.onUpdate && this.onUpdate(this)
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                return this.props.variants ? this.props.variants[t] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            addVariantChild(t) {
                let e = this.getClosestVariantNode();
                if (e)
                    return e.variantChildren && e.variantChildren.add(t),
                    () => e.variantChildren.delete(t)
            }
            addValue(t, e) {
                let i = this.values.get(t);
                e !== i && (i && this.removeValue(t),
                this.bindToMotionValue(t, e),
                this.values.set(t, e),
                this.latestValues[t] = e.get())
            }
            removeValue(t) {
                this.values.delete(t);
                let e = this.valueSubscriptions.get(t);
                e && (e(),
                this.valueSubscriptions.delete(t)),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let i = this.values.get(t);
                return void 0 === i && void 0 !== e && (i = (0,
                tU.BX)(null === e ? void 0 : e, {
                    owner: this
                }),
                this.addValue(t, i)),
                i
            }
            readValue(t, e) {
                var i;
                let n = void 0 === this.latestValues[t] && this.current ? null !== (i = this.getBaseTargetFromProps(this.props, t)) && void 0 !== i ? i : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                return null != n && ("string" == typeof n && ((0,
                iW.P)(n) || (0,
                iU.W)(n)) ? n = parseFloat(n) : !i_(n) && tL.P.test(e) && (n = (0,
                iz.T)(t, e)),
                this.setBaseTarget(t, (0,
                tN.i)(n) ? n.get() : n)),
                (0,
                tN.i)(n) ? n.get() : n
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let i;
                let {initial: n} = this.props;
                if ("string" == typeof n || "object" == typeof n) {
                    let r = (0,
                    iM.o)(this.props, n, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                    r && (i = r[t])
                }
                if (n && void 0 !== i)
                    return i;
                let r = this.getBaseTargetFromProps(this.props, t);
                return void 0 === r || (0,
                tN.i)(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new tq.L),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                this.events[t] && this.events[t].notify(...e)
            }
        }
        var i0 = i(4551);
        class i1 extends iQ {
            constructor() {
                super(...arguments),
                this.KeyframeResolver = i0.s
            }
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                return t.style ? t.style[e] : void 0
            }
            removeValueFromRenderState(t, {vars: e, style: i}) {
                delete e[t],
                delete i[t]
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: t} = this.props;
                (0,
                tN.i)(t) && (this.childSubscription = t.on("change", t => {
                    this.current && (this.current.textContent = `${t}`)
                }
                ))
            }
        }
        var i2 = i(2388);
        class i5 extends i1 {
            constructor() {
                super(...arguments),
                this.type = "html",
                this.renderInstance = ij
            }
            readValueFromInstance(t, e) {
                if (io.G.has(e)) {
                    let t = (0,
                    i2.A)(e);
                    return t && t.default || 0
                }
                {
                    let i = window.getComputedStyle(t)
                      , n = ((0,
                    tj.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
                    return "string" == typeof n ? n.trim() : n
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return tt(t, e)
            }
            build(t, e, i) {
                id(t, e, i.transformTemplate)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return iC(t, e, i)
            }
        }
        class i3 extends i1 {
            constructor() {
                super(...arguments),
                this.type = "svg",
                this.isSVGTag = !1,
                this.measureInstanceViewportBox = N,
                this.updateDimensions = () => {
                    this.current && !this.renderState.dimensions && ik(this.current, this.renderState)
                }
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                if (io.G.has(e)) {
                    let t = (0,
                    i2.A)(e);
                    return t && t.default || 0
                }
                return e = iF.has(e) ? e : (0,
                iL.D)(e),
                t.getAttribute(e)
            }
            scrapeMotionValuesFromProps(t, e, i) {
                return iO(t, e, i)
            }
            onBindTransform() {
                this.current && !this.renderState.dimensions && ta.Wi.postRender(this.updateDimensions)
            }
            build(t, e, i) {
                iS(t, e, this.isSVGTag, i.transformTemplate)
            }
            renderInstance(t, e, i, n) {
                iB(t, e, i, n)
            }
            mount(t) {
                this.isSVGTag = iE(t.tagName),
                super.mount(t)
            }
        }
        let i7 = function(t) {
            if ("undefined" == typeof Proxy)
                return t;
            let e = new Map;
            return new Proxy( (...e) => t(...e),{
                get: (i, n) => "create" === n ? t : (e.has(n) || e.set(n, t(n)),
                e.get(n))
            })
        }((s = {
            animation: {
                Feature: P
            },
            exit: {
                Feature: w
            },
            inView: {
                Feature: e1
            },
            tap: {
                Feature: e_
            },
            focus: {
                Feature: eH
            },
            hover: {
                Feature: eK
            },
            pan: {
                Feature: tS
            },
            drag: {
                Feature: tw,
                ProjectionNode: ez,
                MeasureLayout: t$
            },
            layout: {
                ProjectionNode: ez,
                MeasureLayout: t$
            }
        },
        o = (t, e) => iP(t) ? new i3(e) : new i5(e,{
            allowProjection: t !== tE.Fragment
        }),
        function(t, {forwardMotionProps: e}={
            forwardMotionProps: !1
        }) {
            return function(t) {
                var e, i;
                let {preloadedFeatures: n, createVisualElement: r, useRender: s, useVisualState: o, Component: a} = t;
                function l(t, e) {
                    var i;
                    let n;
                    let l = {
                        ...(0,
                        tE.useContext)(e5._),
                        ...t,
                        layoutId: function(t) {
                            let {layoutId: e} = t
                              , i = (0,
                            tE.useContext)(tD.p).id;
                            return i && void 0 !== e ? i + "-" + e : e
                        }(t)
                    }
                      , {isStatic: u} = l
                      , c = function(t) {
                        let {initial: e, animate: i} = function(t, e) {
                            if (e7(t)) {
                                let {initial: e, animate: i} = t;
                                return {
                                    initial: !1 === e || h(e) ? e : void 0,
                                    animate: h(i) ? i : void 0
                                }
                            }
                            return !1 !== t.inherit ? e : {}
                        }(t, (0,
                        tE.useContext)(e3));
                        return (0,
                        tE.useMemo)( () => ({
                            initial: e,
                            animate: i
                        }), [e9(e), e9(i)])
                    }(t)
                      , d = o(t, u);
                    if (!u && e8.j) {
                        (0,
                        tE.useContext)(e2).strict;
                        let t = function(t) {
                            let {drag: e, layout: i} = it;
                            if (!e && !i)
                                return {};
                            let n = {
                                ...e,
                                ...i
                            };
                            return {
                                MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? n.MeasureLayout : void 0,
                                ProjectionNode: n.ProjectionNode
                            }
                        }(l);
                        n = t.MeasureLayout,
                        c.visualElement = function(t, e, i, n, r) {
                            var s, o;
                            let {visualElement: a} = (0,
                            tE.useContext)(e3)
                              , l = (0,
                            tE.useContext)(e2)
                              , u = (0,
                            tE.useContext)(ii.O)
                              , h = (0,
                            tE.useContext)(e5._).reducedMotion
                              , c = (0,
                            tE.useRef)(null);
                            n = n || l.renderer,
                            !c.current && n && (c.current = n(t, {
                                visualState: e,
                                parent: a,
                                props: i,
                                presenceContext: u,
                                blockInitialAnimation: !!u && !1 === u.initial,
                                reducedMotionConfig: h
                            }));
                            let d = c.current
                              , p = (0,
                            tE.useContext)(tV);
                            d && !d.projection && r && ("html" === d.type || "svg" === d.type) && function(t, e, i, n) {
                                let {layoutId: r, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u} = e;
                                t.projection = new i(t.latestValues,e["data-framer-portal-id"] ? void 0 : function t(e) {
                                    if (e)
                                        return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                }(t.parent)),
                                t.projection.setOptions({
                                    layoutId: r,
                                    layout: s,
                                    alwaysMeasureLayout: !!o || a && te(a),
                                    visualElement: t,
                                    animationType: "string" == typeof s ? s : "both",
                                    initialPromotionConfig: n,
                                    layoutScroll: l,
                                    layoutRoot: u
                                })
                            }(c.current, i, r, p);
                            let f = (0,
                            tE.useRef)(!1);
                            (0,
                            tE.useInsertionEffect)( () => {
                                d && f.current && d.update(i, u)
                            }
                            );
                            let m = i[is.M]
                              , v = (0,
                            tE.useRef)(!!m && !(null === (s = window.MotionHandoffIsComplete) || void 0 === s ? void 0 : s.call(window, m)) && (null === (o = window.MotionHasOptimisedAnimation) || void 0 === o ? void 0 : o.call(window, m)));
                            return (0,
                            ir.L)( () => {
                                d && (f.current = !0,
                                window.MotionIsMounted = !0,
                                d.updateFeatures(),
                                tB.render(d.render),
                                v.current && d.animationState && d.animationState.animateChanges())
                            }
                            ),
                            (0,
                            tE.useEffect)( () => {
                                d && (!v.current && d.animationState && d.animationState.animateChanges(),
                                v.current && (queueMicrotask( () => {
                                    var t;
                                    null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, m)
                                }
                                ),
                                v.current = !1))
                            }
                            ),
                            d
                        }(a, d, l, r, t.ProjectionNode)
                    }
                    return (0,
                    tA.jsxs)(e3.Provider, {
                        value: c,
                        children: [n && c.visualElement ? (0,
                        tA.jsx)(n, {
                            visualElement: c.visualElement,
                            ...l
                        }) : null, s(a, t, (i = c.visualElement,
                        (0,
                        tE.useCallback)(t => {
                            t && d.onMount && d.onMount(t),
                            i && (t ? i.mount(t) : i.unmount()),
                            e && ("function" == typeof e ? e(t) : te(e) && (e.current = t))
                        }
                        , [i])), d, u, c.visualElement)]
                    })
                }
                n && function(t) {
                    for (let e in t)
                        it[e] = {
                            ...it[e],
                            ...t[e]
                        }
                }(n),
                l.displayName = "motion.".concat("string" == typeof a ? a : "create(".concat(null !== (i = null !== (e = a.displayName) && void 0 !== e ? e : a.name) && void 0 !== i ? i : "", ")"));
                let u = (0,
                tE.forwardRef)(l);
                return u[ie] = a,
                u
            }({
                ...iP(t) ? i$ : iR,
                preloadedFeatures: s,
                useRender: function(t=!1) {
                    return (e, i, n, {latestValues: r}, s) => {
                        let o = (iP(e) ? function(t, e, i, n) {
                            let r = (0,
                            tE.useMemo)( () => {
                                let i = iA();
                                return iS(i, e, iE(n), t.transformTemplate),
                                {
                                    ...i.attrs,
                                    style: {
                                        ...i.style
                                    }
                                }
                            }
                            , [e]);
                            if (t.style) {
                                let e = {};
                                im(e, t.style, t),
                                r.style = {
                                    ...e,
                                    ...r.style
                                }
                            }
                            return r
                        }
                        : function(t, e) {
                            let i = {}
                              , n = function(t, e) {
                                let i = t.style || {}
                                  , n = {};
                                return im(n, i, t),
                                Object.assign(n, function({transformTemplate: t}, e) {
                                    return (0,
                                    tE.useMemo)( () => {
                                        let i = ip();
                                        return id(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                    }
                                    , [e])
                                }(t, e)),
                                n
                            }(t, e);
                            return t.drag && !1 !== t.dragListener && (i.draggable = !1,
                            n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none",
                            n.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
                            void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0),
                            i.style = n,
                            i
                        }
                        )(i, r, s, e)
                          , a = function(t, e, i) {
                            let n = {};
                            for (let r in t)
                                ("values" !== r || "object" != typeof t.values) && (iy(r) || !0 === i && ig(r) || !e && !ig(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                            return n
                        }(i, "string" == typeof e, t)
                          , l = e !== tE.Fragment ? {
                            ...a,
                            ...o,
                            ref: n
                        } : {}
                          , {children: u} = i
                          , h = (0,
                        tE.useMemo)( () => (0,
                        tN.i)(u) ? u.get() : u, [u]);
                        return (0,
                        tE.createElement)(e, {
                            ...l,
                            children: h
                        })
                    }
                }(e),
                createVisualElement: o,
                Component: t
            })
        }
        ))
    },
    4551: function(t, e, i) {
        "use strict";
        i.d(e, {
            s: function() {
                return m
            }
        });
        var n = i(7712)
          , r = i(1084)
          , s = i(6934)
          , o = i(5024);
        let a = new Set(["auto", "none", "0"]);
        var l = i(1478)
          , u = i(5620)
          , h = i(367)
          , c = i(2852);
        let d = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
        var p = i(9434)
          , f = i(6602);
        class m extends l.e {
            constructor(t, e, i, n, r) {
                super(t, e, i, n, r, !0)
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, element: e, name: i} = this;
                if (!e || !e.current)
                    return;
                super.readKeyframes();
                for (let i = 0; i < t.length; i++) {
                    let n = t[i];
                    if ("string" == typeof n && (n = n.trim(),
                    (0,
                    c.t)(n))) {
                        let r = function t(e, i, n=1) {
                            (0,
                            u.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                            let[r,s] = function(t) {
                                let e = d.exec(t);
                                if (!e)
                                    return [, ];
                                let[,i,n,r] = e;
                                return [`--${null != i ? i : n}`, r]
                            }(e);
                            if (!r)
                                return;
                            let o = window.getComputedStyle(i).getPropertyValue(r);
                            if (o) {
                                let t = o.trim();
                                return (0,
                                h.P)(t) ? parseFloat(t) : t
                            }
                            return (0,
                            c.t)(s) ? t(s, i, n + 1) : s
                        }(n, e.current);
                        void 0 !== r && (t[i] = r),
                        i === t.length - 1 && (this.finalKeyframe = n)
                    }
                }
                if (this.resolveNoneKeyframes(),
                !r.z.has(i) || 2 !== t.length)
                    return;
                let[n,s] = t
                  , o = (0,
                f.C)(n)
                  , a = (0,
                f.C)(s);
                if (o !== a) {
                    if ((0,
                    p.mP)(o) && (0,
                    p.mP)(a))
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            "string" == typeof i && (t[e] = parseFloat(i))
                        }
                    else
                        this.needsMeasurement = !0
                }
            }
            resolveNoneKeyframes() {
                let {unresolvedKeyframes: t, name: e} = this
                  , i = [];
                for (let e = 0; e < t.length; e++) {
                    var r;
                    ("number" == typeof (r = t[e]) ? 0 === r : null === r || "none" === r || "0" === r || (0,
                    n.W)(r)) && i.push(e)
                }
                i.length && function(t, e, i) {
                    let n, r = 0;
                    for (; r < t.length && !n; ) {
                        let e = t[r];
                        "string" == typeof e && !a.has(e) && (0,
                        s.V)(e).values.length && (n = t[r]),
                        r++
                    }
                    if (n && i)
                        for (let r of e)
                            t[r] = (0,
                            o.T)(i, n)
                }(t, i, e)
            }
            measureInitialState() {
                let {element: t, unresolvedKeyframes: e, name: i} = this;
                if (!t || !t.current)
                    return;
                "height" === i && (this.suspendedScrollY = window.pageYOffset),
                this.measuredOrigin = p.lw[i](t.measureViewportBox(), window.getComputedStyle(t.current)),
                e[0] = this.measuredOrigin;
                let n = e[e.length - 1];
                void 0 !== n && t.getValue(i, n).jump(n, !1)
            }
            measureEndState() {
                var t;
                let {element: e, name: i, unresolvedKeyframes: n} = this;
                if (!e || !e.current)
                    return;
                let r = e.getValue(i);
                r && r.jump(this.measuredOrigin, !1);
                let s = n.length - 1
                  , o = n[s];
                n[s] = p.lw[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
                null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
                (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) && this.removedTransforms.forEach( ([t,i]) => {
                    e.getValue(t).set(i)
                }
                ),
                this.resolveNoneKeyframes()
            }
        }
    },
    8933: function(t, e, i) {
        "use strict";
        i.d(e, {
            D: function() {
                return n
            }
        });
        let n = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
    },
    2852: function(t, e, i) {
        "use strict";
        i.d(e, {
            f: function() {
                return r
            },
            t: function() {
                return o
            }
        });
        let n = t => e => "string" == typeof e && e.startsWith(t)
          , r = n("--")
          , s = n("var(--")
          , o = t => !!s(t) && a.test(t.split("/*")[0].trim())
          , a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
    },
    9434: function(t, e, i) {
        "use strict";
        i.d(e, {
            Ei: function() {
                return c
            },
            lw: function() {
                return d
            },
            mP: function() {
                return o
            }
        });
        var n = i(1412)
          , r = i(2836)
          , s = i(6767);
        let o = t => t === n.Rx || t === r.px
          , a = (t, e) => parseFloat(t.split(", ")[e])
          , l = (t, e) => (i, {transform: n}) => {
            if ("none" === n || !n)
                return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r)
                return a(r[1], e);
            {
                let e = n.match(/^matrix\((.+)\)$/u);
                return e ? a(e[1], t) : 0
            }
        }
          , u = new Set(["x", "y", "z"])
          , h = s._.filter(t => !u.has(t));
        function c(t) {
            let e = [];
            return h.forEach(i => {
                let n = t.getValue(i);
                void 0 !== n && (e.push([i, n.get()]),
                n.set(i.startsWith("scale") ? 1 : 0))
            }
            ),
            e
        }
        let d = {
            width: ({x: t}, {paddingLeft: e="0", paddingRight: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            height: ({y: t}, {paddingTop: e="0", paddingBottom: i="0"}) => t.max - t.min - parseFloat(e) - parseFloat(i),
            top: (t, {top: e}) => parseFloat(e),
            left: (t, {left: e}) => parseFloat(e),
            bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
            right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
            x: l(4, 13),
            y: l(5, 14)
        };
        d.translateX = d.x,
        d.translateY = d.y
    },
    5024: function(t, e, i) {
        "use strict";
        i.d(e, {
            T: function() {
                return o
            }
        });
        var n = i(6934)
          , r = i(3887)
          , s = i(2388);
        function o(t, e) {
            let i = (0,
            s.A)(t);
            return i !== r.h && (i = n.P),
            i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        }
    },
    2388: function(t, e, i) {
        "use strict";
        i.d(e, {
            A: function() {
                return o
            }
        });
        var n = i(560)
          , r = i(3887);
        let s = {
            ...i(8822).j,
            color: n.$,
            backgroundColor: n.$,
            outlineColor: n.$,
            fill: n.$,
            stroke: n.$,
            borderColor: n.$,
            borderTopColor: n.$,
            borderRightColor: n.$,
            borderBottomColor: n.$,
            borderLeftColor: n.$,
            filter: r.h,
            WebkitFilter: r.h
        }
          , o = t => s[t]
    },
    6602: function(t, e, i) {
        "use strict";
        i.d(e, {
            $: function() {
                return o
            },
            C: function() {
                return a
            }
        });
        var n = i(1412)
          , r = i(2836)
          , s = i(5893);
        let o = [n.Rx, r.px, r.aQ, r.RW, r.vw, r.vh, {
            test: t => "auto" === t,
            parse: t => t
        }]
          , a = t => o.find((0,
        s.l)(t))
    },
    8822: function(t, e, i) {
        "use strict";
        i.d(e, {
            j: function() {
                return l
            }
        });
        var n = i(1412)
          , r = i(2836);
        let s = {
            borderWidth: r.px,
            borderTopWidth: r.px,
            borderRightWidth: r.px,
            borderBottomWidth: r.px,
            borderLeftWidth: r.px,
            borderRadius: r.px,
            radius: r.px,
            borderTopLeftRadius: r.px,
            borderTopRightRadius: r.px,
            borderBottomRightRadius: r.px,
            borderBottomLeftRadius: r.px,
            width: r.px,
            maxWidth: r.px,
            height: r.px,
            maxHeight: r.px,
            top: r.px,
            right: r.px,
            bottom: r.px,
            left: r.px,
            padding: r.px,
            paddingTop: r.px,
            paddingRight: r.px,
            paddingBottom: r.px,
            paddingLeft: r.px,
            margin: r.px,
            marginTop: r.px,
            marginRight: r.px,
            marginBottom: r.px,
            marginLeft: r.px,
            backgroundPositionX: r.px,
            backgroundPositionY: r.px
        }
          , o = {
            rotate: r.RW,
            rotateX: r.RW,
            rotateY: r.RW,
            rotateZ: r.RW,
            scale: n.bA,
            scaleX: n.bA,
            scaleY: n.bA,
            scaleZ: n.bA,
            skew: r.RW,
            skewX: r.RW,
            skewY: r.RW,
            distance: r.px,
            translateX: r.px,
            translateY: r.px,
            translateZ: r.px,
            x: r.px,
            y: r.px,
            z: r.px,
            perspective: r.px,
            transformPerspective: r.px,
            opacity: n.Fq,
            originX: r.$C,
            originY: r.$C,
            originZ: r.px
        }
          , a = {
            ...n.Rx,
            transform: Math.round
        }
          , l = {
            ...s,
            ...o,
            zIndex: a,
            size: r.px,
            fillOpacity: n.Fq,
            strokeOpacity: n.Fq,
            numOctaves: a
        }
    },
    5893: function(t, e, i) {
        "use strict";
        i.d(e, {
            l: function() {
                return n
            }
        });
        let n = t => e => e.test(t)
    },
    1084: function(t, e, i) {
        "use strict";
        i.d(e, {
            z: function() {
                return n
            }
        });
        let n = new Set(["width", "height", "top", "left", "right", "bottom", ...i(6767)._])
    },
    6767: function(t, e, i) {
        "use strict";
        i.d(e, {
            G: function() {
                return r
            },
            _: function() {
                return n
            }
        });
        let n = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , r = new Set(n)
    },
    1478: function(t, e, i) {
        "use strict";
        i.d(e, {
            e: function() {
                return c
            },
            m: function() {
                return h
            }
        });
        var n = i(9434)
          , r = i(1872);
        let s = new Set
          , o = !1
          , a = !1;
        function l() {
            if (a) {
                let t = Array.from(s).filter(t => t.needsMeasurement)
                  , e = new Set(t.map(t => t.element))
                  , i = new Map;
                e.forEach(t => {
                    let e = (0,
                    n.Ei)(t);
                    e.length && (i.set(t, e),
                    t.render())
                }
                ),
                t.forEach(t => t.measureInitialState()),
                e.forEach(t => {
                    t.render();
                    let e = i.get(t);
                    e && e.forEach( ([e,i]) => {
                        var n;
                        null === (n = t.getValue(e)) || void 0 === n || n.set(i)
                    }
                    )
                }
                ),
                t.forEach(t => t.measureEndState()),
                t.forEach(t => {
                    void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                }
                )
            }
            a = !1,
            o = !1,
            s.forEach(t => t.complete()),
            s.clear()
        }
        function u() {
            s.forEach(t => {
                t.readKeyframes(),
                t.needsMeasurement && (a = !0)
            }
            )
        }
        function h() {
            u(),
            l()
        }
        class c {
            constructor(t, e, i, n, r, s=!1) {
                this.isComplete = !1,
                this.isAsync = !1,
                this.needsMeasurement = !1,
                this.isScheduled = !1,
                this.unresolvedKeyframes = [...t],
                this.onComplete = e,
                this.name = i,
                this.motionValue = n,
                this.element = r,
                this.isAsync = s
            }
            scheduleResolve() {
                this.isScheduled = !0,
                this.isAsync ? (s.add(this),
                o || (o = !0,
                r.Wi.read(u),
                r.Wi.resolveKeyframes(l))) : (this.readKeyframes(),
                this.complete())
            }
            readKeyframes() {
                let {unresolvedKeyframes: t, name: e, element: i, motionValue: n} = this;
                for (let r = 0; r < t.length; r++)
                    if (null === t[r]) {
                        if (0 === r) {
                            let r = null == n ? void 0 : n.get()
                              , s = t[t.length - 1];
                            if (void 0 !== r)
                                t[0] = r;
                            else if (i && e) {
                                let n = i.readValue(e, s);
                                null != n && (t[0] = n)
                            }
                            void 0 === t[0] && (t[0] = s),
                            n && void 0 === r && n.set(t[0])
                        } else
                            t[r] = t[r - 1]
                    }
            }
            setFinalKeyframe() {}
            measureInitialState() {}
            renderEndStyles() {}
            measureEndState() {}
            complete() {
                this.isComplete = !0,
                this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
                s.delete(this)
            }
            cancel() {
                this.isComplete || (this.isScheduled = !1,
                s.delete(this))
            }
            resume() {
                this.isComplete || this.scheduleResolve()
            }
        }
    },
    9201: function(t, e, i) {
        "use strict";
        i.d(e, {
            x: function() {
                return r
            }
        });
        var n = i(7514);
        function r(t, e, i) {
            let r = t.getProps();
            return (0,
            n.o)(r, e, void 0 !== i ? i : r.custom, t)
        }
    },
    7514: function(t, e, i) {
        "use strict";
        function n(t) {
            let e = [{}, {}];
            return null == t || t.values.forEach( (t, i) => {
                e[0][i] = t.get(),
                e[1][i] = t.getVelocity()
            }
            ),
            e
        }
        function r(t, e, i, r) {
            if ("function" == typeof e) {
                let[s,o] = n(r);
                e = e(void 0 !== i ? i : t.custom, s, o)
            }
            if ("string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e) {
                let[s,o] = n(r);
                e = e(void 0 !== i ? i : t.custom, s, o)
            }
            return e
        }
        i.d(e, {
            o: function() {
                return r
            }
        })
    },
    7182: function(t, e, i) {
        "use strict";
        i.d(e, {
            C: function() {
                return o
            }
        });
        var n = i(896)
          , r = i(5490)
          , s = i(9201);
        function o(t, e) {
            let {transitionEnd: i={}, transition: o={}, ...a} = (0,
            s.x)(t, e) || {};
            for (let e in a = {
                ...a,
                ...i
            }) {
                let i = (0,
                n.Y)(a[e]);
                t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0,
                r.BX)(i))
            }
        }
    },
    1064: function(t, e, i) {
        "use strict";
        i.d(e, {
            P: function() {
                return n
            }
        });
        let n = {
            layout: 0,
            mainThread: 0,
            waapi: 0
        }
    },
    4311: function(t, e, i) {
        "use strict";
        i.d(e, {
            f: function() {
                return n
            }
        });
        let n = {
            value: null,
            addProjectionMetrics: null
        }
    },
    8151: function(t, e, i) {
        "use strict";
        i.d(e, {
            c: function() {
                return n
            }
        });
        let n = {
            skipAnimations: !1,
            useManualTiming: !1
        }
    },
    9571: function(t, e, i) {
        "use strict";
        function n(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function r(t, e) {
            let i = t.indexOf(e);
            i > -1 && t.splice(i, 1)
        }
        i.d(e, {
            cl: function() {
                return r
            },
            y4: function() {
                return n
            }
        })
    },
    5614: function(t, e, i) {
        "use strict";
        i.d(e, {
            u: function() {
                return n
            }
        });
        let n = (t, e, i) => i > e ? e : i < t ? t : i
    },
    8194: function(t, e, i) {
        "use strict";
        i.d(e, {
            j: function() {
                return n
            }
        });
        let n = "undefined" != typeof window
    },
    367: function(t, e, i) {
        "use strict";
        i.d(e, {
            P: function() {
                return n
            }
        });
        let n = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
    },
    7712: function(t, e, i) {
        "use strict";
        i.d(e, {
            W: function() {
                return n
            }
        });
        let n = t => /^0[^.\s]+$/u.test(t)
    },
    7352: function(t, e, i) {
        "use strict";
        i.d(e, {
            t: function() {
                return n
            }
        });
        let n = (t, e, i) => t + (e - t) * i
    },
    1554: function(t, e, i) {
        "use strict";
        i.d(e, {
            z: function() {
                return r
            }
        });
        let n = (t, e) => i => e(t(i))
          , r = (...t) => t.reduce(n)
    },
    896: function(t, e, i) {
        "use strict";
        i.d(e, {
            Y: function() {
                return s
            },
            p: function() {
                return r
            }
        });
        var n = i(6089);
        let r = t => !!(t && "object" == typeof t && t.mix && t.toValue)
          , s = t => (0,
        n.C)(t) ? t[t.length - 1] || 0 : t
    },
    514: function(t, e, i) {
        "use strict";
        i.d(e, {
            L: function() {
                return r
            }
        });
        var n = i(9571);
        class r {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return (0,
                n.y4)(this.subscriptions, t),
                () => (0,
                n.cl)(this.subscriptions, t)
            }
            notify(t, e, i) {
                let n = this.subscriptions.length;
                if (n) {
                    if (1 === n)
                        this.subscriptions[0](t, e, i);
                    else
                        for (let r = 0; r < n; r++) {
                            let n = this.subscriptions[r];
                            n && n(t, e, i)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
    },
    7090: function(t, e, i) {
        "use strict";
        i.d(e, {
            h: function() {
                return r
            }
        });
        var n = i(5192);
        function r(t) {
            let e = (0,
            n.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
    },
    3617: function(t, e, i) {
        "use strict";
        i.d(e, {
            L: function() {
                return r
            }
        });
        var n = i(5192);
        let r = i(8194).j ? n.useLayoutEffect : n.useEffect
    },
    9273: function(t, e, i) {
        "use strict";
        function n(t, e) {
            return e ? 1e3 / e * t : 0
        }
        i.d(e, {
            R: function() {
                return n
            }
        })
    },
    5490: function(t, e, i) {
        "use strict";
        i.d(e, {
            BX: function() {
                return h
            }
        });
        var n = i(7052)
          , r = i(514)
          , s = i(9273)
          , o = i(1872);
        let a = t => !isNaN(parseFloat(t))
          , l = {
            current: void 0
        };
        class u {
            constructor(t, e={}) {
                this.version = "12.4.7",
                this.canTrackVelocity = null,
                this.events = {},
                this.updateAndNotify = (t, e=!0) => {
                    let i = n.X.now();
                    this.updatedAt !== i && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(t),
                    this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.hasAnimated = !1,
                this.setCurrent(t),
                this.owner = e.owner
            }
            setCurrent(t) {
                this.current = t,
                this.updatedAt = n.X.now(),
                null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = a(this.current))
            }
            setPrevFrameValue(t=this.current) {
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                this.events[t] || (this.events[t] = new r.L);
                let i = this.events[t].add(e);
                return "change" === t ? () => {
                    i(),
                    o.Wi.read( () => {
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : i
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t, e) {
                this.passiveEffect = t,
                this.stopPassiveEffect = e
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, i) {
                this.set(e),
                this.prev = void 0,
                this.prevFrameValue = t,
                this.prevUpdatedAt = this.updatedAt - i
            }
            jump(t, e=!0) {
                this.updateAndNotify(t),
                this.prev = t,
                this.prevUpdatedAt = this.prevFrameValue = void 0,
                e && this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            get() {
                return l.current && l.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                let t = n.X.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30)
                    return 0;
                let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return (0,
                s.R)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
            }
            start(t) {
                return this.stop(),
                new Promise(e => {
                    this.hasAnimated = !0,
                    this.animation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then( () => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function h(t, e) {
            return new u(t,e)
        }
    },
    4694: function(t, e, i) {
        "use strict";
        i.d(e, {
            $: function() {
                return r
            }
        });
        var n = i(2511);
        let r = {
            test: (0,
            i(7879).i)("#"),
            parse: function(t) {
                let e = ""
                  , i = ""
                  , n = ""
                  , r = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                i = t.substring(3, 5),
                n = t.substring(5, 7),
                r = t.substring(7, 9)) : (e = t.substring(1, 2),
                i = t.substring(2, 3),
                n = t.substring(3, 4),
                r = t.substring(4, 5),
                e += e,
                i += i,
                n += n,
                r += r),
                {
                    red: parseInt(e, 16),
                    green: parseInt(i, 16),
                    blue: parseInt(n, 16),
                    alpha: r ? parseInt(r, 16) / 255 : 1
                }
            },
            transform: n.m.transform
        }
    },
    8172: function(t, e, i) {
        "use strict";
        i.d(e, {
            J: function() {
                return a
            }
        });
        var n = i(1412)
          , r = i(2836)
          , s = i(3928)
          , o = i(7879);
        let a = {
            test: (0,
            o.i)("hsl", "hue"),
            parse: (0,
            o.d)("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: i, alpha: o=1}) => "hsla(" + Math.round(t) + ", " + r.aQ.transform((0,
            s.N)(e)) + ", " + r.aQ.transform((0,
            s.N)(i)) + ", " + (0,
            s.N)(n.Fq.transform(o)) + ")"
        }
    },
    560: function(t, e, i) {
        "use strict";
        i.d(e, {
            $: function() {
                return o
            }
        });
        var n = i(4694)
          , r = i(8172)
          , s = i(2511);
        let o = {
            test: t => s.m.test(t) || n.$.test(t) || r.J.test(t),
            parse: t => s.m.test(t) ? s.m.parse(t) : r.J.test(t) ? r.J.parse(t) : n.$.parse(t),
            transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? s.m.transform(t) : r.J.transform(t)
        }
    },
    2511: function(t, e, i) {
        "use strict";
        i.d(e, {
            m: function() {
                return u
            }
        });
        var n = i(5614)
          , r = i(1412)
          , s = i(3928)
          , o = i(7879);
        let a = t => (0,
        n.u)(0, 255, t)
          , l = {
            ...r.Rx,
            transform: t => Math.round(a(t))
        }
          , u = {
            test: (0,
            o.i)("rgb", "red"),
            parse: (0,
            o.d)("red", "green", "blue"),
            transform: ({red: t, green: e, blue: i, alpha: n=1}) => "rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(i) + ", " + (0,
            s.N)(r.Fq.transform(n)) + ")"
        }
    },
    7879: function(t, e, i) {
        "use strict";
        i.d(e, {
            i: function() {
                return s
            },
            d: function() {
                return o
            }
        });
        var n = i(4578);
        let r = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
          , s = (t, e) => i => !!("string" == typeof i && r.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          , o = (t, e, i) => r => {
            if ("string" != typeof r)
                return r;
            let[s,o,a,l] = r.match(n.K);
            return {
                [t]: parseFloat(s),
                [e]: parseFloat(o),
                [i]: parseFloat(a),
                alpha: void 0 !== l ? parseFloat(l) : 1
            }
        }
    },
    3887: function(t, e, i) {
        "use strict";
        i.d(e, {
            h: function() {
                return l
            }
        });
        var n = i(6934)
          , r = i(4578);
        let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function o(t) {
            let[e,i] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[n] = i.match(r.K) || [];
            if (!n)
                return t;
            let o = i.replace(n, "")
              , a = s.has(e) ? 1 : 0;
            return n !== i && (a *= 100),
            e + "(" + a + o + ")"
        }
        let a = /\b([a-z-]*)\(.*?\)/gu
          , l = {
            ...n.P,
            getAnimatableNone: t => {
                let e = t.match(a);
                return e ? e.map(o).join(" ") : t
            }
        }
    },
    6934: function(t, e, i) {
        "use strict";
        i.d(e, {
            V: function() {
                return h
            },
            P: function() {
                return f
            }
        });
        var n = i(560);
        let r = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
        var s = i(4578)
          , o = i(3928);
        let a = "number"
          , l = "color"
          , u = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function h(t) {
            let e = t.toString()
              , i = []
              , r = {
                color: [],
                number: [],
                var: []
            }
              , s = []
              , o = 0
              , h = e.replace(u, t => (n.$.test(t) ? (r.color.push(o),
            s.push(l),
            i.push(n.$.parse(t))) : t.startsWith("var(") ? (r.var.push(o),
            s.push("var"),
            i.push(t)) : (r.number.push(o),
            s.push(a),
            i.push(parseFloat(t))),
            ++o,
            "${}")).split("${}");
            return {
                values: i,
                split: h,
                indexes: r,
                types: s
            }
        }
        function c(t) {
            return h(t).values
        }
        function d(t) {
            let {split: e, types: i} = h(t)
              , r = e.length;
            return t => {
                let s = "";
                for (let u = 0; u < r; u++)
                    if (s += e[u],
                    void 0 !== t[u]) {
                        let e = i[u];
                        e === a ? s += (0,
                        o.N)(t[u]) : e === l ? s += n.$.transform(t[u]) : s += t[u]
                    }
                return s
            }
        }
        let p = t => "number" == typeof t ? 0 : t
          , f = {
            test: function(t) {
                var e, i;
                return isNaN(t) && "string" == typeof t && ((null === (e = t.match(s.K)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(r)) || void 0 === i ? void 0 : i.length) || 0) > 0
            },
            parse: c,
            createTransformer: d,
            getAnimatableNone: function(t) {
                let e = c(t);
                return d(t)(e.map(p))
            }
        }
    },
    1412: function(t, e, i) {
        "use strict";
        i.d(e, {
            Fq: function() {
                return s
            },
            Rx: function() {
                return r
            },
            bA: function() {
                return o
            }
        });
        var n = i(5614);
        let r = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        }
          , s = {
            ...r,
            transform: t => (0,
            n.u)(0, 1, t)
        }
          , o = {
            ...r,
            default: 1
        }
    },
    2836: function(t, e, i) {
        "use strict";
        i.d(e, {
            $C: function() {
                return u
            },
            RW: function() {
                return r
            },
            aQ: function() {
                return s
            },
            px: function() {
                return o
            },
            vh: function() {
                return a
            },
            vw: function() {
                return l
            }
        });
        let n = t => ({
            test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        })
          , r = n("deg")
          , s = n("%")
          , o = n("px")
          , a = n("vh")
          , l = n("vw")
          , u = {
            ...s,
            parse: t => s.parse(t) / 100,
            transform: t => s.transform(100 * t)
        }
    },
    4578: function(t, e, i) {
        "use strict";
        i.d(e, {
            K: function() {
                return n
            }
        });
        let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
    },
    3928: function(t, e, i) {
        "use strict";
        i.d(e, {
            N: function() {
                return n
            }
        });
        let n = t => Math.round(1e5 * t) / 1e5
    },
    4340: function(t, e, i) {
        "use strict";
        i.d(e, {
            K: function() {
                return r
            }
        });
        var n = i(8005);
        function r(t, e) {
            let i = t.getValue("willChange");
            if ((0,
            n.i)(i) && i.add)
                return i.add(e)
        }
    },
    8005: function(t, e, i) {
        "use strict";
        i.d(e, {
            i: function() {
                return n
            }
        });
        let n = t => !!(t && t.getVelocity)
    },
    8652: function(t, e, i) {
        "use strict";
        i.d(e, {
            sP: function() {
                return o
            },
            _F: function() {
                return c
            },
            iI: function() {
                return u
            },
            th: function() {
                return S
            },
            wk: function() {
                return v
            },
            ev: function() {
                return a
            },
            Mr: function() {
                return b
            },
            qE: function() {
                return d
            },
            xD: function() {
                return h
            },
            DJ: function() {
                return E
            },
            hR: function() {
                return g
            },
            eB: function() {
                return function t(e, i) {
                    if (e)
                        return "function" == typeof e && f() ? v(e, i) : d(e) ? y(e) : Array.isArray(e) ? e.map(e => t(e, i) || x.easeOut) : x[e]
                }
            },
            EO: function() {
                return l
            },
            OD: function() {
                return L
            },
            KV: function() {
                return j
            },
            Vc: function() {
                return f
            }
        });
        var n = i(5647);
        let r = (0,
        n.X)( () => void 0 !== window.ScrollTimeline);
        class s {
            constructor(t) {
                this.stop = () => this.runAll("stop"),
                this.animations = t.filter(Boolean)
            }
            get finished() {
                return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
            }
            getAll(t) {
                return this.animations[0][t]
            }
            setAll(t, e) {
                for (let i = 0; i < this.animations.length; i++)
                    this.animations[i][t] = e
            }
            attachTimeline(t, e) {
                let i = this.animations.map(i => r() && i.attachTimeline ? i.attachTimeline(t) : "function" == typeof e ? e(i) : void 0);
                return () => {
                    i.forEach( (t, e) => {
                        t && t(),
                        this.animations[e].stop()
                    }
                    )
                }
            }
            get time() {
                return this.getAll("time")
            }
            set time(t) {
                this.setAll("time", t)
            }
            get speed() {
                return this.getAll("speed")
            }
            set speed(t) {
                this.setAll("speed", t)
            }
            get startTime() {
                return this.getAll("startTime")
            }
            get duration() {
                let t = 0;
                for (let e = 0; e < this.animations.length; e++)
                    t = Math.max(t, this.animations[e].duration);
                return t
            }
            runAll(t) {
                this.animations.forEach(e => e[t]())
            }
            flatten() {
                this.runAll("flatten")
            }
            play() {
                this.runAll("play")
            }
            pause() {
                this.runAll("pause")
            }
            cancel() {
                this.runAll("cancel")
            }
            complete() {
                this.runAll("complete")
            }
        }
        class o extends s {
            then(t, e) {
                return Promise.all(this.animations).then(t).catch(e)
            }
        }
        function a(t, e) {
            return t ? t[e] || t.default || t : void 0
        }
        let l = 2e4;
        function u(t) {
            let e = 0
              , i = t.next(e);
            for (; !i.done && e < l; )
                e += 50,
                i = t.next(e);
            return e >= l ? 1 / 0 : e
        }
        function h(t) {
            return "function" == typeof t
        }
        function c(t, e) {
            t.timeline = e,
            t.onfinish = null
        }
        let d = t => Array.isArray(t) && "number" == typeof t[0]
          , p = {
            linearEasing: void 0
        }
          , f = function(t, e) {
            let i = (0,
            n.X)(t);
            return () => {
                var t;
                return null !== (t = p[e]) && void 0 !== t ? t : i()
            }
        }( () => {
            try {
                document.createElement("div").animate({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch (t) {
                return !1
            }
            return !0
        }
        , "linearEasing");
        var m = i(5043);
        let v = (t, e, i=10) => {
            let n = ""
              , r = Math.max(Math.round(e / i), 2);
            for (let e = 0; e < r; e++)
                n += t((0,
                m.Y)(0, r - 1, e)) + ", ";
            return `linear(${n.substring(0, n.length - 2)})`
        }
        ;
        function g(t) {
            return !!("function" == typeof t && f() || !t || "string" == typeof t && (t in x || f()) || d(t) || Array.isArray(t) && t.every(g))
        }
        let y = ([t,e,i,n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`
          , x = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: y([0, .65, .55, 1]),
            circOut: y([.55, 0, 1, .45]),
            backIn: y([.31, .01, .66, -.59]),
            backOut: y([.33, 1.53, .69, .99])
        }
          , P = {
            x: !1,
            y: !1
        };
        function T(t, e) {
            let i = function(t, e, i) {
                if (t instanceof EventTarget)
                    return [t];
                if ("string" == typeof t) {
                    let e = document.querySelectorAll(t);
                    return e ? Array.from(e) : []
                }
                return Array.from(t)
            }(t)
              , n = new AbortController;
            return [i, {
                passive: !0,
                ...e,
                signal: n.signal
            }, () => n.abort()]
        }
        function w(t) {
            return !("touch" === t.pointerType || P.x || P.y)
        }
        function b(t, e, i={}) {
            let[n,r,s] = T(t, i)
              , o = t => {
                if (!w(t))
                    return;
                let {target: i} = t
                  , n = e(i, t);
                if ("function" != typeof n || !i)
                    return;
                let s = t => {
                    w(t) && (n(t),
                    i.removeEventListener("pointerleave", s))
                }
                ;
                i.addEventListener("pointerleave", s, r)
            }
            ;
            return n.forEach(t => {
                t.addEventListener("pointerenter", o, r)
            }
            ),
            s
        }
        function S(t, e) {
            let i = `${e}PointerCapture`;
            if (t.target instanceof Element && i in t.target && void 0 !== t.pointerId)
                try {
                    t.target[i](t.pointerId)
                } catch (t) {}
        }
        let A = (t, e) => !!e && (t === e || A(t, e.parentElement))
          , E = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary
          , M = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"])
          , D = new WeakSet;
        function V(t) {
            return e => {
                "Enter" === e.key && t(e)
            }
        }
        function C(t, e) {
            t.dispatchEvent(new PointerEvent("pointer" + e,{
                isPrimary: !0,
                bubbles: !0
            }))
        }
        let R = (t, e) => {
            let i = t.currentTarget;
            if (!i)
                return;
            let n = V( () => {
                if (D.has(i))
                    return;
                C(i, "down");
                let t = V( () => {
                    C(i, "up")
                }
                );
                i.addEventListener("keyup", t, e),
                i.addEventListener("blur", () => C(i, "cancel"), e)
            }
            );
            i.addEventListener("keydown", n, e),
            i.addEventListener("blur", () => i.removeEventListener("keydown", n), e)
        }
        ;
        function k(t) {
            return E(t) && !(P.x || P.y)
        }
        function L(t, e, i={}) {
            let[n,r,s] = T(t, i)
              , o = t => {
                let i = t.currentTarget;
                if (!i || !k(t) || D.has(i))
                    return;
                D.add(i),
                S(t, "set");
                let n = e(i, t)
                  , s = (t, e) => {
                    i.removeEventListener("pointerup", o),
                    i.removeEventListener("pointercancel", a),
                    S(t, "release"),
                    k(t) && D.has(i) && (D.delete(i),
                    "function" == typeof n && n(t, {
                        success: e
                    }))
                }
                  , o = t => {
                    var e;
                    t.isTrusted && (e = i instanceof Element ? i.getBoundingClientRect() : {
                        left: 0,
                        top: 0,
                        right: window.innerWidth,
                        bottom: window.innerHeight
                    },
                    t.clientX < e.left || t.clientX > e.right || t.clientY < e.top || t.clientY > e.bottom) ? s(t, !1) : s(t, !(i instanceof Element) || A(i, t.target))
                }
                  , a = t => {
                    s(t, !1)
                }
                ;
                i.addEventListener("pointerup", o, r),
                i.addEventListener("pointercancel", a, r),
                i.addEventListener("lostpointercapture", a, r)
            }
            ;
            return n.forEach(t => {
                t = i.useGlobalTarget ? window : t;
                let e = !1;
                if (t instanceof HTMLElement) {
                    var n;
                    e = !0,
                    n = t,
                    M.has(n.tagName) || -1 !== n.tabIndex || null !== t.getAttribute("tabindex") || (t.tabIndex = 0)
                }
                t.addEventListener("pointerdown", o, r),
                e && t.addEventListener("focus", t => R(t, r), r)
            }
            ),
            s
        }
        function j(t) {
            return "x" === t || "y" === t ? P[t] ? null : (P[t] = !0,
            () => {
                P[t] = !1
            }
            ) : P.x || P.y ? null : (P.x = P.y = !0,
            () => {
                P.x = P.y = !1
            }
            )
        }
        i(1479),
        i(757)
    },
    5620: function(t, e, i) {
        "use strict";
        i.d(e, {
            K: function() {
                return r
            },
            k: function() {
                return s
            }
        });
        var n = i(757);
        let r = n.Z
          , s = n.Z
    },
    5647: function(t, e, i) {
        "use strict";
        function n(t) {
            let e;
            return () => (void 0 === e && (e = t()),
            e)
        }
        i.d(e, {
            X: function() {
                return n
            }
        })
    },
    757: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return n
            }
        });
        let n = t => t
    },
    5043: function(t, e, i) {
        "use strict";
        i.d(e, {
            Y: function() {
                return n
            }
        });
        let n = (t, e, i) => {
            let n = e - t;
            return 0 === n ? 1 : (i - t) / n
        }
    },
    1479: function(t, e, i) {
        "use strict";
        i.d(e, {
            X: function() {
                return r
            },
            w: function() {
                return n
            }
        });
        let n = t => 1e3 * t
          , r = t => t / 1e3
    }
}]);
