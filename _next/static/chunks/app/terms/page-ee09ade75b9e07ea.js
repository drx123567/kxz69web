(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[571], {
    9562: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 7358))
    },
    7358: function(e, t, r) {
        "use strict";
        r.d(t, {
            SiteHeader: function() {
                return l
            }
        });
        var o = r(288)
          , s = r(5192)
          , i = r(1204)
          , a = r(7719)
          , n = r(2536)
          , c = r(1207)
          , d = r(2612)
          , u = r(5594);
        function l() {
            let[e,t] = (0,
            s.useState)(!1)
              , {t: r} = (0,
            u.b)();
            return (0,
            o.jsx)("header", {
                className: "sticky top-0 z-50 w-full bg-[#0e1114]/90 backdrop-blur-sm",
                children: (0,
                o.jsx)("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: (0,
                    o.jsxs)("div", {
                        className: "flex h-16 items-center justify-between",
                        children: [(0,
                        o.jsxs)(i.default, {
                            href: "/",
                            className: "flex items-center space-x-2",
                            children: [(0,
                            o.jsx)(n.default, {
                                src: "https://i.imgur.com/TUVb4mD.png",
                                alt: "FLK Logo",
                                width: 80,
                                height: 40,
                                className: "h-8 w-auto"
                            }), (0,
                            o.jsxs)("span", {
                                className: "text-xl sm:text-2xl font-bold text-white",
                                children: ["FLK", (0,
                                o.jsx)("span", {
                                    className: "text-[#bf00c9]"
                                })]
                            })]
                        }), (0,
                        o.jsx)("nav", {
                            className: "".concat(e ? "flex" : "hidden", " md:flex absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[#0e1114]/90 md:bg-transparent"),
                            children: (0,
                            o.jsxs)("ul", {
                                className: "flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 py-4 md:py-0 w-full md:w-auto",
                                children: [(0,
                                o.jsx)("li", {
                                    children: (0,
                                    o.jsx)(i.default, {
                                        href: "/",
                                        className: "text-sm font-medium text-white transition-colors hover:text-[#bf00c9]",
                                        children: r("header.home")
                                    })
                                }), (0,
                                o.jsx)("li", {
                                    children: (0,
                                    o.jsx)(i.default, {
                                        href: "/products",
                                        className: "text-sm font-medium text-white transition-colors hover:text-[#bf00c9]",
                                        children: r("header.products")
                                    })
                                }), (0,
                                o.jsx)("li", {
                                    children: (0,
                                    o.jsx)(i.default, {
                                        href: r("externalLinks.discord"),
                                        className: "text-sm font-medium text-white transition-colors hover:text-[#bf00c9]",
                                        children: r("header.discord")
                                    })
                                })]
                            })
                        }), (0,
                        o.jsx)("div", {
                            className: "flex items-center space-x-4",
                            children: (0,
                            o.jsx)(a.z, {
                                variant: "ghost",
                                className: "md:hidden text-white",
                                onClick: () => t(!e),
                                children: e ? (0,
                                o.jsx)(c.Z, {
                                    className: "h-6 w-6"
                                }) : (0,
                                o.jsx)(d.Z, {
                                    className: "h-6 w-6"
                                })
                            })
                        })]
                    })
                })
            })
        }
    },
    7719: function(e, t, r) {
        "use strict";
        r.d(t, {
            z: function() {
                return d
            }
        });
        var o = r(288)
          , s = r(5192)
          , i = r(1232)
          , a = r(7940)
          , n = r(6056);
        let c = (0,
        a.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
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
          , d = s.forwardRef( (e, t) => {
            let {className: r, variant: s, size: a, asChild: d=!1, ...u} = e
              , l = d ? i.g7 : "button";
            return (0,
            o.jsx)(l, {
                className: (0,
                n.cn)(c({
                    variant: s,
                    size: a,
                    className: r
                })),
                ref: t,
                ...u
            })
        }
        );
        d.displayName = "Button"
    },
    5594: function(e, t, r) {
        "use strict";
        r.d(t, {
            b: function() {
                return i
            }
        });
        var o = r(5192)
          , s = {
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
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en";
            return {
                t: (0,
                o.useCallback)(function(t) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , o = t.split(".")
                      , i = s[e];
                    for (let e of o) {
                        if (!i || "object" != typeof i || !(e in i))
                            return t;
                        i = i[e]
                    }
                    return "string" == typeof i ? i.replace(/{(\w+)}/g, (e, t) => {
                        var o;
                        return (null === (o = r[t]) || void 0 === o ? void 0 : o.toString()) || ""
                    }
                    ) : t
                }, [e])
            }
        }
    },
    6056: function(e, t, r) {
        "use strict";
        r.d(t, {
            cn: function() {
                return i
            }
        });
        var o = r(9773)
          , s = r(7009);
        function i() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return (0,
            s.m6)((0,
            o.W)(t))
        }
    }
}, function(e) {
    e.O(0, [472, 24, 240, 744], function() {
        return e(e.s = 9562)
    }),
    _N_E = e.O()
}
]);
