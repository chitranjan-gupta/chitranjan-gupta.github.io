'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

const PORTFOLIO_ITEMS = [
    {
        id: 1,
        title: 'ShikshaSetu App',
        category: 'Mobile & Web App',
        desc: 'Full-featured Learning Management System application for course delivery, video lessons, and student progress tracking.',
        href: 'https://github.com/chitranjan-gupta/lms-app',
        image: '/assets/portfolio/shikshasetu-app.webp',
        tags: ['React Native', 'Expo', 'Node.js', 'LMS'],
        badge: 'App'
    },
    {
        id: 2,
        title: 'ShikshaSetu Portal',
        category: 'Web Platform',
        desc: 'Interactive LMS web portal deployed on Vercel connecting learners and instructors with live class management.',
        href: 'https://lms-sand-mu.vercel.app/',
        image: '/assets/portfolio/shikshasetu.webp',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
        badge: 'Web App'
    },
    {
        id: 3,
        title: 'Wrenchworks',
        category: 'Web Utilities & Tooling',
        desc: 'Suite of utility tools, developer helpers, and productivity micro-apps engineered for daily workflows.',
        href: 'https://wrenchworks.vercel.app/',
        image: '/assets/portfolio/wrenchworks.webp',
        tags: ['Next.js', 'TypeScript', 'Web Tools'],
        badge: 'Tools'
    },
    {
        id: 4,
        title: 'Coldbreez',
        category: 'Digital Publishing & News',
        desc: 'Dynamic news and editorial media platform powered by Sanity CMS headless content architecture and real-time publishing.',
        href: 'https://coldbreez.vercel.app/',
        image: '/assets/portfolio/coldbreez.webp',
        tags: ['Sanity CMS', 'Next.js', 'React', 'News Platform'],
        badge: 'News'
    },
    {
        id: 5,
        title: 'Papa Player',
        category: 'Media & Entertainment',
        desc: 'Custom web-based audio and video player featuring playlist queuing, audio visualizer, and keyboard shortcuts.',
        href: 'https://papa-player.vercel.app/',
        image: '/assets/portfolio/papa-player.webp',
        tags: ['JavaScript', 'HTML5 Media', 'Audio API'],
        badge: 'Media'
    },
    {
        id: 6,
        title: 'Image Shuffler',
        category: 'Graphics & Creative',
        desc: 'Visual puzzle and image manipulation app allowing dynamic grid slicing, image randomization, and interactive reassembly.',
        href: 'https://images-shuffler.vercel.app/',
        image: '/assets/portfolio/image-shuffler.webp',
        tags: ['Canvas API', 'JavaScript', 'Interactive'],
        badge: 'Creative'
    },
    {
        id: 7,
        title: 'Pattern Lock',
        category: 'Security & Auth',
        desc: 'Android-style 9-dot cryptographic pattern lock screen rendered on HTML5 Canvas for web authentication.',
        href: 'https://patternlock.vercel.app/',
        image: '/assets/portfolio/pattern-lock.webp',
        tags: ['Canvas API', 'Security', 'Auth UI'],
        badge: 'Security'
    },
    {
        id: 8,
        title: 'EXAMSFORCAREERS',
        category: 'Career Guidance',
        desc: 'Comprehensive education & competitive exams guidance portal with syllabus trackers, notifications, and cut-off metrics.',
        href: 'https://examsforcareers.vercel.app/',
        image: '/assets/portfolio/examsforcareers.webp',
        tags: ['Next.js', 'SEO', 'EdTech'],
        badge: 'Portal'
    },
    {
        id: 9,
        title: 'File Explorer',
        category: 'Web Operating System',
        desc: 'Desktop-inspired web file system explorer with directory tree navigation, file previews, and search indexing.',
        href: 'https://chitranjan-gupta.github.io/file-explorer/',
        image: '/assets/portfolio/file-explorer.webp',
        tags: ['JavaScript', 'GitHub Pages', 'DOM Tree'],
        badge: 'OS / File'
    },
    {
        id: 10,
        title: 'Websocket Chat',
        category: 'Real-time Systems',
        desc: 'Low-latency real-time chat application with bi-directional room events, instant messaging, and user presence.',
        href: 'https://websocket-chat.up.railway.app/',
        image: '/assets/portfolio/websocket-chat.webp',
        tags: ['WebSockets', 'Node.js', 'Railway', 'Express'],
        badge: 'Real-time'
    },
    {
        id: 11,
        title: 'Know Tech',
        category: 'Technology Blog & Docs',
        desc: 'Knowledge base and technical resource hub sharing engineering walkthroughs, frameworks, and coding tips.',
        href: 'https://knowtech.netlify.app/',
        image: '/assets/portfolio/knowtech.webp',
        tags: ['Static Site', 'Netlify', 'Technical Writing'],
        badge: 'Knowledge'
    }
];

