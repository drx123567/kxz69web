(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[363], {
    7962: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r
            }
        });
        let r = (0,
        n(6021).Z)("Check", [["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]])
    },
    9590: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r
            }
        });
        let r = (0,
        n(6021).Z)("ChevronDown", [["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]])
    },
    4773: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r
            }
        });
        let r = (0,
        n(6021).Z)("ChevronUp", [["path", {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }]])
    },
    3320: function(e, t, n) {
        "use strict";
        var r = n(373);
        n.o(r, "useParams") && n.d(t, {
            useParams: function() {
                return r.useParams
            }
        }),
        n.o(r, "useRouter") && n.d(t, {
            useRouter: function() {
                return r.useRouter
            }
        })
    },
    2061: function(e, t, n) {
        "use strict";
        var r, o;
        e.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof (null == (o = n.g.process) ? void 0 : o.env) ? n.g.process : n(435)
    },
    435: function(e) {
        !function() {
            var t = {
                229: function(e) {
                    var t, n, r, o = e.exports = {};
                    function i() {
                        throw Error("setTimeout has not been defined")
                    }
                    function l() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function a(e) {
                        if (t === setTimeout)
                            return setTimeout(e, 0);
                        if ((t === i || !t) && setTimeout)
                            return t = setTimeout,
                            setTimeout(e, 0);
                        try {
                            return t(e, 0)
                        } catch (n) {
                            try {
                                return t.call(null, e, 0)
                            } catch (n) {
                                return t.call(this, e, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            t = "function" == typeof setTimeout ? setTimeout : i
                        } catch (e) {
                            t = i
                        }
                        try {
                            n = "function" == typeof clearTimeout ? clearTimeout : l
                        } catch (e) {
                            n = l
                        }
                    }();
                    var u = []
                      , c = !1
                      , s = -1;
                    function d() {
                        c && r && (c = !1,
                        r.length ? u = r.concat(u) : s = -1,
                        u.length && f())
                    }
                    function f() {
                        if (!c) {
                            var e = a(d);
                            c = !0;
                            for (var t = u.length; t; ) {
                                for (r = u,
                                u = []; ++s < t; )
                                    r && r[s].run();
                                s = -1,
                                t = u.length
                            }
                            r = null,
                            c = !1,
                            function(e) {
                                if (n === clearTimeout)
                                    return clearTimeout(e);
                                if ((n === l || !n) && clearTimeout)
                                    return n = clearTimeout,
                                    clearTimeout(e);
                                try {
                                    n(e)
                                } catch (t) {
                                    try {
                                        return n.call(null, e)
                                    } catch (t) {
                                        return n.call(this, e)
                                    }
                                }
                            }(e)
                        }
                    }
                    function p(e, t) {
                        this.fun = e,
                        this.array = t
                    }
                    function v() {}
                    o.nextTick = function(e) {
                        var t = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++)
                                t[n - 1] = arguments[n];
                        u.push(new p(e,t)),
                        1 !== u.length || c || a(f)
                    }
                    ,
                    p.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    o.title = "browser",
                    o.browser = !0,
                    o.env = {},
                    o.argv = [],
                    o.version = "",
                    o.versions = {},
                    o.on = v,
                    o.addListener = v,
                    o.once = v,
                    o.off = v,
                    o.removeListener = v,
                    o.removeAllListeners = v,
                    o.emit = v,
                    o.prependListener = v,
                    o.prependOnceListener = v,
                    o.listeners = function(e) {
                        return []
                    }
                    ,
                    o.binding = function(e) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    o.cwd = function() {
                        return "/"
                    }
                    ,
                    o.chdir = function(e) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    o.umask = function() {
                        return 0
                    }
                }
            }
              , n = {};
            function r(e) {
                var o = n[e];
                if (void 0 !== o)
                    return o.exports;
                var i = n[e] = {
                    exports: {}
                }
                  , l = !0;
                try {
                    t[e](i, i.exports, r),
                    l = !1
                } finally {
                    l && delete n[e]
                }
                return i.exports
            }
            r.ab = "//";
            var o = r(229);
            e.exports = o
        }()
    },
    2591: function(e, t, n) {
        "use strict";
        function r(e, [t,n]) {
            return Math.min(n, Math.max(t, e))
        }
        n.d(t, {
            u: function() {
                return r
            }
        })
    },
    468: function(e, t, n) {
        "use strict";
        function r(e, t, {checkForDefaultPrevented: n=!0}={}) {
            return function(r) {
                if (e?.(r),
                !1 === n || !r.defaultPrevented)
                    return t?.(r)
            }
        }
        n.d(t, {
            M: function() {
                return r
            }
        })
    },
    5580: function(e, t, n) {
        "use strict";
        n.d(t, {
            b: function() {
                return i
            }
        });
        var r = n(5192)
          , o = n(288);
        function i(e, t=[]) {
            let n = []
              , i = () => {
                let t = n.map(e => r.createContext(e));
                return function(n) {
                    let o = n?.[e] || t;
                    return r.useMemo( () => ({
                        [`__scope${e}`]: {
                            ...n,
                            [e]: o
                        }
                    }), [n, o])
                }
            }
            ;
            return i.scopeName = e,
            [function(t, i) {
                let l = r.createContext(i)
                  , a = n.length;
                n = [...n, i];
                let u = t => {
                    let {scope: n, children: i, ...u} = t
                      , c = n?.[e]?.[a] || l
                      , s = r.useMemo( () => u, Object.values(u));
                    return (0,
                    o.jsx)(c.Provider, {
                        value: s,
                        children: i
                    })
                }
                ;
                return u.displayName = t + "Provider",
                [u, function(n, o) {
                    let u = o?.[e]?.[a] || l
                      , c = r.useContext(u);
                    if (c)
                        return c;
                    if (void 0 !== i)
                        return i;
                    throw Error(`\`${n}\` must be used within \`${t}\``)
                }
                ]
            }
            , function(...e) {
                let t = e[0];
                if (1 === e.length)
                    return t;
                let n = () => {
                    let n = e.map(e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let o = n.reduce( (t, {useScope: n, scopeName: r}) => {
                            let o = n(e)[`__scope${r}`];
                            return {
                                ...t,
                                ...o
                            }
                        }
                        , {});
                        return r.useMemo( () => ({
                            [`__scope${t.scopeName}`]: o
                        }), [o])
                    }
                }
                ;
                return n.scopeName = t.scopeName,
                n
            }(i, ...t)]
        }
    },
    9950: function(e, t, n) {
        "use strict";
        n.d(t, {
            gm: function() {
                return i
            }
        });
        var r = n(5192);
        n(288);
        var o = r.createContext(void 0);
        function i(e) {
            let t = r.useContext(o);
            return e || t || "ltr"
        }
    },
    6723: function(e, t, n) {
        "use strict";
        n.d(t, {
            WV: function() {
                return a
            },
            jH: function() {
                return u
            }
        });
        var r = n(5192)
          , o = n(9719)
          , i = n(1232)
          , l = n(288)
          , a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce( (e, t) => {
            let n = r.forwardRef( (e, n) => {
                let {asChild: r, ...o} = e
                  , a = r ? i.g7 : t;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0,
                l.jsx)(a, {
                    ...o,
                    ref: n
                })
            }
            );
            return n.displayName = `Primitive.${t}`,
            {
                ...e,
                [t]: n
            }
        }
        , {});
        function u(e, t) {
            e && o.flushSync( () => e.dispatchEvent(t))
        }
    },
    4233: function(e, t, n) {
        "use strict";
        let r;
        n.d(t, {
            VY: function() {
                return rt
            },
            ZA: function() {
                return rr
            },
            JO: function() {
                return n4
            },
            ck: function() {
                return ri
            },
            wU: function() {
                return ra
            },
            eT: function() {
                return rl
            },
            __: function() {
                return ro
            },
            h_: function() {
                return re
            },
            fC: function() {
                return n6
            },
            $G: function() {
                return rc
            },
            u_: function() {
                return ru
            },
            Z0: function() {
                return rs
            },
            xz: function() {
                return n8
            },
            B4: function() {
                return n7
            },
            l_: function() {
                return rn
            }
        });
        var o, i, l, a, u, c, s, d, f = n(5192), p = n.t(f, 2), v = n(9719), h = n(2591), m = n(468), g = n(5580), y = n(885), w = n(1232), b = n(288), x = n(9950), E = n(6723), S = n(2679), C = "dismissableLayer.update", R = f.createContext({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        }), T = f.forwardRef( (e, t) => {
            var n, r;
            let {disableOutsidePointerEvents: o=!1, onEscapeKeyDown: i, onPointerDownOutside: l, onFocusOutside: a, onInteractOutside: u, onDismiss: c, ...d} = e
              , p = f.useContext(R)
              , [v,h] = f.useState(null)
              , g = null !== (r = null == v ? void 0 : v.ownerDocument) && void 0 !== r ? r : null === (n = globalThis) || void 0 === n ? void 0 : n.document
              , [,w] = f.useState({})
              , x = (0,
            y.e)(t, e => h(e))
              , T = Array.from(p.layers)
              , [A] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1)
              , k = T.indexOf(A)
              , M = v ? T.indexOf(v) : -1
              , j = p.layersWithOutsidePointerEventsDisabled.size > 0
              , N = M >= k
              , D = function(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document
                  , r = (0,
                S.W)(e)
                  , o = f.useRef(!1)
                  , i = f.useRef( () => {}
                );
                return f.useEffect( () => {
                    let e = e => {
                        if (e.target && !o.current) {
                            let t = function() {
                                P("dismissableLayer.pointerDownOutside", r, o, {
                                    discrete: !0
                                })
                            }
                              , o = {
                                originalEvent: e
                            };
                            "touch" === e.pointerType ? (n.removeEventListener("click", i.current),
                            i.current = t,
                            n.addEventListener("click", i.current, {
                                once: !0
                            })) : t()
                        } else
                            n.removeEventListener("click", i.current);
                        o.current = !1
                    }
                      , t = window.setTimeout( () => {
                        n.addEventListener("pointerdown", e)
                    }
                    , 0);
                    return () => {
                        window.clearTimeout(t),
                        n.removeEventListener("pointerdown", e),
                        n.removeEventListener("click", i.current)
                    }
                }
                , [n, r]),
                {
                    onPointerDownCapture: () => o.current = !0
                }
            }(e => {
                let t = e.target
                  , n = [...p.branches].some(e => e.contains(t));
                !N || n || (null == l || l(e),
                null == u || u(e),
                e.defaultPrevented || null == c || c())
            }
            , g)
              , W = function(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document
                  , r = (0,
                S.W)(e)
                  , o = f.useRef(!1);
                return f.useEffect( () => {
                    let e = e => {
                        e.target && !o.current && P("dismissableLayer.focusOutside", r, {
                            originalEvent: e
                        }, {
                            discrete: !1
                        })
                    }
                    ;
                    return n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                }
                , [n, r]),
                {
                    onFocusCapture: () => o.current = !0,
                    onBlurCapture: () => o.current = !1
                }
            }(e => {
                let t = e.target;
                [...p.branches].some(e => e.contains(t)) || (null == a || a(e),
                null == u || u(e),
                e.defaultPrevented || null == c || c())
            }
            , g);
            return !function(e, t=globalThis?.document) {
                let n = (0,
                S.W)(e);
                f.useEffect( () => {
                    let e = e => {
                        "Escape" === e.key && n(e)
                    }
                    ;
                    return t.addEventListener("keydown", e, {
                        capture: !0
                    }),
                    () => t.removeEventListener("keydown", e, {
                        capture: !0
                    })
                }
                , [n, t])
            }(e => {
                M !== p.layers.size - 1 || (null == i || i(e),
                !e.defaultPrevented && c && (e.preventDefault(),
                c()))
            }
            , g),
            f.useEffect( () => {
                if (v)
                    return o && (0 === p.layersWithOutsidePointerEventsDisabled.size && (s = g.body.style.pointerEvents,
                    g.body.style.pointerEvents = "none"),
                    p.layersWithOutsidePointerEventsDisabled.add(v)),
                    p.layers.add(v),
                    L(),
                    () => {
                        o && 1 === p.layersWithOutsidePointerEventsDisabled.size && (g.body.style.pointerEvents = s)
                    }
            }
            , [v, g, o, p]),
            f.useEffect( () => () => {
                v && (p.layers.delete(v),
                p.layersWithOutsidePointerEventsDisabled.delete(v),
                L())
            }
            , [v, p]),
            f.useEffect( () => {
                let e = () => w({});
                return document.addEventListener(C, e),
                () => document.removeEventListener(C, e)
            }
            , []),
            (0,
            b.jsx)(E.WV.div, {
                ...d,
                ref: x,
                style: {
                    pointerEvents: j ? N ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: (0,
                m.M)(e.onFocusCapture, W.onFocusCapture),
                onBlurCapture: (0,
                m.M)(e.onBlurCapture, W.onBlurCapture),
                onPointerDownCapture: (0,
                m.M)(e.onPointerDownCapture, D.onPointerDownCapture)
            })
        }
        );
        function L() {
            let e = new CustomEvent(C);
            document.dispatchEvent(e)
        }
        function P(e, t, n, r) {
            let {discrete: o} = r
              , i = n.originalEvent.target
              , l = new CustomEvent(e,{
                bubbles: !1,
                cancelable: !0,
                detail: n
            });
            t && i.addEventListener(e, t, {
                once: !0
            }),
            o ? (0,
            E.jH)(i, l) : i.dispatchEvent(l)
        }
        T.displayName = "DismissableLayer",
        f.forwardRef( (e, t) => {
            let n = f.useContext(R)
              , r = f.useRef(null)
              , o = (0,
            y.e)(t, r);
            return f.useEffect( () => {
                let e = r.current;
                if (e)
                    return n.branches.add(e),
                    () => {
                        n.branches.delete(e)
                    }
            }
            , [n.branches]),
            (0,
            b.jsx)(E.WV.div, {
                ...e,
                ref: o
            })
        }
        ).displayName = "DismissableLayerBranch";
        var A = 0;
        function k() {
            let e = document.createElement("span");
            return e.setAttribute("data-radix-focus-guard", ""),
            e.tabIndex = 0,
            e.style.outline = "none",
            e.style.opacity = "0",
            e.style.position = "fixed",
            e.style.pointerEvents = "none",
            e
        }
        var M = "focusScope.autoFocusOnMount"
          , j = "focusScope.autoFocusOnUnmount"
          , N = {
            bubbles: !1,
            cancelable: !0
        }
          , D = f.forwardRef( (e, t) => {
            let {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l} = e
              , [a,u] = f.useState(null)
              , c = (0,
            S.W)(o)
              , s = (0,
            S.W)(i)
              , d = f.useRef(null)
              , p = (0,
            y.e)(t, e => u(e))
              , v = f.useRef({
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            }).current;
            f.useEffect( () => {
                if (r) {
                    let e = function(e) {
                        if (v.paused || !a)
                            return;
                        let t = e.target;
                        a.contains(t) ? d.current = t : I(d.current, {
                            select: !0
                        })
                    }
                      , t = function(e) {
                        if (v.paused || !a)
                            return;
                        let t = e.relatedTarget;
                        null === t || a.contains(t) || I(d.current, {
                            select: !0
                        })
                    };
                    document.addEventListener("focusin", e),
                    document.addEventListener("focusout", t);
                    let n = new MutationObserver(function(e) {
                        if (document.activeElement === document.body)
                            for (let t of e)
                                t.removedNodes.length > 0 && I(a)
                    }
                    );
                    return a && n.observe(a, {
                        childList: !0,
                        subtree: !0
                    }),
                    () => {
                        document.removeEventListener("focusin", e),
                        document.removeEventListener("focusout", t),
                        n.disconnect()
                    }
                }
            }
            , [r, a, v.paused]),
            f.useEffect( () => {
                if (a) {
                    H.add(v);
                    let e = document.activeElement;
                    if (!a.contains(e)) {
                        let t = new CustomEvent(M,N);
                        a.addEventListener(M, c),
                        a.dispatchEvent(t),
                        t.defaultPrevented || (function(e) {
                            let {select: t=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                              , n = document.activeElement;
                            for (let r of e)
                                if (I(r, {
                                    select: t
                                }),
                                document.activeElement !== n)
                                    return
                        }(W(a).filter(e => "A" !== e.tagName), {
                            select: !0
                        }),
                        document.activeElement === e && I(a))
                    }
                    return () => {
                        a.removeEventListener(M, c),
                        setTimeout( () => {
                            let t = new CustomEvent(j,N);
                            a.addEventListener(j, s),
                            a.dispatchEvent(t),
                            t.defaultPrevented || I(null != e ? e : document.body, {
                                select: !0
                            }),
                            a.removeEventListener(j, s),
                            H.remove(v)
                        }
                        , 0)
                    }
                }
            }
            , [a, c, s, v]);
            let h = f.useCallback(e => {
                if (!n && !r || v.paused)
                    return;
                let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey
                  , o = document.activeElement;
                if (t && o) {
                    let t = e.currentTarget
                      , [r,i] = function(e) {
                        let t = W(e);
                        return [O(t, e), O(t.reverse(), e)]
                    }(t);
                    r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(),
                    n && I(i, {
                        select: !0
                    })) : (e.preventDefault(),
                    n && I(r, {
                        select: !0
                    })) : o === t && e.preventDefault()
                }
            }
            , [n, r, v.paused]);
            return (0,
            b.jsx)(E.WV.div, {
                tabIndex: -1,
                ...l,
                ref: p,
                onKeyDown: h
            })
        }
        );
        function W(e) {
            let t = []
              , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => {
                    let t = "INPUT" === e.tagName && "hidden" === e.type;
                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
            for (; n.nextNode(); )
                t.push(n.currentNode);
            return t
        }
        function O(e, t) {
            for (let n of e)
                if (!function(e, t) {
                    let {upTo: n} = t;
                    if ("hidden" === getComputedStyle(e).visibility)
                        return !0;
                    for (; e && (void 0 === n || e !== n); ) {
                        if ("none" === getComputedStyle(e).display)
                            return !0;
                        e = e.parentElement
                    }
                    return !1
                }(n, {
                    upTo: t
                }))
                    return n
        }
        function I(e) {
            let {select: t=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (e && e.focus) {
                var n;
                let r = document.activeElement;
                e.focus({
                    preventScroll: !0
                }),
                e !== r && (n = e)instanceof HTMLInputElement && "select"in n && t && e.select()
            }
        }
        D.displayName = "FocusScope";
        var H = (r = [],
        {
            add(e) {
                let t = r[0];
                e !== t && (null == t || t.pause()),
                (r = V(r, e)).unshift(e)
            },
            remove(e) {
                var t;
                null === (t = (r = V(r, e))[0]) || void 0 === t || t.resume()
            }
        });
        function V(e, t) {
            let n = [...e]
              , r = n.indexOf(t);
            return -1 !== r && n.splice(r, 1),
            n
        }
        var F = n(8253)
          , B = p["useId".toString()] || ( () => void 0)
          , _ = 0;
        function z(e) {
            let[t,n] = f.useState(B());
            return (0,
            F.b)( () => {
                e || n(e => e ?? String(_++))
            }
            , [e]),
            e || (t ? `radix-${t}` : "")
        }
        let K = ["top", "right", "bottom", "left"]
          , Y = Math.min
          , U = Math.max
          , X = Math.round
          , Z = Math.floor
          , $ = e => ({
            x: e,
            y: e
        })
          , q = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        }
          , G = {
            start: "end",
            end: "start"
        };
        function J(e, t) {
            return "function" == typeof e ? e(t) : e
        }
        function Q(e) {
            return e.split("-")[0]
        }
        function ee(e) {
            return e.split("-")[1]
        }
        function et(e) {
            return "x" === e ? "y" : "x"
        }
        function en(e) {
            return "y" === e ? "height" : "width"
        }
        function er(e) {
            return ["top", "bottom"].includes(Q(e)) ? "y" : "x"
        }
        function eo(e) {
            return e.replace(/start|end/g, e => G[e])
        }
        function ei(e) {
            return e.replace(/left|right|bottom|top/g, e => q[e])
        }
        function el(e) {
            return "number" != typeof e ? {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...e
            } : {
                top: e,
                right: e,
                bottom: e,
                left: e
            }
        }
        function ea(e) {
            let {x: t, y: n, width: r, height: o} = e;
            return {
                width: r,
                height: o,
                top: n,
                left: t,
                right: t + r,
                bottom: n + o,
                x: t,
                y: n
            }
        }
        function eu(e, t, n) {
            let r, {reference: o, floating: i} = e, l = er(t), a = et(er(t)), u = en(a), c = Q(t), s = "y" === l, d = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, p = o[u] / 2 - i[u] / 2;
            switch (c) {
            case "top":
                r = {
                    x: d,
                    y: o.y - i.height
                };
                break;
            case "bottom":
                r = {
                    x: d,
                    y: o.y + o.height
                };
                break;
            case "right":
                r = {
                    x: o.x + o.width,
                    y: f
                };
                break;
            case "left":
                r = {
                    x: o.x - i.width,
                    y: f
                };
                break;
            default:
                r = {
                    x: o.x,
                    y: o.y
                }
            }
            switch (ee(t)) {
            case "start":
                r[a] -= p * (n && s ? -1 : 1);
                break;
            case "end":
                r[a] += p * (n && s ? -1 : 1)
            }
            return r
        }
        let ec = async (e, t, n) => {
            let {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: l} = n
              , a = i.filter(Boolean)
              , u = await (null == l.isRTL ? void 0 : l.isRTL(t))
              , c = await l.getElementRects({
                reference: e,
                floating: t,
                strategy: o
            })
              , {x: s, y: d} = eu(c, r, u)
              , f = r
              , p = {}
              , v = 0;
            for (let n = 0; n < a.length; n++) {
                let {name: i, fn: h} = a[n]
                  , {x: m, y: g, data: y, reset: w} = await h({
                    x: s,
                    y: d,
                    initialPlacement: r,
                    placement: f,
                    strategy: o,
                    middlewareData: p,
                    rects: c,
                    platform: l,
                    elements: {
                        reference: e,
                        floating: t
                    }
                });
                s = null != m ? m : s,
                d = null != g ? g : d,
                p = {
                    ...p,
                    [i]: {
                        ...p[i],
                        ...y
                    }
                },
                w && v <= 50 && (v++,
                "object" == typeof w && (w.placement && (f = w.placement),
                w.rects && (c = !0 === w.rects ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }) : w.rects),
                {x: s, y: d} = eu(c, f, u)),
                n = -1)
            }
            return {
                x: s,
                y: d,
                placement: f,
                strategy: o,
                middlewareData: p
            }
        }
        ;
        async function es(e, t) {
            var n;
            void 0 === t && (t = {});
            let {x: r, y: o, platform: i, rects: l, elements: a, strategy: u} = e
              , {boundary: c="clippingAncestors", rootBoundary: s="viewport", elementContext: d="floating", altBoundary: f=!1, padding: p=0} = J(t, e)
              , v = el(p)
              , h = a[f ? "floating" === d ? "reference" : "floating" : d]
              , m = ea(await i.getClippingRect({
                element: null == (n = await (null == i.isElement ? void 0 : i.isElement(h))) || n ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                boundary: c,
                rootBoundary: s,
                strategy: u
            }))
              , g = "floating" === d ? {
                x: r,
                y: o,
                width: l.floating.width,
                height: l.floating.height
            } : l.reference
              , y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating))
              , w = await (null == i.isElement ? void 0 : i.isElement(y)) && await (null == i.getScale ? void 0 : i.getScale(y)) || {
                x: 1,
                y: 1
            }
              , b = ea(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: a,
                rect: g,
                offsetParent: y,
                strategy: u
            }) : g);
            return {
                top: (m.top - b.top + v.top) / w.y,
                bottom: (b.bottom - m.bottom + v.bottom) / w.y,
                left: (m.left - b.left + v.left) / w.x,
                right: (b.right - m.right + v.right) / w.x
            }
        }
        function ed(e, t) {
            return {
                top: e.top - t.height,
                right: e.right - t.width,
                bottom: e.bottom - t.height,
                left: e.left - t.width
            }
        }
        function ef(e) {
            return K.some(t => e[t] >= 0)
        }
        async function ep(e, t) {
            let {placement: n, platform: r, elements: o} = e
              , i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating))
              , l = Q(n)
              , a = ee(n)
              , u = "y" === er(n)
              , c = ["left", "top"].includes(l) ? -1 : 1
              , s = i && u ? -1 : 1
              , d = J(t, e)
              , {mainAxis: f, crossAxis: p, alignmentAxis: v} = "number" == typeof d ? {
                mainAxis: d,
                crossAxis: 0,
                alignmentAxis: null
            } : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis
            };
            return a && "number" == typeof v && (p = "end" === a ? -1 * v : v),
            u ? {
                x: p * s,
                y: f * c
            } : {
                x: f * c,
                y: p * s
            }
        }
        function ev() {
            return "undefined" != typeof window
        }
        function eh(e) {
            return ey(e) ? (e.nodeName || "").toLowerCase() : "#document"
        }
        function em(e) {
            var t;
            return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        }
        function eg(e) {
            var t;
            return null == (t = (ey(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
        }
        function ey(e) {
            return !!ev() && (e instanceof Node || e instanceof em(e).Node)
        }
        function ew(e) {
            return !!ev() && (e instanceof Element || e instanceof em(e).Element)
        }
        function eb(e) {
            return !!ev() && (e instanceof HTMLElement || e instanceof em(e).HTMLElement)
        }
        function ex(e) {
            return !!ev() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof em(e).ShadowRoot)
        }
        function eE(e) {
            let {overflow: t, overflowX: n, overflowY: r, display: o} = eL(e);
            return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
        }
        function eS(e) {
            return [":popover-open", ":modal"].some(t => {
                try {
                    return e.matches(t)
                } catch (e) {
                    return !1
                }
            }
            )
        }
        function eC(e) {
            let t = eR()
              , n = ew(e) ? eL(e) : e;
            return ["transform", "translate", "scale", "rotate", "perspective"].some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
        }
        function eR() {
            return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
        }
        function eT(e) {
            return ["html", "body", "#document"].includes(eh(e))
        }
        function eL(e) {
            return em(e).getComputedStyle(e)
        }
        function eP(e) {
            return ew(e) ? {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            } : {
                scrollLeft: e.scrollX,
                scrollTop: e.scrollY
            }
        }
        function eA(e) {
            if ("html" === eh(e))
                return e;
            let t = e.assignedSlot || e.parentNode || ex(e) && e.host || eg(e);
            return ex(t) ? t.host : t
        }
        function ek(e, t, n) {
            var r;
            void 0 === t && (t = []),
            void 0 === n && (n = !0);
            let o = function e(t) {
                let n = eA(t);
                return eT(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : eb(n) && eE(n) ? n : e(n)
            }(e)
              , i = o === (null == (r = e.ownerDocument) ? void 0 : r.body)
              , l = em(o);
            if (i) {
                let e = eM(l);
                return t.concat(l, l.visualViewport || [], eE(o) ? o : [], e && n ? ek(e) : [])
            }
            return t.concat(o, ek(o, [], n))
        }
        function eM(e) {
            return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
        }
        function ej(e) {
            let t = eL(e)
              , n = parseFloat(t.width) || 0
              , r = parseFloat(t.height) || 0
              , o = eb(e)
              , i = o ? e.offsetWidth : n
              , l = o ? e.offsetHeight : r
              , a = X(n) !== i || X(r) !== l;
            return a && (n = i,
            r = l),
            {
                width: n,
                height: r,
                $: a
            }
        }
        function eN(e) {
            return ew(e) ? e : e.contextElement
        }
        function eD(e) {
            let t = eN(e);
            if (!eb(t))
                return $(1);
            let n = t.getBoundingClientRect()
              , {width: r, height: o, $: i} = ej(t)
              , l = (i ? X(n.width) : n.width) / r
              , a = (i ? X(n.height) : n.height) / o;
            return l && Number.isFinite(l) || (l = 1),
            a && Number.isFinite(a) || (a = 1),
            {
                x: l,
                y: a
            }
        }
        let eW = $(0);
        function eO(e) {
            let t = em(e);
            return eR() && t.visualViewport ? {
                x: t.visualViewport.offsetLeft,
                y: t.visualViewport.offsetTop
            } : eW
        }
        function eI(e, t, n, r) {
            var o;
            void 0 === t && (t = !1),
            void 0 === n && (n = !1);
            let i = e.getBoundingClientRect()
              , l = eN(e)
              , a = $(1);
            t && (r ? ew(r) && (a = eD(r)) : a = eD(e));
            let u = (void 0 === (o = n) && (o = !1),
            r && (!o || r === em(l)) && o) ? eO(l) : $(0)
              , c = (i.left + u.x) / a.x
              , s = (i.top + u.y) / a.y
              , d = i.width / a.x
              , f = i.height / a.y;
            if (l) {
                let e = em(l)
                  , t = r && ew(r) ? em(r) : r
                  , n = e
                  , o = eM(n);
                for (; o && r && t !== n; ) {
                    let e = eD(o)
                      , t = o.getBoundingClientRect()
                      , r = eL(o)
                      , i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x
                      , l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                    c *= e.x,
                    s *= e.y,
                    d *= e.x,
                    f *= e.y,
                    c += i,
                    s += l,
                    o = eM(n = em(o))
                }
            }
            return ea({
                width: d,
                height: f,
                x: c,
                y: s
            })
        }
        function eH(e, t) {
            let n = eP(e).scrollLeft;
            return t ? t.left + n : eI(eg(e)).left + n
        }
        function eV(e, t, n) {
            void 0 === n && (n = !1);
            let r = e.getBoundingClientRect();
            return {
                x: r.left + t.scrollLeft - (n ? 0 : eH(e, r)),
                y: r.top + t.scrollTop
            }
        }
        function eF(e, t, n) {
            let r;
            if ("viewport" === t)
                r = function(e, t) {
                    let n = em(e)
                      , r = eg(e)
                      , o = n.visualViewport
                      , i = r.clientWidth
                      , l = r.clientHeight
                      , a = 0
                      , u = 0;
                    if (o) {
                        i = o.width,
                        l = o.height;
                        let e = eR();
                        (!e || e && "fixed" === t) && (a = o.offsetLeft,
                        u = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: u
                    }
                }(e, n);
            else if ("document" === t)
                r = function(e) {
                    let t = eg(e)
                      , n = eP(e)
                      , r = e.ownerDocument.body
                      , o = U(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
                      , i = U(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight)
                      , l = -n.scrollLeft + eH(e)
                      , a = -n.scrollTop;
                    return "rtl" === eL(r).direction && (l += U(t.clientWidth, r.clientWidth) - o),
                    {
                        width: o,
                        height: i,
                        x: l,
                        y: a
                    }
                }(eg(e));
            else if (ew(t))
                r = function(e, t) {
                    let n = eI(e, !0, "fixed" === t)
                      , r = n.top + e.clientTop
                      , o = n.left + e.clientLeft
                      , i = eb(e) ? eD(e) : $(1)
                      , l = e.clientWidth * i.x;
                    return {
                        width: l,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
            else {
                let n = eO(e);
                r = {
                    x: t.x - n.x,
                    y: t.y - n.y,
                    width: t.width,
                    height: t.height
                }
            }
            return ea(r)
        }
        function eB(e) {
            return "static" === eL(e).position
        }
        function e_(e, t) {
            if (!eb(e) || "fixed" === eL(e).position)
                return null;
            if (t)
                return t(e);
            let n = e.offsetParent;
            return eg(e) === n && (n = n.ownerDocument.body),
            n
        }
        function ez(e, t) {
            let n = em(e);
            if (eS(e))
                return n;
            if (!eb(e)) {
                let t = eA(e);
                for (; t && !eT(t); ) {
                    if (ew(t) && !eB(t))
                        return t;
                    t = eA(t)
                }
                return n
            }
            let r = e_(e, t);
            for (; r && ["table", "td", "th"].includes(eh(r)) && eB(r); )
                r = e_(r, t);
            return r && eT(r) && eB(r) && !eC(r) ? n : r || function(e) {
                let t = eA(e);
                for (; eb(t) && !eT(t); ) {
                    if (eC(t))
                        return t;
                    if (eS(t))
                        break;
                    t = eA(t)
                }
                return null
            }(e) || n
        }
        let eK = async function(e) {
            let t = this.getOffsetParent || ez
              , n = this.getDimensions
              , r = await n(e.floating);
            return {
                reference: function(e, t, n) {
                    let r = eb(t)
                      , o = eg(t)
                      , i = "fixed" === n
                      , l = eI(e, !0, i, t)
                      , a = {
                        scrollLeft: 0,
                        scrollTop: 0
                    }
                      , u = $(0);
                    if (r || !r && !i) {
                        if (("body" !== eh(t) || eE(o)) && (a = eP(t)),
                        r) {
                            let e = eI(t, !0, i, t);
                            u.x = e.x + t.clientLeft,
                            u.y = e.y + t.clientTop
                        } else
                            o && (u.x = eH(o))
                    }
                    let c = !o || r || i ? $(0) : eV(o, a);
                    return {
                        x: l.left + a.scrollLeft - u.x - c.x,
                        y: l.top + a.scrollTop - u.y - c.y,
                        width: l.width,
                        height: l.height
                    }
                }(e.reference, await t(e.floating), e.strategy),
                floating: {
                    x: 0,
                    y: 0,
                    width: r.width,
                    height: r.height
                }
            }
        }
          , eY = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {elements: t, rect: n, offsetParent: r, strategy: o} = e
                  , i = "fixed" === o
                  , l = eg(r)
                  , a = !!t && eS(t.floating);
                if (r === l || a && i)
                    return n;
                let u = {
                    scrollLeft: 0,
                    scrollTop: 0
                }
                  , c = $(1)
                  , s = $(0)
                  , d = eb(r);
                if ((d || !d && !i) && (("body" !== eh(r) || eE(l)) && (u = eP(r)),
                eb(r))) {
                    let e = eI(r);
                    c = eD(r),
                    s.x = e.x + r.clientLeft,
                    s.y = e.y + r.clientTop
                }
                let f = !l || d || i ? $(0) : eV(l, u, !0);
                return {
                    width: n.width * c.x,
                    height: n.height * c.y,
                    x: n.x * c.x - u.scrollLeft * c.x + s.x + f.x,
                    y: n.y * c.y - u.scrollTop * c.y + s.y + f.y
                }
            },
            getDocumentElement: eg,
            getClippingRect: function(e) {
                let {element: t, boundary: n, rootBoundary: r, strategy: o} = e
                  , i = [..."clippingAncestors" === n ? eS(t) ? [] : function(e, t) {
                    let n = t.get(e);
                    if (n)
                        return n;
                    let r = ek(e, [], !1).filter(e => ew(e) && "body" !== eh(e))
                      , o = null
                      , i = "fixed" === eL(e).position
                      , l = i ? eA(e) : e;
                    for (; ew(l) && !eT(l); ) {
                        let t = eL(l)
                          , n = eC(l);
                        n || "fixed" !== t.position || (o = null),
                        (i ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || eE(l) && !n && function e(t, n) {
                            let r = eA(t);
                            return !(r === n || !ew(r) || eT(r)) && ("fixed" === eL(r).position || e(r, n))
                        }(e, l)) ? r = r.filter(e => e !== l) : o = t,
                        l = eA(l)
                    }
                    return t.set(e, r),
                    r
                }(t, this._c) : [].concat(n), r]
                  , l = i[0]
                  , a = i.reduce( (e, n) => {
                    let r = eF(t, n, o);
                    return e.top = U(r.top, e.top),
                    e.right = Y(r.right, e.right),
                    e.bottom = Y(r.bottom, e.bottom),
                    e.left = U(r.left, e.left),
                    e
                }
                , eF(t, l, o));
                return {
                    width: a.right - a.left,
                    height: a.bottom - a.top,
                    x: a.left,
                    y: a.top
                }
            },
            getOffsetParent: ez,
            getElementRects: eK,
            getClientRects: function(e) {
                return Array.from(e.getClientRects())
            },
            getDimensions: function(e) {
                let {width: t, height: n} = ej(e);
                return {
                    width: t,
                    height: n
                }
            },
            getScale: eD,
            isElement: ew,
            isRTL: function(e) {
                return "rtl" === eL(e).direction
            }
        };
        function eU(e, t) {
            return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
        }
        let eX = e => ({
            name: "arrow",
            options: e,
            async fn(t) {
                let {x: n, y: r, placement: o, rects: i, platform: l, elements: a, middlewareData: u} = t
                  , {element: c, padding: s=0} = J(e, t) || {};
                if (null == c)
                    return {};
                let d = el(s)
                  , f = {
                    x: n,
                    y: r
                }
                  , p = et(er(o))
                  , v = en(p)
                  , h = await l.getDimensions(c)
                  , m = "y" === p
                  , g = m ? "clientHeight" : "clientWidth"
                  , y = i.reference[v] + i.reference[p] - f[p] - i.floating[v]
                  , w = f[p] - i.reference[p]
                  , b = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(c))
                  , x = b ? b[g] : 0;
                x && await (null == l.isElement ? void 0 : l.isElement(b)) || (x = a.floating[g] || i.floating[v]);
                let E = x / 2 - h[v] / 2 - 1
                  , S = Y(d[m ? "top" : "left"], E)
                  , C = Y(d[m ? "bottom" : "right"], E)
                  , R = x - h[v] - C
                  , T = x / 2 - h[v] / 2 + (y / 2 - w / 2)
                  , L = U(S, Y(T, R))
                  , P = !u.arrow && null != ee(o) && T !== L && i.reference[v] / 2 - (T < S ? S : C) - h[v] / 2 < 0
                  , A = P ? T < S ? T - S : T - R : 0;
                return {
                    [p]: f[p] + A,
                    data: {
                        [p]: L,
                        centerOffset: T - L - A,
                        ...P && {
                            alignmentOffset: A
                        }
                    },
                    reset: P
                }
            }
        })
          , eZ = (e, t, n) => {
            let r = new Map
              , o = {
                platform: eY,
                ...n
            }
              , i = {
                ...o.platform,
                _c: r
            };
            return ec(e, t, {
                ...o,
                platform: i
            })
        }
        ;
        var e$ = "undefined" != typeof document ? f.useLayoutEffect : f.useEffect;
        function eq(e, t) {
            let n, r, o;
            if (e === t)
                return !0;
            if (typeof e != typeof t)
                return !1;
            if ("function" == typeof e && e.toString() === t.toString())
                return !0;
            if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                    if ((n = e.length) !== t.length)
                        return !1;
                    for (r = n; 0 != r--; )
                        if (!eq(e[r], t[r]))
                            return !1;
                    return !0
                }
                if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
                    return !1;
                for (r = n; 0 != r--; )
                    if (!({}).hasOwnProperty.call(t, o[r]))
                        return !1;
                for (r = n; 0 != r--; ) {
                    let n = o[r];
                    if (("_owner" !== n || !e.$$typeof) && !eq(e[n], t[n]))
                        return !1
                }
                return !0
            }
            return e != e && t != t
        }
        function eG(e) {
            return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
        }
        function eJ(e, t) {
            let n = eG(e);
            return Math.round(t * n) / n
        }
        function eQ(e) {
            let t = f.useRef(e);
            return e$( () => {
                t.current = e
            }
            ),
            t
        }
        let e0 = e => ({
            name: "arrow",
            options: e,
            fn(t) {
                let {element: n, padding: r} = "function" == typeof e ? e(t) : e;
                return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? eX({
                    element: n.current,
                    padding: r
                }).fn(t) : {} : n ? eX({
                    element: n,
                    padding: r
                }).fn(t) : {}
            }
        })
          , e1 = (e, t) => {
            var n;
            return {
                ...(void 0 === (n = e) && (n = 0),
                {
                    name: "offset",
                    options: n,
                    async fn(e) {
                        var t, r;
                        let {x: o, y: i, placement: l, middlewareData: a} = e
                          , u = await ep(e, n);
                        return l === (null == (t = a.offset) ? void 0 : t.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
                            x: o + u.x,
                            y: i + u.y,
                            data: {
                                ...u,
                                placement: l
                            }
                        }
                    }
                }),
                options: [e, t]
            }
        }
          , e2 = (e, t) => {
            var n;
            return {
                ...(void 0 === (n = e) && (n = {}),
                {
                    name: "shift",
                    options: n,
                    async fn(e) {
                        let {x: t, y: r, placement: o} = e
                          , {mainAxis: i=!0, crossAxis: l=!1, limiter: a={
                            fn: e => {
                                let {x: t, y: n} = e;
                                return {
                                    x: t,
                                    y: n
                                }
                            }
                        }, ...u} = J(n, e)
                          , c = {
                            x: t,
                            y: r
                        }
                          , s = await es(e, u)
                          , d = er(Q(o))
                          , f = et(d)
                          , p = c[f]
                          , v = c[d];
                        if (i) {
                            let e = "y" === f ? "top" : "left"
                              , t = "y" === f ? "bottom" : "right"
                              , n = p + s[e]
                              , r = p - s[t];
                            p = U(n, Y(p, r))
                        }
                        if (l) {
                            let e = "y" === d ? "top" : "left"
                              , t = "y" === d ? "bottom" : "right"
                              , n = v + s[e]
                              , r = v - s[t];
                            v = U(n, Y(v, r))
                        }
                        let h = a.fn({
                            ...e,
                            [f]: p,
                            [d]: v
                        });
                        return {
                            ...h,
                            data: {
                                x: h.x - t,
                                y: h.y - r,
                                enabled: {
                                    [f]: i,
                                    [d]: l
                                }
                            }
                        }
                    }
                }),
                options: [e, t]
            }
        }
          , e5 = (e, t) => {
            var n;
            return {
                ...(void 0 === (n = e) && (n = {}),
                {
                    options: n,
                    fn(e) {
                        let {x: t, y: r, placement: o, rects: i, middlewareData: l} = e
                          , {offset: a=0, mainAxis: u=!0, crossAxis: c=!0} = J(n, e)
                          , s = {
                            x: t,
                            y: r
                        }
                          , d = er(o)
                          , f = et(d)
                          , p = s[f]
                          , v = s[d]
                          , h = J(a, e)
                          , m = "number" == typeof h ? {
                            mainAxis: h,
                            crossAxis: 0
                        } : {
                            mainAxis: 0,
                            crossAxis: 0,
                            ...h
                        };
                        if (u) {
                            let e = "y" === f ? "height" : "width"
                              , t = i.reference[f] - i.floating[e] + m.mainAxis
                              , n = i.reference[f] + i.reference[e] - m.mainAxis;
                            p < t ? p = t : p > n && (p = n)
                        }
                        if (c) {
                            var g, y;
                            let e = "y" === f ? "width" : "height"
                              , t = ["top", "left"].includes(Q(o))
                              , n = i.reference[d] - i.floating[e] + (t && (null == (g = l.offset) ? void 0 : g[d]) || 0) + (t ? 0 : m.crossAxis)
                              , r = i.reference[d] + i.reference[e] + (t ? 0 : (null == (y = l.offset) ? void 0 : y[d]) || 0) - (t ? m.crossAxis : 0);
                            v < n ? v = n : v > r && (v = r)
                        }
                        return {
                            [f]: p,
                            [d]: v
                        }
                    }
                }),
                options: [e, t]
            }
        }
          , e9 = (e, t) => {
            var n;
            return {
                ...(void 0 === (n = e) && (n = {}),
                {
                    name: "flip",
                    options: n,
                    async fn(e) {
                        var t, r, o, i, l;
                        let {placement: a, middlewareData: u, rects: c, initialPlacement: s, platform: d, elements: f} = e
                          , {mainAxis: p=!0, crossAxis: v=!0, fallbackPlacements: h, fallbackStrategy: m="bestFit", fallbackAxisSideDirection: g="none", flipAlignment: y=!0, ...w} = J(n, e);
                        if (null != (t = u.arrow) && t.alignmentOffset)
                            return {};
                        let b = Q(a)
                          , x = er(s)
                          , E = Q(s) === s
                          , S = await (null == d.isRTL ? void 0 : d.isRTL(f.floating))
                          , C = h || (E || !y ? [ei(s)] : function(e) {
                            let t = ei(e);
                            return [eo(e), t, eo(t)]
                        }(s))
                          , R = "none" !== g;
                        !h && R && C.push(...function(e, t, n, r) {
                            let o = ee(e)
                              , i = function(e, t, n) {
                                let r = ["left", "right"]
                                  , o = ["right", "left"];
                                switch (e) {
                                case "top":
                                case "bottom":
                                    if (n)
                                        return t ? o : r;
                                    return t ? r : o;
                                case "left":
                                case "right":
                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                default:
                                    return []
                                }
                            }(Q(e), "start" === n, r);
                            return o && (i = i.map(e => e + "-" + o),
                            t && (i = i.concat(i.map(eo)))),
                            i
                        }(s, y, g, S));
                        let T = [s, ...C]
                          , L = await es(e, w)
                          , P = []
                          , A = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                        if (p && P.push(L[b]),
                        v) {
                            let e = function(e, t, n) {
                                void 0 === n && (n = !1);
                                let r = ee(e)
                                  , o = et(er(e))
                                  , i = en(o)
                                  , l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                return t.reference[i] > t.floating[i] && (l = ei(l)),
                                [l, ei(l)]
                            }(a, c, S);
                            P.push(L[e[0]], L[e[1]])
                        }
                        if (A = [...A, {
                            placement: a,
                            overflows: P
                        }],
                        !P.every(e => e <= 0)) {
                            let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1
                              , t = T[e];
                            if (t)
                                return {
                                    data: {
                                        index: e,
                                        overflows: A
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                            let n = null == (i = A.filter(e => e.overflows[0] <= 0).sort( (e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                            if (!n)
                                switch (m) {
                                case "bestFit":
                                    {
                                        let e = null == (l = A.filter(e => {
                                            if (R) {
                                                let t = er(e.placement);
                                                return t === x || "y" === t
                                            }
                                            return !0
                                        }
                                        ).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce( (e, t) => e + t, 0)]).sort( (e, t) => e[1] - t[1])[0]) ? void 0 : l[0];
                                        e && (n = e);
                                        break
                                    }
                                case "initialPlacement":
                                    n = s
                                }
                            if (a !== n)
                                return {
                                    reset: {
                                        placement: n
                                    }
                                }
                        }
                        return {}
                    }
                }),
                options: [e, t]
            }
        }
          , e3 = (e, t) => {
            var n;
            return {
                ...(void 0 === (n = e) && (n = {}),
                {
                    name: "size",
                    options: n,
                    async fn(e) {
                        var t, r;
                        let o, i;
                        let {placement: l, rects: a, platform: u, elements: c} = e
                          , {apply: s= () => {}
                        , ...d} = J(n, e)
                          , f = await es(e, d)
                          , p = Q(l)
                          , v = ee(l)
                          , h = "y" === er(l)
                          , {width: m, height: g} = a.floating;
                        "top" === p || "bottom" === p ? (o = p,
                        i = v === (await (null == u.isRTL ? void 0 : u.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (i = p,
                        o = "end" === v ? "top" : "bottom");
                        let y = g - f.top - f.bottom
                          , w = m - f.left - f.right
                          , b = Y(g - f[o], y)
                          , x = Y(m - f[i], w)
                          , E = !e.middlewareData.shift
                          , S = b
                          , C = x;
                        if (null != (t = e.middlewareData.shift) && t.enabled.x && (C = w),
                        null != (r = e.middlewareData.shift) && r.enabled.y && (S = y),
                        E && !v) {
                            let e = U(f.left, 0)
                              , t = U(f.right, 0)
                              , n = U(f.top, 0)
                              , r = U(f.bottom, 0);
                            h ? C = m - 2 * (0 !== e || 0 !== t ? e + t : U(f.left, f.right)) : S = g - 2 * (0 !== n || 0 !== r ? n + r : U(f.top, f.bottom))
                        }
                        await s({
                            ...e,
                            availableWidth: C,
                            availableHeight: S
                        });
                        let R = await u.getDimensions(c.floating);
                        return m !== R.width || g !== R.height ? {
                            reset: {
                                rects: !0
                            }
                        } : {}
                    }
                }),
                options: [e, t]
            }
        }
          , e6 = (e, t) => {
            var n;
            return {
                ...(void 0 === (n = e) && (n = {}),
                {
                    name: "hide",
                    options: n,
                    async fn(e) {
                        let {rects: t} = e
                          , {strategy: r="referenceHidden", ...o} = J(n, e);
                        switch (r) {
                        case "referenceHidden":
                            {
                                let n = ed(await es(e, {
                                    ...o,
                                    elementContext: "reference"
                                }), t.reference);
                                return {
                                    data: {
                                        referenceHiddenOffsets: n,
                                        referenceHidden: ef(n)
                                    }
                                }
                            }
                        case "escaped":
                            {
                                let n = ed(await es(e, {
                                    ...o,
                                    altBoundary: !0
                                }), t.floating);
                                return {
                                    data: {
                                        escapedOffsets: n,
                                        escaped: ef(n)
                                    }
                                }
                            }
                        default:
                            return {}
                        }
                    }
                }),
                options: [e, t]
            }
        }
          , e8 = (e, t) => ({
            ...e0(e),
            options: [e, t]
        });
        var e7 = f.forwardRef( (e, t) => {
            let {children: n, width: r=10, height: o=5, ...i} = e;
            return (0,
            b.jsx)(E.WV.svg, {
                ...i,
                ref: t,
                width: r,
                height: o,
                viewBox: "0 0 30 10",
                preserveAspectRatio: "none",
                children: e.asChild ? n : (0,
                b.jsx)("polygon", {
                    points: "0,0 30,0 15,10"
                })
            })
        }
        );
        e7.displayName = "Arrow";
        var e4 = n(9475)
          , te = "Popper"
          , [tt,tn] = (0,
        g.b)(te)
          , [tr,to] = tt(te)
          , ti = e => {
            let {__scopePopper: t, children: n} = e
              , [r,o] = f.useState(null);
            return (0,
            b.jsx)(tr, {
                scope: t,
                anchor: r,
                onAnchorChange: o,
                children: n
            })
        }
        ;
        ti.displayName = te;
        var tl = "PopperAnchor"
          , ta = f.forwardRef( (e, t) => {
            let {__scopePopper: n, virtualRef: r, ...o} = e
              , i = to(tl, n)
              , l = f.useRef(null)
              , a = (0,
            y.e)(t, l);
            return f.useEffect( () => {
                i.onAnchorChange((null == r ? void 0 : r.current) || l.current)
            }
            ),
            r ? null : (0,
            b.jsx)(E.WV.div, {
                ...o,
                ref: a
            })
        }
        );
        ta.displayName = tl;
        var tu = "PopperContent"
          , [tc,ts] = tt(tu)
          , td = f.forwardRef( (e, t) => {
            var n, r, o, i, l, a, u, c;
            let {__scopePopper: s, side: d="bottom", sideOffset: p=0, align: h="center", alignOffset: m=0, arrowPadding: g=0, avoidCollisions: w=!0, collisionBoundary: x=[], collisionPadding: C=0, sticky: R="partial", hideWhenDetached: T=!1, updatePositionStrategy: L="optimized", onPlaced: P, ...A} = e
              , k = to(tu, s)
              , [M,j] = f.useState(null)
              , N = (0,
            y.e)(t, e => j(e))
              , [D,W] = f.useState(null)
              , O = (0,
            e4.t)(D)
              , I = null !== (u = null == O ? void 0 : O.width) && void 0 !== u ? u : 0
              , H = null !== (c = null == O ? void 0 : O.height) && void 0 !== c ? c : 0
              , V = "number" == typeof C ? C : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...C
            }
              , B = Array.isArray(x) ? x : [x]
              , _ = B.length > 0
              , z = {
                padding: V,
                boundary: B.filter(th),
                altBoundary: _
            }
              , {refs: K, floatingStyles: X, placement: $, isPositioned: q, middlewareData: G} = function(e) {
                void 0 === e && (e = {});
                let {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: l}={}, transform: a=!0, whileElementsMounted: u, open: c} = e
                  , [s,d] = f.useState({
                    x: 0,
                    y: 0,
                    strategy: n,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1
                })
                  , [p,h] = f.useState(r);
                eq(p, r) || h(r);
                let[m,g] = f.useState(null)
                  , [y,w] = f.useState(null)
                  , b = f.useCallback(e => {
                    e !== C.current && (C.current = e,
                    g(e))
                }
                , [])
                  , x = f.useCallback(e => {
                    e !== R.current && (R.current = e,
                    w(e))
                }
                , [])
                  , E = i || m
                  , S = l || y
                  , C = f.useRef(null)
                  , R = f.useRef(null)
                  , T = f.useRef(s)
                  , L = null != u
                  , P = eQ(u)
                  , A = eQ(o)
                  , k = eQ(c)
                  , M = f.useCallback( () => {
                    if (!C.current || !R.current)
                        return;
                    let e = {
                        placement: t,
                        strategy: n,
                        middleware: p
                    };
                    A.current && (e.platform = A.current),
                    eZ(C.current, R.current, e).then(e => {
                        let t = {
                            ...e,
                            isPositioned: !1 !== k.current
                        };
                        j.current && !eq(T.current, t) && (T.current = t,
                        v.flushSync( () => {
                            d(t)
                        }
                        ))
                    }
                    )
                }
                , [p, t, n, A, k]);
                e$( () => {
                    !1 === c && T.current.isPositioned && (T.current.isPositioned = !1,
                    d(e => ({
                        ...e,
                        isPositioned: !1
                    })))
                }
                , [c]);
                let j = f.useRef(!1);
                e$( () => (j.current = !0,
                () => {
                    j.current = !1
                }
                ), []),
                e$( () => {
                    if (E && (C.current = E),
                    S && (R.current = S),
                    E && S) {
                        if (P.current)
                            return P.current(E, S, M);
                        M()
                    }
                }
                , [E, S, M, P, L]);
                let N = f.useMemo( () => ({
                    reference: C,
                    floating: R,
                    setReference: b,
                    setFloating: x
                }), [b, x])
                  , D = f.useMemo( () => ({
                    reference: E,
                    floating: S
                }), [E, S])
                  , W = f.useMemo( () => {
                    let e = {
                        position: n,
                        left: 0,
                        top: 0
                    };
                    if (!D.floating)
                        return e;
                    let t = eJ(D.floating, s.x)
                      , r = eJ(D.floating, s.y);
                    return a ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...eG(D.floating) >= 1.5 && {
                            willChange: "transform"
                        }
                    } : {
                        position: n,
                        left: t,
                        top: r
                    }
                }
                , [n, a, D.floating, s.x, s.y]);
                return f.useMemo( () => ({
                    ...s,
                    update: M,
                    refs: N,
                    elements: D,
                    floatingStyles: W
                }), [s, M, N, D, W])
            }({
                strategy: "fixed",
                placement: d + ("center" !== h ? "-" + h : ""),
                whileElementsMounted: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return function(e, t, n, r) {
                        let o;
                        void 0 === r && (r = {});
                        let {ancestorScroll: i=!0, ancestorResize: l=!0, elementResize: a="function" == typeof ResizeObserver, layoutShift: u="function" == typeof IntersectionObserver, animationFrame: c=!1} = r
                          , s = eN(e)
                          , d = i || l ? [...s ? ek(s) : [], ...ek(t)] : [];
                        d.forEach(e => {
                            i && e.addEventListener("scroll", n, {
                                passive: !0
                            }),
                            l && e.addEventListener("resize", n)
                        }
                        );
                        let f = s && u ? function(e, t) {
                            let n, r = null, o = eg(e);
                            function i() {
                                var e;
                                clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                r = null
                            }
                            return !function l(a, u) {
                                void 0 === a && (a = !1),
                                void 0 === u && (u = 1),
                                i();
                                let c = e.getBoundingClientRect()
                                  , {left: s, top: d, width: f, height: p} = c;
                                if (a || t(),
                                !f || !p)
                                    return;
                                let v = Z(d)
                                  , h = Z(o.clientWidth - (s + f))
                                  , m = {
                                    rootMargin: -v + "px " + -h + "px " + -Z(o.clientHeight - (d + p)) + "px " + -Z(s) + "px",
                                    threshold: U(0, Y(1, u)) || 1
                                }
                                  , g = !0;
                                function y(t) {
                                    let r = t[0].intersectionRatio;
                                    if (r !== u) {
                                        if (!g)
                                            return l();
                                        r ? l(!1, r) : n = setTimeout( () => {
                                            l(!1, 1e-7)
                                        }
                                        , 1e3)
                                    }
                                    1 !== r || eU(c, e.getBoundingClientRect()) || l(),
                                    g = !1
                                }
                                try {
                                    r = new IntersectionObserver(y,{
                                        ...m,
                                        root: o.ownerDocument
                                    })
                                } catch (e) {
                                    r = new IntersectionObserver(y,m)
                                }
                                r.observe(e)
                            }(!0),
                            i
                        }(s, n) : null
                          , p = -1
                          , v = null;
                        a && (v = new ResizeObserver(e => {
                            let[r] = e;
                            r && r.target === s && v && (v.unobserve(t),
                            cancelAnimationFrame(p),
                            p = requestAnimationFrame( () => {
                                var e;
                                null == (e = v) || e.observe(t)
                            }
                            )),
                            n()
                        }
                        ),
                        s && !c && v.observe(s),
                        v.observe(t));
                        let h = c ? eI(e) : null;
                        return c && function t() {
                            let r = eI(e);
                            h && !eU(h, r) && n(),
                            h = r,
                            o = requestAnimationFrame(t)
                        }(),
                        n(),
                        () => {
                            var e;
                            d.forEach(e => {
                                i && e.removeEventListener("scroll", n),
                                l && e.removeEventListener("resize", n)
                            }
                            ),
                            null == f || f(),
                            null == (e = v) || e.disconnect(),
                            v = null,
                            c && cancelAnimationFrame(o)
                        }
                    }(...t, {
                        animationFrame: "always" === L
                    })
                },
                elements: {
                    reference: k.anchor
                },
                middleware: [e1({
                    mainAxis: p + H,
                    alignmentAxis: m
                }), w && e2({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === R ? e5() : void 0,
                    ...z
                }), w && e9({
                    ...z
                }), e3({
                    ...z,
                    apply: e => {
                        let {elements: t, rects: n, availableWidth: r, availableHeight: o} = e
                          , {width: i, height: l} = n.reference
                          , a = t.floating.style;
                        a.setProperty("--radix-popper-available-width", "".concat(r, "px")),
                        a.setProperty("--radix-popper-available-height", "".concat(o, "px")),
                        a.setProperty("--radix-popper-anchor-width", "".concat(i, "px")),
                        a.setProperty("--radix-popper-anchor-height", "".concat(l, "px"))
                    }
                }), D && e8({
                    element: D,
                    padding: g
                }), tm({
                    arrowWidth: I,
                    arrowHeight: H
                }), T && e6({
                    strategy: "referenceHidden",
                    ...z
                })]
            })
              , [J,Q] = tg($)
              , ee = (0,
            S.W)(P);
            (0,
            F.b)( () => {
                q && (null == ee || ee())
            }
            , [q, ee]);
            let et = null === (n = G.arrow) || void 0 === n ? void 0 : n.x
              , en = null === (r = G.arrow) || void 0 === r ? void 0 : r.y
              , er = (null === (o = G.arrow) || void 0 === o ? void 0 : o.centerOffset) !== 0
              , [eo,ei] = f.useState();
            return (0,
            F.b)( () => {
                M && ei(window.getComputedStyle(M).zIndex)
            }
            , [M]),
            (0,
            b.jsx)("div", {
                ref: K.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...X,
                    transform: q ? X.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: eo,
                    "--radix-popper-transform-origin": [null === (i = G.transformOrigin) || void 0 === i ? void 0 : i.x, null === (l = G.transformOrigin) || void 0 === l ? void 0 : l.y].join(" "),
                    ...(null === (a = G.hide) || void 0 === a ? void 0 : a.referenceHidden) && {
                        visibility: "hidden",
                        pointerEvents: "none"
                    }
                },
                dir: e.dir,
                children: (0,
                b.jsx)(tc, {
                    scope: s,
                    placedSide: J,
                    onArrowChange: W,
                    arrowX: et,
                    arrowY: en,
                    shouldHideArrow: er,
                    children: (0,
                    b.jsx)(E.WV.div, {
                        "data-side": J,
                        "data-align": Q,
                        ...A,
                        ref: N,
                        style: {
                            ...A.style,
                            animation: q ? void 0 : "none"
                        }
                    })
                })
            })
        }
        );
        td.displayName = tu;
        var tf = "PopperArrow"
          , tp = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
        }
          , tv = f.forwardRef(function(e, t) {
            let {__scopePopper: n, ...r} = e
              , o = ts(tf, n)
              , i = tp[o.placedSide];
            return (0,
            b.jsx)("span", {
                ref: o.onArrowChange,
                style: {
                    position: "absolute",
                    left: o.arrowX,
                    top: o.arrowY,
                    [i]: 0,
                    transformOrigin: {
                        top: "",
                        right: "0 0",
                        bottom: "center 0",
                        left: "100% 0"
                    }[o.placedSide],
                    transform: {
                        top: "translateY(100%)",
                        right: "translateY(50%) rotate(90deg) translateX(-50%)",
                        bottom: "rotate(180deg)",
                        left: "translateY(50%) rotate(-90deg) translateX(50%)"
                    }[o.placedSide],
                    visibility: o.shouldHideArrow ? "hidden" : void 0
                },
                children: (0,
                b.jsx)(e7, {
                    ...r,
                    ref: t,
                    style: {
                        ...r.style,
                        display: "block"
                    }
                })
            })
        });
        function th(e) {
            return null !== e
        }
        tv.displayName = tf;
        var tm = e => ({
            name: "transformOrigin",
            options: e,
            fn(t) {
                var n, r, o, i, l;
                let {placement: a, rects: u, middlewareData: c} = t
                  , s = (null === (n = c.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0
                  , d = s ? 0 : e.arrowWidth
                  , f = s ? 0 : e.arrowHeight
                  , [p,v] = tg(a)
                  , h = {
                    start: "0%",
                    center: "50%",
                    end: "100%"
                }[v]
                  , m = (null !== (i = null === (r = c.arrow) || void 0 === r ? void 0 : r.x) && void 0 !== i ? i : 0) + d / 2
                  , g = (null !== (l = null === (o = c.arrow) || void 0 === o ? void 0 : o.y) && void 0 !== l ? l : 0) + f / 2
                  , y = ""
                  , w = "";
                return "bottom" === p ? (y = s ? h : "".concat(m, "px"),
                w = "".concat(-f, "px")) : "top" === p ? (y = s ? h : "".concat(m, "px"),
                w = "".concat(u.floating.height + f, "px")) : "right" === p ? (y = "".concat(-f, "px"),
                w = s ? h : "".concat(g, "px")) : "left" === p && (y = "".concat(u.floating.width + f, "px"),
                w = s ? h : "".concat(g, "px")),
                {
                    data: {
                        x: y,
                        y: w
                    }
                }
            }
        });
        function tg(e) {
            let[t,n="center"] = e.split("-");
            return [t, n]
        }
        var ty = f.forwardRef( (e, t) => {
            var n, r;
            let {container: o, ...i} = e
              , [l,a] = f.useState(!1);
            (0,
            F.b)( () => a(!0), []);
            let u = o || l && (null === (r = globalThis) || void 0 === r ? void 0 : null === (n = r.document) || void 0 === n ? void 0 : n.body);
            return u ? v.createPortal((0,
            b.jsx)(E.WV.div, {
                ...i,
                ref: t
            }), u) : null
        }
        );
        ty.displayName = "Portal";
        var tw = n(9288)
          , tb = n(7135)
          , tx = f.forwardRef( (e, t) => (0,
        b.jsx)(E.WV.span, {
            ...e,
            ref: t,
            style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style
            }
        }));
        tx.displayName = "VisuallyHidden";
        var tE = new WeakMap
          , tS = new WeakMap
          , tC = {}
          , tR = 0
          , tT = function(e) {
            return e && (e.host || tT(e.parentNode))
        }
          , tL = function(e, t, n, r) {
            var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                if (t.contains(e))
                    return e;
                var n = tT(e);
                return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"),
                null)
            }).filter(function(e) {
                return !!e
            });
            tC[n] || (tC[n] = new WeakMap);
            var i = tC[n]
              , l = []
              , a = new Set
              , u = new Set(o)
              , c = function(e) {
                !e || a.has(e) || (a.add(e),
                c(e.parentNode))
            };
            o.forEach(c);
            var s = function(e) {
                !e || u.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                    if (a.has(e))
                        s(e);
                    else
                        try {
                            var t = e.getAttribute(r)
                              , o = null !== t && "false" !== t
                              , u = (tE.get(e) || 0) + 1
                              , c = (i.get(e) || 0) + 1;
                            tE.set(e, u),
                            i.set(e, c),
                            l.push(e),
                            1 === u && o && tS.set(e, !0),
                            1 === c && e.setAttribute(n, "true"),
                            o || e.setAttribute(r, "true")
                        } catch (t) {
                            console.error("aria-hidden: cannot operate on ", e, t)
                        }
                })
            };
            return s(t),
            a.clear(),
            tR++,
            function() {
                l.forEach(function(e) {
                    var t = tE.get(e) - 1
                      , o = i.get(e) - 1;
                    tE.set(e, t),
                    i.set(e, o),
                    t || (tS.has(e) || e.removeAttribute(r),
                    tS.delete(e)),
                    o || e.removeAttribute(n)
                }),
                --tR || (tE = new WeakMap,
                tE = new WeakMap,
                tS = new WeakMap,
                tC = {})
            }
        }
          , tP = function(e, t, n) {
            void 0 === n && (n = "data-aria-hidden");
            var r = Array.from(Array.isArray(e) ? e : [e])
              , o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
            return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
            tL(r, o, n, "aria-hidden")) : function() {
                return null
            }
        }
          , tA = function() {
            return (tA = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        function tk(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
            return n
        }
        "function" == typeof SuppressedError && SuppressedError;
        var tM = "right-scroll-bar-position"
          , tj = "width-before-scroll-bar";
        function tN(e, t) {
            return "function" == typeof e ? e(t) : e && (e.current = t),
            e
        }
        var tD = "undefined" != typeof window ? f.useLayoutEffect : f.useEffect
          , tW = new WeakMap
          , tO = (void 0 === o && (o = {}),
        (void 0 === i && (i = function(e) {
            return e
        }
        ),
        l = [],
        a = !1,
        u = {
            read: function() {
                if (a)
                    throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return l.length ? l[l.length - 1] : null
            },
            useMedium: function(e) {
                var t = i(e, a);
                return l.push(t),
                function() {
                    l = l.filter(function(e) {
                        return e !== t
                    })
                }
            },
            assignSyncMedium: function(e) {
                for (a = !0; l.length; ) {
                    var t = l;
                    l = [],
                    t.forEach(e)
                }
                l = {
                    push: function(t) {
                        return e(t)
                    },
                    filter: function() {
                        return l
                    }
                }
            },
            assignMedium: function(e) {
                a = !0;
                var t = [];
                if (l.length) {
                    var n = l;
                    l = [],
                    n.forEach(e),
                    t = l
                }
                var r = function() {
                    var n = t;
                    t = [],
                    n.forEach(e)
                }
                  , o = function() {
                    return Promise.resolve().then(r)
                };
                o(),
                l = {
                    push: function(e) {
                        t.push(e),
                        o()
                    },
                    filter: function(e) {
                        return t = t.filter(e),
                        l
                    }
                }
            }
        }).options = tA({
            async: !0,
            ssr: !1
        }, o),
        u)
          , tI = function() {}
          , tH = f.forwardRef(function(e, t) {
            var n, r, o, i, l = f.useRef(null), a = f.useState({
                onScrollCapture: tI,
                onWheelCapture: tI,
                onTouchMoveCapture: tI
            }), u = a[0], c = a[1], s = e.forwardProps, d = e.children, p = e.className, v = e.removeScrollBar, h = e.enabled, m = e.shards, g = e.sideCar, y = e.noIsolation, w = e.inert, b = e.allowPinchZoom, x = e.as, E = e.gapMode, S = tk(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = (n = [l, t],
            r = function(e) {
                return n.forEach(function(t) {
                    return tN(t, e)
                })
            }
            ,
            (o = (0,
            f.useState)(function() {
                return {
                    value: null,
                    callback: r,
                    facade: {
                        get current() {
                            return o.value
                        },
                        set current(value) {
                            var e = o.value;
                            e !== value && (o.value = value,
                            o.callback(value, e))
                        }
                    }
                }
            })[0]).callback = r,
            i = o.facade,
            tD(function() {
                var e = tW.get(i);
                if (e) {
                    var t = new Set(e)
                      , r = new Set(n)
                      , o = i.current;
                    t.forEach(function(e) {
                        r.has(e) || tN(e, null)
                    }),
                    r.forEach(function(e) {
                        t.has(e) || tN(e, o)
                    })
                }
                tW.set(i, n)
            }, [n]),
            i), R = tA(tA({}, S), u);
            return f.createElement(f.Fragment, null, h && f.createElement(g, {
                sideCar: tO,
                removeScrollBar: v,
                shards: m,
                noIsolation: y,
                inert: w,
                setCallbacks: c,
                allowPinchZoom: !!b,
                lockRef: l,
                gapMode: E
            }), s ? f.cloneElement(f.Children.only(d), tA(tA({}, R), {
                ref: C
            })) : f.createElement(void 0 === x ? "div" : x, tA({}, R, {
                className: p,
                ref: C
            }), d))
        });
        tH.defaultProps = {
            enabled: !0,
            removeScrollBar: !0,
            inert: !1
        },
        tH.classNames = {
            fullWidth: tj,
            zeroRight: tM
        };
        var tV = function(e) {
            var t = e.sideCar
              , n = tk(e, ["sideCar"]);
            if (!t)
                throw Error("Sidecar: please provide `sideCar` property to import the right car");
            var r = t.read();
            if (!r)
                throw Error("Sidecar medium not found");
            return f.createElement(r, tA({}, n))
        };
        tV.isSideCarExport = !0;
        var tF = function() {
            var e = 0
              , t = null;
            return {
                add: function(r) {
                    if (0 == e && (t = function() {
                        if (!document)
                            return null;
                        var e = document.createElement("style");
                        e.type = "text/css";
                        var t = d || n.nc;
                        return t && e.setAttribute("nonce", t),
                        e
                    }())) {
                        var o, i;
                        (o = t).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)),
                        i = t,
                        (document.head || document.getElementsByTagName("head")[0]).appendChild(i)
                    }
                    e++
                },
                remove: function() {
                    --e || !t || (t.parentNode && t.parentNode.removeChild(t),
                    t = null)
                }
            }
        }
          , tB = function() {
            var e = tF();
            return function(t, n) {
                f.useEffect(function() {
                    return e.add(t),
                    function() {
                        e.remove()
                    }
                }, [t && n])
            }
        }
          , t_ = function() {
            var e = tB();
            return function(t) {
                return e(t.styles, t.dynamic),
                null
            }
        }
          , tz = {
            left: 0,
            top: 0,
            right: 0,
            gap: 0
        }
          , tK = function(e) {
            return parseInt(e || "", 10) || 0
        }
          , tY = function(e) {
            var t = window.getComputedStyle(document.body)
              , n = t["padding" === e ? "paddingLeft" : "marginLeft"]
              , r = t["padding" === e ? "paddingTop" : "marginTop"]
              , o = t["padding" === e ? "paddingRight" : "marginRight"];
            return [tK(n), tK(r), tK(o)]
        }
          , tU = function(e) {
            if (void 0 === e && (e = "margin"),
            "undefined" == typeof window)
                return tz;
            var t = tY(e)
              , n = document.documentElement.clientWidth
              , r = window.innerWidth;
            return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
            }
        }
          , tX = t_()
          , tZ = "data-scroll-locked"
          , t$ = function(e, t, n, r) {
            var o = e.left
              , i = e.top
              , l = e.right
              , a = e.gap;
            return void 0 === n && (n = "margin"),
            "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(a, "px ").concat(r, ";\n  }\n  body[").concat(tZ, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(tM, " {\n    right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(tj, " {\n    margin-right: ").concat(a, "px ").concat(r, ";\n  }\n  \n  .").concat(tM, " .").concat(tM, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(tj, " .").concat(tj, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(tZ, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(a, "px;\n  }\n")
        }
          , tq = function() {
            var e = parseInt(document.body.getAttribute(tZ) || "0", 10);
            return isFinite(e) ? e : 0
        }
          , tG = function() {
            f.useEffect(function() {
                return document.body.setAttribute(tZ, (tq() + 1).toString()),
                function() {
                    var e = tq() - 1;
                    e <= 0 ? document.body.removeAttribute(tZ) : document.body.setAttribute(tZ, e.toString())
                }
            }, [])
        }
          , tJ = function(e) {
            var t = e.noRelative
              , n = e.noImportant
              , r = e.gapMode
              , o = void 0 === r ? "margin" : r;
            tG();
            var i = f.useMemo(function() {
                return tU(o)
            }, [o]);
            return f.createElement(tX, {
                styles: t$(i, !t, o, n ? "" : "!important")
            })
        }
          , tQ = !1;
        if ("undefined" != typeof window)
            try {
                var t0 = Object.defineProperty({}, "passive", {
                    get: function() {
                        return tQ = !0,
                        !0
                    }
                });
                window.addEventListener("test", t0, t0),
                window.removeEventListener("test", t0, t0)
            } catch (e) {
                tQ = !1
            }
        var t1 = !!tQ && {
            passive: !1
        }
          , t2 = function(e, t) {
            if (!(e instanceof Element))
                return !1;
            var n = window.getComputedStyle(e);
            return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
        }
          , t5 = function(e, t) {
            var n = t.ownerDocument
              , r = t;
            do {
                if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host),
                t9(e, r)) {
                    var o = t3(e, r);
                    if (o[1] > o[2])
                        return !0
                }
                r = r.parentNode
            } while (r && r !== n.body);
            return !1
        }
          , t9 = function(e, t) {
            return "v" === e ? t2(t, "overflowY") : t2(t, "overflowX")
        }
          , t3 = function(e, t) {
            return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        }
          , t6 = function(e, t, n, r, o) {
            var i, l = (i = window.getComputedStyle(t).direction,
            "h" === e && "rtl" === i ? -1 : 1), a = l * r, u = n.target, c = t.contains(u), s = !1, d = a > 0, f = 0, p = 0;
            do {
                var v = t3(e, u)
                  , h = v[0]
                  , m = v[1] - v[2] - l * h;
                (h || m) && t9(e, u) && (f += m,
                p += h),
                u instanceof ShadowRoot ? u = u.host : u = u.parentNode
            } while (!c && u !== document.body || c && (t.contains(u) || t === u));
            return d && (o && 1 > Math.abs(f) || !o && a > f) ? s = !0 : !d && (o && 1 > Math.abs(p) || !o && -a > p) && (s = !0),
            s
        }
          , t8 = function(e) {
            return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        }
          , t7 = function(e) {
            return [e.deltaX, e.deltaY]
        }
          , t4 = function(e) {
            return e && "current"in e ? e.current : e
        }
          , ne = 0
          , nt = []
          , nn = (c = function(e) {
            var t = f.useRef([])
              , n = f.useRef([0, 0])
              , r = f.useRef()
              , o = f.useState(ne++)[0]
              , i = f.useState(t_)[0]
              , l = f.useRef(e);
            f.useEffect(function() {
                l.current = e
            }, [e]),
            f.useEffect(function() {
                if (e.inert) {
                    document.body.classList.add("block-interactivity-".concat(o));
                    var t = (function(e, t, n) {
                        if (n || 2 == arguments.length)
                            for (var r, o = 0, i = t.length; o < i; o++)
                                !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)),
                                r[o] = t[o]);
                        return e.concat(r || Array.prototype.slice.call(t))
                    }
                    )([e.lockRef.current], (e.shards || []).map(t4), !0).filter(Boolean);
                    return t.forEach(function(e) {
                        return e.classList.add("allow-interactivity-".concat(o))
                    }),
                    function() {
                        document.body.classList.remove("block-interactivity-".concat(o)),
                        t.forEach(function(e) {
                            return e.classList.remove("allow-interactivity-".concat(o))
                        })
                    }
                }
            }, [e.inert, e.lockRef.current, e.shards]);
            var a = f.useCallback(function(e, t) {
                if ("touches"in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey)
                    return !l.current.allowPinchZoom;
                var o, i = t8(e), a = n.current, u = "deltaX"in e ? e.deltaX : a[0] - i[0], c = "deltaY"in e ? e.deltaY : a[1] - i[1], s = e.target, d = Math.abs(u) > Math.abs(c) ? "h" : "v";
                if ("touches"in e && "h" === d && "range" === s.type)
                    return !1;
                var f = t5(d, s);
                if (!f)
                    return !0;
                if (f ? o = d : (o = "v" === d ? "h" : "v",
                f = t5(d, s)),
                !f)
                    return !1;
                if (!r.current && "changedTouches"in e && (u || c) && (r.current = o),
                !o)
                    return !0;
                var p = r.current || o;
                return t6(p, t, e, "h" === p ? u : c, !0)
            }, [])
              , u = f.useCallback(function(e) {
                if (nt.length && nt[nt.length - 1] === i) {
                    var n = "deltaY"in e ? t7(e) : t8(e)
                      , r = t.current.filter(function(t) {
                        var r;
                        return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta)[0] === n[0] && r[1] === n[1]
                    })[0];
                    if (r && r.should) {
                        e.cancelable && e.preventDefault();
                        return
                    }
                    if (!r) {
                        var o = (l.current.shards || []).map(t4).filter(Boolean).filter(function(t) {
                            return t.contains(e.target)
                        });
                        (o.length > 0 ? a(e, o[0]) : !l.current.noIsolation) && e.cancelable && e.preventDefault()
                    }
                }
            }, [])
              , c = f.useCallback(function(e, n, r, o) {
                var i = {
                    name: e,
                    delta: n,
                    target: r,
                    should: o,
                    shadowParent: function(e) {
                        for (var t = null; null !== e; )
                            e instanceof ShadowRoot && (t = e.host,
                            e = e.host),
                            e = e.parentNode;
                        return t
                    }(r)
                };
                t.current.push(i),
                setTimeout(function() {
                    t.current = t.current.filter(function(e) {
                        return e !== i
                    })
                }, 1)
            }, [])
              , s = f.useCallback(function(e) {
                n.current = t8(e),
                r.current = void 0
            }, [])
              , d = f.useCallback(function(t) {
                c(t.type, t7(t), t.target, a(t, e.lockRef.current))
            }, [])
              , p = f.useCallback(function(t) {
                c(t.type, t8(t), t.target, a(t, e.lockRef.current))
            }, []);
            f.useEffect(function() {
                return nt.push(i),
                e.setCallbacks({
                    onScrollCapture: d,
                    onWheelCapture: d,
                    onTouchMoveCapture: p
                }),
                document.addEventListener("wheel", u, t1),
                document.addEventListener("touchmove", u, t1),
                document.addEventListener("touchstart", s, t1),
                function() {
                    nt = nt.filter(function(e) {
                        return e !== i
                    }),
                    document.removeEventListener("wheel", u, t1),
                    document.removeEventListener("touchmove", u, t1),
                    document.removeEventListener("touchstart", s, t1)
                }
            }, []);
            var v = e.removeScrollBar
              , h = e.inert;
            return f.createElement(f.Fragment, null, h ? f.createElement(i, {
                styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
            }) : null, v ? f.createElement(tJ, {
                gapMode: e.gapMode
            }) : null)
        }
        ,
        tO.useMedium(c),
        tV)
          , nr = f.forwardRef(function(e, t) {
            return f.createElement(tH, tA({}, e, {
                ref: t,
                sideCar: nn
            }))
        });
        nr.classNames = tH.classNames;
        var no = [" ", "Enter", "ArrowUp", "ArrowDown"]
          , ni = [" ", "Enter"]
          , nl = "Select"
          , [na,nu,nc] = function(e) {
            let t = e + "CollectionProvider"
              , [n,r] = (0,
            g.b)(t)
              , [o,i] = n(t, {
                collectionRef: {
                    current: null
                },
                itemMap: new Map
            })
              , l = e => {
                let {scope: t, children: n} = e
                  , r = f.useRef(null)
                  , i = f.useRef(new Map).current;
                return (0,
                b.jsx)(o, {
                    scope: t,
                    itemMap: i,
                    collectionRef: r,
                    children: n
                })
            }
            ;
            l.displayName = t;
            let a = e + "CollectionSlot"
              , u = f.forwardRef( (e, t) => {
                let {scope: n, children: r} = e
                  , o = i(a, n)
                  , l = (0,
                y.e)(t, o.collectionRef);
                return (0,
                b.jsx)(w.g7, {
                    ref: l,
                    children: r
                })
            }
            );
            u.displayName = a;
            let c = e + "CollectionItemSlot"
              , s = "data-radix-collection-item"
              , d = f.forwardRef( (e, t) => {
                let {scope: n, children: r, ...o} = e
                  , l = f.useRef(null)
                  , a = (0,
                y.e)(t, l)
                  , u = i(c, n);
                return f.useEffect( () => (u.itemMap.set(l, {
                    ref: l,
                    ...o
                }),
                () => void u.itemMap.delete(l))),
                (0,
                b.jsx)(w.g7, {
                    [s]: "",
                    ref: a,
                    children: r
                })
            }
            );
            return d.displayName = c,
            [{
                Provider: l,
                Slot: u,
                ItemSlot: d
            }, function(t) {
                let n = i(e + "CollectionConsumer", t);
                return f.useCallback( () => {
                    let e = n.collectionRef.current;
                    if (!e)
                        return [];
                    let t = Array.from(e.querySelectorAll("[".concat(s, "]")));
                    return Array.from(n.itemMap.values()).sort( (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
                }
                , [n.collectionRef, n.itemMap])
            }
            , r]
        }(nl)
          , [ns,nd] = (0,
        g.b)(nl, [nc, tn])
          , nf = tn()
          , [np,nv] = ns(nl)
          , [nh,nm] = ns(nl)
          , ng = e => {
            let {__scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: i, value: l, defaultValue: a, onValueChange: u, dir: c, name: s, autoComplete: d, disabled: p, required: v, form: h} = e
              , m = nf(t)
              , [g,y] = f.useState(null)
              , [w,E] = f.useState(null)
              , [S,C] = f.useState(!1)
              , R = (0,
            x.gm)(c)
              , [T=!1,L] = (0,
            tw.T)({
                prop: r,
                defaultProp: o,
                onChange: i
            })
              , [P,A] = (0,
            tw.T)({
                prop: l,
                defaultProp: a,
                onChange: u
            })
              , k = f.useRef(null)
              , M = !g || h || !!g.closest("form")
              , [j,N] = f.useState(new Set)
              , D = Array.from(j).map(e => e.props.value).join(";");
            return (0,
            b.jsx)(ti, {
                ...m,
                children: (0,
                b.jsxs)(np, {
                    required: v,
                    scope: t,
                    trigger: g,
                    onTriggerChange: y,
                    valueNode: w,
                    onValueNodeChange: E,
                    valueNodeHasChildren: S,
                    onValueNodeHasChildrenChange: C,
                    contentId: z(),
                    value: P,
                    onValueChange: A,
                    open: T,
                    onOpenChange: L,
                    dir: R,
                    triggerPointerDownPosRef: k,
                    disabled: p,
                    children: [(0,
                    b.jsx)(na.Provider, {
                        scope: t,
                        children: (0,
                        b.jsx)(nh, {
                            scope: e.__scopeSelect,
                            onNativeOptionAdd: f.useCallback(e => {
                                N(t => new Set(t).add(e))
                            }
                            , []),
                            onNativeOptionRemove: f.useCallback(e => {
                                N(t => {
                                    let n = new Set(t);
                                    return n.delete(e),
                                    n
                                }
                                )
                            }
                            , []),
                            children: n
                        })
                    }), M ? (0,
                    b.jsxs)(n5, {
                        "aria-hidden": !0,
                        required: v,
                        tabIndex: -1,
                        name: s,
                        autoComplete: d,
                        value: P,
                        onChange: e => A(e.target.value),
                        disabled: p,
                        form: h,
                        children: [void 0 === P ? (0,
                        b.jsx)("option", {
                            value: ""
                        }) : null, Array.from(j)]
                    }, D) : null]
                })
            })
        }
        ;
        ng.displayName = nl;
        var ny = "SelectTrigger"
          , nw = f.forwardRef( (e, t) => {
            let {__scopeSelect: n, disabled: r=!1, ...o} = e
              , i = nf(n)
              , l = nv(ny, n)
              , a = l.disabled || r
              , u = (0,
            y.e)(t, l.onTriggerChange)
              , c = nu(n)
              , s = f.useRef("touch")
              , [d,p,v] = n9(e => {
                let t = c().filter(e => !e.disabled)
                  , n = t.find(e => e.value === l.value)
                  , r = n3(t, e, n);
                void 0 !== r && l.onValueChange(r.value)
            }
            )
              , h = e => {
                a || (l.onOpenChange(!0),
                v()),
                e && (l.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY)
                })
            }
            ;
            return (0,
            b.jsx)(ta, {
                asChild: !0,
                ...i,
                children: (0,
                b.jsx)(E.WV.button, {
                    type: "button",
                    role: "combobox",
                    "aria-controls": l.contentId,
                    "aria-expanded": l.open,
                    "aria-required": l.required,
                    "aria-autocomplete": "none",
                    dir: l.dir,
                    "data-state": l.open ? "open" : "closed",
                    disabled: a,
                    "data-disabled": a ? "" : void 0,
                    "data-placeholder": n2(l.value) ? "" : void 0,
                    ...o,
                    ref: u,
                    onClick: (0,
                    m.M)(o.onClick, e => {
                        e.currentTarget.focus(),
                        "mouse" !== s.current && h(e)
                    }
                    ),
                    onPointerDown: (0,
                    m.M)(o.onPointerDown, e => {
                        s.current = e.pointerType;
                        let t = e.target;
                        t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
                        0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (h(e),
                        e.preventDefault())
                    }
                    ),
                    onKeyDown: (0,
                    m.M)(o.onKeyDown, e => {
                        let t = "" !== d.current;
                        e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || p(e.key),
                        (!t || " " !== e.key) && no.includes(e.key) && (h(),
                        e.preventDefault())
                    }
                    )
                })
            })
        }
        );
        nw.displayName = ny;
        var nb = "SelectValue"
          , nx = f.forwardRef( (e, t) => {
            let {__scopeSelect: n, className: r, style: o, children: i, placeholder: l="", ...a} = e
              , u = nv(nb, n)
              , {onValueNodeHasChildrenChange: c} = u
              , s = void 0 !== i
              , d = (0,
            y.e)(t, u.onValueNodeChange);
            return (0,
            F.b)( () => {
                c(s)
            }
            , [c, s]),
            (0,
            b.jsx)(E.WV.span, {
                ...a,
                ref: d,
                style: {
                    pointerEvents: "none"
                },
                children: n2(u.value) ? (0,
                b.jsx)(b.Fragment, {
                    children: l
                }) : i
            })
        }
        );
        nx.displayName = nb;
        var nE = f.forwardRef( (e, t) => {
            let {__scopeSelect: n, children: r, ...o} = e;
            return (0,
            b.jsx)(E.WV.span, {
                "aria-hidden": !0,
                ...o,
                ref: t,
                children: r || "▼"
            })
        }
        );
        nE.displayName = "SelectIcon";
        var nS = e => (0,
        b.jsx)(ty, {
            asChild: !0,
            ...e
        });
        nS.displayName = "SelectPortal";
        var nC = "SelectContent"
          , nR = f.forwardRef( (e, t) => {
            let n = nv(nC, e.__scopeSelect)
              , [r,o] = f.useState();
            return ((0,
            F.b)( () => {
                o(new DocumentFragment)
            }
            , []),
            n.open) ? (0,
            b.jsx)(nP, {
                ...e,
                ref: t
            }) : r ? v.createPortal((0,
            b.jsx)(nT, {
                scope: e.__scopeSelect,
                children: (0,
                b.jsx)(na.Slot, {
                    scope: e.__scopeSelect,
                    children: (0,
                    b.jsx)("div", {
                        children: e.children
                    })
                })
            }), r) : null
        }
        );
        nR.displayName = nC;
        var [nT,nL] = ns(nC)
          , nP = f.forwardRef( (e, t) => {
            let {__scopeSelect: n, position: r="item-aligned", onCloseAutoFocus: o, onEscapeKeyDown: i, onPointerDownOutside: l, side: a, sideOffset: u, align: c, alignOffset: s, arrowPadding: d, collisionBoundary: p, collisionPadding: v, sticky: h, hideWhenDetached: g, avoidCollisions: x, ...E} = e
              , S = nv(nC, n)
              , [C,R] = f.useState(null)
              , [L,P] = f.useState(null)
              , M = (0,
            y.e)(t, e => R(e))
              , [j,N] = f.useState(null)
              , [W,O] = f.useState(null)
              , I = nu(n)
              , [H,V] = f.useState(!1)
              , F = f.useRef(!1);
            f.useEffect( () => {
                if (C)
                    return tP(C)
            }
            , [C]),
            f.useEffect( () => {
                var e, t;
                let n = document.querySelectorAll("[data-radix-focus-guard]");
                return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : k()),
                document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : k()),
                A++,
                () => {
                    1 === A && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()),
                    A--
                }
            }
            , []);
            let B = f.useCallback(e => {
                let[t,...n] = I().map(e => e.ref.current)
                  , [r] = n.slice(-1)
                  , o = document.activeElement;
                for (let n of e)
                    if (n === o || (null == n || n.scrollIntoView({
                        block: "nearest"
                    }),
                    n === t && L && (L.scrollTop = 0),
                    n === r && L && (L.scrollTop = L.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== o))
                        return
            }
            , [I, L])
              , _ = f.useCallback( () => B([j, C]), [B, j, C]);
            f.useEffect( () => {
                H && _()
            }
            , [H, _]);
            let {onOpenChange: z, triggerPointerDownPosRef: K} = S;
            f.useEffect( () => {
                if (C) {
                    let e = {
                        x: 0,
                        y: 0
                    }
                      , t = t => {
                        var n, r, o, i;
                        e = {
                            x: Math.abs(Math.round(t.pageX) - (null !== (o = null === (n = K.current) || void 0 === n ? void 0 : n.x) && void 0 !== o ? o : 0)),
                            y: Math.abs(Math.round(t.pageY) - (null !== (i = null === (r = K.current) || void 0 === r ? void 0 : r.y) && void 0 !== i ? i : 0))
                        }
                    }
                      , n = n => {
                        e.x <= 10 && e.y <= 10 ? n.preventDefault() : C.contains(n.target) || z(!1),
                        document.removeEventListener("pointermove", t),
                        K.current = null
                    }
                    ;
                    return null !== K.current && (document.addEventListener("pointermove", t),
                    document.addEventListener("pointerup", n, {
                        capture: !0,
                        once: !0
                    })),
                    () => {
                        document.removeEventListener("pointermove", t),
                        document.removeEventListener("pointerup", n, {
                            capture: !0
                        })
                    }
                }
            }
            , [C, z, K]),
            f.useEffect( () => {
                let e = () => z(!1);
                return window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                    window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e)
                }
            }
            , [z]);
            let[Y,U] = n9(e => {
                let t = I().filter(e => !e.disabled)
                  , n = t.find(e => e.ref.current === document.activeElement)
                  , r = n3(t, e, n);
                r && setTimeout( () => r.ref.current.focus())
            }
            )
              , X = f.useCallback( (e, t, n) => {
                let r = !F.current && !n;
                (void 0 !== S.value && S.value === t || r) && (N(e),
                r && (F.current = !0))
            }
            , [S.value])
              , Z = f.useCallback( () => null == C ? void 0 : C.focus(), [C])
              , $ = f.useCallback( (e, t, n) => {
                let r = !F.current && !n;
                (void 0 !== S.value && S.value === t || r) && O(e)
            }
            , [S.value])
              , q = "popper" === r ? nk : nA
              , G = q === nk ? {
                side: a,
                sideOffset: u,
                align: c,
                alignOffset: s,
                arrowPadding: d,
                collisionBoundary: p,
                collisionPadding: v,
                sticky: h,
                hideWhenDetached: g,
                avoidCollisions: x
            } : {};
            return (0,
            b.jsx)(nT, {
                scope: n,
                content: C,
                viewport: L,
                onViewportChange: P,
                itemRefCallback: X,
                selectedItem: j,
                onItemLeave: Z,
                itemTextRefCallback: $,
                focusSelectedItem: _,
                selectedItemText: W,
                position: r,
                isPositioned: H,
                searchRef: Y,
                children: (0,
                b.jsx)(nr, {
                    as: w.g7,
                    allowPinchZoom: !0,
                    children: (0,
                    b.jsx)(D, {
                        asChild: !0,
                        trapped: S.open,
                        onMountAutoFocus: e => {
                            e.preventDefault()
                        }
                        ,
                        onUnmountAutoFocus: (0,
                        m.M)(o, e => {
                            var t;
                            null === (t = S.trigger) || void 0 === t || t.focus({
                                preventScroll: !0
                            }),
                            e.preventDefault()
                        }
                        ),
                        children: (0,
                        b.jsx)(T, {
                            asChild: !0,
                            disableOutsidePointerEvents: !0,
                            onEscapeKeyDown: i,
                            onPointerDownOutside: l,
                            onFocusOutside: e => e.preventDefault(),
                            onDismiss: () => S.onOpenChange(!1),
                            children: (0,
                            b.jsx)(q, {
                                role: "listbox",
                                id: S.contentId,
                                "data-state": S.open ? "open" : "closed",
                                dir: S.dir,
                                onContextMenu: e => e.preventDefault(),
                                ...E,
                                ...G,
                                onPlaced: () => V(!0),
                                ref: M,
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    outline: "none",
                                    ...E.style
                                },
                                onKeyDown: (0,
                                m.M)(E.onKeyDown, e => {
                                    let t = e.ctrlKey || e.altKey || e.metaKey;
                                    if ("Tab" === e.key && e.preventDefault(),
                                    t || 1 !== e.key.length || U(e.key),
                                    ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                        let t = I().filter(e => !e.disabled).map(e => e.ref.current);
                                        if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()),
                                        ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                            let n = e.target
                                              , r = t.indexOf(n);
                                            t = t.slice(r + 1)
                                        }
                                        setTimeout( () => B(t)),
                                        e.preventDefault()
                                    }
                                }
                                )
                            })
                        })
                    })
                })
            })
        }
        );
        nP.displayName = "SelectContentImpl";
        var nA = f.forwardRef( (e, t) => {
            let {__scopeSelect: n, onPlaced: r, ...o} = e
              , i = nv(nC, n)
              , l = nL(nC, n)
              , [a,u] = f.useState(null)
              , [c,s] = f.useState(null)
              , d = (0,
            y.e)(t, e => s(e))
              , p = nu(n)
              , v = f.useRef(!1)
              , m = f.useRef(!0)
              , {viewport: g, selectedItem: w, selectedItemText: x, focusSelectedItem: S} = l
              , C = f.useCallback( () => {
                if (i.trigger && i.valueNode && a && c && g && w && x) {
                    let e = i.trigger.getBoundingClientRect()
                      , t = c.getBoundingClientRect()
                      , n = i.valueNode.getBoundingClientRect()
                      , o = x.getBoundingClientRect();
                    if ("rtl" !== i.dir) {
                        let r = o.left - t.left
                          , i = n.left - r
                          , l = e.left - i
                          , u = e.width + l
                          , c = Math.max(u, t.width)
                          , s = window.innerWidth - 10
                          , d = (0,
                        h.u)(i, [10, Math.max(10, s - c)]);
                        a.style.minWidth = u + "px",
                        a.style.left = d + "px"
                    } else {
                        let r = t.right - o.right
                          , i = window.innerWidth - n.right - r
                          , l = window.innerWidth - e.right - i
                          , u = e.width + l
                          , c = Math.max(u, t.width)
                          , s = window.innerWidth - 10
                          , d = (0,
                        h.u)(i, [10, Math.max(10, s - c)]);
                        a.style.minWidth = u + "px",
                        a.style.right = d + "px"
                    }
                    let l = p()
                      , u = window.innerHeight - 20
                      , s = g.scrollHeight
                      , d = window.getComputedStyle(c)
                      , f = parseInt(d.borderTopWidth, 10)
                      , m = parseInt(d.paddingTop, 10)
                      , y = parseInt(d.borderBottomWidth, 10)
                      , b = f + m + s + parseInt(d.paddingBottom, 10) + y
                      , E = Math.min(5 * w.offsetHeight, b)
                      , S = window.getComputedStyle(g)
                      , C = parseInt(S.paddingTop, 10)
                      , R = parseInt(S.paddingBottom, 10)
                      , T = e.top + e.height / 2 - 10
                      , L = w.offsetHeight / 2
                      , P = f + m + (w.offsetTop + L);
                    if (P <= T) {
                        let e = l.length > 0 && w === l[l.length - 1].ref.current;
                        a.style.bottom = "0px";
                        let t = c.clientHeight - g.offsetTop - g.offsetHeight;
                        a.style.height = P + Math.max(u - T, L + (e ? R : 0) + t + y) + "px"
                    } else {
                        let e = l.length > 0 && w === l[0].ref.current;
                        a.style.top = "0px";
                        let t = Math.max(T, f + g.offsetTop + (e ? C : 0) + L);
                        a.style.height = t + (b - P) + "px",
                        g.scrollTop = P - T + g.offsetTop
                    }
                    a.style.margin = "".concat(10, "px 0"),
                    a.style.minHeight = E + "px",
                    a.style.maxHeight = u + "px",
                    null == r || r(),
                    requestAnimationFrame( () => v.current = !0)
                }
            }
            , [p, i.trigger, i.valueNode, a, c, g, w, x, i.dir, r]);
            (0,
            F.b)( () => C(), [C]);
            let[R,T] = f.useState();
            (0,
            F.b)( () => {
                c && T(window.getComputedStyle(c).zIndex)
            }
            , [c]);
            let L = f.useCallback(e => {
                e && !0 === m.current && (C(),
                null == S || S(),
                m.current = !1)
            }
            , [C, S]);
            return (0,
            b.jsx)(nM, {
                scope: n,
                contentWrapper: a,
                shouldExpandOnScrollRef: v,
                onScrollButtonChange: L,
                children: (0,
                b.jsx)("div", {
                    ref: u,
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        position: "fixed",
                        zIndex: R
                    },
                    children: (0,
                    b.jsx)(E.WV.div, {
                        ...o,
                        ref: d,
                        style: {
                            boxSizing: "border-box",
                            maxHeight: "100%",
                            ...o.style
                        }
                    })
                })
            })
        }
        );
        nA.displayName = "SelectItemAlignedPosition";
        var nk = f.forwardRef( (e, t) => {
            let {__scopeSelect: n, align: r="start", collisionPadding: o=10, ...i} = e
              , l = nf(n);
            return (0,
            b.jsx)(td, {
                ...l,
                ...i,
                ref: t,
                align: r,
                collisionPadding: o,
                style: {
                    boxSizing: "border-box",
                    ...i.style,
                    "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                }
            })
        }
        );
        nk.displayName = "SelectPopperPosition";
        var [nM,nj] = ns(nC, {})
          , nN = "SelectViewport"
          , nD = f.forwardRef( (e, t) => {
            let {__scopeSelect: n, nonce: r, ...o} = e
              , i = nL(nN, n)
              , l = nj(nN, n)
              , a = (0,
            y.e)(t, i.onViewportChange)
              , u = f.useRef(0);
            return (0,
            b.jsxs)(b.Fragment, {
                children: [(0,
                b.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                    },
                    nonce: r
                }), (0,
                b.jsx)(na.Slot, {
                    scope: n,
                    children: (0,
                    b.jsx)(E.WV.div, {
                        "data-radix-select-viewport": "",
                        role: "presentation",
                        ...o,
                        ref: a,
                        style: {
                            position: "relative",
                            flex: 1,
                            overflow: "hidden auto",
                            ...o.style
                        },
                        onScroll: (0,
                        m.M)(o.onScroll, e => {
                            let t = e.currentTarget
                              , {contentWrapper: n, shouldExpandOnScrollRef: r} = l;
                            if ((null == r ? void 0 : r.current) && n) {
                                let e = Math.abs(u.current - t.scrollTop);
                                if (e > 0) {
                                    let r = window.innerHeight - 20
                                      , o = Math.max(parseFloat(n.style.minHeight), parseFloat(n.style.height));
                                    if (o < r) {
                                        let i = o + e
                                          , l = Math.min(r, i)
                                          , a = i - l;
                                        n.style.height = l + "px",
                                        "0px" === n.style.bottom && (t.scrollTop = a > 0 ? a : 0,
                                        n.style.justifyContent = "flex-end")
                                    }
                                }
                            }
                            u.current = t.scrollTop
                        }
                        )
                    })
                })]
            })
        }
        );
        nD.displayName = nN;
        var nW = "SelectGroup"
          , [nO,nI] = ns(nW)
          , nH = f.forwardRef( (e, t) => {
            let {__scopeSelect: n, ...r} = e
              , o = z();
            return (0,
            b.jsx)(nO, {
                scope: n,
                id: o,
                children: (0,
                b.jsx)(E.WV.div, {
                    role: "group",
                    "aria-labelledby": o,
                    ...r,
                    ref: t
                })
            })
        }
        );
        nH.displayName = nW;
        var nV = "SelectLabel"
          , nF = f.forwardRef( (e, t) => {
            let {__scopeSelect: n, ...r} = e
              , o = nI(nV, n);
            return (0,
            b.jsx)(E.WV.div, {
                id: o.id,
                ...r,
                ref: t
            })
        }
        );
        nF.displayName = nV;
        var nB = "SelectItem"
          , [n_,nz] = ns(nB)
          , nK = f.forwardRef( (e, t) => {
            let {__scopeSelect: n, value: r, disabled: o=!1, textValue: i, ...l} = e
              , a = nv(nB, n)
              , u = nL(nB, n)
              , c = a.value === r
              , [s,d] = f.useState(null != i ? i : "")
              , [p,v] = f.useState(!1)
              , h = (0,
            y.e)(t, e => {
                var t;
                return null === (t = u.itemRefCallback) || void 0 === t ? void 0 : t.call(u, e, r, o)
            }
            )
              , g = z()
              , w = f.useRef("touch")
              , x = () => {
                o || (a.onValueChange(r),
                a.onOpenChange(!1))
            }
            ;
            if ("" === r)
                throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
            return (0,
            b.jsx)(n_, {
                scope: n,
                value: r,
                disabled: o,
                textId: g,
                isSelected: c,
                onItemTextChange: f.useCallback(e => {
                    d(t => {
                        var n;
                        return t || (null !== (n = null == e ? void 0 : e.textContent) && void 0 !== n ? n : "").trim()
                    }
                    )
                }
                , []),
                children: (0,
                b.jsx)(na.ItemSlot, {
                    scope: n,
                    value: r,
                    disabled: o,
                    textValue: s,
                    children: (0,
                    b.jsx)(E.WV.div, {
                        role: "option",
                        "aria-labelledby": g,
                        "data-highlighted": p ? "" : void 0,
                        "aria-selected": c && p,
                        "data-state": c ? "checked" : "unchecked",
                        "aria-disabled": o || void 0,
                        "data-disabled": o ? "" : void 0,
                        tabIndex: o ? void 0 : -1,
                        ...l,
                        ref: h,
                        onFocus: (0,
                        m.M)(l.onFocus, () => v(!0)),
                        onBlur: (0,
                        m.M)(l.onBlur, () => v(!1)),
                        onClick: (0,
                        m.M)(l.onClick, () => {
                            "mouse" !== w.current && x()
                        }
                        ),
                        onPointerUp: (0,
                        m.M)(l.onPointerUp, () => {
                            "mouse" === w.current && x()
                        }
                        ),
                        onPointerDown: (0,
                        m.M)(l.onPointerDown, e => {
                            w.current = e.pointerType
                        }
                        ),
                        onPointerMove: (0,
                        m.M)(l.onPointerMove, e => {
                            if (w.current = e.pointerType,
                            o) {
                                var t;
                                null === (t = u.onItemLeave) || void 0 === t || t.call(u)
                            } else
                                "mouse" === w.current && e.currentTarget.focus({
                                    preventScroll: !0
                                })
                        }
                        ),
                        onPointerLeave: (0,
                        m.M)(l.onPointerLeave, e => {
                            if (e.currentTarget === document.activeElement) {
                                var t;
                                null === (t = u.onItemLeave) || void 0 === t || t.call(u)
                            }
                        }
                        ),
                        onKeyDown: (0,
                        m.M)(l.onKeyDown, e => {
                            var t;
                            (null === (t = u.searchRef) || void 0 === t ? void 0 : t.current) !== "" && " " === e.key || (ni.includes(e.key) && x(),
                            " " === e.key && e.preventDefault())
                        }
                        )
                    })
                })
            })
        }
        );
        nK.displayName = nB;
        var nY = "SelectItemText"
          , nU = f.forwardRef( (e, t) => {
            let {__scopeSelect: n, className: r, style: o, ...i} = e
              , l = nv(nY, n)
              , a = nL(nY, n)
              , u = nz(nY, n)
              , c = nm(nY, n)
              , [s,d] = f.useState(null)
              , p = (0,
            y.e)(t, e => d(e), u.onItemTextChange, e => {
                var t;
                return null === (t = a.itemTextRefCallback) || void 0 === t ? void 0 : t.call(a, e, u.value, u.disabled)
            }
            )
              , h = null == s ? void 0 : s.textContent
              , m = f.useMemo( () => (0,
            b.jsx)("option", {
                value: u.value,
                disabled: u.disabled,
                children: h
            }, u.value), [u.disabled, u.value, h])
              , {onNativeOptionAdd: g, onNativeOptionRemove: w} = c;
            return (0,
            F.b)( () => (g(m),
            () => w(m)), [g, w, m]),
            (0,
            b.jsxs)(b.Fragment, {
                children: [(0,
                b.jsx)(E.WV.span, {
                    id: u.textId,
                    ...i,
                    ref: p
                }), u.isSelected && l.valueNode && !l.valueNodeHasChildren ? v.createPortal(i.children, l.valueNode) : null]
            })
        }
        );
        nU.displayName = nY;
        var nX = "SelectItemIndicator"
          , nZ = f.forwardRef( (e, t) => {
            let {__scopeSelect: n, ...r} = e;
            return nz(nX, n).isSelected ? (0,
            b.jsx)(E.WV.span, {
                "aria-hidden": !0,
                ...r,
                ref: t
            }) : null
        }
        );
        nZ.displayName = nX;
        var n$ = "SelectScrollUpButton"
          , nq = f.forwardRef( (e, t) => {
            let n = nL(n$, e.__scopeSelect)
              , r = nj(n$, e.__scopeSelect)
              , [o,i] = f.useState(!1)
              , l = (0,
            y.e)(t, r.onScrollButtonChange);
            return (0,
            F.b)( () => {
                if (n.viewport && n.isPositioned) {
                    let e = function() {
                        i(t.scrollTop > 0)
                    }
                      , t = n.viewport;
                    return e(),
                    t.addEventListener("scroll", e),
                    () => t.removeEventListener("scroll", e)
                }
            }
            , [n.viewport, n.isPositioned]),
            o ? (0,
            b.jsx)(nQ, {
                ...e,
                ref: l,
                onAutoScroll: () => {
                    let {viewport: e, selectedItem: t} = n;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                }
            }) : null
        }
        );
        nq.displayName = n$;
        var nG = "SelectScrollDownButton"
          , nJ = f.forwardRef( (e, t) => {
            let n = nL(nG, e.__scopeSelect)
              , r = nj(nG, e.__scopeSelect)
              , [o,i] = f.useState(!1)
              , l = (0,
            y.e)(t, r.onScrollButtonChange);
            return (0,
            F.b)( () => {
                if (n.viewport && n.isPositioned) {
                    let e = function() {
                        let e = t.scrollHeight - t.clientHeight;
                        i(Math.ceil(t.scrollTop) < e)
                    }
                      , t = n.viewport;
                    return e(),
                    t.addEventListener("scroll", e),
                    () => t.removeEventListener("scroll", e)
                }
            }
            , [n.viewport, n.isPositioned]),
            o ? (0,
            b.jsx)(nQ, {
                ...e,
                ref: l,
                onAutoScroll: () => {
                    let {viewport: e, selectedItem: t} = n;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                }
            }) : null
        }
        );
        nJ.displayName = nG;
        var nQ = f.forwardRef( (e, t) => {
            let {__scopeSelect: n, onAutoScroll: r, ...o} = e
              , i = nL("SelectScrollButton", n)
              , l = f.useRef(null)
              , a = nu(n)
              , u = f.useCallback( () => {
                null !== l.current && (window.clearInterval(l.current),
                l.current = null)
            }
            , []);
            return f.useEffect( () => () => u(), [u]),
            (0,
            F.b)( () => {
                var e;
                let t = a().find(e => e.ref.current === document.activeElement);
                null == t || null === (e = t.ref.current) || void 0 === e || e.scrollIntoView({
                    block: "nearest"
                })
            }
            , [a]),
            (0,
            b.jsx)(E.WV.div, {
                "aria-hidden": !0,
                ...o,
                ref: t,
                style: {
                    flexShrink: 0,
                    ...o.style
                },
                onPointerDown: (0,
                m.M)(o.onPointerDown, () => {
                    null === l.current && (l.current = window.setInterval(r, 50))
                }
                ),
                onPointerMove: (0,
                m.M)(o.onPointerMove, () => {
                    var e;
                    null === (e = i.onItemLeave) || void 0 === e || e.call(i),
                    null === l.current && (l.current = window.setInterval(r, 50))
                }
                ),
                onPointerLeave: (0,
                m.M)(o.onPointerLeave, () => {
                    u()
                }
                )
            })
        }
        )
          , n0 = f.forwardRef( (e, t) => {
            let {__scopeSelect: n, ...r} = e;
            return (0,
            b.jsx)(E.WV.div, {
                "aria-hidden": !0,
                ...r,
                ref: t
            })
        }
        );
        n0.displayName = "SelectSeparator";
        var n1 = "SelectArrow";
        function n2(e) {
            return "" === e || void 0 === e
        }
        f.forwardRef( (e, t) => {
            let {__scopeSelect: n, ...r} = e
              , o = nf(n)
              , i = nv(n1, n)
              , l = nL(n1, n);
            return i.open && "popper" === l.position ? (0,
            b.jsx)(tv, {
                ...o,
                ...r,
                ref: t
            }) : null
        }
        ).displayName = n1;
        var n5 = f.forwardRef( (e, t) => {
            let {value: n, ...r} = e
              , o = f.useRef(null)
              , i = (0,
            y.e)(t, o)
              , l = (0,
            tb.D)(n);
            return f.useEffect( () => {
                let e = o.current
                  , t = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
                if (l !== n && t) {
                    let r = new Event("change",{
                        bubbles: !0
                    });
                    t.call(e, n),
                    e.dispatchEvent(r)
                }
            }
            , [l, n]),
            (0,
            b.jsx)(tx, {
                asChild: !0,
                children: (0,
                b.jsx)("select", {
                    ...r,
                    ref: i,
                    defaultValue: n
                })
            })
        }
        );
        function n9(e) {
            let t = (0,
            S.W)(e)
              , n = f.useRef("")
              , r = f.useRef(0)
              , o = f.useCallback(e => {
                let o = n.current + e;
                t(o),
                function e(t) {
                    n.current = t,
                    window.clearTimeout(r.current),
                    "" !== t && (r.current = window.setTimeout( () => e(""), 1e3))
                }(o)
            }
            , [t])
              , i = f.useCallback( () => {
                n.current = "",
                window.clearTimeout(r.current)
            }
            , []);
            return f.useEffect( () => () => window.clearTimeout(r.current), []),
            [n, o, i]
        }
        function n3(e, t, n) {
            var r;
            let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t
              , i = (r = Math.max(n ? e.indexOf(n) : -1, 0),
            e.map( (t, n) => e[(r + n) % e.length]));
            1 === o.length && (i = i.filter(e => e !== n));
            let l = i.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
            return l !== n ? l : void 0
        }
        n5.displayName = "BubbleSelect";
        var n6 = ng
          , n8 = nw
          , n7 = nx
          , n4 = nE
          , re = nS
          , rt = nR
          , rn = nD
          , rr = nH
          , ro = nF
          , ri = nK
          , rl = nU
          , ra = nZ
          , ru = nq
          , rc = nJ
          , rs = n0
    },
    2679: function(e, t, n) {
        "use strict";
        n.d(t, {
            W: function() {
                return o
            }
        });
        var r = n(5192);
        function o(e) {
            let t = r.useRef(e);
            return r.useEffect( () => {
                t.current = e
            }
            ),
            r.useMemo( () => (...e) => t.current?.(...e), [])
        }
    },
    9288: function(e, t, n) {
        "use strict";
        n.d(t, {
            T: function() {
                return i
            }
        });
        var r = n(5192)
          , o = n(2679);
        function i({prop: e, defaultProp: t, onChange: n= () => {}
        }) {
            let[i,l] = function({defaultProp: e, onChange: t}) {
                let n = r.useState(e)
                  , [i] = n
                  , l = r.useRef(i)
                  , a = (0,
                o.W)(t);
                return r.useEffect( () => {
                    l.current !== i && (a(i),
                    l.current = i)
                }
                , [i, l, a]),
                n
            }({
                defaultProp: t,
                onChange: n
            })
              , a = void 0 !== e
              , u = a ? e : i
              , c = (0,
            o.W)(n);
            return [u, r.useCallback(t => {
                if (a) {
                    let n = "function" == typeof t ? t(e) : t;
                    n !== e && c(n)
                } else
                    l(t)
            }
            , [a, e, l, c])]
        }
    },
    8253: function(e, t, n) {
        "use strict";
        n.d(t, {
            b: function() {
                return o
            }
        });
        var r = n(5192)
          , o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    7135: function(e, t, n) {
        "use strict";
        n.d(t, {
            D: function() {
                return o
            }
        });
        var r = n(5192);
        function o(e) {
            let t = r.useRef({
                value: e,
                previous: e
            });
            return r.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
            t.current.value = e),
            t.current.previous), [e])
        }
    },
    9475: function(e, t, n) {
        "use strict";
        n.d(t, {
            t: function() {
                return i
            }
        });
        var r = n(5192)
          , o = n(8253);
        function i(e) {
            let[t,n] = r.useState(void 0);
            return (0,
            o.b)( () => {
                if (e) {
                    n({
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    });
                    let t = new ResizeObserver(t => {
                        let r, o;
                        if (!Array.isArray(t) || !t.length)
                            return;
                        let i = t[0];
                        if ("borderBoxSize"in i) {
                            let e = i.borderBoxSize
                              , t = Array.isArray(e) ? e[0] : e;
                            r = t.inlineSize,
                            o = t.blockSize
                        } else
                            r = e.offsetWidth,
                            o = e.offsetHeight;
                        n({
                            width: r,
                            height: o
                        })
                    }
                    );
                    return t.observe(e, {
                        box: "border-box"
                    }),
                    () => t.unobserve(e)
                }
                n(void 0)
            }
            , [e]),
            t
        }
    }
}]);
