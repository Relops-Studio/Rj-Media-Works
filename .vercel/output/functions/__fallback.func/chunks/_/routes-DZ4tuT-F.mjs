import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Heart, Building2, Megaphone, Mic, Video, Aperture, Quote, ChevronLeft, ChevronRight, Send, Mail, Phone, MapPin, Instagram } from 'lucide-react';

var navLinks = [
  {
    label: "Work",
    href: "#gallery"
  },
  {
    label: "About",
    href: "#about"
  },
  {
    label: "Services",
    href: "#services"
  },
  {
    label: "Team",
    href: "#team"
  },
  {
    label: "Contact",
    href: "#contact"
  }
];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(motion.nav, {
    initial: {
      y: -80,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    },
    transition: {
      duration: 0.8,
      ease: [
        0.16,
        1,
        0.3,
        1
      ]
    },
    style: { fontFamily: "'DM Sans', sans-serif" },
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0A1540]/95 backdrop-blur-md border-b border-[#F5A820]/10" : "bg-transparent"}`,
    children: /* @__PURE__ */ jsxs("div", {
      className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
      children: [
        /* @__PURE__ */ jsx("a", {
          href: "#",
          onClick: (e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          },
          className: "flex items-center",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col items-start justify-center",
            children: [/* @__PURE__ */ jsx("span", {
              style: { fontFamily: "'Cormorant Garamond', serif" },
              className: "text-white text-2xl font-semibold leading-none tracking-wider",
              children: "RJ MEDIA"
            }), /* @__PURE__ */ jsx("span", {
              style: { fontFamily: "'DM Sans', sans-serif" },
              className: "text-[#F5A820] text-[9px] tracking-[0.4em] uppercase mt-1 pl-0.5",
              children: "WORKS"
            })]
          })
        }),
        /* @__PURE__ */ jsx("ul", {
          className: "hidden md:flex items-center gap-7",
          children: navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
            onClick: () => handleNav(link.href),
            className: "text-white/70 hover:text-[#F5A820] text-sm tracking-[0.12em] uppercase transition-colors duration-300 cursor-pointer",
            children: link.label
          }) }, link.href))
        }),
        /* @__PURE__ */ jsx("a", {
          href: "#contact",
          onClick: (e) => {
            e.preventDefault();
            handleNav("#contact");
          },
          className: "hidden md:block bg-[#F5A820] text-[#0D1B5E] text-xs tracking-[0.2em] uppercase px-5 py-2.5 font-bold hover:bg-white hover:text-[#0D1B5E] transition-all duration-300",
          children: "Book Now"
        }),
        /* @__PURE__ */ jsxs("button", {
          className: "md:hidden flex flex-col gap-1.5 p-1",
          onClick: () => setMenuOpen(!menuOpen),
          "aria-label": "Toggle menu",
          children: [
            /* @__PURE__ */ jsx("span", { className: `block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}` }),
            /* @__PURE__ */ jsx("span", { className: `block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}` }),
            /* @__PURE__ */ jsx("span", { className: `block w-4 h-px bg-[#F5A820] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2 w-6" : ""}` })
          ]
        })
      ]
    })
  }), /* @__PURE__ */ jsx(AnimatePresence, { children: menuOpen && /* @__PURE__ */ jsxs(motion.div, {
    initial: {
      opacity: 0,
      y: -20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    },
    transition: { duration: 0.3 },
    className: "fixed inset-0 z-40 bg-[#0D1B5E]/98 flex flex-col items-center justify-center gap-8",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col items-center justify-center mb-6",
        children: [/* @__PURE__ */ jsx("span", {
          style: { fontFamily: "'Cormorant Garamond', serif" },
          className: "text-white text-3xl font-semibold leading-none tracking-wider",
          children: "RJ MEDIA"
        }), /* @__PURE__ */ jsx("span", {
          style: { fontFamily: "'DM Sans', sans-serif" },
          className: "text-[#F5A820] text-[10px] tracking-[0.4em] uppercase mt-1.5",
          children: "WORKS"
        })]
      }),
      navLinks.map((link, i) => /* @__PURE__ */ jsx(motion.button, {
        initial: {
          opacity: 0,
          y: 20
        },
        animate: {
          opacity: 1,
          y: 0
        },
        transition: { delay: i * 0.07 },
        onClick: () => handleNav(link.href),
        style: { fontFamily: "'Cormorant Garamond', serif" },
        className: "text-white text-4xl font-light italic hover:text-[#F5A820] transition-colors duration-300 cursor-pointer",
        children: link.label
      }, link.href)),
      /* @__PURE__ */ jsx(motion.a, {
        href: "#contact",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.45 },
        onClick: (e) => {
          e.preventDefault();
          handleNav("#contact");
        },
        className: "mt-4 bg-[#F5A820] text-[#0D1B5E] text-xs tracking-[0.2em] uppercase px-8 py-3 font-bold",
        children: "Book Now"
      })
    ]
  }) })] });
}
var slides = [
  {
    url: "/images/weworks.jpg?crop=1",
    label: "Portrait",
    caption: "Emotions Frozen in Time"
  },
  {
    url: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=1920&q=85&fit=crop",
    label: "Wedding",
    caption: "Moments That Last Forever"
  },
  {
    url: "https://images.unsplash.com/photo-1449495169669-7b118f960251?w=1920&q=85&fit=crop",
    label: "Cinematic",
    caption: "The World Through Our Lens"
  }
];
function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5e3);
  };
  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);
  const goTo = (idx) => {
    setCurrent(idx);
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };
  return /* @__PURE__ */ jsxs("section", {
    className: "relative h-screen min-h-[640px] overflow-hidden bg-[#0D1B5E]",
    children: [
      slides.map((slide, i) => /* @__PURE__ */ jsxs("div", {
        className: `absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ jsx("img", {
            src: slide.url,
            alt: slide.label,
            className: "w-full h-full object-cover scale-105",
            style: {
              transform: i === current ? "scale(1.05)" : "scale(1)",
              transition: "transform 6s ease-out"
            }
          }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/30" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0D1B5E] via-[#0D1B5E]/70 to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#0D1B5E] via-[#0D1B5E]/80 to-transparent w-full md:w-3/4" })
        ]
      }, slide.url)),
      /* @__PURE__ */ jsx("div", {
        className: "absolute inset-0 opacity-10 pointer-events-none",
        style: {
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
          mixBlendMode: "overlay"
        }
      }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#F5A820] via-[#F5A820]/40 to-transparent" }),
      /* @__PURE__ */ jsx("div", {
        className: "absolute inset-0 flex flex-col justify-end pb-24 px-8 md:px-16 max-w-7xl mx-auto left-0 right-0",
        children: /* @__PURE__ */ jsxs(motion.div, {
          initial: {
            opacity: 0,
            y: 40
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 1.2,
            delay: 0.3,
            ease: [
              0.16,
              1,
              0.3,
              1
            ]
          },
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "flex items-center gap-3 mb-6",
              children: [/* @__PURE__ */ jsx("span", { className: "block w-8 h-px bg-[#F5A820]" }), /* @__PURE__ */ jsxs("span", {
                style: { fontFamily: "'DM Sans', sans-serif" },
                className: "text-[#F5A820] text-xs tracking-[0.3em] uppercase",
                children: [slides[current].label, " \xB7 RJ Media Works"]
              })]
            }),
            /* @__PURE__ */ jsxs("h1", {
              style: { fontFamily: "'Cormorant Garamond', serif" },
              className: "text-white text-6xl md:text-8xl lg:text-[9rem] font-light leading-[0.9] mb-6",
              children: [
                /* @__PURE__ */ jsx("span", {
                  className: "block",
                  children: "We Build"
                }),
                /* @__PURE__ */ jsx("span", {
                  className: "block italic text-[#F5A820]",
                  children: "Brands"
                }),
                /* @__PURE__ */ jsx("span", {
                  className: "block",
                  children: "Visually"
                })
              ]
            }),
            /* @__PURE__ */ jsx("p", {
              style: { fontFamily: "'DM Sans', sans-serif" },
              className: "text-white/60 text-base md:text-lg tracking-wide max-w-sm mb-10 font-light",
              children: slides[current].caption
            }),
            /* @__PURE__ */ jsxs("div", {
              className: "flex items-center gap-6 flex-wrap",
              children: [/* @__PURE__ */ jsx(motion.button, {
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                onClick: () => {
                  var _a;
                  (_a = document.querySelector("#gallery")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                },
                style: { fontFamily: "'DM Sans', sans-serif" },
                className: "bg-[#F5A820] text-[#0D1B5E] text-xs tracking-[0.25em] uppercase px-8 py-4 font-bold hover:bg-white transition-colors duration-300 cursor-pointer",
                children: "View Portfolio"
              }), /* @__PURE__ */ jsxs("button", {
                onClick: () => {
                  var _a;
                  (_a = document.querySelector("#contact")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                },
                style: { fontFamily: "'DM Sans', sans-serif" },
                className: "text-white/70 text-xs tracking-[0.25em] uppercase flex items-center gap-3 hover:text-[#F5A820] transition-colors duration-300 cursor-pointer group",
                children: ["Book a Session", /* @__PURE__ */ jsx("span", { className: "block w-8 h-px bg-current transition-all duration-300 group-hover:w-12" })]
              })]
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx("div", {
        className: "absolute bottom-8 right-8 md:right-16 flex gap-2",
        children: slides.map((_, i) => /* @__PURE__ */ jsx("button", {
          onClick: () => goTo(i),
          className: `transition-all duration-300 cursor-pointer ${i === current ? "w-8 h-0.5 bg-[#F5A820]" : "w-2 h-0.5 bg-white/30 hover:bg-white/60"}`
        }, i))
      }),
      /* @__PURE__ */ jsxs(motion.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: {
          delay: 2,
          duration: 1
        },
        className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
        children: [/* @__PURE__ */ jsx("span", {
          style: { fontFamily: "'DM Sans', sans-serif" },
          className: "text-white/30 text-[9px] tracking-[0.4em] uppercase",
          children: "Scroll"
        }), /* @__PURE__ */ jsx(motion.div, {
          animate: { y: [
            0,
            8,
            0
          ] },
          transition: {
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut"
          },
          className: "w-px h-8 bg-gradient-to-b from-[#F5A820]/70 to-transparent"
        })]
      })
    ]
  });
}
var media = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&fit=crop",
    type: "image",
    category: "Portrait",
    title: "Golden Hour",
    span: "tall"
  },
  {
    id: 2,
    url: "/videos/sample.mp4",
    type: "video",
    category: "Wedding",
    title: "Wedding Highlights",
    span: "wide"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&fit=crop",
    type: "image",
    category: "Landscape",
    title: "Mountain Dawn",
    span: "wide"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80&fit=crop",
    type: "image",
    category: "Portrait",
    title: "The Thinker",
    span: "normal"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80&fit=crop",
    type: "image",
    category: "Fashion",
    title: "Editorial Noir",
    span: "tall"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80&fit=crop",
    type: "image",
    category: "Street",
    title: "City Pulse",
    span: "normal"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80&fit=crop",
    type: "image",
    category: "Wedding",
    title: "First Dance",
    span: "normal"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80&fit=crop",
    type: "image",
    category: "Landscape",
    title: "Foggy Valley",
    span: "wide"
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80&fit=crop",
    type: "image",
    category: "Fashion",
    title: "Urban Grace",
    span: "tall"
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80&fit=crop",
    type: "image",
    category: "Street",
    title: "Night City",
    span: "normal"
  },
  {
    id: 11,
    url: "/videos/sample.mp4",
    type: "video",
    category: "Fashion",
    title: "Fashion Reel",
    span: "normal"
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&fit=crop",
    type: "image",
    category: "Portrait",
    title: "Soft Light",
    span: "tall"
  }
];
var categories = [
  "All",
  "Portrait",
  "Wedding",
  "Landscape",
  "Street",
  "Fashion"
];
function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const filtered = activeCategory === "All" ? media : media.filter((p) => p.category === activeCategory);
  return /* @__PURE__ */ jsx("section", {
    id: "gallery",
    className: "bg-[#060E2E] py-28 px-6 md:px-12",
    children: /* @__PURE__ */ jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [/* @__PURE__ */ jsxs(motion.div, {
        ref,
        initial: {
          opacity: 0,
          y: 30
        },
        animate: inView ? {
          opacity: 1,
          y: 0
        } : {},
        transition: { duration: 0.8 },
        className: "mb-16",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex items-center gap-4 mb-4",
            children: [/* @__PURE__ */ jsx("span", { className: "block w-12 h-px bg-[#F5A820]" }), /* @__PURE__ */ jsx("span", {
              style: { fontFamily: "'DM Sans', sans-serif" },
              className: "text-[#F5A820] text-xs tracking-[0.35em] uppercase",
              children: "Portfolio"
            })]
          }),
          /* @__PURE__ */ jsxs("h2", {
            style: { fontFamily: "'Cormorant Garamond', serif" },
            className: "text-white text-5xl md:text-7xl font-light mb-6",
            children: ["Selected ", /* @__PURE__ */ jsx("span", {
              className: "italic text-[#F5A820]",
              children: "Work"
            })]
          }),
          /* @__PURE__ */ jsx("div", {
            className: "flex flex-wrap gap-3 mt-8",
            children: categories.map((cat) => /* @__PURE__ */ jsx("button", {
              onClick: () => setActiveCategory(cat),
              style: { fontFamily: "'DM Sans', sans-serif" },
              className: `text-xs tracking-[0.2em] uppercase px-5 py-2 border transition-all duration-300 cursor-pointer ${activeCategory === cat ? "border-[#F5A820] bg-[#F5A820] text-[#0D1B5E] font-bold" : "border-white/20 text-white/50 hover:border-[#F5A820]/50 hover:text-[#F5A820]"}`,
              children: cat
            }, cat))
          })
        ]
      }), /* @__PURE__ */ jsx("div", {
        className: "columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4",
        children: filtered.map((item, i) => /* @__PURE__ */ jsx(motion.div, {
          layout: true,
          initial: {
            opacity: 0,
            scale: 0.95
          },
          animate: {
            opacity: 1,
            scale: 1
          },
          exit: {
            opacity: 0,
            scale: 0.95
          },
          transition: {
            duration: 0.5,
            delay: i * 0.05
          },
          className: `break-inside-avoid relative overflow-hidden group cursor-pointer ${item.span === "tall" ? "row-span-2" : ""}`,
          onMouseEnter: () => setHoveredId(item.id),
          onMouseLeave: () => setHoveredId(null),
          children: /* @__PURE__ */ jsxs("div", {
            className: `relative overflow-hidden ${item.span === "tall" ? "aspect-[3/4]" : item.span === "wide" ? "aspect-[16/9]" : "aspect-[4/3]"}`,
            children: [
              item.type === "video" ? /* @__PURE__ */ jsx("video", {
                src: item.url,
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true
              }) : /* @__PURE__ */ jsx("img", {
                src: item.url,
                alt: item.title,
                className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              }),
              /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-t from-[#0D1B5E]/90 via-[#0D1B5E]/20 to-transparent transition-opacity duration-400 ${hoveredId === item.id ? "opacity-100" : "opacity-0"}` }),
              /* @__PURE__ */ jsxs("div", {
                className: `absolute bottom-0 left-0 right-0 p-5 transform transition-all duration-400 ${hoveredId === item.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`,
                children: [/* @__PURE__ */ jsx("span", {
                  style: { fontFamily: "'DM Sans', sans-serif" },
                  className: "text-[#F5A820] text-[10px] tracking-[0.3em] uppercase block mb-1",
                  children: item.category
                }), /* @__PURE__ */ jsx("h3", {
                  style: { fontFamily: "'Cormorant Garamond', serif" },
                  className: "text-white text-xl font-light",
                  children: item.title
                })]
              })
            ]
          })
        }, item.id))
      })]
    })
  });
}
var stats = [
  {
    value: "5+",
    label: "Years Experience"
  },
  {
    value: "150+",
    label: "Weddings"
  },
  {
    value: "35+",
    label: "Corporate Events"
  },
  {
    value: "75+",
    label: "Live Events Coverage"
  },
  {
    value: "1000+",
    label: "Editing Projects"
  }
];
function About() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px"
  });
  return /* @__PURE__ */ jsx("section", {
    id: "about",
    className: "bg-[#0D1B5E] py-28 px-6 md:px-12 overflow-hidden",
    children: /* @__PURE__ */ jsx("div", {
      className: "max-w-7xl mx-auto",
      children: /* @__PURE__ */ jsxs("div", {
        ref,
        className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
        children: [/* @__PURE__ */ jsxs(motion.div, {
          initial: {
            opacity: 0,
            x: -50
          },
          animate: inView ? {
            opacity: 1,
            x: 0
          } : {},
          transition: {
            duration: 1,
            ease: [
              0.16,
              1,
              0.3,
              1
            ]
          },
          className: "relative",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "relative",
            children: [
              /* @__PURE__ */ jsx("div", {
                className: "aspect-[3/4] overflow-hidden",
                children: /* @__PURE__ */ jsx("img", {
                  src: "/images/founder.heic",
                  alt: "RJ Media Works",
                  className: "w-full h-full object-cover"
                })
              }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -right-6 w-3/4 h-3/4 border border-[#F5A820]/40 -z-10" }),
              /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -left-4 w-24 h-24 bg-[#F5A820]/10 border border-[#F5A820]/20 -z-10" })
            ]
          }), /* @__PURE__ */ jsxs(motion.div, {
            initial: {
              opacity: 0,
              scale: 0.8
            },
            animate: inView ? {
              opacity: 1,
              scale: 1
            } : {},
            transition: {
              delay: 0.5,
              duration: 0.6
            },
            className: "absolute -bottom-3 -left-3 md:-left-8 bg-[#F5A820] p-6 flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40",
            children: [/* @__PURE__ */ jsx("span", {
              style: { fontFamily: "'Cormorant Garamond', serif" },
              className: "text-[#0D1B5E] text-4xl md:text-5xl font-bold leading-none",
              children: "5+"
            }), /* @__PURE__ */ jsxs("span", {
              style: { fontFamily: "'DM Sans', sans-serif" },
              className: "text-[#0D1B5E]/80 text-[10px] tracking-widest uppercase text-center mt-1 font-semibold",
              children: [
                "Years of",
                /* @__PURE__ */ jsx("br", {}),
                "Excellence"
              ]
            })]
          })]
        }), /* @__PURE__ */ jsxs(motion.div, {
          initial: {
            opacity: 0,
            x: 50
          },
          animate: inView ? {
            opacity: 1,
            x: 0
          } : {},
          transition: {
            duration: 1,
            delay: 0.2,
            ease: [
              0.16,
              1,
              0.3,
              1
            ]
          },
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "flex items-center gap-4 mb-6",
              children: [/* @__PURE__ */ jsx("span", { className: "block w-12 h-px bg-[#F5A820]" }), /* @__PURE__ */ jsx("span", {
                style: { fontFamily: "'DM Sans', sans-serif" },
                className: "text-[#F5A820] text-xs tracking-[0.35em] uppercase",
                children: "About Us"
              })]
            }),
            /* @__PURE__ */ jsxs("h2", {
              style: { fontFamily: "'Cormorant Garamond', serif" },
              className: "text-white text-5xl md:text-6xl font-light leading-tight mb-6",
              children: [
                "Where Vision",
                /* @__PURE__ */ jsx("br", {}),
                "Meets ",
                /* @__PURE__ */ jsx("span", {
                  className: "italic text-[#F5A820]",
                  children: "Craft"
                })
              ]
            }),
            /* @__PURE__ */ jsx("p", {
              style: { fontFamily: "'DM Sans', sans-serif" },
              className: "text-white/60 text-base leading-relaxed mb-4 font-light",
              children: "RJ Media Works is a creative media studio dedicated to capturing stories and transforming them into visually engaging experiences. With a passion for creativity and a strong focus on quality, RJ Media Works specializes in producing cinematic wedding films, wedding highlights, traditional wedding videos, reels, podcasts, and promotional advertisements."
            }),
            /* @__PURE__ */ jsx("p", {
              style: { fontFamily: "'DM Sans', sans-serif" },
              className: "text-white/50 text-base leading-relaxed mb-4 font-light",
              children: "We believe that every moment has a story worth telling. Our goal is to preserve those moments through thoughtful editing, creative storytelling, and modern visual techniques. Whether it is a once-in-a-lifetime wedding celebration, a brand looking to promote its identity, or a creator wanting impactful digital content, RJ Media Works ensures that every project is crafted with precision and creativity."
            }),
            /* @__PURE__ */ jsx("p", {
              style: { fontFamily: "'DM Sans', sans-serif" },
              className: "text-white/50 text-base leading-relaxed mb-4 font-light",
              children: "Our work is driven by attention to detail and an understanding of emotions behind every frame. By combining technical expertise with artistic vision, we create videos that are not only visually appealing but also meaningful and memorable."
            }),
            /* @__PURE__ */ jsx("p", {
              style: { fontFamily: "'DM Sans', sans-serif" },
              className: "text-white/50 text-base leading-relaxed mb-10 font-light",
              children: "At RJ Media Works, we continuously explore new ideas, trends, and technologies to deliver fresh and engaging content. Our commitment is to provide clients with high-quality media that reflects their personality, brand, and story. RJ Media Works is not just about editing videos \u2014 it is about creating lasting impressions through powerful visuals and storytelling."
            }),
            /* @__PURE__ */ jsx("div", {
              className: "grid grid-cols-2 gap-x-8 gap-y-8 mb-10",
              children: stats.map((stat, i) => /* @__PURE__ */ jsxs(motion.div, {
                initial: {
                  opacity: 0,
                  y: 20
                },
                animate: inView ? {
                  opacity: 1,
                  y: 0
                } : {},
                transition: {
                  delay: 0.4 + i * 0.1,
                  duration: 0.6
                },
                className: "border-l-2 border-[#F5A820] pl-4",
                children: [/* @__PURE__ */ jsx("div", {
                  style: { fontFamily: "'Cormorant Garamond', serif" },
                  className: "text-[#F5A820] text-4xl font-light",
                  children: stat.value
                }), /* @__PURE__ */ jsx("div", {
                  style: { fontFamily: "'DM Sans', sans-serif" },
                  className: "text-white/50 text-xs tracking-widest uppercase mt-1",
                  children: stat.label
                })]
              }, stat.label))
            }),
            /* @__PURE__ */ jsx(motion.button, {
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 },
              onClick: () => {
                var _a;
                (_a = document.querySelector("#contact")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
              },
              style: { fontFamily: "'DM Sans', sans-serif" },
              className: "bg-[#F5A820] text-[#0D1B5E] text-xs tracking-[0.25em] uppercase px-8 py-4 font-bold hover:bg-white hover:text-[#0D1B5E] transition-all duration-300 cursor-pointer",
              children: "Work With Us"
            })
          ]
        })]
      })
    })
  });
}
var services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Full-day cinematic coverage of your most precious celebration \u2014 from quiet morning preparations to the last dance. Every emotion, beautifully preserved.",
    features: [
      "8\u201312 hours coverage",
      "Cinematic highlights",
      "Online gallery",
      "High-resolution output"
    ]
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Professional coverage for seminars, conferences, and brand activations with a focus on capturing key moments and speaker highlights.",
    features: [
      "Multi-camera setup",
      "Quick turnaround",
      "Highlight reels",
      "Commercial usage rights"
    ]
  },
  {
    icon: Megaphone,
    title: "Advertisement",
    description: "High-impact commercial video productions tailored for social media, television, and digital marketing campaigns.",
    features: [
      "Concept development",
      "Creative direction",
      "Multi-format delivery",
      "Campaign usage"
    ]
  },
  {
    icon: Mic,
    title: "Podcast",
    description: "End-to-end podcast production including multi-cam video recording, high-fidelity audio engineering, and dynamic editing.",
    features: [
      "Multi-cam recording",
      "Audio mixing",
      "Social media snippets",
      "Full episode edits"
    ]
  },
  {
    icon: Video,
    title: "Video Edits",
    description: "Expert post-production services including color grading, sound design, and narrative shaping for your existing raw footage.",
    features: [
      "Color grading",
      "Sound design",
      "Motion graphics",
      "Fast turnarounds"
    ]
  },
  {
    icon: Aperture,
    title: "Brand Shoots",
    description: "Dynamic brand photography and videography that tells your brand story and speaks louder than words across all media.",
    features: [
      "Brand strategy call",
      "Multi-platform assets",
      "Video reels",
      "Same-week delivery"
    ]
  }
];
function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px"
  });
  return /* @__PURE__ */ jsx("section", {
    id: "services",
    className: "bg-[#060E2E] py-28 px-6 md:px-12",
    children: /* @__PURE__ */ jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [/* @__PURE__ */ jsxs(motion.div, {
        ref,
        initial: {
          opacity: 0,
          y: 30
        },
        animate: inView ? {
          opacity: 1,
          y: 0
        } : {},
        transition: { duration: 0.8 },
        className: "mb-20 max-w-2xl",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex items-center gap-4 mb-4",
            children: [/* @__PURE__ */ jsx("span", { className: "block w-12 h-px bg-[#F5A820]" }), /* @__PURE__ */ jsx("span", {
              style: { fontFamily: "'DM Sans', sans-serif" },
              className: "text-[#F5A820] text-xs tracking-[0.35em] uppercase",
              children: "Services"
            })]
          }),
          /* @__PURE__ */ jsxs("h2", {
            style: { fontFamily: "'Cormorant Garamond', serif" },
            className: "text-white text-5xl md:text-7xl font-light",
            children: ["What We ", /* @__PURE__ */ jsx("span", {
              className: "italic text-[#F5A820]",
              children: "Offer"
            })]
          }),
          /* @__PURE__ */ jsx("p", {
            style: { fontFamily: "'DM Sans', sans-serif" },
            className: "text-white/50 text-base mt-4 leading-relaxed font-light",
            children: "Every engagement is tailored. These are starting points \u2014 the final package is always crafted around your vision."
          })
        ]
      }), /* @__PURE__ */ jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5",
        children: services.map((service, i) => {
          const Icon = service.icon;
          return /* @__PURE__ */ jsxs(motion.div, {
            initial: {
              opacity: 0,
              y: 30
            },
            animate: inView ? {
              opacity: 1,
              y: 0
            } : {},
            transition: {
              duration: 0.6,
              delay: i * 0.08
            },
            className: "bg-[#060E2E] p-8 group hover:bg-[#0D1B5E] transition-colors duration-300 border-l-2 border-transparent hover:border-[#F5A820]",
            children: [
              /* @__PURE__ */ jsx("div", {
                className: "mb-6",
                children: /* @__PURE__ */ jsx("div", {
                  className: "w-12 h-12 bg-[#F5A820]/10 flex items-center justify-center group-hover:bg-[#F5A820]/20 transition-colors duration-300",
                  children: /* @__PURE__ */ jsx(Icon, {
                    size: 22,
                    className: "text-[#F5A820]",
                    strokeWidth: 1.5
                  })
                })
              }),
              /* @__PURE__ */ jsx("h3", {
                style: { fontFamily: "'Cormorant Garamond', serif" },
                className: "text-white text-2xl font-light mb-3",
                children: service.title
              }),
              /* @__PURE__ */ jsx("p", {
                style: { fontFamily: "'DM Sans', sans-serif" },
                className: "text-white/50 text-sm leading-relaxed mb-6 font-light",
                children: service.description
              }),
              /* @__PURE__ */ jsx("ul", {
                className: "space-y-2 mb-8",
                children: service.features.map((feat) => /* @__PURE__ */ jsxs("li", {
                  style: { fontFamily: "'DM Sans', sans-serif" },
                  className: "flex items-center gap-2 text-xs text-white/40",
                  children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#F5A820]/70 flex-shrink-0" }), feat]
                }, feat))
              }),
              /* @__PURE__ */ jsx("div", {
                className: "flex items-center justify-end",
                children: /* @__PURE__ */ jsxs("button", {
                  onClick: () => {
                    var _a;
                    (_a = document.querySelector("#contact")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                  },
                  style: { fontFamily: "'DM Sans', sans-serif" },
                  className: "text-white/40 text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 hover:text-[#F5A820] transition-colors duration-300 cursor-pointer group/link",
                  children: ["Enquire", /* @__PURE__ */ jsx("span", { className: "block w-4 h-px bg-current transition-all duration-300 group-hover/link:w-6" })]
                })
              })
            ]
          }, service.title);
        })
      })]
    })
  });
}
var team = [
  {
    name: "Rohit Joshi",
    role: "Founder & Director",
    specialty: "Portrait \xB7 Editorial",
    bio: "The visionary behind RJ Media Works. Ravi built this studio on one conviction \u2014 every brand has a story worth telling. With 8+ years behind the lens, he leads with purpose and passion.",
    image: "/team/DSC_9969%20copy.jpg.jpeg"
  },
  {
    name: "Yogesh Papanwar",
    role: "Cinematographer",
    specialty: "Coordination \xB7 BTS",
    bio: "The glue that holds every production together. Managing schedules, handling equipment, and capturing vital behind-the-scenes moments throughout the shoot.",
    image: "/team/Screenshot_20260222-233149.Instagram.png"
  },
  {
    name: "Yogesh Papanwar",
    role: "Cinematographer",
    specialty: "Wedding \xB7 Brand Shoots",
    bio: "Capturing emotions. Framing stories. Turning moments into timeless visuals. From traditional weddings to dynamic brand shoots, Yogesh creates visuals that speak louder than words.",
    image: "/team/BK0_0213%20copy.jpg.jpeg"
  },
  {
    name: "Arujun Hambarde",
    role: "Video Editor",
    specialty: "Wedding \xB7 Brand Shoots",
    bio: "An eye for detail and light that elevates every frame. Trained in commercial photography, bringing magazine-ready quality to brand campaigns and live event coverage.",
    image: "/team/DSC_2237%20copy.jpg.jpeg"
  },
  {
    name: "Sudarshan Sontakke",
    role: "Reel Editor",
    specialty: "Reels",
    bio: "Capturing the essence of the moment with creativity and precision.",
    image: "/team/IMG_9333.JPG.jpeg"
  },
  {
    name: "Alim Shaikh",
    role: "Graphic Designer",
    specialty: " Design and Posters",
    bio: "Shaping the visual language of every RJ Media project.",
    image: "/team/FB_IMG_1772701688695.jpg.jpeg"
  },
  {
    name: "Haji Baig Lucky",
    role: "Videographer",
    specialty: "Wedding \xB7 Brand Shoots",
    bio: "Capturing moments with creativity and precision.",
    image: "/team/IMG_4808.jpg.jpeg"
  },
  {
    name: "Karan Navghare",
    role: "Photographer",
    specialty: "Portrait ",
    bio: "A visual storyteller with a passion for capturing the beauty of the world around him.",
    image: "/team/IMG_7124.JPG.jpeg"
  }
];
function TeamCard({ member, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px"
  });
  return /* @__PURE__ */ jsx(motion.div, {
    ref,
    initial: {
      opacity: 0,
      y: 60
    },
    animate: inView ? {
      opacity: 1,
      y: 0
    } : {},
    transition: {
      duration: 0.8,
      delay: index * 0.15,
      ease: [
        0.16,
        1,
        0.3,
        1
      ]
    },
    className: "group relative",
    children: /* @__PURE__ */ jsxs("div", {
      className: "relative overflow-hidden bg-[#0D1B5E] border border-white/5 hover:border-[#F5A820]/40 transition-all duration-500",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "relative overflow-hidden aspect-[3/4]",
        children: [
          /* @__PURE__ */ jsx("img", {
            src: member.image,
            alt: member.name,
            className: "w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0D1B5E] via-[#0D1B5E]/20 to-transparent" }),
          /* @__PURE__ */ jsx("div", {
            className: "absolute top-4 right-4 bg-[#0D1B5E]/80 backdrop-blur-sm border border-[#F5A820]/30 px-3 py-1",
            style: { fontFamily: "'DM Sans', sans-serif" },
            children: /* @__PURE__ */ jsx("span", {
              className: "text-[#F5A820] text-[9px] tracking-[0.25em] uppercase font-light",
              children: member.specialty
            })
          })
        ]
      }), /* @__PURE__ */ jsxs("div", {
        className: "p-6 border-t border-white/5",
        children: [
          /* @__PURE__ */ jsx("h3", {
            style: { fontFamily: "'Cormorant Garamond', serif" },
            className: "text-white text-2xl font-semibold leading-tight mb-1",
            children: member.name
          }),
          /* @__PURE__ */ jsx("p", {
            style: { fontFamily: "'DM Sans', sans-serif" },
            className: "text-[#F5A820] text-[10px] tracking-[0.3em] uppercase font-bold mb-4",
            children: member.role
          }),
          /* @__PURE__ */ jsx("p", {
            style: { fontFamily: "'DM Sans', sans-serif" },
            className: "text-white/50 text-sm leading-relaxed mb-5",
            children: member.bio
          })
        ]
      })]
    })
  });
}
function Team() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: true,
    margin: "-80px"
  });
  return /* @__PURE__ */ jsxs("section", {
    id: "team",
    className: "py-28 bg-[#0A1540] relative overflow-hidden",
    children: [
      /* @__PURE__ */ jsx("div", {
        className: "absolute inset-0 opacity-[0.04] pointer-events-none",
        style: {
          backgroundImage: `radial-gradient(circle at 1px 1px, #F5A820 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }
      }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-[#F5A820]/60 blur-sm" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-[#F5A820]" }),
      /* @__PURE__ */ jsxs("div", {
        className: "max-w-7xl mx-auto px-6",
        children: [
          /* @__PURE__ */ jsxs("div", {
            ref: headingRef,
            className: "text-center mb-20",
            children: [
              /* @__PURE__ */ jsxs(motion.div, {
                initial: {
                  opacity: 0,
                  y: 20
                },
                animate: headingInView ? {
                  opacity: 1,
                  y: 0
                } : {},
                transition: { duration: 0.6 },
                className: "flex items-center justify-center gap-4 mb-6",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "h-px w-12 bg-[#F5A820]/40" }),
                  /* @__PURE__ */ jsx("span", {
                    style: { fontFamily: "'DM Sans', sans-serif" },
                    className: "text-[#F5A820] text-[10px] tracking-[0.4em] uppercase font-light",
                    children: "The Creatives"
                  }),
                  /* @__PURE__ */ jsx("div", { className: "h-px w-12 bg-[#F5A820]/40" })
                ]
              }),
              /* @__PURE__ */ jsxs(motion.h2, {
                initial: {
                  opacity: 0,
                  y: 30
                },
                animate: headingInView ? {
                  opacity: 1,
                  y: 0
                } : {},
                transition: {
                  duration: 0.8,
                  delay: 0.1,
                  ease: [
                    0.16,
                    1,
                    0.3,
                    1
                  ]
                },
                style: { fontFamily: "'Cormorant Garamond', serif" },
                className: "text-white text-5xl md:text-7xl font-light italic leading-none mb-6",
                children: [
                  "Meet the",
                  " ",
                  /* @__PURE__ */ jsx("span", {
                    className: "text-[#F5A820] not-italic font-semibold",
                    children: "Team"
                  })
                ]
              }),
              /* @__PURE__ */ jsx(motion.p, {
                initial: {
                  opacity: 0,
                  y: 20
                },
                animate: headingInView ? {
                  opacity: 1,
                  y: 0
                } : {},
                transition: {
                  duration: 0.8,
                  delay: 0.2
                },
                style: { fontFamily: "'DM Sans', sans-serif" },
                className: "text-white/40 text-base max-w-xl mx-auto leading-relaxed",
                children: "Passionate creatives united by one goal \u2014 capturing emotions, framing stories, and building brands that speak louder than words."
              })
            ]
          }),
          /* @__PURE__ */ jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
            children: team.map((member, i) => /* @__PURE__ */ jsx(TeamCard, {
              member,
              index: i
            }, member.name))
          }),
          /* @__PURE__ */ jsxs(motion.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            animate: headingInView ? {
              opacity: 1,
              y: 0
            } : {},
            transition: {
              duration: 0.8,
              delay: 0.9
            },
            className: "mt-20 flex flex-col items-center gap-4",
            children: [
              /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-[#F5A820]/30 to-transparent" }),
              /* @__PURE__ */ jsx("div", {
                className: "flex items-center gap-3 pt-4",
                children: /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-col items-center justify-center opacity-70",
                  children: [/* @__PURE__ */ jsx("span", {
                    style: { fontFamily: "'Cormorant Garamond', serif" },
                    className: "text-white text-xl font-semibold leading-none tracking-wider",
                    children: "RJ MEDIA"
                  }), /* @__PURE__ */ jsx("span", {
                    style: { fontFamily: "'DM Sans', sans-serif" },
                    className: "text-[#F5A820] text-[8px] tracking-[0.4em] uppercase mt-1",
                    children: "WORKS"
                  })]
                })
              }),
              /* @__PURE__ */ jsx("p", {
                style: { fontFamily: "'DM Sans', sans-serif" },
                className: "text-white/25 text-[10px] tracking-[0.4em] uppercase",
                children: "We Build Brands"
              })
            ]
          })
        ]
      })
    ]
  });
}
var testimonials = [
  {
    text: "Your passion for storytelling always shines through. You turned a simple candid moment into a beautiful memory I'll always cherish. Your dedication tells me you'll be the best photographer and editor in Basmath city. Service first, money later \u2014 keep growing!",
    name: "Adv Sahil Satpute",
    role: "Friend & Client",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80&fit=crop&crop=face"
  },
  {
    text: "RJ Media Works captured our wedding with such sensitivity and artistry. Every single image feels cinematic. We've printed a gallery wall and cannot stop staring at it. Worth every rupee.",
    name: "Priya & Rohan",
    role: "Wedding Clients, Mumbai",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&fit=crop&crop=face"
  },
  {
    text: "I hired RJ Media for our brand campaign and the results were extraordinary. They understood our vision immediately and pushed it further than we imagined. The work is already running across three platforms.",
    name: "Vikram Patel",
    role: "Founder, Urban Brands Co.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&fit=crop&crop=face"
  },
  {
    text: "Yogesh has a rare gift \u2014 he sees emotion before it happens and captures it perfectly. Our event photos felt like a film. We get compliments on them constantly.",
    name: "Neha Sharma",
    role: "Event Organiser, Pune",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80&fit=crop&crop=face"
  },
  {
    text: "We commissioned RJ Media for product shoots across 12 SKUs. Their efficiency and quality are unparalleled. All images delivered within 48 hours, perfectly edited and ready for launch.",
    name: "Aditya Khanna",
    role: "Marketing Head, Elevate Lifestyle",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80&fit=crop&crop=face"
  }
];
function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-60px"
  });
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  return /* @__PURE__ */ jsx("section", {
    className: "bg-[#0D1B5E] py-28 px-6 md:px-12 overflow-hidden",
    children: /* @__PURE__ */ jsxs("div", {
      className: "max-w-5xl mx-auto",
      children: [/* @__PURE__ */ jsxs(motion.div, {
        ref,
        initial: {
          opacity: 0,
          y: 30
        },
        animate: inView ? {
          opacity: 1,
          y: 0
        } : {},
        transition: { duration: 0.8 },
        className: "text-center mb-16",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-center gap-4 mb-4",
          children: [
            /* @__PURE__ */ jsx("span", { className: "block w-12 h-px bg-[#F5A820]" }),
            /* @__PURE__ */ jsx("span", {
              style: { fontFamily: "'DM Sans', sans-serif" },
              className: "text-[#F5A820] text-xs tracking-[0.35em] uppercase",
              children: "Testimonials"
            }),
            /* @__PURE__ */ jsx("span", { className: "block w-12 h-px bg-[#F5A820]" })
          ]
        }), /* @__PURE__ */ jsxs("h2", {
          style: { fontFamily: "'Cormorant Garamond', serif" },
          className: "text-white text-5xl md:text-6xl font-light",
          children: ["Words from ", /* @__PURE__ */ jsx("span", {
            className: "italic text-[#F5A820]",
            children: "Clients"
          })]
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "relative",
        children: [/* @__PURE__ */ jsx(AnimatePresence, {
          mode: "wait",
          children: /* @__PURE__ */ jsxs(motion.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            exit: {
              opacity: 0,
              y: -20
            },
            transition: { duration: 0.5 },
            className: "text-center px-4 md:px-12",
            children: [
              /* @__PURE__ */ jsx(Quote, {
                size: 40,
                className: "text-[#F5A820]/40 mx-auto mb-8",
                strokeWidth: 1
              }),
              /* @__PURE__ */ jsxs("blockquote", {
                style: { fontFamily: "'Cormorant Garamond', serif" },
                className: "text-white/80 text-2xl md:text-3xl font-light italic leading-relaxed mb-10",
                children: [
                  '"',
                  testimonials[current].text,
                  '"'
                ]
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "flex items-center justify-center gap-4",
                children: [/* @__PURE__ */ jsx("img", {
                  src: testimonials[current].avatar,
                  alt: testimonials[current].name,
                  className: "w-12 h-12 rounded-full object-cover border-2 border-[#F5A820]/50"
                }), /* @__PURE__ */ jsxs("div", {
                  className: "text-left",
                  children: [/* @__PURE__ */ jsx("div", {
                    style: { fontFamily: "'DM Sans', sans-serif" },
                    className: "text-white text-sm font-medium",
                    children: testimonials[current].name
                  }), /* @__PURE__ */ jsx("div", {
                    style: { fontFamily: "'DM Sans', sans-serif" },
                    className: "text-white/40 text-xs tracking-wide",
                    children: testimonials[current].role
                  })]
                })]
              })
            ]
          }, current)
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-center gap-6 mt-12",
          children: [
            /* @__PURE__ */ jsx("button", {
              onClick: prev,
              className: "w-10 h-10 border border-white/20 flex items-center justify-center text-white/40 hover:border-[#F5A820] hover:text-[#F5A820] hover:bg-[#F5A820]/10 transition-all duration-300 cursor-pointer",
              children: /* @__PURE__ */ jsx(ChevronLeft, { size: 16 })
            }),
            /* @__PURE__ */ jsx("div", {
              className: "flex gap-2",
              children: testimonials.map((_, i) => /* @__PURE__ */ jsx("button", {
                onClick: () => setCurrent(i),
                className: `transition-all duration-300 cursor-pointer ${i === current ? "w-6 h-0.5 bg-[#F5A820]" : "w-2 h-0.5 bg-white/20 hover:bg-white/40"}`
              }, i))
            }),
            /* @__PURE__ */ jsx("button", {
              onClick: next,
              className: "w-10 h-10 border border-white/20 flex items-center justify-center text-white/40 hover:border-[#F5A820] hover:text-[#F5A820] hover:bg-[#F5A820]/10 transition-all duration-300 cursor-pointer",
              children: /* @__PURE__ */ jsx(ChevronRight, { size: 16 })
            })
          ]
        })]
      })]
    })
  });
}
var WHATSAPP_NUMBER = "917350583575";
function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-60px"
  });
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `\u{1F3AC} *New Enquiry \u2014 RJ Media Works*`,
      ``,
      `*Name:* ${formState.name}`,
      `*Phone:* ${formState.phone}`,
      `*Email:* ${formState.email}`,
      `*Service:* ${formState.service || "Not specified"}`,
      ``,
      `*Message:*`,
      formState.message || "\u2014"
    ];
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxs("section", {
    id: "contact",
    className: "bg-[#060E2E] pt-28 overflow-hidden",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "max-w-7xl mx-auto px-6 md:px-12",
      children: [/* @__PURE__ */ jsxs(motion.div, {
        ref,
        initial: {
          opacity: 0,
          y: 30
        },
        animate: inView ? {
          opacity: 1,
          y: 0
        } : {},
        transition: { duration: 0.8 },
        className: "mb-16 max-w-2xl",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex items-center gap-4 mb-4",
            children: [/* @__PURE__ */ jsx("span", { className: "block w-12 h-px bg-[#F5A820]" }), /* @__PURE__ */ jsx("span", {
              style: { fontFamily: "'DM Sans', sans-serif" },
              className: "text-[#F5A820] text-xs tracking-[0.35em] uppercase",
              children: "Contact"
            })]
          }),
          /* @__PURE__ */ jsxs("h2", {
            style: { fontFamily: "'Cormorant Garamond', serif" },
            className: "text-white text-5xl md:text-7xl font-light",
            children: ["Let's Build ", /* @__PURE__ */ jsx("span", {
              className: "italic text-[#F5A820]",
              children: "Together"
            })]
          }),
          /* @__PURE__ */ jsx("p", {
            style: { fontFamily: "'DM Sans', sans-serif" },
            className: "text-white/50 text-base mt-4 leading-relaxed font-light",
            children: "Tell us about your project or occasion. We'll get back to you within 24 hours with availability and a tailored package."
          })
        ]
      }), /* @__PURE__ */ jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-5 gap-16 pb-20",
        children: [/* @__PURE__ */ jsx(motion.div, {
          initial: {
            opacity: 0,
            y: 30
          },
          animate: inView ? {
            opacity: 1,
            y: 0
          } : {},
          transition: {
            duration: 0.8,
            delay: 0.1
          },
          className: "lg:col-span-3",
          children: submitted ? /* @__PURE__ */ jsxs(motion.div, {
            initial: {
              opacity: 0,
              scale: 0.95
            },
            animate: {
              opacity: 1,
              scale: 1
            },
            className: "h-full flex flex-col items-center justify-center text-center py-20",
            children: [
              /* @__PURE__ */ jsx("div", {
                className: "w-16 h-16 bg-[#F5A820] flex items-center justify-center mb-6",
                children: /* @__PURE__ */ jsx(Send, {
                  size: 24,
                  className: "text-[#0D1B5E]"
                })
              }),
              /* @__PURE__ */ jsx("h3", {
                style: { fontFamily: "'Cormorant Garamond', serif" },
                className: "text-white text-3xl font-light mb-3",
                children: "Message Received"
              }),
              /* @__PURE__ */ jsx("p", {
                style: { fontFamily: "'DM Sans', sans-serif" },
                className: "text-white/50 text-sm max-w-sm",
                children: "Thank you for reaching out. We'll review your enquiry and be in touch within 24 hours."
              })
            ]
          }) : /* @__PURE__ */ jsxs("form", {
            onSubmit: handleSubmit,
            className: "space-y-6",
            children: [
              /* @__PURE__ */ jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
                  style: { fontFamily: "'DM Sans', sans-serif" },
                  className: "block text-white/40 text-[10px] tracking-[0.3em] uppercase mb-2",
                  children: "Full Name"
                }), /* @__PURE__ */ jsx("input", {
                  type: "text",
                  required: true,
                  value: formState.name,
                  onChange: (e) => setFormState((s) => ({
                    ...s,
                    name: e.target.value
                  })),
                  style: { fontFamily: "'DM Sans', sans-serif" },
                  className: "w-full bg-transparent border-b border-white/15 text-white text-sm py-3 focus:outline-none focus:border-[#F5A820] transition-colors duration-300 placeholder:text-white/20",
                  placeholder: "Your name"
                })] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
                  style: { fontFamily: "'DM Sans', sans-serif" },
                  className: "block text-white/40 text-[10px] tracking-[0.3em] uppercase mb-2",
                  children: "Phone Number"
                }), /* @__PURE__ */ jsx("input", {
                  type: "tel",
                  required: true,
                  value: formState.phone,
                  onChange: (e) => setFormState((s) => ({
                    ...s,
                    phone: e.target.value
                  })),
                  style: { fontFamily: "'DM Sans', sans-serif" },
                  className: "w-full bg-transparent border-b border-white/15 text-white text-sm py-3 focus:outline-none focus:border-[#F5A820] transition-colors duration-300 placeholder:text-white/20",
                  placeholder: "+91 98765 43210"
                })] })]
              }),
              /* @__PURE__ */ jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
                  style: { fontFamily: "'DM Sans', sans-serif" },
                  className: "block text-white/40 text-[10px] tracking-[0.3em] uppercase mb-2",
                  children: "Email Address"
                }), /* @__PURE__ */ jsx("input", {
                  type: "email",
                  value: formState.email,
                  onChange: (e) => setFormState((s) => ({
                    ...s,
                    email: e.target.value
                  })),
                  style: { fontFamily: "'DM Sans', sans-serif" },
                  className: "w-full bg-transparent border-b border-white/15 text-white text-sm py-3 focus:outline-none focus:border-[#F5A820] transition-colors duration-300 placeholder:text-white/20",
                  placeholder: "rj6264738@gmail.com"
                })] })
              }),
              /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
                style: { fontFamily: "'DM Sans', sans-serif" },
                className: "block text-white/40 text-[10px] tracking-[0.3em] uppercase mb-2",
                children: "Service Interested In"
              }), /* @__PURE__ */ jsxs("select", {
                value: formState.service,
                onChange: (e) => setFormState((s) => ({
                  ...s,
                  service: e.target.value
                })),
                style: { fontFamily: "'DM Sans', sans-serif" },
                className: "w-full bg-[#060E2E] border-b border-white/15 text-white/70 text-sm py-3 focus:outline-none focus:border-[#F5A820] transition-colors duration-300 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsx("option", {
                    value: "",
                    className: "bg-[#0D1B5E]",
                    children: "Select a service\u2026"
                  }),
                  /* @__PURE__ */ jsx("option", {
                    value: "wedding",
                    className: "bg-[#0D1B5E]",
                    children: "Weddings"
                  }),
                  /* @__PURE__ */ jsx("option", {
                    value: "corporate",
                    className: "bg-[#0D1B5E]",
                    children: "Corporate Events"
                  }),
                  /* @__PURE__ */ jsx("option", {
                    value: "advertisement",
                    className: "bg-[#0D1B5E]",
                    children: "Advertisement"
                  }),
                  /* @__PURE__ */ jsx("option", {
                    value: "podcast",
                    className: "bg-[#0D1B5E]",
                    children: "Podcast"
                  }),
                  /* @__PURE__ */ jsx("option", {
                    value: "video_edits",
                    className: "bg-[#0D1B5E]",
                    children: "Video Edits"
                  }),
                  /* @__PURE__ */ jsx("option", {
                    value: "brand",
                    className: "bg-[#0D1B5E]",
                    children: "Brand Shoots"
                  })
                ]
              })] }),
              /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
                style: { fontFamily: "'DM Sans', sans-serif" },
                className: "block text-white/40 text-[10px] tracking-[0.3em] uppercase mb-2",
                children: "Tell Us More"
              }), /* @__PURE__ */ jsx("textarea", {
                rows: 5,
                value: formState.message,
                onChange: (e) => setFormState((s) => ({
                  ...s,
                  message: e.target.value
                })),
                style: { fontFamily: "'DM Sans', sans-serif" },
                className: "w-full bg-transparent border-b border-white/15 text-white text-sm py-3 focus:outline-none focus:border-[#F5A820] transition-colors duration-300 resize-none placeholder:text-white/20",
                placeholder: "Dates, vision, details\u2026"
              })] }),
              /* @__PURE__ */ jsxs(motion.button, {
                type: "submit",
                whileHover: { scale: 1.01 },
                whileTap: { scale: 0.99 },
                style: { fontFamily: "'DM Sans', sans-serif" },
                className: "w-full sm:w-auto bg-[#F5A820] text-[#0D1B5E] text-xs tracking-[0.25em] uppercase px-12 py-4 font-bold hover:bg-white transition-colors duration-300 flex items-center gap-3 cursor-pointer",
                children: ["Send Enquiry", /* @__PURE__ */ jsx(Send, { size: 14 })]
              })
            ]
          })
        }), /* @__PURE__ */ jsxs(motion.div, {
          initial: {
            opacity: 0,
            x: 30
          },
          animate: inView ? {
            opacity: 1,
            x: 0
          } : {},
          transition: {
            duration: 0.8,
            delay: 0.3
          },
          className: "lg:col-span-2 space-y-10",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
              style: { fontFamily: "'Cormorant Garamond', serif" },
              className: "text-white text-2xl font-light mb-6",
              children: "Get In Touch"
            }), /* @__PURE__ */ jsxs("ul", {
              className: "space-y-5",
              children: [
                /* @__PURE__ */ jsxs("li", {
                  className: "flex items-start gap-4",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "w-8 h-8 bg-[#F5A820]/15 flex items-center justify-center flex-shrink-0",
                    children: /* @__PURE__ */ jsx(Mail, {
                      size: 14,
                      className: "text-[#F5A820]",
                      strokeWidth: 1.5
                    })
                  }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
                    style: { fontFamily: "'DM Sans', sans-serif" },
                    className: "text-white/40 text-[10px] tracking-[0.3em] uppercase block mb-0.5",
                    children: "Email"
                  }), /* @__PURE__ */ jsx("a", {
                    href: "mailto:rj6264738@gmail.com",
                    style: { fontFamily: "'DM Sans', sans-serif" },
                    className: "text-white/80 text-sm hover:text-[#F5A820] transition-colors",
                    children: "rj6264738@gmail.com"
                  })] })]
                }),
                /* @__PURE__ */ jsxs("li", {
                  className: "flex items-start gap-4",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "w-8 h-8 bg-[#F5A820]/15 flex items-center justify-center flex-shrink-0",
                    children: /* @__PURE__ */ jsx(Phone, {
                      size: 14,
                      className: "text-[#F5A820]",
                      strokeWidth: 1.5
                    })
                  }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
                    style: { fontFamily: "'DM Sans', sans-serif" },
                    className: "text-white/40 text-[10px] tracking-[0.3em] uppercase block mb-0.5",
                    children: "Phone"
                  }), /* @__PURE__ */ jsx("a", {
                    href: "tel:+917350583575",
                    style: { fontFamily: "'DM Sans', sans-serif" },
                    className: "text-white/80 text-sm hover:text-[#F5A820] transition-colors",
                    children: "+91 7350583575"
                  })] })]
                }),
                /* @__PURE__ */ jsxs("li", {
                  className: "flex items-start gap-4",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "w-8 h-8 bg-[#F5A820]/15 flex items-center justify-center flex-shrink-0",
                    children: /* @__PURE__ */ jsx(MapPin, {
                      size: 14,
                      className: "text-[#F5A820]",
                      strokeWidth: 1.5
                    })
                  }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
                    style: { fontFamily: "'DM Sans', sans-serif" },
                    className: "text-white/40 text-[10px] tracking-[0.3em] uppercase block mb-0.5",
                    children: "Based In"
                  }), /* @__PURE__ */ jsx("span", {
                    style: { fontFamily: "'DM Sans', sans-serif" },
                    className: "text-white/80 text-sm",
                    children: "India \u2014 Available Nationwide"
                  })] })]
                })
              ]
            })] }),
            /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
              style: { fontFamily: "'Cormorant Garamond', serif" },
              className: "text-white text-xl font-light mb-4",
              children: "Follow Along"
            }), /* @__PURE__ */ jsx("div", {
              className: "flex gap-3",
              children: /* @__PURE__ */ jsx("a", {
                href: "https://www.instagram.com/rj_media_works1",
                target: "_blank",
                rel: "noreferrer",
                className: "w-10 h-10 bg-[#F5A820]/10 border border-[#F5A820]/20 flex items-center justify-center text-[#F5A820]/70 hover:bg-[#F5A820] hover:text-[#0D1B5E] transition-all duration-300",
                children: /* @__PURE__ */ jsx(Instagram, {
                  size: 16,
                  strokeWidth: 1.5
                })
              })
            })] }),
            /* @__PURE__ */ jsxs("div", {
              className: "relative overflow-hidden bg-[#0D1B5E] border border-[#F5A820]/20 p-8",
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-1 h-full bg-[#F5A820]" }),
                /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-col items-start justify-center mb-6",
                  children: [/* @__PURE__ */ jsx("span", {
                    style: { fontFamily: "'Cormorant Garamond', serif" },
                    className: "text-white text-2xl font-semibold leading-none tracking-wider",
                    children: "RJ MEDIA"
                  }), /* @__PURE__ */ jsx("span", {
                    style: { fontFamily: "'DM Sans', sans-serif" },
                    className: "text-[#F5A820] text-[9px] tracking-[0.4em] uppercase mt-1 pl-0.5",
                    children: "WORKS"
                  })]
                }),
                /* @__PURE__ */ jsx("p", {
                  style: { fontFamily: "'Cormorant Garamond', serif" },
                  className: "text-white text-xl italic font-light mb-2",
                  children: '"Capturing emotions. Framing stories."'
                }),
                /* @__PURE__ */ jsx("span", {
                  style: { fontFamily: "'DM Sans', sans-serif" },
                  className: "text-[#F5A820] text-[10px] tracking-widest uppercase",
                  children: "We Build Brands"
                })
              ]
            })
          ]
        })]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "border-t border-white/5 py-6 px-6 md:px-12 bg-[#060E2E]",
      children: /* @__PURE__ */ jsxs("div", {
        className: "max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4",
        children: [/* @__PURE__ */ jsxs("span", {
          style: { fontFamily: "'DM Sans', sans-serif" },
          className: "text-white/30 text-sm tracking-wider",
          children: [
            "\xA9 ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " RJ Media Works. All rights reserved."
          ]
        }), /* @__PURE__ */ jsx("span", {
          style: { fontFamily: "'DM Sans', sans-serif" },
          className: "text-[#F5A820]/40 text-xs tracking-widest uppercase",
          children: "We Build Brands"
        })]
      })
    })]
  });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", {
    style: { background: "#0a0a0a" },
    className: "min-h-screen",
    children: [
      /* @__PURE__ */ jsx(Nav, {}),
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Gallery, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(Team, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ]
  });
}

export { Index as component };
//# sourceMappingURL=routes-DZ4tuT-F.mjs.map
