"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[900], {
    7358: function(t, e, r) {
        r.d(e, {
            SiteHeader: function() {
                return d
            }
        });
        var a = r(288)
          , o = r(5192)
          , i = r(1204)
          , n = r(7719)
          , s = r(2536)
          , c = r(1207)
          , u = r(2612)
          , l = r(5594);
        function d() {
            let[t,e] = (0,
            o.useState)(!1)
              , {t: r} = (0,
            l.b)();
            return (0,
            a.jsx)("header", {
                className: "sticky top-0 z-50 w-full bg-[#0e1114]/90 backdrop-blur-sm",
                children: (0,
                a.jsx)("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: (0,
                    a.jsxs)("div", {
                        className: "flex h-16 items-center justify-between",
                        children: [(0,
                        a.jsxs)(i.default, {
                            href: "/",
                            className: "flex items-center space-x-2",
                            children: [(0,
                            a.jsx)(s.default, {
                                src: "https://i.imgur.com/TUVb4mD.png",
                                alt: "FLK Logo",
                                width: 80,
                                height: 40,
                                className: "h-8 w-auto"
                            }), (0,
                            a.jsxs)("span", {
                                className: "text-xl sm:text-2xl font-bold text-white",
                                children: ["FLK", (0,
                                a.jsx)("span", {
                                    className: "text-[#bf00c9]"
                                })]
                            })]
                        }), (0,
                        a.jsx)("nav", {
                            className: "".concat(t ? "flex" : "hidden", " md:flex absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[#0e1114]/90 md:bg-transparent"),
                            children: (0,
                            a.jsxs)("ul", {
                                className: "flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 py-4 md:py-0 w-full md:w-auto",
                                children: [(0,
                                a.jsx)("li", {
                                    children: (0,
                                    a.jsx)(i.default, {
                                        href: "/",
                                        className: "text-sm font-medium text-white transition-colors hover:text-[#bf00c9]",
                                        children: r("header.home")
                                    })
                                }), (0,
                                a.jsx)("li", {
                                    children: (0,
                                    a.jsx)(i.default, {
                                        href: "/products",
                                        className: "text-sm font-medium text-white transition-colors hover:text-[#bf00c9]",
                                        children: r("header.products")
                                    })
                                }), (0,
                                a.jsx)("li", {
                                    children: (0,
                                    a.jsx)(i.default, {
                                        href: r("externalLinks.discord"),
                                        className: "text-sm font-medium text-white transition-colors hover:text-[#bf00c9]",
                                        children: r("header.discord")
                                    })
                                })]
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "flex items-center space-x-4",
                            children: (0,
                            a.jsx)(n.z, {
                                variant: "ghost",
                                className: "md:hidden text-white",
                                onClick: () => e(!t),
                                children: t ? (0,
                                a.jsx)(c.Z, {
                                    className: "h-6 w-6"
                                }) : (0,
                                a.jsx)(u.Z, {
                                    className: "h-6 w-6"
                                })
                            })
                        })]
                    })
                })
            })
        }
    },
    7719: function(t, e, r) {
        r.d(e, {
            z: function() {
                return u
            }
        });
        var a = r(288)
          , o = r(5192)
          , i = r(1232)
          , n = r(7940)
          , s = r(6056);
        let c = (0,
        n.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , u = o.forwardRef( (t, e) => {
            let {className: r, variant: o, size: n, asChild: u=!1, ...l} = t
              , d = u ? i.g7 : "button";
            return (0,
            a.jsx)(d, {
                className: (0,
                s.cn)(c({
                    variant: o,
                    size: n,
                    className: r
                })),
                ref: e,
                ...l
            })
        }
        );
        u.displayName = "Button"
    },
    1676: function(t, e, r) {
        r.d(e, {
            Zb: function() {
                return n
            },
            aY: function() {
                return s
            },
            eW: function() {
                return c
            }
        });
        var a = r(288)
          , o = r(5192)
          , i = r(6056);
        let n = o.forwardRef( (t, e) => {
            let {className: r, ...o} = t;
            return (0,
            a.jsx)("div", {
                ref: e,
                className: (0,
                i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", r),
                ...o
            })
        }
        );
        n.displayName = "Card",
        o.forwardRef( (t, e) => {
            let {className: r, ...o} = t;
            return (0,
            a.jsx)("div", {
                ref: e,
                className: (0,
                i.cn)("flex flex-col space-y-1.5 p-6", r),
                ...o
            })
        }
        ).displayName = "CardHeader",
        o.forwardRef( (t, e) => {
            let {className: r, ...o} = t;
            return (0,
            a.jsx)("div", {
                ref: e,
                className: (0,
                i.cn)("text-2xl font-semibold leading-none tracking-tight", r),
                ...o
            })
        }
        ).displayName = "CardTitle",
        o.forwardRef( (t, e) => {
            let {className: r, ...o} = t;
            return (0,
            a.jsx)("div", {
                ref: e,
                className: (0,
                i.cn)("text-sm text-muted-foreground", r),
                ...o
            })
        }
        ).displayName = "CardDescription";
        let s = o.forwardRef( (t, e) => {
            let {className: r, ...o} = t;
            return (0,
            a.jsx)("div", {
                ref: e,
                className: (0,
                i.cn)("p-6 pt-0", r),
                ...o
            })
        }
        );
        s.displayName = "CardContent";
        let c = o.forwardRef( (t, e) => {
            let {className: r, ...o} = t;
            return (0,
            a.jsx)("div", {
                ref: e,
                className: (0,
                i.cn)("flex items-center p-6 pt-0", r),
                ...o
            })
        }
        );
        c.displayName = "CardFooter"
    },
    5899: function(t, e, r) {
        r.d(e, {
            O: function() {
                return i
            }
        });
        var a = r(288)
          , o = r(6056);
        function i(t) {
            let {className: e, ...r} = t;
            return (0,
            a.jsx)("div", {
                className: (0,
                o.cn)("animate-pulse rounded-md bg-muted", e),
                ...r
            })
        }
    },
    9159: function(t, e, r) {
        r.r(e),
        r.d(e, {
            reducer: function() {
                return s
            },
            toast: function() {
                return d
            },
            useToast: function() {
                return f
            }
        });
        var a = r(5192);
        let o = 0
          , i = new Map
          , n = t => {
            if (i.has(t))
                return;
            let e = setTimeout( () => {
                i.delete(t),
                l({
                    type: "REMOVE_TOAST",
                    toastId: t
                })
            }
            , 1e6);
            i.set(t, e)
        }
          , s = (t, e) => {
            switch (e.type) {
            case "ADD_TOAST":
                return {
                    ...t,
                    toasts: [e.toast, ...t.toasts].slice(0, 1)
                };
            case "UPDATE_TOAST":
                return {
                    ...t,
                    toasts: t.toasts.map(t => t.id === e.toast.id ? {
                        ...t,
                        ...e.toast
                    } : t)
                };
            case "DISMISS_TOAST":
                {
                    let {toastId: r} = e;
                    return r ? n(r) : t.toasts.forEach(t => {
                        n(t.id)
                    }
                    ),
                    {
                        ...t,
                        toasts: t.toasts.map(t => t.id === r || void 0 === r ? {
                            ...t,
                            open: !1
                        } : t)
                    }
                }
            case "REMOVE_TOAST":
                if (void 0 === e.toastId)
                    return {
                        ...t,
                        toasts: []
                    };
                return {
                    ...t,
                    toasts: t.toasts.filter(t => t.id !== e.toastId)
                }
            }
        }
          , c = []
          , u = {
            toasts: []
        };
        function l(t) {
            u = s(u, t),
            c.forEach(t => {
                t(u)
            }
            )
        }
        function d(t) {
            let {...e} = t
              , r = (o = (o + 1) % Number.MAX_SAFE_INTEGER).toString()
              , a = () => l({
                type: "DISMISS_TOAST",
                toastId: r
            });
            return l({
                type: "ADD_TOAST",
                toast: {
                    ...e,
                    id: r,
                    open: !0,
                    onOpenChange: t => {
                        t || a()
                    }
                }
            }),
            {
                id: r,
                dismiss: a,
                update: t => l({
                    type: "UPDATE_TOAST",
                    toast: {
                        ...t,
                        id: r
                    }
                })
            }
        }
        function f() {
            let[t,e] = a.useState(u);
            return a.useEffect( () => (c.push(e),
            () => {
                let t = c.indexOf(e);
                t > -1 && c.splice(t, 1)
            }
            ), [t]),
            {
                ...t,
                toast: d,
                dismiss: t => l({
                    type: "DISMISS_TOAST",
                    toastId: t
                })
            }
        }
    },
    5594: function(t, e, r) {
        r.d(e, {
            b: function() {
                return i
            }
        });
        var a = r(5192)
          , o = {
            en: {
                common: {
                    buyNow: "Buy Now",
                    addToBasket: "Add to Basket",
                    outOfStock: "Out of Stock",
                    inStock: "In Stock",
                    loading: "Loading...",
                    error: "An error occurred. Please try again later.",
                    quantity: "Quantity:",
                    viewProduct: "View Product",
                    tryAgain: "Try Again"
                },
                header: {
                    home: "Home",
                    products: "Products",
                    discord: "Discord"
                },
                hero: {
                    title: "Looking for Premium Softwares?",
                    subtitle: "We've got you covered.",
                    description: "FLK is the number one destination for quality accounts, privacy protectors & more.",
                    joinDiscord: "Join our Discord",
                    viewProducts: "View Products"
                },
                featuredProducts: {
                    title: "Featured Products",
                    subtitle: "Our most popular and latest additions to the collection"
                },
                stats: {
                    title: "Our Impact in Numbers",
                    description: "At FLk, we're proud of the impact we've made in the gaming community. Our commitment to quality and innovation has led to impressive growth and customer satisfaction.",
                    happyCustomers: "Happy Customers",
                    happyCustomersCount: "NaN",
                    productsSold: "Products Sold",
                    productsSoldCount: "NaN",
                    productsAvailable: "Products Available"
                },
                reviews: {
                    title: "What Our Customers Say",
                    subtitle: "Read reviews from server owners and developers",
                    items: [{
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
                    }]
                },
                footer: {
                    termsOfService: "Terms of Service",
                    privacyPolicy: "Privacy Policy",
                    copyright: "\xa9 {year} FLK All rights reserved."
                },
                products: {
                    title: "Our Products",
                    allProducts: "All Products",
                    noProductsAvailable: "No products available at the moment."
                },
                productDetail: {
                    relatedProducts: "Related Products",
                    similarProducts: "Similar Products",
                    failedToLoadSimilarProducts: "Failed to load similar products"
                },
                features: {
                    title: "Why Choose FLK",
                    items: [{
                        title: "Secured payments",
                        description: "Your payments are 100% safe."
                    }, {
                        title: "High Performance",
                        description: "We offer high quality products only"
                    }, {
                        title: "Secured Files",
                        description: "Built-in protection against leaks with advanced encryption."
                    }]
                },
                faq: {
                    title: "Frequently Asked Questions",
                    items: [{
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
                        question: "How often are your tools updated?",
                        answer: "We strive to update our software regularly to ensure compatibility with the latest systems and to introduce new features. The frequency of updates may vary depending on the specific product and its requirements."
                    }]
                },
                externalLinks: {
                    discord: "https://discord.gg/flk",
                    twitter: "",
                    instagram: ""
                },
                images: {
                    hero: "https://i.imgur.com/61EMQFg.png"
                },
                counts: {
                    happyCustomers: "14k+",
                    productsSold: "25k+"
                }
            }
        };
        function i() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en";
            return {
                t: (0,
                a.useCallback)(function(e) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = e.split(".")
                      , i = o[t];
                    for (let t of a) {
                        if (!i || "object" != typeof i || !(t in i))
                            return e;
                        i = i[t]
                    }
                    return "string" == typeof i ? i.replace(/{(\w+)}/g, (t, e) => {
                        var a;
                        return (null === (a = r[e]) || void 0 === a ? void 0 : a.toString()) || ""
                    }
                    ) : e
                }, [t])
            }
        }
    },
    6056: function(t, e, r) {
        r.d(e, {
            cn: function() {
                return i
            }
        });
        var a = r(9773)
          , o = r(7009);
        function i() {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            return (0,
            o.m6)((0,
            a.W)(e))
        }
    },
    3211: function(t, e, r) {
        r.d(e, {
            CQ: function() {
                return f
            },
            QQ: function() {
                return l
            },
            oY: function() {
                return d
            }
        });
        var a = r(9159)
          , o = r(2061);
        let i = o.env.SELLAUTH_API_KEY || "4953883|mMtzybdfxjhlxTJOpdjnGJncuQE0p3htsxYB0pCra21d8e0e"
          , n = o.env.NEXT_PUBLIC_SELLAUTH_SHOP_ID || "109233";
        class s {
            enqueue(t) {
                return new Promise( (e, r) => {
                    this.queue.push(async () => {
                        try {
                            let r = await t();
                            e(r)
                        } catch (t) {
                            r(t)
                        }
                    }
                    ),
                    this.processQueue()
                }
                )
            }
            async processQueue() {
                if (!this.processing) {
                    for (this.processing = !0; this.queue.length > 0; ) {
                        let t = this.queue.shift();
                        t && (await t(),
                        await new Promise(t => setTimeout(t, 100)))
                    }
                    this.processing = !1
                }
            }
            constructor() {
                this.queue = [],
                this.processing = !1
            }
        }
        let c = new s;
        async function u(t, e) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            try {
                let a = await fetch(t, e);
                if (429 === a.status && r < 3) {
                    let a = Math.min(1e3 * Math.pow(2, r), 1e4);
                    return await new Promise(t => setTimeout(t, a)),
                    u(t, e, r + 1)
                }
                return a
            } catch (a) {
                if (r < 3) {
                    let a = Math.min(1e3 * Math.pow(2, r), 1e4);
                    return await new Promise(t => setTimeout(t, a)),
                    u(t, e, r + 1)
                }
                throw a
            }
        }
        async function l(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , r = "".concat("https://api.sellauth.com/v1").concat(t)
              , o = {
                Authorization: "Bearer ".concat(i),
                Accept: "application/json",
                ...e.headers
            };
            return c.enqueue(async () => {
                try {
                    let t = await u(r, {
                        ...e,
                        headers: o
                    });
                    if (!t.ok)
                        throw 429 === t.status && (0,
                        a.toast)({
                            title: "Rate limit reached",
                            description: "We're experiencing high traffic. Please try again in a moment.",
                            variant: "destructive"
                        }),
                        Error("API call failed: ".concat(t.status, " ").concat(t.statusText));
                    return await t.json()
                } catch (t) {
                    throw console.error("API request failed:", t),
                    (0,
                    a.toast)({
                        title: "Error",
                        description: "Failed to fetch data. Please try again later.",
                        variant: "destructive"
                    }),
                    t
                }
            }
            )
        }
        function d(t) {
            return "/shops/".concat(n).concat(t)
        }
        async function f() {
            try {
                let t = d("/products?limit=1");
                return (await l(t)).total || 0
            } catch (t) {
                throw console.error("Error fetching product count:", t),
                t
            }
        }
    },
    740: function(t, e, r) {
        r.d(e, {
            J: function() {
                return a
            }
        });
        function a(t) {
            return "https://imagedelivery.net/HL_Fwm__tlvUGLZF2p74xw/".concat(t, "/public")
        }
    },
    358: function(t, e, r) {
        r.d(e, {
            KZ: function() {
                return h
            },
            Se: function() {
                return y
            },
            at: function() {
                return v
            },
            gk: function() {
                return g
            },
            iB: function() {
                return c
            },
            k4: function() {
                return w
            },
            zg: function() {
                return m
            }
        });
        var a = r(3211)
          , o = r(9159);
        let i = null
          , n = null
          , s = {}
          , c = {}
          , u = null
          , l = null
          , d = null
          , f = null;
        function p(t) {
            return null === t || Date.now() - t >= 3e5
        }
        async function m() {
            if (p(l))
                try {
                    let t = (0,
                    a.oY)("/products?limit=1000");
                    return i = (await (0,
                    a.QQ)(t)).data,
                    l = Date.now(),
                    localStorage.setItem("productCache", JSON.stringify(i)),
                    localStorage.setItem("productCacheTimestamp", l.toString()),
                    i
                } catch (t) {
                    if (i)
                        return (0,
                        o.toast)({
                            title: "Using cached data",
                            description: "We couldn't fetch the latest data. Showing previously cached information.",
                            variant: "warning"
                        }),
                        i;
                    return (0,
                    o.toast)({
                        title: "Error",
                        description: "Failed to load products. Please try again later.",
                        variant: "destructive"
                    }),
                    []
                }
            if (i)
                return i;
            let t = localStorage.getItem("productCache")
              , e = localStorage.getItem("productCacheTimestamp");
            if (t && e) {
                let r = Number.parseInt(e, 10);
                if (!p(r))
                    return i = JSON.parse(t),
                    l = r,
                    i
            }
            return m()
        }
        async function h() {
            if (p(d))
                try {
                    let t = (0,
                    a.oY)("/groups");
                    return n = (await (0,
                    a.QQ)(t)).data,
                    d = Date.now(),
                    localStorage.setItem("groupCache", JSON.stringify(n)),
                    localStorage.setItem("groupCacheTimestamp", d.toString()),
                    n
                } catch (t) {
                    if (console.error("Error fetching group cache:", t),
                    n)
                        return (0,
                        o.toast)({
                            title: "Using cached data",
                            description: "We couldn't fetch the latest group data. Showing previously cached information.",
                            variant: "warning"
                        }),
                        n;
                    return (0,
                    o.toast)({
                        title: "Error",
                        description: "Failed to load product groups. Please try again later.",
                        variant: "destructive"
                    }),
                    []
                }
            if (n)
                return n;
            let t = localStorage.getItem("groupCache")
              , e = localStorage.getItem("groupCacheTimestamp");
            if (t && e) {
                let r = Number.parseInt(e, 10);
                if (!p(r))
                    return n = JSON.parse(t),
                    d = r,
                    n
            }
            return h()
        }
        async function g(t) {
            try {
                let e = (0,
                a.oY)("/products/".concat(t))
                  , r = await (0,
                a.QQ)(e);
                if (r && r.id)
                    return s[t] = r,
                    s[t];
                return console.error("API response does not contain expected product data"),
                null
            } catch (e) {
                if (console.error("Error fetching product by ID:", e),
                s[t])
                    return (0,
                    o.toast)({
                        title: "Using cached data",
                        description: "We couldn't fetch the latest product data. Showing previously cached information.",
                        variant: "warning"
                    }),
                    s[t];
                return (0,
                o.toast)({
                    title: "Error",
                    description: "Failed to load product details. Please try again later.",
                    variant: "destructive"
                }),
                null
            }
        }
        async function y(t) {
            if (c[t])
                return c[t];
            try {
                let e = await fetch("/api/products/".concat(t, "/similar?limit=4"));
                if (!e.ok)
                    throw Error("HTTP error! status: ".concat(e.status));
                let r = await e.json();
                if (!r.data || !Array.isArray(r.data))
                    throw Error("Invalid response format");
                let a = r.data.filter(t => "public" === t.visibility);
                return c[t] = a.slice(0, 4),
                c[t]
            } catch (t) {
                return console.error("Error fetching similar products:", t),
                (0,
                o.toast)({
                    title: "Error",
                    description: "Failed to load similar products. Please try again later.",
                    variant: "destructive"
                }),
                []
            }
        }
        async function v() {
            if (p(f))
                try {
                    let t = (0,
                    a.oY)("/products?featured=1&limit=4&include=variants,visibility")
                      , e = (await (0,
                    a.QQ)(t)).data.filter(t => "public" === t.visibility);
                    if (e.length < 4) {
                        let t = 4 - e.length
                          , r = (0,
                        a.oY)("/products?limit=".concat(t, "&include=variants,visibility"))
                          , o = (await (0,
                        a.QQ)(r)).data.filter(t => "public" === t.visibility);
                        e = [...e, ...o].slice(0, 4)
                    }
                    return u = e.slice(0, 4),
                    f = Date.now(),
                    localStorage.setItem("featuredProductsCache", JSON.stringify(u)),
                    localStorage.setItem("featuredProductsCacheTimestamp", f.toString()),
                    u
                } catch (t) {
                    if (console.error("Error fetching featured products:", t),
                    u)
                        return (0,
                        o.toast)({
                            title: "Using cached data",
                            description: "We couldn't fetch the latest featured products. Showing previously cached information.",
                            variant: "warning"
                        }),
                        u;
                    return (0,
                    o.toast)({
                        title: "Error",
                        description: "Failed to load featured products. Please try again later.",
                        variant: "destructive"
                    }),
                    []
                }
            if (u)
                return u;
            let t = localStorage.getItem("featuredProductsCache")
              , e = localStorage.getItem("featuredProductsCacheTimestamp");
            if (t && e) {
                let r = Number.parseInt(e, 10);
                if (!p(r))
                    return u = JSON.parse(t),
                    f = r,
                    u
            }
            return v()
        }
        async function w() {
            await Promise.all([m(), h(), v()]),
            s = {},
            c = {}
        }
    }
}]);