export default function Portfolio() {
    const { design } = useTheme();

    if (design === 'tron') return <PortfolioTron />;
    if (design === 'ares') return <PortfolioAres />;
    if (design === 'cod') return <PortfolioCod />;
    if (design === 'modern') return <PortfolioModern />;
    if (design === 'indic') return <PortfolioIndic />;
    if (design === 'apple') return <PortfolioApple />;
    if (design === 'hacker') return <PortfolioHacker />;
    return <PortfolioAurora />;
}

/* ═══════════════════════════════════════
   AURORA — Glassmorphic Portfolio Grid
═══════════════════════════════════════ */
function PortfolioAurora() {
    return (
        <section id="portfolio" className="py-28 md:py-[7rem] relative">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="text-center mb-16 reveal">
                    <p className="text-[0.8rem] font-semibold tracking-[0.15em] uppercase text-accent-2 mb-3">Live Deployments & Products</p>
                    <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1]">
                        Creative{' '}
                        <span className="bg-gradient-text bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Portfolio</span>
                    </h2>
                    <p className="max-w-[600px] mx-auto text-text-secondary mt-4 text-[0.95rem]">
                        A collection of live web applications, developer utilities, mobile platforms, and interactive experiments built by Chitranjan.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {PORTFOLIO_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block bg-white/[0.04] border border-[rgba(255,255,255,0.08)] rounded-[20px] overflow-hidden transition-all duration-300 hover:border-[rgba(99,102,241,0.4)] hover:-translate-y-2 hover:shadow-[0_12px_36px_rgba(0,0,0,0.4),0_0_24px_rgba(99,102,241,0.2)]"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[0.7rem] font-semibold bg-black/70 backdrop-blur border border-white/20 text-accent-2">
                                    {item.badge}
                                </div>
                            </div>
                            <div className="p-5 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-[1.15rem] font-bold text-text-primary group-hover:text-accent-2 transition-colors mb-2 flex items-center justify-between">
                                        <span>{item.title}</span>
                                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                                        </svg>
                                    </h3>
                                    <p className="text-[0.82rem] text-text-secondary leading-relaxed mb-4 line-clamp-2">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                                    {item.tags.map((tag) => (
                                        <span key={tag} className="text-[0.68rem] px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-text-muted">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   INDIC — Heritage Portfolio Showroom
═══════════════════════════════════════ */
function PortfolioIndic() {
    return (
        <section id="portfolio" className="py-28 md:py-36 bg-indic-bg relative overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-16 text-center animate-modern-reveal">
                    <div className="text-indic-saffron font-bold tracking-[0.2em] uppercase text-xs mb-3">कृतयः संकलन PORTFOLIO ARCHIVES</div>
                    <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-bold mb-4 italic">
                        Digital <span className="indic-gradient-text">Creations & Artifacts</span>.
                    </h2>
                    <p className="max-w-[620px] mx-auto text-indic-fg/70 italic font-medium">
                        Explore the complete registry of websites, applications, and extensions constructed by Chitranjan Kumar Gupta.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PORTFOLIO_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="jaali-card group p-5 flex flex-col justify-between hover:border-indic-saffron transition-all"
                        >
                            <div>
                                <div className="relative aspect-[16/10] overflow-hidden border border-indic-border/40 rounded-sm mb-4 bg-white/5">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <span className="absolute top-2 left-2 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider bg-indic-bg/90 border border-indic-border/40 text-indic-terracotta">
                                        {item.badge}
                                    </span>
                                </div>
                                <h3 className="text-[1.25rem] font-bold text-indic-fg group-hover:text-indic-saffron italic transition-colors mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-indic-fg/70 text-[0.85rem] italic leading-relaxed mb-4 line-clamp-2">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="pt-3 border-t border-indic-border/20 flex items-center justify-between">
                                <span className="text-[0.7rem] font-bold uppercase tracking-wider text-indic-saffron">
                                    {item.category}
                                </span>
                                <span className="text-xs text-indic-terracotta group-hover:translate-x-1 transition-transform">
                                    दर्शनं कुरु →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   APPLE / CUPERTINO — Clean Elegant Cards
═══════════════════════════════════════ */
function PortfolioApple() {
    return (
        <section id="portfolio" className="py-28 md:py-36 relative overflow-hidden apple-section">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-16 text-center max-w-[700px] mx-auto">
                    <span className="apple-section-eyebrow">Portfolio</span>
                    <h2 className="apple-section-title">
                        Engineered with intent. <br />
                        <span className="text-apple-subtle">Crafted for everyday utility.</span>
                    </h2>
                    <p className="text-apple-body text-[1.05rem] mt-3 font-normal">
                        A retrospective of independently shipped products, web applications, and software tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {PORTFOLIO_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="apple-card group p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
                        >
                            <div>
                                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-black/5 dark:bg-white/5 border border-apple-border">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[0.68rem] font-semibold bg-white/80 dark:bg-black/80 backdrop-blur border border-apple-border text-apple-heading">
                                        {item.badge}
                                    </span>
                                </div>
                                <div className="text-[0.72rem] font-semibold text-apple-muted uppercase tracking-wider mb-1">
                                    {item.category}
                                </div>
                                <h3 className="text-[1.2rem] font-semibold text-apple-heading group-hover:text-apple-accent transition-colors mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-apple-body text-[0.88rem] leading-relaxed line-clamp-2 mb-4">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="pt-3 border-t border-apple-border flex items-center justify-between text-[0.82rem] font-medium text-apple-accent">
                                <span>Launch Project</span>
                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   CYBERSECURITY / HACKER — Verified Deployments
═══════════════════════════════════════ */
function PortfolioHacker() {
    return (
        <section id="portfolio" className="py-24 relative bg-[var(--hacker-bg)] text-white font-mono overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14 border-b border-[var(--hacker-border)] pb-4 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <div className="text-[0.72rem] text-[var(--hacker-secondary)] uppercase tracking-[0.2em] font-bold">
                            {'// RUNTIME_REGISTRY & SHIPPED_PAYLOADS'}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mt-1">
                            Live Portfolio Manifest <span className="text-[var(--hacker-accent)]">[12 NODES]</span>
                        </h2>
                    </div>
                    <div className="text-xs text-[var(--hacker-accent)] font-mono">
                        INTEGRITY: SHA256_VERIFIED
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PORTFOLIO_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hacker-card p-5 group flex flex-col justify-between hover:border-[var(--hacker-accent)] transition-all"
                        >
                            <div>
                                <div className="relative aspect-[16/10] overflow-hidden rounded border border-[var(--hacker-border)]/60 mb-4 bg-black/60">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <span className="absolute top-2 left-2 px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider bg-black/85 border border-[var(--hacker-accent)] text-[var(--hacker-accent)]">
                                        [{item.badge}]
                                    </span>
                                </div>
                                <div className="text-[0.68rem] text-[var(--hacker-secondary)] mb-1">
                                    NODE_{item.id < 10 ? `0${item.id}` : item.id} {'//'} {item.category}
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-[var(--hacker-accent)] transition-colors mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-4">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="pt-3 border-t border-[var(--hacker-border)]/40 flex items-center justify-between text-xs text-[var(--hacker-accent)]">
                                <span>EXEC_TARGET()</span>
                                <span>→</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   MODERN / GEIST BENTO
═══════════════════════════════════════ */
function PortfolioModern() {
    return (
        <section id="portfolio" className="py-28 md:py-36 bg-geist-background relative overflow-hidden border-t border-geist-gray-200">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14">
                    <div className="geist-badge mb-3">Portfolio Registry</div>
                    <h2 className="text-[2.6rem] md:text-[3.2rem] font-black tracking-tight leading-tight">
                        Live Products & <span className="text-gradient">Creations</span>.
                    </h2>
                    <p className="text-geist-gray-500 text-[1.05rem] mt-2 max-w-[600px]">
                        Websites, browser add-ons, and real-time utilities developed by Chitranjan.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PORTFOLIO_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bento-card group p-5 flex flex-col justify-between hover:border-[var(--accent-2)] transition-all"
                        >
                            <div>
                                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-geist-gray-100 border border-geist-gray-200">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[0.65rem] font-bold uppercase tracking-wider bg-white/90 dark:bg-black/90 backdrop-blur border border-geist-gray-200 text-geist-foreground">
                                        {item.badge}
                                    </span>
                                </div>
                                <h3 className="text-[1.15rem] font-bold text-geist-foreground group-hover:text-[var(--accent-2)] transition-colors mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-geist-gray-500 text-[0.84rem] leading-relaxed line-clamp-2 mb-4">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="pt-3 border-t border-geist-gray-200 flex items-center justify-between text-[0.82rem] font-bold text-[var(--accent-2)]">
                                <span>Inspect Demo</span>
                                <span>→</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   TRON, ARES, COD FALLBACKS
═══════════════════════════════════════ */
function PortfolioTron() {
    return (
        <section id="portfolio" className="py-24 bg-bg-secondary">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-12">
                    <div className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-accent-1 mb-2">&gt; REGISTRY // PORTFOLIO_INDEX</div>
                    <h2 className="font-mono text-3xl md:text-4xl font-bold uppercase tracking-[0.1em]" style={{ textShadow: '0 0 15px var(--accent-1)' }}>
                        &gt; DEPLOYED_ARTIFACTS
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PORTFOLIO_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-4 border border-[color-mix(in_srgb,var(--accent-1)_25%,transparent)] hover:border-accent-1 transition-all"
                            style={{ background: 'rgba(0,8,16,0.9)' }}
                        >
                            <div className="relative aspect-[16/10] overflow-hidden mb-4 border border-[color-mix(in_srgb,var(--accent-1)_20%,transparent)]">
                                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                            </div>
                            <div className="font-mono text-[0.6rem] text-accent-1 uppercase mb-1">[{item.badge}]</div>
                            <h3 className="font-mono text-base font-bold text-accent-2 mb-2">{item.title}</h3>
                            <p className="font-mono text-xs text-text-muted line-clamp-2 mb-3">{item.desc}</p>
                            <div className="font-mono text-xs text-accent-1">&gt; LAUNCH_APP</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PortfolioAres() {
    return (
        <section id="portfolio" className="py-24 bg-bg-secondary">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-12">
                    <div className="w-12 h-[5px] bg-accent-1 mb-4" />
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-[0.02em]">
                        PORTFOLIO <span className="text-accent-1">REGISTRY</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PORTFOLIO_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-5 border-2 border-[rgba(255,255,255,0.08)] hover:border-accent-1 transition-all"
                            style={{ background: 'rgba(5,5,5,0.95)', boxShadow: '4px 4px 0 var(--accent-1)' }}
                        >
                            <div className="relative aspect-[16/10] overflow-hidden mb-4 border-2 border-white/10">
                                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                            </div>
                            <div className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-accent-1 mb-1">{item.badge}</div>
                            <h3 className="text-lg font-black uppercase text-white mb-2">{item.title}</h3>
                            <p className="text-xs text-text-muted line-clamp-2 mb-4">{item.desc}</p>
                            <div className="text-xs font-black uppercase text-accent-1">VIEW WORK →</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

function PortfolioCod() {
    return (
        <section id="portfolio" className="py-24 bg-bg-secondary">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-12">
                    <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-accent-1 mb-2">⊕ MISSION_ARCHIVE // PORTFOLIO</div>
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.06em]">
                        OPERATIONAL <span className="text-accent-1">PORTFOLIO</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PORTFOLIO_ITEMS.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-4 border border-[color-mix(in_srgb,var(--accent-1)_30%,rgba(80,70,40,0.4))] hover:border-accent-1 transition-colors"
                            style={{ background: 'rgba(14,16,10,0.95)' }}
                        >
                            <div className="relative aspect-[16/10] overflow-hidden mb-4 border border-[rgba(80,70,40,0.4)]">
                                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                            </div>
                            <div className="font-mono text-[0.6rem] text-accent-1 uppercase mb-1">[{item.badge}]</div>
                            <h3 className="font-mono text-base font-bold text-white mb-2">{item.title}</h3>
                            <p className="font-mono text-xs text-text-muted line-clamp-2 mb-3">{item.desc}</p>
                            <div className="font-mono text-xs text-accent-1">INITIATE →</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
