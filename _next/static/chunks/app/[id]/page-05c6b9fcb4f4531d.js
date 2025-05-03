(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[351], {
    96: function(e, t, s) {
        Promise.resolve().then(s.bind(s, 8675)),
        Promise.resolve().then(s.bind(s, 8238)),
        Promise.resolve().then(s.bind(s, 7621)),
        Promise.resolve().then(s.bind(s, 7358)),
        Promise.resolve().then(s.bind(s, 9159))
    },
    8675: function(e, t, s) {
        "use strict";
        s.d(t, {
            ProductDetail: function() {
                return P
            }
        });
        var r = s(288)
          , a = s(5192)
          , i = s(2536)
          , l = s(7719)
          , n = s(1782);
        function c(e) {
            let {quantity: t, onQuantityChange: s, min: a=1, max: i=99} = e;
            return (0,
            r.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [(0,
                r.jsx)(l.z, {
                    variant: "outline",
                    size: "icon",
                    onClick: () => {
                        t > a && s(t - 1)
                    }
                    ,
                    disabled: t <= a,
                    className: "bg-[#1a1f24] text-white border-gray-700 hover:bg-[#2a3038] hover:text-white",
                    children: "-"
                }), (0,
                r.jsx)(n.I, {
                    type: "number",
                    min: a,
                    max: i,
                    value: t,
                    onChange: e => {
                        let t = Number.parseInt(e.target.value, 10);
                        isNaN(t) || s(Math.max(a, Math.min(i, t)))
                    }
                    ,
                    className: "w-16 text-center bg-[#1a1f24] text-white border-gray-700 focus:border-[#bf00c9]"
                }), (0,
                r.jsx)(l.z, {
                    variant: "outline",
                    size: "icon",
                    onClick: () => {
                        t < i && s(t + 1)
                    }
                    ,
                    disabled: t >= i,
                    className: "bg-[#1a1f24] text-white border-gray-700 hover:bg-[#2a3038] hover:text-white",
                    children: "+"
                })]
            })
        }
        var o = s(5594);
        function d(e) {
            let {description: t} = e;
            return t ? (0,
            r.jsx)("div", {
                className: "space-y-2",
                children: t.split("\n").map( (e, t) => {
                    if ((e = (e = e.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")).replace(/\*(.*?)\*/g, "<em>$1</em>")).includes(" - - - -")) {
                        let[s,a] = e.split(" - - - -").map(e => e.trim());
                        return (0,
                        r.jsxs)("div", {
                            className: "flex justify-between py-1",
                            children: [(0,
                            r.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: s
                                },
                                className: "text-gray-300"
                            }), (0,
                            r.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: a
                                },
                                className: "text-white"
                            })]
                        }, t)
                    }
                    return (0,
                    r.jsx)("p", {
                        className: "text-gray-300 py-1",
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    }, t)
                }
                )
            }) : (0,
            r.jsx)("p", {
                className: "text-gray-400",
                children: "No description available."
            })
        }
        var m = s(740)
          , u = s(9159)
          , x = s(4233)
          , h = s(9590)
          , f = s(4773)
          , p = s(7962)
          , g = s(6056);
        let b = x.fC;
        x.ZA;
        let v = x.B4
          , N = a.forwardRef( (e, t) => {
            let {className: s, children: a, ...i} = e;
            return (0,
            r.jsxs)(x.xz, {
                ref: t,
                className: (0,
                g.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", s),
                ...i,
                children: [a, (0,
                r.jsx)(x.JO, {
                    asChild: !0,
                    children: (0,
                    r.jsx)(h.Z, {
                        className: "h-4 w-4 opacity-50"
                    })
                })]
            })
        }
        );
        N.displayName = x.xz.displayName;
        let j = a.forwardRef( (e, t) => {
            let {className: s, ...a} = e;
            return (0,
            r.jsx)(x.u_, {
                ref: t,
                className: (0,
                g.cn)("flex cursor-default items-center justify-center py-1", s),
                ...a,
                children: (0,
                r.jsx)(f.Z, {
                    className: "h-4 w-4"
                })
            })
        }
        );
        j.displayName = x.u_.displayName;
        let y = a.forwardRef( (e, t) => {
            let {className: s, ...a} = e;
            return (0,
            r.jsx)(x.$G, {
                ref: t,
                className: (0,
                g.cn)("flex cursor-default items-center justify-center py-1", s),
                ...a,
                children: (0,
                r.jsx)(h.Z, {
                    className: "h-4 w-4"
                })
            })
        }
        );
        y.displayName = x.$G.displayName;
        let w = a.forwardRef( (e, t) => {
            let {className: s, children: a, position: i="popper", ...l} = e;
            return (0,
            r.jsx)(x.h_, {
                children: (0,
                r.jsxs)(x.VY, {
                    ref: t,
                    className: (0,
                    g.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === i && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", s),
                    position: i,
                    ...l,
                    children: [(0,
                    r.jsx)(j, {}), (0,
                    r.jsx)(x.l_, {
                        className: (0,
                        g.cn)("p-1", "popper" === i && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                        children: a
                    }), (0,
                    r.jsx)(y, {})]
                })
            })
        }
        );
        w.displayName = x.VY.displayName,
        a.forwardRef( (e, t) => {
            let {className: s, ...a} = e;
            return (0,
            r.jsx)(x.__, {
                ref: t,
                className: (0,
                g.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", s),
                ...a
            })
        }
        ).displayName = x.__.displayName;
        let _ = a.forwardRef( (e, t) => {
            let {className: s, children: a, ...i} = e;
            return (0,
            r.jsxs)(x.ck, {
                ref: t,
                className: (0,
                g.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", s),
                ...i,
                children: [(0,
                r.jsx)("span", {
                    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                    children: (0,
                    r.jsx)(x.wU, {
                        children: (0,
                        r.jsx)(p.Z, {
                            className: "h-4 w-4"
                        })
                    })
                }), (0,
                r.jsx)(x.eT, {
                    children: a
                })]
            })
        }
        );
        _.displayName = x.ck.displayName,
        a.forwardRef( (e, t) => {
            let {className: s, ...a} = e;
            return (0,
            r.jsx)(x.Z0, {
                ref: t,
                className: (0,
                g.cn)("-mx-1 my-1 h-px bg-muted", s),
                ...a
            })
        }
        ).displayName = x.Z0.displayName;
        var S = s(3320)
          , k = s(358)
          , E = s(2061);
        function P(e) {
            let {product: t} = e
              , [s,n] = (0,
            a.useState)(t)
              , [x,h] = (0,
            a.useState)(1)
              , [f,p] = (0,
            a.useState)("description")
              , [g,j] = (0,
            a.useState)(null)
              , {t: y} = (0,
            o.b)()
              , {toast: P} = (0,
            u.useToast)()
              , [C,I] = (0,
            a.useState)(!1)
              , z = (0,
            S.useRouter)()
              , [T,A] = (0,
            a.useState)(1);
            (0,
            a.useEffect)( () => {
                (async () => {
                    try {
                        let e = await (0,
                        k.gk)(s.id.toString());
                        e && n(e)
                    } catch (e) {
                        console.error("Error fetching updated product details:", e)
                    }
                }
                )()
            }
            , [s.id]),
            (0,
            a.useEffect)( () => {
                if (s.variants && s.variants.length > 0) {
                    let e = s.variants[0];
                    j(e);
                    let t = e.quantity_min || s.quantity_min || 1;
                    A(t),
                    h(t)
                } else {
                    let e = s.quantity_min || 1;
                    A(e),
                    h(e)
                }
                p("description"),
                I(!1)
            }
            , [s]);
            let q = (0,
            a.useCallback)(async () => {
                if (!C) {
                    if (s.variants && s.variants.length > 0 && !g) {
                        P({
                            title: "Error",
                            description: "Please select a variant before purchasing.",
                            variant: "destructive"
                        });
                        return
                    }
                    I(!0);
                    try {
                        let t = {
                            cart: [{
                                productId: s.id.toString(),
                                variantId: g ? g.id.toString() : void 0,
                                quantity: x
                            }],
                            shopId: Number(E.env.NEXT_PUBLIC_SELLAUTH_SHOP_ID || "109233"),
                            modal: !0
                        };
                        async function e(e) {
                            return new Promise(t => {
                                var s;
                                if ("function" != typeof (null === (s = window.sellAuthEmbed) || void 0 === s ? void 0 : s.checkout)) {
                                    console.error("SellAuth embed is not initialized"),
                                    t({
                                        success: !1,
                                        error: "SellAuth embed is not initialized"
                                    });
                                    return
                                }
                                window.sellAuthEmbed.checkout(null, e).then( () => {
                                    t({
                                        success: !0
                                    })
                                }
                                ).catch(e => {
                                    console.error("SellAuth checkout error:", e),
                                    t({
                                        success: !1,
                                        error: e.message || "Checkout failed"
                                    })
                                }
                                )
                            }
                            )
                        }
                        let r = t.cart && 0 !== t.cart.length ? t.shopId ? null : "Shop ID is missing." : "Cart is empty.";
                        if (r)
                            throw Error(r);
                        let {success: a, error: i} = await e(t);
                        if (a)
                            P({
                                title: "Success",
                                description: "Purchase completed successfully.",
                                variant: "default"
                            }),
                            await (0,
                            k.k4)(),
                            h(T),
                            j(s.variants && s.variants.length > 0 ? s.variants[0] : null),
                            z.push("/products/".concat(s.id));
                        else
                            throw Error(i || "Failed to complete the purchase")
                    } catch (t) {
                        console.error("Error during checkout:", t);
                        let e = "An error occurred during checkout. Please try again later.";
                        t instanceof Error && (e = "Checkout error: ".concat(t.message)),
                        P({
                            title: "Error",
                            description: e,
                            variant: "destructive"
                        })
                    } finally {
                        I(!1)
                    }
                }
            }
            , [C, s, g, x, T, P, z]);
            if (!s)
                return (0,
                r.jsx)("div", {
                    className: "text-white text-center",
                    children: "Product not found"
                });
            let D = g ? g.price : s.price
              , R = g ? g.stock : s.stock_count
              , Z = null === R || R > 0;
            return (0,
            r.jsxs)("div", {
                className: "flex flex-col md:flex-row gap-8",
                children: [(0,
                r.jsx)("div", {
                    className: "md:w-1/2",
                    children: (0,
                    r.jsx)(i.default, {
                        src: s.images && s.images[0] ? (0,
                        m.J)(s.images[0].cloudflare_image_id) : "/placeholder.svg",
                        alt: s.name,
                        width: 600,
                        height: 600,
                        className: "rounded-lg object-cover w-full",
                        unoptimized: !0
                    })
                }), (0,
                r.jsxs)("div", {
                    className: "md:w-1/2 space-y-6",
                    children: [(0,
                    r.jsxs)("div", {
                        children: [(0,
                        r.jsx)("h1", {
                            className: "text-3xl font-bold text-white mb-2",
                            children: s.name
                        }), (0,
                        r.jsx)("div", {
                            className: "flex items-center justify-between mb-4",
                            children: (0,
                            r.jsxs)("p", {
                                className: "text-2xl font-bold text-[#bf00c9]",
                                children: [D, " ", s.currency]
                            })
                        })]
                    }), s.variants && s.variants.length > 1 && (0,
                    r.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0,
                        r.jsx)("label", {
                            htmlFor: "variant-select",
                            className: "text-white font-semibold",
                            children: "Select Variant"
                        }), (0,
                        r.jsxs)(b, {
                            onValueChange: e => {
                                var t;
                                let r = (null === (t = s.variants) || void 0 === t ? void 0 : t.find(t => t.id.toString() === e)) || null;
                                if (j(r),
                                r) {
                                    let e = r.quantity_min || 1;
                                    A(e),
                                    h(Math.max(x, e))
                                }
                            }
                            ,
                            defaultValue: s.variants[0].id.toString(),
                            children: [(0,
                            r.jsx)(N, {
                                className: "w-full bg-[#2a3038] text-white border-gray-700",
                                children: (0,
                                r.jsx)(v, {
                                    placeholder: "Select a variant"
                                })
                            }), (0,
                            r.jsx)(w, {
                                className: "bg-[#1a1f24] border-gray-700",
                                children: s.variants.map(e => (0,
                                r.jsx)(_, {
                                    value: e.id.toString(),
                                    className: "text-white hover:bg-[#2a3038]",
                                    children: e.name
                                }, e.id))
                            })]
                        })]
                    }), (0,
                    r.jsx)("div", {
                        className: "flex items-center space-x-2",
                        children: Z ? (0,
                        r.jsxs)(r.Fragment, {
                            children: [(0,
                            r.jsx)("p", {
                                className: "text-green-500",
                                children: y("common.inStock")
                            }), null !== R && (0,
                            r.jsxs)("span", {
                                className: "text-sm font-medium text-gray-400 bg-gray-800 px-2 py-1 rounded-full",
                                children: [R, " ", 1 === R ? "item" : "items", " left"]
                            })]
                        }) : (0,
                        r.jsx)("p", {
                            className: "text-red-500",
                            children: y("common.outOfStock")
                        })
                    }), (0,
                    r.jsxs)("div", {
                        className: "flex items-center space-x-4",
                        children: [(0,
                        r.jsx)("p", {
                            className: "text-white font-semibold",
                            children: y("common.quantity")
                        }), (0,
                        r.jsx)(c, {
                            quantity: x,
                            onQuantityChange: h,
                            min: T,
                            max: s.stock_count
                        })]
                    }), T > 1 && (0,
                    r.jsxs)("p", {
                        className: "text-sm text-gray-400 mt-2",
                        children: ["Minimal quantity: ", T]
                    }), (0,
                    r.jsxs)("div", {
                        className: "border-t border-gray-700 mt-6 pt-4",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "flex mb-4",
                            children: [(0,
                            r.jsx)("button", {
                                className: "px-4 py-2 text-sm font-medium ".concat("description" === f ? "text-[#bf00c9] border-b-2 border-[#bf00c9]" : "text-gray-400 hover:text-white"),
                                onClick: () => p("description"),
                                children: "Description"
                            }), (0,
                            r.jsx)("button", {
                                className: "px-4 py-2 text-sm font-medium ".concat("instructions" === f ? "text-[#bf00c9] border-b-2 border-[#bf00c9]" : "text-gray-400 hover:text-white"),
                                onClick: () => p("instructions"),
                                children: "Instructions"
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "mt-4",
                            children: ["description" === f && (0,
                            r.jsx)(d, {
                                description: s.description
                            }), "instructions" === f && (0,
                            r.jsx)(d, {
                                description: s.instructions
                            })]
                        })]
                    }), (0,
                    r.jsx)(l.z, {
                        onClick: q,
                        className: "w-full bg-[#bf00c9] text-white hover:bg-[#a3009e]",
                        disabled: !Z || s.variants && s.variants.length > 1 && !g || C || x < T,
                        children: C ? "Processing..." : y("common.buyNow")
                    }), s.custom_fields && s.custom_fields.length > 0 && (0,
                    r.jsxs)("div", {
                        className: "p-4 rounded-lg",
                        children: [(0,
                        r.jsx)("h3", {
                            className: "text-xl font-semibold text-white mb-4",
                            children: "Additional Information"
                        }), s.custom_fields.map(e => (0,
                        r.jsxs)("div", {
                            className: "mb-2",
                            children: [(0,
                            r.jsx)("p", {
                                className: "text-white font-semibold",
                                children: e.name
                            }), (0,
                            r.jsx)("p", {
                                className: "text-gray-400",
                                children: e.is_required ? "Required" : "Optional"
                            })]
                        }, e.id))]
                    })]
                })]
            })
        }
    },
    8238: function(e, t, s) {
        "use strict";
        s.d(t, {
            ScrollToTop: function() {
                return a
            }
        });
        var r = s(5192);
        function a() {
            return (0,
            r.useEffect)( () => {
                window.scrollTo(0, 0)
            }
            , []),
            null
        }
    },
    7621: function(e, t, s) {
        "use strict";
        s.d(t, {
            SimilarProducts: function() {
                return h
            }
        });
        var r = s(288)
          , a = s(5192)
          , i = s(1676)
          , l = s(7719)
          , n = s(2536)
          , c = s(1204)
          , o = s(9159)
          , d = s(5899)
          , m = s(5594)
          , u = s(740)
          , x = s(358);
        function h(e) {
            let {productId: t} = e
              , [s,h] = (0,
            a.useState)([])
              , [f,p] = (0,
            a.useState)(!0)
              , [g,b] = (0,
            a.useState)(null)
              , {toast: v} = (0,
            o.useToast)()
              , {t: N} = (0,
            m.b)();
            return ((0,
            a.useEffect)( () => {
                (async () => {
                    try {
                        p(!0),
                        b(null),
                        x.iB[t] && delete x.iB[t];
                        let e = await (0,
                        x.Se)(t);
                        if (!Array.isArray(e))
                            throw Error("Invalid similar products data received");
                        h(e)
                    } catch (t) {
                        console.error("Error fetching similar products:", t),
                        t instanceof Error && (console.error("Error message:", t.message),
                        console.error("Error stack:", t.stack));
                        let e = N("productDetail.failedToLoadSimilarProducts");
                        b(e),
                        v({
                            title: "Error",
                            description: e,
                            variant: "destructive"
                        })
                    } finally {
                        p(!1)
                    }
                }
                )()
            }
            , [t, v, N]),
            f) ? (0,
            r.jsxs)("div", {
                className: "mt-12",
                children: [(0,
                r.jsx)("h2", {
                    className: "text-2xl font-bold text-white mb-4",
                    children: N("productDetail.similarProducts")
                }), (0,
                r.jsx)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                    children: [void 0, void 0, void 0, void 0].map( (e, t) => (0,
                    r.jsx)(d.O, {
                        className: "h-[300px] w-full bg-gray-800"
                    }, t))
                })]
            }) : g ? (0,
            r.jsxs)("div", {
                className: "mt-12",
                children: [(0,
                r.jsx)("h2", {
                    className: "text-2xl font-bold text-white mb-4",
                    children: N("productDetail.similarProducts")
                }), (0,
                r.jsx)("div", {
                    className: "text-red-500",
                    children: g
                })]
            }) : 0 === s.length ? (0,
            r.jsxs)("div", {
                className: "mt-12",
                children: [(0,
                r.jsx)("h2", {
                    className: "text-2xl font-bold text-white mb-4",
                    children: N("productDetail.similarProducts")
                }), (0,
                r.jsx)("p", {
                    className: "text-gray-400",
                    children: N("productDetail.noSimilarProducts")
                })]
            }) : (0,
            r.jsxs)("div", {
                className: "mt-12",
                children: [(0,
                r.jsx)("h2", {
                    className: "text-2xl font-bold text-white mb-4",
                    children: N("productDetail.similarProducts")
                }), (0,
                r.jsx)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                    children: s.map(e => (0,
                    r.jsx)(i.Zb, {
                        className: "bg-[#0e1114] border-gray-800 hover:border-[#bf00c9] transition-all duration-300 rounded-xl card-hover-effect",
                        children: (0,
                        r.jsxs)(i.aY, {
                            className: "p-4 rounded-xl",
                            children: [(0,
                            r.jsx)("div", {
                                className: "relative h-40 mb-4",
                                children: (0,
                                r.jsx)(n.default, {
                                    src: e.images && e.images[0] ? (0,
                                    u.J)(e.images[0].cloudflare_image_id) : "/placeholder.svg",
                                    alt: e.name,
                                    layout: "fill",
                                    objectFit: "cover",
                                    className: "rounded-md"
                                })
                            }), (0,
                            r.jsx)("h3", {
                                className: "text-lg font-semibold text-white mb-2",
                                children: e.name
                            }), (0,
                            r.jsx)("p", {
                                className: "text-[#bf00c9] mb-4",
                                children: e.variants && e.variants.length > 0 ? "".concat(e.variants[0].price, " ").concat(e.currency) : "".concat(e.price, " ").concat(e.currency)
                            }), (0,
                            r.jsx)(c.default, {
                                href: "/products/".concat(e.id),
                                scroll: !0,
                                children: (0,
                                r.jsx)(l.z, {
                                    className: "w-full bg-[#bf00c9] text-white hover:bg-[#a3009e]",
                                    children: N("common.viewProduct")
                                })
                            })]
                        })
                    }, e.id))
                })]
            })
        }
    },
    1782: function(e, t, s) {
        "use strict";
        s.d(t, {
            I: function() {
                return l
            }
        });
        var r = s(288)
          , a = s(5192)
          , i = s(6056);
        let l = a.forwardRef( (e, t) => {
            let {className: s, type: a, ...l} = e;
            return (0,
            r.jsx)("input", {
                type: a,
                className: (0,
                i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", s),
                ref: t,
                ...l
            })
        }
        );
        l.displayName = "Input"
    }
}, function(e) {
    e.O(0, [472, 363, 900, 24, 240, 744], function() {
        return e(e.s = 96)
    }),
    _N_E = e.O()
}
]);
