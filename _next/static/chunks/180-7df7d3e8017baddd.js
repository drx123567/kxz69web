"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[180], {
    7962: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return n
            }
        });
        let n = (0,
        r(6021).Z)("Check", [["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]])
    },
    9444: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return n
            }
        });
        let n = (0,
        r(6021).Z)("SlidersHorizontal", [["line", {
            x1: "21",
            x2: "14",
            y1: "4",
            y2: "4",
            key: "obuewd"
        }], ["line", {
            x1: "10",
            x2: "3",
            y1: "4",
            y2: "4",
            key: "1q6298"
        }], ["line", {
            x1: "21",
            x2: "12",
            y1: "12",
            y2: "12",
            key: "1iu8h1"
        }], ["line", {
            x1: "8",
            x2: "3",
            y1: "12",
            y2: "12",
            key: "ntss68"
        }], ["line", {
            x1: "21",
            x2: "16",
            y1: "20",
            y2: "20",
            key: "14d8ph"
        }], ["line", {
            x1: "12",
            x2: "3",
            y1: "20",
            y2: "20",
            key: "m0wm8r"
        }], ["line", {
            x1: "14",
            x2: "14",
            y1: "2",
            y2: "6",
            key: "14e1ph"
        }], ["line", {
            x1: "8",
            x2: "8",
            y1: "10",
            y2: "14",
            key: "1i6ji0"
        }], ["line", {
            x1: "16",
            x2: "16",
            y1: "18",
            y2: "22",
            key: "1lctlv"
        }]])
    },
    2591: function(e, t, r) {
        r.d(t, {
            u: function() {
                return n
            }
        });
        function n(e, [t,r]) {
            return Math.min(r, Math.max(t, e))
        }
    },
    468: function(e, t, r) {
        r.d(t, {
            M: function() {
                return n
            }
        });
        function n(e, t, {checkForDefaultPrevented: r=!0}={}) {
            return function(n) {
                if (e?.(n),
                !1 === r || !n.defaultPrevented)
                    return t?.(n)
            }
        }
    },
    9803: function(e, t, r) {
        r.d(t, {
            fC: function() {
                return C
            },
            z$: function() {
                return T
            }
        });
        var n = r(5192)
          , o = r(885)
          , l = r(5580)
          , i = r(468)
          , a = r(9288)
          , u = r(7135)
          , s = r(9475)
          , c = r(5999)
          , d = r(6723)
          , f = r(288)
          , p = "Checkbox"
          , [v,h] = (0,
        l.b)(p)
          , [w,m] = v(p)
          , b = n.forwardRef( (e, t) => {
            let {__scopeCheckbox: r, name: l, checked: u, defaultChecked: s, required: c, disabled: p, value: v="on", onCheckedChange: h, form: m, ...b} = e
              , [y,g] = n.useState(null)
              , C = (0,
            o.e)(t, e => g(e))
              , T = n.useRef(!1)
              , R = !y || m || !!y.closest("form")
              , [N=!1,P] = (0,
            a.T)({
                prop: u,
                defaultProp: s,
                onChange: h
            })
              , L = n.useRef(N);
            return n.useEffect( () => {
                let e = null == y ? void 0 : y.form;
                if (e) {
                    let t = () => P(L.current);
                    return e.addEventListener("reset", t),
                    () => e.removeEventListener("reset", t)
                }
            }
            , [y, P]),
            (0,
            f.jsxs)(w, {
                scope: r,
                state: N,
                disabled: p,
                children: [(0,
                f.jsx)(d.WV.button, {
                    type: "button",
                    role: "checkbox",
                    "aria-checked": S(N) ? "mixed" : N,
                    "aria-required": c,
                    "data-state": E(N),
                    "data-disabled": p ? "" : void 0,
                    disabled: p,
                    value: v,
                    ...b,
                    ref: C,
                    onKeyDown: (0,
                    i.M)(e.onKeyDown, e => {
                        "Enter" === e.key && e.preventDefault()
                    }
                    ),
                    onClick: (0,
                    i.M)(e.onClick, e => {
                        P(e => !!S(e) || !e),
                        R && (T.current = e.isPropagationStopped(),
                        T.current || e.stopPropagation())
                    }
                    )
                }), R && (0,
                f.jsx)(x, {
                    control: y,
                    bubbles: !T.current,
                    name: l,
                    value: v,
                    checked: N,
                    required: c,
                    disabled: p,
                    form: m,
                    style: {
                        transform: "translateX(-100%)"
                    },
                    defaultChecked: !S(s) && s
                })]
            })
        }
        );
        b.displayName = p;
        var y = "CheckboxIndicator"
          , g = n.forwardRef( (e, t) => {
            let {__scopeCheckbox: r, forceMount: n, ...o} = e
              , l = m(y, r);
            return (0,
            f.jsx)(c.z, {
                present: n || S(l.state) || !0 === l.state,
                children: (0,
                f.jsx)(d.WV.span, {
                    "data-state": E(l.state),
                    "data-disabled": l.disabled ? "" : void 0,
                    ...o,
                    ref: t,
                    style: {
                        pointerEvents: "none",
                        ...e.style
                    }
                })
            })
        }
        );
        g.displayName = y;
        var x = e => {
            let {control: t, checked: r, bubbles: o=!0, defaultChecked: l, ...i} = e
              , a = n.useRef(null)
              , c = (0,
            u.D)(r)
              , d = (0,
            s.t)(t);
            n.useEffect( () => {
                let e = a.current
                  , t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
                if (c !== r && t) {
                    let n = new Event("click",{
                        bubbles: o
                    });
                    e.indeterminate = S(r),
                    t.call(e, !S(r) && r),
                    e.dispatchEvent(n)
                }
            }
            , [c, r, o]);
            let p = n.useRef(!S(r) && r);
            return (0,
            f.jsx)("input", {
                type: "checkbox",
                "aria-hidden": !0,
                defaultChecked: null != l ? l : p.current,
                ...i,
                tabIndex: -1,
                ref: a,
                style: {
                    ...e.style,
                    ...d,
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: 0,
                    margin: 0
                }
            })
        }
        ;
        function S(e) {
            return "indeterminate" === e
        }
        function E(e) {
            return S(e) ? "indeterminate" : e ? "checked" : "unchecked"
        }
        var C = b
          , T = g
    },
    5580: function(e, t, r) {
        r.d(t, {
            b: function() {
                return l
            }
        });
        var n = r(5192)
          , o = r(288);
        function l(e, t=[]) {
            let r = []
              , l = () => {
                let t = r.map(e => n.createContext(e));
                return function(r) {
                    let o = r?.[e] || t;
                    return n.useMemo( () => ({
                        [`__scope${e}`]: {
                            ...r,
                            [e]: o
                        }
                    }), [r, o])
                }
            }
            ;
            return l.scopeName = e,
            [function(t, l) {
                let i = n.createContext(l)
                  , a = r.length;
                r = [...r, l];
                let u = t => {
                    let {scope: r, children: l, ...u} = t
                      , s = r?.[e]?.[a] || i
                      , c = n.useMemo( () => u, Object.values(u));
                    return (0,
                    o.jsx)(s.Provider, {
                        value: c,
                        children: l
                    })
                }
                ;
                return u.displayName = t + "Provider",
                [u, function(r, o) {
                    let u = o?.[e]?.[a] || i
                      , s = n.useContext(u);
                    if (s)
                        return s;
                    if (void 0 !== l)
                        return l;
                    throw Error(`\`${r}\` must be used within \`${t}\``)
                }
                ]
            }
            , function(...e) {
                let t = e[0];
                if (1 === e.length)
                    return t;
                let r = () => {
                    let r = e.map(e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let o = r.reduce( (t, {useScope: r, scopeName: n}) => {
                            let o = r(e)[`__scope${n}`];
                            return {
                                ...t,
                                ...o
                            }
                        }
                        , {});
                        return n.useMemo( () => ({
                            [`__scope${t.scopeName}`]: o
                        }), [o])
                    }
                }
                ;
                return r.scopeName = t.scopeName,
                r
            }(l, ...t)]
        }
    },
    9950: function(e, t, r) {
        r.d(t, {
            gm: function() {
                return l
            }
        });
        var n = r(5192);
        r(288);
        var o = n.createContext(void 0);
        function l(e) {
            let t = n.useContext(o);
            return e || t || "ltr"
        }
    },
    5999: function(e, t, r) {
        r.d(t, {
            z: function() {
                return i
            }
        });
        var n = r(5192)
          , o = r(885)
          , l = r(8253)
          , i = e => {
            var t, r;
            let i, u;
            let {present: s, children: c} = e
              , d = function(e) {
                var t, r;
                let[o,i] = n.useState()
                  , u = n.useRef({})
                  , s = n.useRef(e)
                  , c = n.useRef("none")
                  , [d,f] = (t = e ? "mounted" : "unmounted",
                r = {
                    mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended"
                    },
                    unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted"
                    },
                    unmounted: {
                        MOUNT: "mounted"
                    }
                },
                n.useReducer( (e, t) => {
                    let n = r[e][t];
                    return null != n ? n : e
                }
                , t));
                return n.useEffect( () => {
                    let e = a(u.current);
                    c.current = "mounted" === d ? e : "none"
                }
                , [d]),
                (0,
                l.b)( () => {
                    let t = u.current
                      , r = s.current;
                    if (r !== e) {
                        let n = c.current
                          , o = a(t);
                        e ? f("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? f("UNMOUNT") : r && n !== o ? f("ANIMATION_OUT") : f("UNMOUNT"),
                        s.current = e
                    }
                }
                , [e, f]),
                (0,
                l.b)( () => {
                    if (o) {
                        var e;
                        let t;
                        let r = null !== (e = o.ownerDocument.defaultView) && void 0 !== e ? e : window
                          , n = e => {
                            let n = a(u.current).includes(e.animationName);
                            if (e.target === o && n && (f("ANIMATION_END"),
                            !s.current)) {
                                let e = o.style.animationFillMode;
                                o.style.animationFillMode = "forwards",
                                t = r.setTimeout( () => {
                                    "forwards" === o.style.animationFillMode && (o.style.animationFillMode = e)
                                }
                                )
                            }
                        }
                          , l = e => {
                            e.target === o && (c.current = a(u.current))
                        }
                        ;
                        return o.addEventListener("animationstart", l),
                        o.addEventListener("animationcancel", n),
                        o.addEventListener("animationend", n),
                        () => {
                            r.clearTimeout(t),
                            o.removeEventListener("animationstart", l),
                            o.removeEventListener("animationcancel", n),
                            o.removeEventListener("animationend", n)
                        }
                    }
                    f("ANIMATION_END")
                }
                , [o, f]),
                {
                    isPresent: ["mounted", "unmountSuspended"].includes(d),
                    ref: n.useCallback(e => {
                        e && (u.current = getComputedStyle(e)),
                        i(e)
                    }
                    , [])
                }
            }(s)
              , f = "function" == typeof c ? c({
                present: d.isPresent
            }) : n.Children.only(c)
              , p = (0,
            o.e)(d.ref, (i = null === (t = Object.getOwnPropertyDescriptor(f.props, "ref")) || void 0 === t ? void 0 : t.get) && "isReactWarning"in i && i.isReactWarning ? f.ref : (i = null === (r = Object.getOwnPropertyDescriptor(f, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning"in i && i.isReactWarning ? f.props.ref : f.props.ref || f.ref);
            return "function" == typeof c || d.isPresent ? n.cloneElement(f, {
                ref: p
            }) : null
        }
        ;
        function a(e) {
            return (null == e ? void 0 : e.animationName) || "none"
        }
        i.displayName = "Presence"
    },
    6723: function(e, t, r) {
        r.d(t, {
            WV: function() {
                return a
            },
            jH: function() {
                return u
            }
        });
        var n = r(5192)
          , o = r(9719)
          , l = r(1232)
          , i = r(288)
          , a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce( (e, t) => {
            let r = n.forwardRef( (e, r) => {
                let {asChild: n, ...o} = e
                  , a = n ? l.g7 : t;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0,
                i.jsx)(a, {
                    ...o,
                    ref: r
                })
            }
            );
            return r.displayName = `Primitive.${t}`,
            {
                ...e,
                [t]: r
            }
        }
        , {});
        function u(e, t) {
            e && o.flushSync( () => e.dispatchEvent(t))
        }
    },
    7422: function(e, t, r) {
        r.d(t, {
            Ns: function() {
                return Z
            },
            fC: function() {
                return $
            },
            gb: function() {
                return E
            },
            l_: function() {
                return q
            },
            q4: function() {
                return W
            }
        });
        var n = r(5192)
          , o = r(6723)
          , l = r(5999)
          , i = r(5580)
          , a = r(885)
          , u = r(2679)
          , s = r(9950)
          , c = r(8253)
          , d = r(2591)
          , f = r(468)
          , p = r(288)
          , v = "ScrollArea"
          , [h,w] = (0,
        i.b)(v)
          , [m,b] = h(v)
          , y = n.forwardRef( (e, t) => {
            let {__scopeScrollArea: r, type: l="hover", dir: i, scrollHideDelay: u=600, ...c} = e
              , [d,f] = n.useState(null)
              , [v,h] = n.useState(null)
              , [w,b] = n.useState(null)
              , [y,g] = n.useState(null)
              , [x,S] = n.useState(null)
              , [E,C] = n.useState(0)
              , [T,R] = n.useState(0)
              , [N,P] = n.useState(!1)
              , [L,_] = n.useState(!1)
              , j = (0,
            a.e)(t, e => f(e))
              , k = (0,
            s.gm)(i);
            return (0,
            p.jsx)(m, {
                scope: r,
                type: l,
                dir: k,
                scrollHideDelay: u,
                scrollArea: d,
                viewport: v,
                onViewportChange: h,
                content: w,
                onContentChange: b,
                scrollbarX: y,
                onScrollbarXChange: g,
                scrollbarXEnabled: N,
                onScrollbarXEnabledChange: P,
                scrollbarY: x,
                onScrollbarYChange: S,
                scrollbarYEnabled: L,
                onScrollbarYEnabledChange: _,
                onCornerWidthChange: C,
                onCornerHeightChange: R,
                children: (0,
                p.jsx)(o.WV.div, {
                    dir: k,
                    ...c,
                    ref: j,
                    style: {
                        position: "relative",
                        "--radix-scroll-area-corner-width": E + "px",
                        "--radix-scroll-area-corner-height": T + "px",
                        ...e.style
                    }
                })
            })
        }
        );
        y.displayName = v;
        var g = "ScrollAreaViewport"
          , x = n.forwardRef( (e, t) => {
            let {__scopeScrollArea: r, children: l, nonce: i, ...u} = e
              , s = b(g, r)
              , c = n.useRef(null)
              , d = (0,
            a.e)(t, c, s.onViewportChange);
            return (0,
            p.jsxs)(p.Fragment, {
                children: [(0,
                p.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                    },
                    nonce: i
                }), (0,
                p.jsx)(o.WV.div, {
                    "data-radix-scroll-area-viewport": "",
                    ...u,
                    ref: d,
                    style: {
                        overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                        overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                        ...e.style
                    },
                    children: (0,
                    p.jsx)("div", {
                        ref: s.onContentChange,
                        style: {
                            minWidth: "100%",
                            display: "table"
                        },
                        children: l
                    })
                })]
            })
        }
        );
        x.displayName = g;
        var S = "ScrollAreaScrollbar"
          , E = n.forwardRef( (e, t) => {
            let {forceMount: r, ...o} = e
              , l = b(S, e.__scopeScrollArea)
              , {onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: a} = l
              , u = "horizontal" === e.orientation;
            return n.useEffect( () => (u ? i(!0) : a(!0),
            () => {
                u ? i(!1) : a(!1)
            }
            ), [u, i, a]),
            "hover" === l.type ? (0,
            p.jsx)(C, {
                ...o,
                ref: t,
                forceMount: r
            }) : "scroll" === l.type ? (0,
            p.jsx)(T, {
                ...o,
                ref: t,
                forceMount: r
            }) : "auto" === l.type ? (0,
            p.jsx)(R, {
                ...o,
                ref: t,
                forceMount: r
            }) : "always" === l.type ? (0,
            p.jsx)(N, {
                ...o,
                ref: t
            }) : null
        }
        );
        E.displayName = S;
        var C = n.forwardRef( (e, t) => {
            let {forceMount: r, ...o} = e
              , i = b(S, e.__scopeScrollArea)
              , [a,u] = n.useState(!1);
            return n.useEffect( () => {
                let e = i.scrollArea
                  , t = 0;
                if (e) {
                    let r = () => {
                        window.clearTimeout(t),
                        u(!0)
                    }
                      , n = () => {
                        t = window.setTimeout( () => u(!1), i.scrollHideDelay)
                    }
                    ;
                    return e.addEventListener("pointerenter", r),
                    e.addEventListener("pointerleave", n),
                    () => {
                        window.clearTimeout(t),
                        e.removeEventListener("pointerenter", r),
                        e.removeEventListener("pointerleave", n)
                    }
                }
            }
            , [i.scrollArea, i.scrollHideDelay]),
            (0,
            p.jsx)(l.z, {
                present: r || a,
                children: (0,
                p.jsx)(R, {
                    "data-state": a ? "visible" : "hidden",
                    ...o,
                    ref: t
                })
            })
        }
        )
          , T = n.forwardRef( (e, t) => {
            var r, o;
            let {forceMount: i, ...a} = e
              , u = b(S, e.__scopeScrollArea)
              , s = "horizontal" === e.orientation
              , c = F( () => v("SCROLL_END"), 100)
              , [d,v] = (r = "hidden",
            o = {
                hidden: {
                    SCROLL: "scrolling"
                },
                scrolling: {
                    SCROLL_END: "idle",
                    POINTER_ENTER: "interacting"
                },
                interacting: {
                    SCROLL: "interacting",
                    POINTER_LEAVE: "idle"
                },
                idle: {
                    HIDE: "hidden",
                    SCROLL: "scrolling",
                    POINTER_ENTER: "interacting"
                }
            },
            n.useReducer( (e, t) => {
                let r = o[e][t];
                return null != r ? r : e
            }
            , r));
            return n.useEffect( () => {
                if ("idle" === d) {
                    let e = window.setTimeout( () => v("HIDE"), u.scrollHideDelay);
                    return () => window.clearTimeout(e)
                }
            }
            , [d, u.scrollHideDelay, v]),
            n.useEffect( () => {
                let e = u.viewport
                  , t = s ? "scrollLeft" : "scrollTop";
                if (e) {
                    let r = e[t]
                      , n = () => {
                        let n = e[t];
                        r !== n && (v("SCROLL"),
                        c()),
                        r = n
                    }
                    ;
                    return e.addEventListener("scroll", n),
                    () => e.removeEventListener("scroll", n)
                }
            }
            , [u.viewport, s, v, c]),
            (0,
            p.jsx)(l.z, {
                present: i || "hidden" !== d,
                children: (0,
                p.jsx)(N, {
                    "data-state": "hidden" === d ? "hidden" : "visible",
                    ...a,
                    ref: t,
                    onPointerEnter: (0,
                    f.M)(e.onPointerEnter, () => v("POINTER_ENTER")),
                    onPointerLeave: (0,
                    f.M)(e.onPointerLeave, () => v("POINTER_LEAVE"))
                })
            })
        }
        )
          , R = n.forwardRef( (e, t) => {
            let r = b(S, e.__scopeScrollArea)
              , {forceMount: o, ...i} = e
              , [a,u] = n.useState(!1)
              , s = "horizontal" === e.orientation
              , c = F( () => {
                if (r.viewport) {
                    let e = r.viewport.offsetWidth < r.viewport.scrollWidth
                      , t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                    u(s ? e : t)
                }
            }
            , 10);
            return B(r.viewport, c),
            B(r.content, c),
            (0,
            p.jsx)(l.z, {
                present: o || a,
                children: (0,
                p.jsx)(N, {
                    "data-state": a ? "visible" : "hidden",
                    ...i,
                    ref: t
                })
            })
        }
        )
          , N = n.forwardRef( (e, t) => {
            let {orientation: r="vertical", ...o} = e
              , l = b(S, e.__scopeScrollArea)
              , i = n.useRef(null)
              , a = n.useRef(0)
              , [u,s] = n.useState({
                content: 0,
                viewport: 0,
                scrollbar: {
                    size: 0,
                    paddingStart: 0,
                    paddingEnd: 0
                }
            })
              , c = U(u.viewport, u.content)
              , d = {
                ...o,
                sizes: u,
                onSizesChange: s,
                hasThumb: !!(c > 0 && c < 1),
                onThumbChange: e => i.current = e,
                onThumbPointerUp: () => a.current = 0,
                onThumbPointerDown: e => a.current = e
            };
            function f(e, t) {
                return function(e, t, r) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "ltr"
                      , o = H(r)
                      , l = t || o / 2
                      , i = r.scrollbar.paddingStart + l
                      , a = r.scrollbar.size - r.scrollbar.paddingEnd - (o - l)
                      , u = r.content - r.viewport;
                    return X([i, a], "ltr" === n ? [0, u] : [-1 * u, 0])(e)
                }(e, a.current, u, t)
            }
            return "horizontal" === r ? (0,
            p.jsx)(P, {
                ...d,
                ref: t,
                onThumbPositionChange: () => {
                    if (l.viewport && i.current) {
                        let e = V(l.viewport.scrollLeft, u, l.dir);
                        i.current.style.transform = "translate3d(".concat(e, "px, 0, 0)")
                    }
                }
                ,
                onWheelScroll: e => {
                    l.viewport && (l.viewport.scrollLeft = e)
                }
                ,
                onDragScroll: e => {
                    l.viewport && (l.viewport.scrollLeft = f(e, l.dir))
                }
            }) : "vertical" === r ? (0,
            p.jsx)(L, {
                ...d,
                ref: t,
                onThumbPositionChange: () => {
                    if (l.viewport && i.current) {
                        let e = V(l.viewport.scrollTop, u);
                        i.current.style.transform = "translate3d(0, ".concat(e, "px, 0)")
                    }
                }
                ,
                onWheelScroll: e => {
                    l.viewport && (l.viewport.scrollTop = e)
                }
                ,
                onDragScroll: e => {
                    l.viewport && (l.viewport.scrollTop = f(e))
                }
            }) : null
        }
        )
          , P = n.forwardRef( (e, t) => {
            let {sizes: r, onSizesChange: o, ...l} = e
              , i = b(S, e.__scopeScrollArea)
              , [u,s] = n.useState()
              , c = n.useRef(null)
              , d = (0,
            a.e)(t, c, i.onScrollbarXChange);
            return n.useEffect( () => {
                c.current && s(getComputedStyle(c.current))
            }
            , [c]),
            (0,
            p.jsx)(k, {
                "data-orientation": "horizontal",
                ...l,
                ref: d,
                sizes: r,
                style: {
                    bottom: 0,
                    left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                    right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                    "--radix-scroll-area-thumb-width": H(r) + "px",
                    ...e.style
                },
                onThumbPointerDown: t => e.onThumbPointerDown(t.x),
                onDragScroll: t => e.onDragScroll(t.x),
                onWheelScroll: (t, r) => {
                    if (i.viewport) {
                        let n = i.viewport.scrollLeft + t.deltaX;
                        e.onWheelScroll(n),
                        n > 0 && n < r && t.preventDefault()
                    }
                }
                ,
                onResize: () => {
                    c.current && i.viewport && u && o({
                        content: i.viewport.scrollWidth,
                        viewport: i.viewport.offsetWidth,
                        scrollbar: {
                            size: c.current.clientWidth,
                            paddingStart: I(u.paddingLeft),
                            paddingEnd: I(u.paddingRight)
                        }
                    })
                }
            })
        }
        )
          , L = n.forwardRef( (e, t) => {
            let {sizes: r, onSizesChange: o, ...l} = e
              , i = b(S, e.__scopeScrollArea)
              , [u,s] = n.useState()
              , c = n.useRef(null)
              , d = (0,
            a.e)(t, c, i.onScrollbarYChange);
            return n.useEffect( () => {
                c.current && s(getComputedStyle(c.current))
            }
            , [c]),
            (0,
            p.jsx)(k, {
                "data-orientation": "vertical",
                ...l,
                ref: d,
                sizes: r,
                style: {
                    top: 0,
                    right: "ltr" === i.dir ? 0 : void 0,
                    left: "rtl" === i.dir ? 0 : void 0,
                    bottom: "var(--radix-scroll-area-corner-height)",
                    "--radix-scroll-area-thumb-height": H(r) + "px",
                    ...e.style
                },
                onThumbPointerDown: t => e.onThumbPointerDown(t.y),
                onDragScroll: t => e.onDragScroll(t.y),
                onWheelScroll: (t, r) => {
                    if (i.viewport) {
                        let n = i.viewport.scrollTop + t.deltaY;
                        e.onWheelScroll(n),
                        n > 0 && n < r && t.preventDefault()
                    }
                }
                ,
                onResize: () => {
                    c.current && i.viewport && u && o({
                        content: i.viewport.scrollHeight,
                        viewport: i.viewport.offsetHeight,
                        scrollbar: {
                            size: c.current.clientHeight,
                            paddingStart: I(u.paddingTop),
                            paddingEnd: I(u.paddingBottom)
                        }
                    })
                }
            })
        }
        )
          , [_,j] = h(S)
          , k = n.forwardRef( (e, t) => {
            let {__scopeScrollArea: r, sizes: l, hasThumb: i, onThumbChange: s, onThumbPointerUp: c, onThumbPointerDown: d, onThumbPositionChange: v, onDragScroll: h, onWheelScroll: w, onResize: m, ...y} = e
              , g = b(S, r)
              , [x,E] = n.useState(null)
              , C = (0,
            a.e)(t, e => E(e))
              , T = n.useRef(null)
              , R = n.useRef("")
              , N = g.viewport
              , P = l.content - l.viewport
              , L = (0,
            u.W)(w)
              , j = (0,
            u.W)(v)
              , k = F(m, 10);
            function D(e) {
                T.current && h({
                    x: e.clientX - T.current.left,
                    y: e.clientY - T.current.top
                })
            }
            return n.useEffect( () => {
                let e = e => {
                    let t = e.target;
                    (null == x ? void 0 : x.contains(t)) && L(e, P)
                }
                ;
                return document.addEventListener("wheel", e, {
                    passive: !1
                }),
                () => document.removeEventListener("wheel", e, {
                    passive: !1
                })
            }
            , [N, x, P, L]),
            n.useEffect(j, [l, j]),
            B(x, k),
            B(g.content, k),
            (0,
            p.jsx)(_, {
                scope: r,
                scrollbar: x,
                hasThumb: i,
                onThumbChange: (0,
                u.W)(s),
                onThumbPointerUp: (0,
                u.W)(c),
                onThumbPositionChange: j,
                onThumbPointerDown: (0,
                u.W)(d),
                children: (0,
                p.jsx)(o.WV.div, {
                    ...y,
                    ref: C,
                    style: {
                        position: "absolute",
                        ...y.style
                    },
                    onPointerDown: (0,
                    f.M)(e.onPointerDown, e => {
                        0 === e.button && (e.target.setPointerCapture(e.pointerId),
                        T.current = x.getBoundingClientRect(),
                        R.current = document.body.style.webkitUserSelect,
                        document.body.style.webkitUserSelect = "none",
                        g.viewport && (g.viewport.style.scrollBehavior = "auto"),
                        D(e))
                    }
                    ),
                    onPointerMove: (0,
                    f.M)(e.onPointerMove, D),
                    onPointerUp: (0,
                    f.M)(e.onPointerUp, e => {
                        let t = e.target;
                        t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
                        document.body.style.webkitUserSelect = R.current,
                        g.viewport && (g.viewport.style.scrollBehavior = ""),
                        T.current = null
                    }
                    )
                })
            })
        }
        )
          , D = "ScrollAreaThumb"
          , W = n.forwardRef( (e, t) => {
            let {forceMount: r, ...n} = e
              , o = j(D, e.__scopeScrollArea);
            return (0,
            p.jsx)(l.z, {
                present: r || o.hasThumb,
                children: (0,
                p.jsx)(M, {
                    ref: t,
                    ...n
                })
            })
        }
        )
          , M = n.forwardRef( (e, t) => {
            let {__scopeScrollArea: r, style: l, ...i} = e
              , u = b(D, r)
              , s = j(D, r)
              , {onThumbPositionChange: c} = s
              , d = (0,
            a.e)(t, e => s.onThumbChange(e))
              , v = n.useRef(void 0)
              , h = F( () => {
                v.current && (v.current(),
                v.current = void 0)
            }
            , 100);
            return n.useEffect( () => {
                let e = u.viewport;
                if (e) {
                    let t = () => {
                        if (h(),
                        !v.current) {
                            let t = Y(e, c);
                            v.current = t,
                            c()
                        }
                    }
                    ;
                    return c(),
                    e.addEventListener("scroll", t),
                    () => e.removeEventListener("scroll", t)
                }
            }
            , [u.viewport, h, c]),
            (0,
            p.jsx)(o.WV.div, {
                "data-state": s.hasThumb ? "visible" : "hidden",
                ...i,
                ref: d,
                style: {
                    width: "var(--radix-scroll-area-thumb-width)",
                    height: "var(--radix-scroll-area-thumb-height)",
                    ...l
                },
                onPointerDownCapture: (0,
                f.M)(e.onPointerDownCapture, e => {
                    let t = e.target.getBoundingClientRect()
                      , r = e.clientX - t.left
                      , n = e.clientY - t.top;
                    s.onThumbPointerDown({
                        x: r,
                        y: n
                    })
                }
                ),
                onPointerUp: (0,
                f.M)(e.onPointerUp, s.onThumbPointerUp)
            })
        }
        );
        W.displayName = D;
        var A = "ScrollAreaCorner"
          , O = n.forwardRef( (e, t) => {
            let r = b(A, e.__scopeScrollArea)
              , n = !!(r.scrollbarX && r.scrollbarY);
            return "scroll" !== r.type && n ? (0,
            p.jsx)(z, {
                ...e,
                ref: t
            }) : null
        }
        );
        O.displayName = A;
        var z = n.forwardRef( (e, t) => {
            let {__scopeScrollArea: r, ...l} = e
              , i = b(A, r)
              , [a,u] = n.useState(0)
              , [s,c] = n.useState(0)
              , d = !!(a && s);
            return B(i.scrollbarX, () => {
                var e;
                let t = (null === (e = i.scrollbarX) || void 0 === e ? void 0 : e.offsetHeight) || 0;
                i.onCornerHeightChange(t),
                c(t)
            }
            ),
            B(i.scrollbarY, () => {
                var e;
                let t = (null === (e = i.scrollbarY) || void 0 === e ? void 0 : e.offsetWidth) || 0;
                i.onCornerWidthChange(t),
                u(t)
            }
            ),
            d ? (0,
            p.jsx)(o.WV.div, {
                ...l,
                ref: t,
                style: {
                    width: a,
                    height: s,
                    position: "absolute",
                    right: "ltr" === i.dir ? 0 : void 0,
                    left: "rtl" === i.dir ? 0 : void 0,
                    bottom: 0,
                    ...e.style
                }
            }) : null
        }
        );
        function I(e) {
            return e ? parseInt(e, 10) : 0
        }
        function U(e, t) {
            let r = e / t;
            return isNaN(r) ? 0 : r
        }
        function H(e) {
            let t = U(e.viewport, e.content)
              , r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
            return Math.max((e.scrollbar.size - r) * t, 18)
        }
        function V(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr"
              , n = H(t)
              , o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd
              , l = t.scrollbar.size - o
              , i = t.content - t.viewport
              , a = (0,
            d.u)(e, "ltr" === r ? [0, i] : [-1 * i, 0]);
            return X([0, i], [0, l - n])(a)
        }
        function X(e, t) {
            return r => {
                if (e[0] === e[1] || t[0] === t[1])
                    return t[0];
                let n = (t[1] - t[0]) / (e[1] - e[0]);
                return t[0] + n * (r - e[0])
            }
        }
        var Y = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}
              , r = {
                left: e.scrollLeft,
                top: e.scrollTop
            }
              , n = 0;
            return !function o() {
                let l = {
                    left: e.scrollLeft,
                    top: e.scrollTop
                }
                  , i = r.left !== l.left
                  , a = r.top !== l.top;
                (i || a) && t(),
                r = l,
                n = window.requestAnimationFrame(o)
            }(),
            () => window.cancelAnimationFrame(n)
        };
        function F(e, t) {
            let r = (0,
            u.W)(e)
              , o = n.useRef(0);
            return n.useEffect( () => () => window.clearTimeout(o.current), []),
            n.useCallback( () => {
                window.clearTimeout(o.current),
                o.current = window.setTimeout(r, t)
            }
            , [r, t])
        }
        function B(e, t) {
            let r = (0,
            u.W)(t);
            (0,
            c.b)( () => {
                let t = 0;
                if (e) {
                    let n = new ResizeObserver( () => {
                        cancelAnimationFrame(t),
                        t = window.requestAnimationFrame(r)
                    }
                    );
                    return n.observe(e),
                    () => {
                        window.cancelAnimationFrame(t),
                        n.unobserve(e)
                    }
                }
            }
            , [e, r])
        }
        var $ = y
          , q = x
          , Z = O
    },
    2679: function(e, t, r) {
        r.d(t, {
            W: function() {
                return o
            }
        });
        var n = r(5192);
        function o(e) {
            let t = n.useRef(e);
            return n.useEffect( () => {
                t.current = e
            }
            ),
            n.useMemo( () => (...e) => t.current?.(...e), [])
        }
    },
    9288: function(e, t, r) {
        r.d(t, {
            T: function() {
                return l
            }
        });
        var n = r(5192)
          , o = r(2679);
        function l({prop: e, defaultProp: t, onChange: r= () => {}
        }) {
            let[l,i] = function({defaultProp: e, onChange: t}) {
                let r = n.useState(e)
                  , [l] = r
                  , i = n.useRef(l)
                  , a = (0,
                o.W)(t);
                return n.useEffect( () => {
                    i.current !== l && (a(l),
                    i.current = l)
                }
                , [l, i, a]),
                r
            }({
                defaultProp: t,
                onChange: r
            })
              , a = void 0 !== e
              , u = a ? e : l
              , s = (0,
            o.W)(r);
            return [u, n.useCallback(t => {
                if (a) {
                    let r = "function" == typeof t ? t(e) : t;
                    r !== e && s(r)
                } else
                    i(t)
            }
            , [a, e, i, s])]
        }
    },
    8253: function(e, t, r) {
        r.d(t, {
            b: function() {
                return o
            }
        });
        var n = r(5192)
          , o = globalThis?.document ? n.useLayoutEffect : () => {}
    },
    7135: function(e, t, r) {
        r.d(t, {
            D: function() {
                return o
            }
        });
        var n = r(5192);
        function o(e) {
            let t = n.useRef({
                value: e,
                previous: e
            });
            return n.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
            t.current.value = e),
            t.current.previous), [e])
        }
    },
    9475: function(e, t, r) {
        r.d(t, {
            t: function() {
                return l
            }
        });
        var n = r(5192)
          , o = r(8253);
        function l(e) {
            let[t,r] = n.useState(void 0);
            return (0,
            o.b)( () => {
                if (e) {
                    r({
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    });
                    let t = new ResizeObserver(t => {
                        let n, o;
                        if (!Array.isArray(t) || !t.length)
                            return;
                        let l = t[0];
                        if ("borderBoxSize"in l) {
                            let e = l.borderBoxSize
                              , t = Array.isArray(e) ? e[0] : e;
                            n = t.inlineSize,
                            o = t.blockSize
                        } else
                            n = e.offsetWidth,
                            o = e.offsetHeight;
                        r({
                            width: n,
                            height: o
                        })
                    }
                    );
                    return t.observe(e, {
                        box: "border-box"
                    }),
                    () => t.unobserve(e)
                }
                r(void 0)
            }
            , [e]),
            t
        }
    }
}]);
