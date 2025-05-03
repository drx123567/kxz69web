(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[286], {
    2943: function(e, t, s) {
        Promise.resolve().then(s.bind(s, 6019)),
        Promise.resolve().then(s.bind(s, 6629)),
        Promise.resolve().then(s.bind(s, 1453))
    },
    6019: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return O
            }
        });
        var r = s(288)
          , a = s(5192)
          , i = s(7445)
          , l = s(3244)
          , n = s(7358)
          , c = s(1676)
          , o = s(7719)
          , d = s(6835)
          , x = s(5899)
          , m = s(2536)
          , f = s(1204)
          , h = s(9159)
          , u = s(5594);
        function p(e) {
            let {fallback: t, children: s} = e
              , [i,l] = (0,
            a.useState)(!1);
            return ((0,
            a.useEffect)( () => {
                let e = e => {
                    console.error("Uncaught error:", e),
                    l(!0)
                }
                ;
                return window.addEventListener("error", e),
                () => {
                    window.removeEventListener("error", e)
                }
            }
            , []),
            i) ? (0,
            r.jsx)(r.Fragment, {
                children: t
            }) : (0,
            r.jsx)(r.Fragment, {
                children: s
            })
        }
        var g = s(740)
          , b = s(358);
        function v(e) {
            let {selectedGroupId: t} = e
              , [s,n] = (0,
            a.useState)([])
              , [v,j] = (0,
            a.useState)(!0)
              , {toast: y} = (0,
            h.useToast)()
              , {t: N} = (0,
            u.b)();
            (0,
            a.useEffect)( () => {
                (async () => {
                    try {
                        j(!0);
                        let e = await (0,
                        b.zg)();
                        if (!Array.isArray(e))
                            throw Error("Invalid product data received");
                        let t = e.filter(e => "public" === e.visibility);
                        n(t)
                    } catch (e) {
                        console.error("Error fetching products:", e),
                        e instanceof Error && (console.error("Error message:", e.message),
                        console.error("Error stack:", e.stack)),
                        y({
                            title: "Error",
                            description: "Failed to load products. Please try again later.",
                            variant: "destructive"
                        })
                    } finally {
                        j(!1)
                    }
                }
                )()
            }
            , [y]);
            let w = {
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
            if (v)
                return (0,
                r.jsx)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: [...Array(8)].map( (e, t) => (0,
                    r.jsx)(c.Zb, {
                        className: "bg-opacity-100 border-gray-800 min-h-[350px]",
                        children: (0,
                        r.jsxs)(c.aY, {
                            className: "p-0",
                            children: [(0,
                            r.jsx)("div", {
                                className: "relative",
                                children: (0,
                                r.jsx)(x.O, {
                                    className: "h-[200px] w-full bg-gray-800"
                                })
                            }), (0,
                            r.jsxs)("div", {
                                className: "p-4",
                                children: [(0,
                                r.jsx)(x.O, {
                                    className: "h-6 w-24 bg-gray-800 mb-2"
                                }), (0,
                                r.jsx)(x.O, {
                                    className: "h-6 w-20 bg-gray-800"
                                })]
                            })]
                        })
                    }, t))
                });
            let E = t ? s.filter(e => {
                var s;
                return (null === (s = e.group_id) || void 0 === s ? void 0 : s.toString()) === t
            }
            ) : s;
            return (0,
            r.jsx)(p, {
                fallback: (0,
                r.jsx)("div", {
                    children: "Something went wrong"
                }),
                children: 0 === E.length ? (0,
                r.jsx)("div", {
                    className: "text-white text-center py-8",
                    children: N("products.noProductsAvailable")
                }) : (0,
                r.jsx)(i.E.div, {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
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
                    animate: "visible",
                    children: (0,
                    r.jsx)(l.M, {
                        children: E.map(e => (0,
                        r.jsx)(i.E.div, {
                            variants: w,
                            layout: !0,
                            children: (0,
                            r.jsx)(f.default, {
                                href: "/products/".concat(e.id),
                                prefetch: !1,
                                scroll: !0,
                                children: (0,
                                r.jsx)(c.Zb, {
                                    className: "group relative overflow-hidden bg-transparent border-gray-800 hover:border-[#bf00c9] transition-all duration-300 rounded-xl shadow-lg card-hover-effect",
                                    children: (0,
                                    r.jsxs)(c.aY, {
                                        className: "p-0",
                                        children: [(0,
                                        r.jsx)("div", {
                                            className: "relative",
                                            children: (0,
                                            r.jsxs)("div", {
                                                className: "relative h-[200px] flex items-center justify-center bg-[#1a1f24] rounded-t-xl overflow-hidden",
                                                children: [(0,
                                                r.jsx)(m.default, {
                                                    src: e.images && e.images[0] ? (0,
                                                    g.J)(e.images[0].cloudflare_image_id) : "/placeholder.svg",
                                                    alt: e.name,
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    className: "transition-transform group-hover:scale-105 duration-300"
                                                }), (0,
                                                r.jsx)("div", {
                                                    className: "absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                })]
                                            })
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
                                                r.jsx)(d.C, {
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
                                                r.jsx)(o.z, {
                                                    className: "bg-[#bf00c9] text-white hover:bg-[#a3009e] rounded-full px-4 py-2 text-sm",
                                                    disabled: 0 === e.stock_count,
                                                    children: N("common.viewProduct")
                                                })]
                                            })]
                                        })]
                                    })
                                })
                            })
                        }, e.id))
                    })
                })
            })
        }
        var j = s(9444)
          , y = s(9803)
          , N = s(7962)
          , w = s(6056);
        let E = a.forwardRef( (e, t) => {
            let {className: s, ...a} = e;
            return (0,
            r.jsx)(y.fC, {
                ref: t,
                className: (0,
                w.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", s),
                ...a,
                children: (0,
                r.jsx)(y.z$, {
                    className: (0,
                    w.cn)("flex items-center justify-center text-current"),
                    children: (0,
                    r.jsx)(N.Z, {
                        className: "h-4 w-4"
                    })
                })
            })
        }
        );
        E.displayName = y.fC.displayName;
        var k = s(7422);
        let C = a.forwardRef( (e, t) => {
            let {className: s, children: a, ...i} = e;
            return (0,
            r.jsxs)(k.fC, {
                ref: t,
                className: (0,
                w.cn)("relative overflow-hidden", s),
                ...i,
                children: [(0,
                r.jsx)(k.l_, {
                    className: "h-full w-full rounded-[inherit]",
                    children: a
                }), (0,
                r.jsx)(S, {}), (0,
                r.jsx)(k.Ns, {})]
            })
        }
        );
        C.displayName = k.fC.displayName;
        let S = a.forwardRef( (e, t) => {
            let {className: s, orientation: a="vertical", ...i} = e;
            return (0,
            r.jsx)(k.gb, {
                ref: t,
                orientation: a,
                className: (0,
                w.cn)("flex touch-none select-none transition-colors", "vertical" === a && "h-full w-2.5 border-l border-l-transparent p-[1px]", "horizontal" === a && "h-2.5 flex-col border-t border-t-transparent p-[1px]", s),
                ...i,
                children: (0,
                r.jsx)(k.q4, {
                    className: "relative flex-1 rounded-full bg-border"
                })
            })
        }
        );
        function _(e) {
            let {onGroupSelect: t, selectedGroupId: s} = e
              , [l,n] = (0,
            a.useState)([])
              , [c,o] = (0,
            a.useState)(!0);
            (0,
            a.useEffect)( () => {
                (async () => {
                    try {
                        o(!0);
                        let e = await (0,
                        b.KZ)();
                        n(e)
                    } catch (e) {
                        console.error("Error fetching groups:", e)
                    } finally {
                        o(!1)
                    }
                }
                )()
            }
            , []);
            let d = e => {
                t(s === e ? null : e)
            }
              , x = {
                hidden: {
                    opacity: 0,
                    y: -20
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .5,
                        when: "beforeChildren",
                        staggerChildren: .1
                    }
                }
            }
              , m = {
                hidden: {
                    opacity: 0,
                    x: -20
                },
                visible: {
                    opacity: 1,
                    x: 0
                }
            };
            return c ? (0,
            r.jsx)("div", {
                className: "text-gray-400",
                children: "Loading filters..."
            }) : (0,
            r.jsxs)(i.E.div, {
                className: "w-full bg-[#0e1114] rounded-lg p-4",
                variants: x,
                initial: "hidden",
                animate: "visible",
                children: [(0,
                r.jsxs)("div", {
                    className: "flex items-center gap-2 mb-6",
                    children: [(0,
                    r.jsx)(j.Z, {
                        className: "w-5 h-5 text-white"
                    }), (0,
                    r.jsx)("h2", {
                        className: "text-white font-medium",
                        children: "Filters"
                    })]
                }), (0,
                r.jsx)(C, {
                    className: "h-[400px] pr-4",
                    children: (0,
                    r.jsx)(i.E.div, {
                        className: "space-y-3",
                        variants: x,
                        children: l.map(e => (0,
                        r.jsx)(i.E.div, {
                            variants: m,
                            children: (0,
                            r.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [(0,
                                r.jsx)(E, {
                                    id: "group-".concat(e.id),
                                    checked: s === e.id.toString(),
                                    onCheckedChange: () => d(e.id.toString()),
                                    className: "border-gray-600 data-[state=checked]:bg-[#bf00c9] data-[state=checked]:border-[#bf00c9]"
                                }), (0,
                                r.jsx)("label", {
                                    htmlFor: "group-".concat(e.id),
                                    className: "text-sm text-gray-300 hover:text-white cursor-pointer flex justify-between w-full",
                                    children: (0,
                                    r.jsx)("span", {
                                        children: e.name
                                    })
                                })]
                            })
                        }, e.id))
                    })
                })]
            })
        }
        S.displayName = k.gb.displayName;
        var F = s(7553)
          , I = s(3211);
        function A(e) {
            let {showExtraSalesInfo: t=!1} = e
              , {t: s} = (0,
            u.b)()
              , [l,n] = (0,
            a.useState)(null);
            (0,
            a.useEffect)( () => {
                (async () => {
                    try {
                        let e = await (0,
                        I.CQ)();
                        n(e)
                    } catch (e) {
                        console.error("Error fetching product count:", e),
                        n(null)
                    }
                }
                )()
            }
            , []);
            let c = s("counts.happyCustomers")
              , o = s("counts.productsSold");
            return (0,
            r.jsx)("section", {
                className: "bg-[#0e1114] py-16 relative z-10 w-full",
                children: (0,
                r.jsxs)("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "flex flex-col items-center mb-12",
                        children: [(0,
                        r.jsx)("h2", {
                            className: "text-3xl sm:text-4xl font-bold text-white mb-4 text-center",
                            children: s("stats.title")
                        }), (0,
                        r.jsx)("p", {
                            className: "text-gray-400 text-center max-w-2xl",
                            children: s("stats.description")
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20",
                        children: [(0,
                        r.jsxs)(i.E.div, {
                            className: "text-center",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .5
                            },
                            children: [(0,
                            r.jsx)("h2", {
                                className: "text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-[#bf00c9]",
                                children: c
                            }), (0,
                            r.jsx)("p", {
                                className: "text-sm sm:text-base font-medium uppercase tracking-wider",
                                children: (0,
                                r.jsx)("span", {
                                    className: "bg-clip-text text-transparent bg-gradient-to-r from-[#bf00c9] via-[#ff00ff] to-[#bf00c9]",
                                    children: s("stats.happyCustomers")
                                })
                            })]
                        }), (0,
                        r.jsxs)(i.E.div, {
                            className: "text-center",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .5,
                                delay: .2
                            },
                            children: [(0,
                            r.jsx)("h2", {
                                className: "text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-[#bf00c9]",
                                children: o
                            }), (0,
                            r.jsx)("p", {
                                className: "text-sm sm:text-base font-medium uppercase tracking-wider",
                                children: (0,
                                r.jsx)("span", {
                                    className: "bg-clip-text text-transparent bg-gradient-to-r from-[#bf00c9] via-[#ff00ff] to-[#bf00c9]",
                                    children: s("stats.productsSold")
                                })
                            })]
                        }), (0,
                        r.jsxs)(i.E.div, {
                            className: "text-center",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .5,
                                delay: .4
                            },
                            children: [(0,
                            r.jsx)("h2", {
                                className: "text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-[#bf00c9]",
                                children: null !== l ? l : "..."
                            }), (0,
                            r.jsx)("p", {
                                className: "text-sm sm:text-base font-medium uppercase tracking-wider",
                                children: (0,
                                r.jsx)("span", {
                                    className: "bg-clip-text text-transparent bg-gradient-to-r from-[#bf00c9] via-[#ff00ff] to-[#bf00c9]",
                                    children: s("stats.productsAvailable")
                                })
                            })]
                        })]
                    }), t && (0,
                    r.jsx)("div", {
                        className: "mt-12 text-center",
                        children: (0,
                        r.jsx)("p", {
                            className: "text-white text-lg",
                            children: "Additional sales information can be displayed here."
                        })
                    })]
                })
            })
        }
        function O() {
            let[e,t] = (0,
            a.useState)(null)
              , s = {
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: .1
                    }
                }
            };
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(n.SiteHeader, {}), (0,
                r.jsxs)("main", {
                    className: "container mx-auto px-4 py-12",
                    children: [(0,
                    r.jsx)(A, {
                        showExtraSalesInfo: !0
                    }), (0,
                    r.jsxs)(i.E.div, {
                        className: "flex flex-col lg:flex-row gap-8 mt-8",
                        variants: s,
                        initial: "hidden",
                        animate: "visible",
                        children: [(0,
                        r.jsx)(i.E.div, {
                            className: "lg:w-64 shrink-0",
                            variants: s,
                            children: (0,
                            r.jsx)("div", {
                                className: "sticky top-20 pt-4",
                                children: (0,
                                r.jsx)(_, {
                                    onGroupSelect: t,
                                    selectedGroupId: e
                                })
                            })
                        }), (0,
                        r.jsx)(i.E.div, {
                            className: "flex-grow",
                            variants: s,
                            children: (0,
                            r.jsx)(l.M, {
                                mode: "wait",
                                children: (0,
                                r.jsx)(v, {
                                    selectedGroupId: e
                                }, e || "all")
                            })
                        })]
                    })]
                }), (0,
                r.jsx)(F.$, {})]
            })
        }
    },
    7553: function(e, t, s) {
        "use strict";
        s.d(t, {
            $: function() {
                return n
            }
        });
        var r = s(288)
          , a = s(1204)
          , i = s(431)
          , l = s(5594);
        function n() {
            let {t: e} = (0,
            l.b)()
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
                return n
            }
        });
        var r = s(288);
        s(5192);
        var a = s(7940)
          , i = s(6056);
        let l = (0,
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
        function n(e) {
            let {className: t, variant: s, ...a} = e;
            return (0,
            r.jsx)("div", {
                className: (0,
                i.cn)(l({
                    variant: s
                }), t),
                ...a
            })
        }
    }
}, function(e) {
    e.O(0, [472, 212, 180, 900, 24, 240, 744], function() {
        return e(e.s = 2943)
    }),
    _N_E = e.O()
}
]);
