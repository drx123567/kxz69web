(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    2221: function(e, t, s) {
        Promise.resolve().then(s.bind(s, 3922)),
        Promise.resolve().then(s.bind(s, 6629)),
        Promise.resolve().then(s.bind(s, 1453))
    },
    3922: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return U
            }
        });
        var r = s(288)
          , a = s(7358)
          , i = s(7719)
          , n = s(431)
          , l = s(6021);
        let o = (0,
        l.Z)("Download", [["path", {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }], ["polyline", {
            points: "7 10 12 15 17 10",
            key: "2ggqvy"
        }], ["line", {
            x1: "12",
            x2: "12",
            y1: "15",
            y2: "3",
            key: "1vk2je"
        }]]);
        var c = s(2536)
          , d = s(1204)
          , u = s(5594);
        function x() {
            let {t: e} = (0,
            u.b)();
            return (0,
            r.jsx)("div", {
                className: "w-full",
                children: (0,
                r.jsx)("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: (0,
                    r.jsx)("div", {
                        className: "relative overflow-hidden py-16 sm:py-24 md:py-32 lg:py-40",
                        children: (0,
                        r.jsxs)("div", {
                            className: "flex flex-col lg:flex-row items-center justify-between",
                            children: [(0,
                            r.jsxs)("div", {
                                className: "w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0",
                                children: [(0,
                                r.jsxs)("h1", {
                                    className: "mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight",
                                    children: [e("hero.title"), " ", (0,
                                    r.jsx)("span", {
                                        className: "text-[#bf00c9]",
                                        children: e("hero.subtitle")
                                    })]
                                }), (0,
                                r.jsx)("p", {
                                    className: "mb-8 text-base sm:text-lg md:text-xl text-gray-300",
                                    children: e("hero.description")
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start",
                                    children: [(0,
                                    r.jsx)(d.default, {
                                        href: "https://discord.gg/flk",
                                        children: (0,
                                        r.jsxs)(i.z, {
                                            variant: "outline",
                                            className: "w-full sm:w-auto bg-transparent text-[#bf00c9] border-[#bf00c9] hover:bg-[#bf00c9] hover:text-white rounded-full px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 ease-in-out text-sm sm:text-base",
                                            children: [(0,
                                            r.jsx)(n.Z, {
                                                className: "mr-2 h-4 w-4 sm:h-5 sm:w-5"
                                            }), " ", e("hero.joinDiscord")]
                                        })
                                    }), (0,
                                    r.jsx)(d.default, {
                                        href: "/products",
                                        children: (0,
                                        r.jsxs)(i.z, {
                                            variant: "default",
                                            className: "w-full sm:w-auto bg-[#bf00c9] text-white hover:bg-[#a3009e] rounded-full px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 ease-in-out text-sm sm:text-base",
                                            children: [(0,
                                            r.jsx)(o, {
                                                className: "mr-2 h-4 w-4 sm:h-5 sm:w-5"
                                            }), " ", e("hero.viewProducts")]
                                        })
                                    })]
                                })]
                            }), (0,
                            r.jsx)("div", {
                                className: "w-full lg:w-1/2 flex justify-center lg:justify-end items-center perspective-1000",
                                children: (0,
                                r.jsxs)("div", {
                                    className: "relative w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out",
                                    style: {
                                        transform: "rotateX(10deg) rotateY(-15deg)"
                                    },
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-b from-[#bf00c9]/20 to-transparent rounded-lg blur-xl opacity-50 transition-opacity duration-500"
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "relative w-full pb-[100%]",
                                        children: (0,
                                        r.jsx)(c.default, {
                                            src: "https://i.imgur.com/61EMQFg.png",
                                            alt: "FLK Bypass",
                                            layout: "fill",
                                            objectFit: "contain",
                                            className: "transform-gpu",
                                            priority: !0
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                })
            })
        }
        var m = s(5192)
          , h = s(5620)
          , f = s(7182)
          , p = s(4287);
        function g(e, t) {
            [...t].reverse().forEach(s => {
                let r = e.getVariant(s);
                r && (0,
                f.C)(e, r),
                e.variantChildren && e.variantChildren.forEach(e => {
                    g(e, t)
                }
                )
            }
            )
        }
        function y() {
            let e = !1
              , t = new Set
              , s = {
                subscribe: e => (t.add(e),
                () => void t.delete(e)),
                start(s, r) {
                    (0,
                    h.k)(e, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
                    let a = [];
                    return t.forEach(e => {
                        a.push((0,
                        p.d)(e, s, {
                            transitionOverride: r
                        }))
                    }
                    ),
                    Promise.all(a)
                },
                set: s => ((0,
                h.k)(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),
                t.forEach(e => {
                    Array.isArray(s) ? g(e, s) : "string" == typeof s ? g(e, [s]) : (0,
                    f.C)(e, s)
                }
                )),
                stop() {
                    t.forEach(e => {
                        !function(e) {
                            e.values.forEach(e => e.stop())
                        }(e)
                    }
                    )
                },
                mount: () => (e = !0,
                () => {
                    e = !1,
                    s.stop()
                }
                )
            };
            return s
        }
        var b = s(7090)
          , v = s(3617);
        let j = function() {
            let e = (0,
            b.h)(y);
            return (0,
            v.L)(e.mount, []),
            e
        };
        var w = s(7445)
          , N = Object.defineProperty
          , E = new Map
          , k = new WeakMap
          , C = 0
          , O = void 0;
        function A() {
            var e;
            let {threshold: t, delay: s, trackVisibility: r, rootMargin: a, root: i, triggerOnce: n, skip: l, initialInView: o, fallbackInView: c, onChange: d} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , [u,x] = m.useState(null)
              , h = m.useRef(d)
              , [f,p] = m.useState({
                inView: !!o,
                entry: void 0
            });
            h.current = d,
            m.useEffect( () => {
                let e;
                if (!l && u)
                    return e = function(e, t) {
                        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                          , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : O;
                        if (void 0 === window.IntersectionObserver && void 0 !== r) {
                            let a = e.getBoundingClientRect();
                            return t(r, {
                                isIntersecting: r,
                                target: e,
                                intersectionRatio: "number" == typeof s.threshold ? s.threshold : 0,
                                time: 0,
                                boundingClientRect: a,
                                intersectionRect: a,
                                rootBounds: a
                            }),
                            () => {}
                        }
                        let {id: a, observer: i, elements: n} = function(e) {
                            let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                                var s;
                                return "".concat(t, "_").concat("root" === t ? (s = e.root) ? (k.has(s) || (C += 1,
                                k.set(s, C.toString())),
                                k.get(s)) : "0" : e[t])
                            }
                            ).toString()
                              , s = E.get(t);
                            if (!s) {
                                let r;
                                let a = new Map
                                  , i = new IntersectionObserver(t => {
                                    t.forEach(t => {
                                        var s;
                                        let i = t.isIntersecting && r.some(e => t.intersectionRatio >= e);
                                        e.trackVisibility && void 0 === t.isVisible && (t.isVisible = i),
                                        null == (s = a.get(t.target)) || s.forEach(e => {
                                            e(i, t)
                                        }
                                        )
                                    }
                                    )
                                }
                                ,e);
                                r = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]),
                                s = {
                                    id: t,
                                    observer: i,
                                    elements: a
                                },
                                E.set(t, s)
                            }
                            return s
                        }(s)
                          , l = n.get(e) || [];
                        return n.has(e) || n.set(e, l),
                        l.push(t),
                        i.observe(e),
                        function() {
                            l.splice(l.indexOf(t), 1),
                            0 === l.length && (n.delete(e),
                            i.unobserve(e)),
                            0 === n.size && (i.disconnect(),
                            E.delete(a))
                        }
                    }(u, (t, s) => {
                        p({
                            inView: t,
                            entry: s
                        }),
                        h.current && h.current(t, s),
                        s.isIntersecting && n && e && (e(),
                        e = void 0)
                    }
                    , {
                        root: i,
                        rootMargin: a,
                        threshold: t,
                        trackVisibility: r,
                        delay: s
                    }, c),
                    () => {
                        e && e()
                    }
            }
            , [Array.isArray(t) ? t.toString() : t, u, i, a, n, l, r, c, s]);
            let g = null == (e = f.entry) ? void 0 : e.target
              , y = m.useRef(void 0);
            u || !g || n || l || y.current === g || (y.current = g,
            p({
                inView: !!o,
                entry: void 0
            }));
            let b = [x, f.inView, f.entry];
            return b.ref = b[0],
            b.inView = b[1],
            b.entry = b[2],
            b
        }
        m.Component;
        var S = s(1676)
          , z = s(6835)
          , M = s(5899)
          , R = s(9159)
          , q = s(740)
          , F = s(358);
        function P() {
            let[e,t] = (0,
            m.useState)([])
              , [s,a] = (0,
            m.useState)(!0)
              , {toast: n} = (0,
            R.useToast)()
              , {t: l} = (0,
            u.b)()
              , o = j()
              , [x,h] = A({
                triggerOnce: !0,
                threshold: .1
            });
            (0,
            m.useEffect)( () => {
                (async () => {
                    try {
                        a(!0);
                        let e = await (0,
                        F.at)();
                        if (!Array.isArray(e) || 4 !== e.length)
                            throw Error("Invalid featured products data received");
                        t(e)
                    } catch (e) {
                        console.error("Error fetching featured products:", e),
                        e instanceof Error && (console.error("Error message:", e.message),
                        console.error("Error stack:", e.stack)),
                        n({
                            title: "Error",
                            description: "Failed to load featured products. Please try again later.",
                            variant: "destructive"
                        })
                    } finally {
                        a(!1)
                    }
                }
                )()
            }
            , [n]),
            (0,
            m.useEffect)( () => {
                h && o.start("visible")
            }
            , [o, h]);
            let f = {
                hidden: {
                    opacity: 0,
                    y: 20
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 100
                    }
                }
            };
            return s ? (0,
            r.jsx)("div", {
                className: "py-12",
                children: (0,
                r.jsx)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4",
                    children: [void 0, void 0, void 0, void 0].map( (e, t) => (0,
                    r.jsx)(S.Zb, {
                        className: "bg-opacity-100 border-gray-800 min-h-[350px]",
                        children: (0,
                        r.jsxs)(S.aY, {
                            className: "p-0",
                            children: [(0,
                            r.jsxs)("div", {
                                className: "relative",
                                children: [(0,
                                r.jsx)(M.O, {
                                    className: "h-[200px] w-full bg-gray-800"
                                }), (0,
                                r.jsx)(z.C, {
                                    className: "absolute top-3 right-3 bg-[#bf00c9]",
                                    children: "NEW"
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "p-4",
                                children: [(0,
                                r.jsx)(M.O, {
                                    className: "h-6 w-24 bg-gray-800 mb-2"
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex gap-2 mb-4",
                                    children: [(0,
                                    r.jsx)(M.O, {
                                        className: "h-6 w-16 bg-gray-800"
                                    }), (0,
                                    r.jsx)(M.O, {
                                        className: "h-6 w-16 bg-gray-800"
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex justify-between items-center",
                                    children: [(0,
                                    r.jsx)(M.O, {
                                        className: "h-6 w-20 bg-gray-800"
                                    }), (0,
                                    r.jsx)(M.O, {
                                        className: "h-9 w-24 bg-gray-800"
                                    })]
                                })]
                            })]
                        })
                    }, t))
                })
            }) : (0,
            r.jsx)("div", {
                className: "py-12",
                children: (0,
                r.jsx)(w.E.div, {
                    ref: x,
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4",
                    variants: {
                        hidden: {
                            opacity: 0
                        },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: .1
                            }
                        }
                    },
                    initial: "hidden",
                    animate: o,
                    children: e.map(e => (0,
                    r.jsx)(w.E.div, {
                        variants: f,
                        children: (0,
                        r.jsx)(S.Zb, {
                            className: "group relative overflow-hidden bg-transparent border-gray-800 hover:border-[#bf00c9] transition-all duration-300 rounded-xl shadow-lg card-hover-effect",
                            children: (0,
                            r.jsxs)(S.aY, {
                                className: "p-0",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "relative",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "relative h-[200px] flex items-center justify-center bg-[#1a1f24] rounded-t-xl overflow-hidden",
                                        children: [(0,
                                        r.jsx)(c.default, {
                                            src: e.images[0] ? (0,
                                            q.J)(e.images[0].cloudflare_image_id) : "/placeholder.svg",
                                            alt: e.name,
                                            layout: "fill",
                                            objectFit: "cover",
                                            className: "transition-transform group-hover:scale-105 duration-300"
                                        }), (0,
                                        r.jsx)("div", {
                                            className: "absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        })]
                                    }), (0,
                                    r.jsx)(z.C, {
                                        className: "absolute top-3 right-3 bg-[#bf00c9]",
                                        children: e.featured ? "FEATURED" : "POPULAR"
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "p-4 flex flex-col h-[150px]",
                                    children: [(0,
                                    r.jsx)("h3", {
                                        className: "text-lg font-semibold text-white mb-2 line-clamp-2",
                                        children: e.name
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "flex gap-2 mb-4 flex-wrap",
                                        children: e.type && (0,
                                        r.jsx)(z.C, {
                                            variant: "secondary",
                                            className: "bg-[#2a3038] text-gray-300 text-xs",
                                            children: e.type
                                        })
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex justify-between items-center mt-auto",
                                        children: [(0,
                                        r.jsx)("span", {
                                            className: "text-lg font-bold text-[#bf00c9]",
                                            children: e.variants && e.variants.length > 0 ? "".concat(e.variants[0].price, " ").concat(e.currency) : "".concat(e.price, " ").concat(e.currency)
                                        }), (0,
                                        r.jsx)(d.default, {
                                            href: "/products/".concat(e.id),
                                            children: (0,
                                            r.jsx)(i.z, {
                                                className: "bg-[#bf00c9] text-white hover:bg-[#a3009e] rounded-full px-4 py-2 text-sm",
                                                disabled: 0 === e.stock_count,
                                                children: l("common.buyNow")
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    }, e.id))
                })
            })
        }
        let V = [{
            icon: (0,
            l.Z)("Shield", [["path", {
                d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                key: "oel41y"
            }]]),
            title: "Secured payments",
            description: "Your payments are 100% safe."
        }, {
            icon: (0,
            l.Z)("Zap", [["path", {
                d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
                key: "1xq2db"
            }]]),
            title: "High Performance",
            description: "We offer high quality products only"
        }, {
            icon: (0,
            l.Z)("ShieldCheck", [["path", {
                d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                key: "oel41y"
            }], ["path", {
                d: "m9 12 2 2 4-4",
                key: "dzmm74"
            }]]),
            title: "Secured Files",
            description: "Built-in protection against leaks with advanced encryption."
        }];
        function Z() {
            let e = j()
              , [t,s] = A({
                threshold: .1,
                triggerOnce: !0
            })
              , {t: a} = (0,
            u.b)();
            (0,
            m.useEffect)( () => {
                s && e.start("visible")
            }
            , [e, s]);
            let i = {
                hidden: {
                    opacity: 0,
                    y: 20
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 100
                    }
                }
            };
            return (0,
            r.jsx)("section", {
                className: "w-full bg-[#0e1114] py-16 relative z-10",
                children: (0,
                r.jsxs)("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: [(0,
                    r.jsx)(w.E.h2, {
                        className: "text-3xl sm:text-4xl font-bold text-white mb-12 text-center",
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5
                        },
                        children: a("features.title")
                    }), (0,
                    r.jsx)(w.E.div, {
                        ref: t,
                        variants: {
                            hidden: {
                                opacity: 0
                            },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: .2
                                }
                            }
                        },
                        initial: "hidden",
                        animate: e,
                        className: "grid grid-cols-1 md:grid-cols-3 gap-12",
                        children: V.map( (e, t) => (0,
                        r.jsxs)(w.E.div, {
                            variants: i,
                            className: "flex flex-col items-center text-center",
                            children: [(0,
                            r.jsxs)(w.E.div, {
                                className: "relative mb-6",
                                whileHover: {
                                    scale: 1.1
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300
                                },
                                children: [(0,
                                r.jsx)("div", {
                                    className: "absolute inset-0 bg-[#bf00c9] blur-[20px] opacity-20 rounded-full"
                                }), (0,
                                r.jsx)(e.icon, {
                                    className: "w-12 h-12 text-[#bf00c9] relative z-10"
                                })]
                            }), (0,
                            r.jsx)("h3", {
                                className: "text-xl font-semibold text-white mb-4",
                                children: e.title
                            }), (0,
                            r.jsx)("p", {
                                className: "text-gray-400 text-base leading-relaxed max-w-sm",
                                children: e.description
                            })]
                        }, t))
                    })]
                })
            })
        }
        var I = s(3244);
        let _ = (0,
        l.Z)("Minus", [["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }]])
          , W = (0,
        l.Z)("Plus", [["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }], ["path", {
            d: "M12 5v14",
            key: "s699le"
        }]])
          , D = [{
            question: "What types of software do you offer?",
            answer: "We provide a wide range of premium software solutions, including game enhancement tools, productivity applications, and security utilities. Our products are designed to enhance performance, efficiency, and user experience."
        }, {
            question: "Are your software tools safe to use?",
            answer: "Yes, we prioritize the safety and security of our users. Our software is regularly updated to ensure stability, compatibility, and protection against potential risks. However, we always recommend responsible use and following best security practices."
        }, {
            question: "How do I install your software?",
            answer: "Each product comes with detailed installation instructions. Our software is designed to be easy to install and use. If you encounter any issues, our support team is always ready to assist you."
        }, {
            question: "Do you offer refunds?",
            answer: "We offer refunds on a case-by-case basis. If you're experiencing issues with a product, please contact our support team first, and we'll do our best to resolve the problem. If we can't fix the issue, we'll consider a refund."
        }, {
            question: "How often are your  tools updated?",
            answer: "We strive to update our software regularly to ensure compatibility with the latest systems and to introduce new features. The frequency of updates may vary depending on the specific product and its requirements."
        }];
        function H() {
            let[e,t] = (0,
            m.useState)(null)
              , s = j()
              , [a,i] = A({
                triggerOnce: !0,
                threshold: .1
            });
            (0,
            m.useEffect)( () => {
                i && s.start("visible")
            }
            , [s, i]);
            let n = {
                hidden: {
                    opacity: 0,
                    y: 20
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        stiffness: 100
                    }
                }
            };
            return (0,
            r.jsx)("section", {
                className: "bg-[#0e1114] py-24 relative z-10 w-full",
                children: (0,
                r.jsxs)("div", {
                    className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",
                    children: [(0,
                    r.jsxs)(w.E.h2, {
                        className: "text-4xl font-bold text-white mb-12 text-center",
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5
                        },
                        children: ["Frequently Asked ", (0,
                        r.jsx)("span", {
                            className: "text-[#bf00c9]",
                            children: "Questions"
                        })]
                    }), (0,
                    r.jsx)(w.E.div, {
                        ref: a,
                        className: "space-y-6",
                        variants: {
                            hidden: {
                                opacity: 0
                            },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: .1
                                }
                            }
                        },
                        initial: "hidden",
                        animate: s,
                        children: D.map( (s, a) => (0,
                        r.jsxs)(w.E.div, {
                            className: "border-b border-gray-800 pb-6 last:border-b-0",
                            variants: n,
                            children: [(0,
                            r.jsxs)("button", {
                                className: "flex justify-between items-center w-full text-left focus:outline-none",
                                onClick: () => t(e === a ? null : a),
                                children: [(0,
                                r.jsx)("span", {
                                    className: "text-lg font-medium text-white",
                                    children: s.question
                                }), (0,
                                r.jsx)("span", {
                                    className: "text-[#bf00c9] ml-2",
                                    children: e === a ? (0,
                                    r.jsx)(_, {
                                        className: "w-6 h-6"
                                    }) : (0,
                                    r.jsx)(W, {
                                        className: "w-6 h-6"
                                    })
                                })]
                            }), (0,
                            r.jsx)(I.M, {
                                initial: !1,
                                children: e === a && (0,
                                r.jsx)(w.E.div, {
                                    initial: {
                                        opacity: 0,
                                        height: 0
                                    },
                                    animate: {
                                        opacity: 1,
                                        height: "auto"
                                    },
                                    exit: {
                                        opacity: 0,
                                        height: 0
                                    },
                                    transition: {
                                        duration: .3,
                                        ease: "easeInOut"
                                    },
                                    children: (0,
                                    r.jsx)("p", {
                                        className: "mt-4 text-gray-400 text-base leading-relaxed",
                                        children: s.answer
                                    })
                                })
                            })]
                        }, a))
                    })]
                })
            })
        }
        var L = s(2378)
          , Y = s(1872);
        let B = (0,
        l.Z)("Star", [["path", {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }]])
          , T = [{
            text: "best man wild spoofer and other accounts.",
            role: "ortak",
            rating: 5
        }, {
            text: "Bought 225 FiveM Ready accounts! Fast and great delivery.",
            role: "malpozaur",
            rating: 5
        }, {
            text: "10x Aged Discord Accounts",
            role: "Vrabec",
            rating: 5
        }, {
            text: "300x Rockstar account!",
            role: "! MK STORE",
            rating: 5
        }];
        function K() {
            let e = (0,
            m.useRef)(null)
              , t = (0,
            m.useRef)(0);
            return !function(e) {
                let t = (0,
                m.useRef)(0)
                  , {isStatic: s} = (0,
                m.useContext)(L._);
                (0,
                m.useEffect)( () => {
                    if (s)
                        return;
                    let r = ({timestamp: s, delta: r}) => {
                        t.current || (t.current = s),
                        e(s - t.current, r)
                    }
                    ;
                    return Y.Wi.update(r, !0),
                    () => (0,
                    Y.Pn)(r)
                }
                , [e])
            }( () => {
                e.current && (t.current += .5,
                t.current >= e.current.scrollWidth / 2 && (t.current = 0),
                e.current.scrollLeft = t.current)
            }
            ),
            (0,
            r.jsx)("section", {
                className: "w-full bg-[#0e1114] py-24 overflow-hidden",
                children: (0,
                r.jsxs)("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "text-center mb-12",
                        children: [(0,
                        r.jsxs)("h2", {
                            className: "text-4xl font-bold mb-4",
                            children: [(0,
                            r.jsx)("span", {
                                className: "text-white",
                                children: "What Our"
                            }), " ", (0,
                            r.jsx)("span", {
                                className: "text-[#bf00c9]",
                                children: "Customers Say"
                            })]
                        }), (0,
                        r.jsx)("p", {
                            className: "text-gray-400",
                            children: "Read reviews from our customers."
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "relative",
                        children: [(0,
                        r.jsx)("div", {
                            className: "absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0e1114] to-transparent z-10"
                        }), (0,
                        r.jsx)("div", {
                            className: "absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0e1114] to-transparent z-10"
                        }), (0,
                        r.jsxs)("div", {
                            ref: e,
                            className: "flex gap-6 overflow-x-hidden",
                            children: [T.map( (e, t) => (0,
                            r.jsxs)(w.E.div, {
                                className: "flex-shrink-0 w-[300px] p-6 rounded-lg border border-gray-800 bg-transparent",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "flex text-[#bf00c9] mb-4",
                                    children: [...Array(e.rating)].map( (e, t) => (0,
                                    r.jsx)(B, {
                                        className: "w-5 h-5 fill-current"
                                    }, t))
                                }), (0,
                                r.jsx)("p", {
                                    className: "text-gray-300 mb-4",
                                    children: e.text
                                }), (0,
                                r.jsx)("p", {
                                    className: "text-[#bf00c9] font-semibold",
                                    children: e.role
                                })]
                            }, "review-1-".concat(t))), T.map( (e, t) => (0,
                            r.jsxs)(w.E.div, {
                                className: "flex-shrink-0 w-[300px] p-6 rounded-lg border border-gray-800 bg-transparent",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "flex text-[#bf00c9] mb-4",
                                    children: [...Array(e.rating)].map( (e, t) => (0,
                                    r.jsx)(B, {
                                        className: "w-5 h-5 fill-current"
                                    }, t))
                                }), (0,
                                r.jsx)("p", {
                                    className: "text-gray-300 mb-4",
                                    children: e.text
                                }), (0,
                                r.jsx)("p", {
                                    className: "text-[#bf00c9] font-semibold",
                                    children: e.role
                                })]
                            }, "review-2-".concat(t)))]
                        })]
                    })]
                })
            })
        }
        var Q = s(7553);
        function U() {
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(a.SiteHeader, {}), (0,
                r.jsxs)("main", {
                    children: [(0,
                    r.jsx)(x, {}), (0,
                    r.jsx)(Z, {}), (0,
                    r.jsx)(P, {}), (0,
                    r.jsx)(K, {}), (0,
                    r.jsx)(H, {})]
                }), (0,
                r.jsx)(Q.$, {})]
            })
        }
    },
    7553: function(e, t, s) {
        "use strict";
        s.d(t, {
            $: function() {
                return l
            }
        });
        var r = s(288)
          , a = s(1204)
          , i = s(431)
          , n = s(5594);
        function l() {
            let {t: e} = (0,
            n.b)()
              , t = new Date().getFullYear();
            return (0,
            r.jsx)("footer", {
                className: "bg-[#0e1114] py-8 border-t border-gray-800",
                children: (0,
                r.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "flex items-center space-x-4",
                            children: [(0,
                            r.jsx)(a.default, {
                                href: "/",
                                className: "text-white hover:text-[#bf00c9] transition-colors",
                                children: e("header.home")
                            }), (0,
                            r.jsx)(a.default, {
                                href: "/products",
                                className: "text-white hover:text-[#bf00c9] transition-colors",
                                children: e("header.products")
                            })]
                        }), (0,
                        r.jsx)("div", {
                            className: "flex items-center space-x-4",
                            children: (0,
                            r.jsxs)("a", {
                                href: "https://discord.gg/flk",
                                className: "text-white hover:text-[#bf00c9] transition-colors",
                                children: [(0,
                                r.jsx)(i.Z, {
                                    className: "h-5 w-5"
                                }), (0,
                                r.jsx)("span", {
                                    className: "sr-only",
                                    children: "Discord"
                                })]
                            })
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "mt-8 flex flex-col md:flex-row justify-between items-center",
                        children: [(0,
                        r.jsx)("p", {
                            className: "text-gray-400 text-sm",
                            children: e("footer.copyright", {
                                year: t
                            })
                        }), (0,
                        r.jsx)("div", {
                            className: "mt-4 md:mt-0",
                            children: (0,
                            r.jsx)(a.default, {
                                href: "/terms",
                                className: "text-gray-400 hover:text-[#bf00c9] text-sm mr-4",
                                children: e("footer.termsOfService")
                            })
                        })]
                    })]
                })
            })
        }
    },
    6835: function(e, t, s) {
        "use strict";
        s.d(t, {
            C: function() {
                return l
            }
        });
        var r = s(288);
        s(5192);
        var a = s(7940)
          , i = s(6056);
        let n = (0,
        a.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
            variants: {
                variant: {
                    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                    outline: "text-foreground"
                }
            },
            defaultVariants: {
                variant: "default"
            }
        });
        function l(e) {
            let {className: t, variant: s, ...a} = e;
            return (0,
            r.jsx)("div", {
                className: (0,
                i.cn)(n({
                    variant: s
                }), t),
                ...a
            })
        }
    }
}, function(e) {
    e.O(0, [472, 212, 900, 24, 240, 744], function() {
        return e(e.s = 2221)
    }),
    _N_E = e.O()
}
]);
