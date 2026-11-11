'use client';

import { useTheme } from '@/context/ThemeContext';
import blogsData from '@/data/blogs.json';
import Link from 'next/link';
import { useState } from 'react';

export default function Blogs() {
    const { design } = useTheme();

    if (design === 'tron') return <BlogsTron />;
    if (design === 'ares') return <BlogsAres />;
    if (design === 'cod') return <BlogsCod />;
    if (design === 'modern') return <BlogsModern />;
    if (design === 'indic') return <BlogsIndic />;
    if (design === 'apple') return <BlogsApple />;
    if (design === 'hacker') return <BlogsHacker />;
    return <BlogsAurora />;
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

/* ═══════════════════════════════════════
   AURORA — Glassmorphic Blog Cards
═══════════════════════════════════════ */
function BlogsAurora() {
    return (
        <section id="blogs" className="py-24 md:py-32 relative">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="text-center mb-16">
                    <p className="text-[0.8rem] font-semibold tracking-[0.15em] uppercase text-accent-2 mb-3">Articles & Insights</p>
                    <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1]">
                        Engineering{' '}
                        <span className="bg-gradient-text bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Blogs</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-[600px] mx-auto mt-4 text-[0.95rem]">
                        Practical technical write-ups covering React Native, Next.js, WebExtensions, and architectural debugging.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogsData.map((blog) => (
                        <div key={blog.slug} className="bg-white/[0.04] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-6 flex flex-col justify-between transition-all duration-300 hover:border-[rgba(99,102,241,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(99,102,241,0.2)]">
                            <div>
                                <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-3">
                                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--accent-1)]/15 border border-[var(--accent-1)]/30 text-[var(--accent-1)] font-semibold">
                                        {blog.categories?.[0] || 'Tech'}
                                    </span>
                                    <span>{formatDate(blog.created)}</span>
                                </div>
                                <h3 className="text-[1.15rem] font-bold text-[var(--text-primary)] mb-2 line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-[var(--text-secondary)] line-clamp-3 mb-4 leading-relaxed font-normal">
                                    {blog.desc}
                                </p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {blog.tags?.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-[0.68rem] px-2 py-0.5 rounded bg-white/[0.05] text-[var(--text-muted)] border border-white/5">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className="text-xs font-semibold text-[var(--accent-1)] hover:underline inline-flex items-center gap-1.5"
                                >
                                    Read Article
                                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   APPLE — Liquid Glass Cupertino Blogs
═══════════════════════════════════════ */
function BlogsApple() {
    return (
        <section id="blogs" className="py-20 md:py-28 relative overflow-hidden apple-section">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-16 text-center max-w-[800px] mx-auto">
                    <span className="apple-section-eyebrow">Publications & Logs</span>
                    <h2 className="apple-section-title">
                        Thoughts on development. <br />
                        <span className="text-apple-subtle">Solutions engineered for real-world problems.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogsData.map((blog) => (
                        <div key={blog.slug} className="apple-card p-7 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-center text-xs text-apple-muted mb-4">
                                    <span className="apple-card-tag">{blog.categories?.[0] || 'Article'}</span>
                                    <span>{formatDate(blog.created)}</span>
                                </div>
                                <h3 className="text-[1.25rem] font-bold text-apple-heading tracking-tight mb-2 line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-apple-body leading-relaxed mb-6 font-normal line-clamp-3">
                                    {blog.desc}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-apple-border flex items-center justify-between">
                                <span className="text-xs text-apple-muted">{blog.tags?.[0] ? `#${blog.tags[0]}` : ''}</span>
                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className="text-xs font-semibold text-apple-accent hover:underline inline-flex items-center gap-1"
                                >
                                    Read story →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   TRON — Cyberpunk Transmissions
═══════════════════════════════════════ */
function BlogsTron() {
    return (
        <section id="blogs" className="py-24 md:py-32 relative font-mono">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14">
                    <div className="text-accent-1 text-[0.7rem] tracking-[0.2em] mb-2 uppercase">{'// BROADCAST_LOGS // CODEX'}</div>
                    <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold tracking-wider uppercase text-text-primary">
                        TRANSMISSION_FEED: <span className="text-accent-1">ARTICLES</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogsData.map((blog, idx) => (
                        <div key={blog.slug} className="border border-accent-1/40 bg-black/80 p-6 relative group hover:border-accent-1 transition-all flex flex-col justify-between"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}>
                            <div>
                                <div className="flex justify-between items-center text-[0.7rem] text-accent-1 border-b border-accent-1/20 pb-2 mb-3">
                                    <span>ENTRY_0{idx + 1}</span>
                                    <span>[{formatDate(blog.created).toUpperCase()}]</span>
                                </div>
                                <h3 className="text-base font-bold text-text-primary uppercase mb-2 line-clamp-2">{blog.title}</h3>
                                <p className="text-xs text-text-secondary leading-relaxed mb-4 line-clamp-3 font-sans">{blog.desc}</p>
                            </div>

                            <div className="pt-3 border-t border-accent-1/20 flex items-center justify-between text-xs">
                                <span className="text-accent-2 text-[0.7rem]">[{blog.categories?.[0] || 'DOC'}]</span>
                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className="text-accent-1 hover:underline inline-flex items-center gap-1"
                                >
                                    OPEN_STREAM &gt;&gt;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   MODERN — Minimalist Bento Grid
═══════════════════════════════════════ */
function BlogsModern() {
    return (
        <section id="blogs" className="py-24 md:py-32 relative bg-geist-background">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-16">
                    <div className="geist-badge mb-3">Technical Writing</div>
                    <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-black tracking-[-0.06em] leading-tight mb-4">
                        Blogs & <span className="text-gradient">Dispatches.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogsData.map((blog) => (
                        <div key={blog.slug} className="bento-card p-6 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-baseline mb-3">
                                    <span className="text-[0.75rem] font-mono font-bold text-[var(--accent-2)] uppercase">{blog.categories?.[0] || 'Note'}</span>
                                    <span className="text-[0.75rem] font-bold text-geist-gray-400">{formatDate(blog.created)}</span>
                                </div>
                                <h3 className="text-[1.2rem] font-black text-geist-foreground tracking-tight mb-2 line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="text-xs text-geist-gray-500 leading-relaxed font-medium mb-4 line-clamp-3">
                                    {blog.desc}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-geist-gray-200 flex items-center justify-between">
                                <span className="text-[0.7rem] font-medium text-geist-gray-400">#{blog.tags?.[0] || 'tech'}</span>
                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className="text-xs font-bold text-geist-foreground hover:underline inline-flex items-center gap-1"
                                >
                                    Read Article ↗
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   ARES — Brutalist Terminal Dossier
═══════════════════════════════════════ */
function BlogsAres() {
    return (
        <section id="blogs" className="py-24 md:py-32 relative bg-black font-mono">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14 border-b-4 border-accent-1 pb-4">
                    <span className="text-[0.8rem] uppercase tracking-widest text-accent-1 block mb-2">[ 08 // TECHNICAL PAPERS ]</span>
                    <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase tracking-tight text-white">
                        FIELD NOTES // DISPATCHES
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogsData.map((blog, idx) => (
                        <div key={blog.slug} className="border-2 border-white/20 p-6 bg-[#0a0a0a] hover:border-accent-1 transition-all flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between text-[0.7rem] text-accent-1 mb-3 border-b border-white/10 pb-2">
                                    <span>DOC #{idx + 1}</span>
                                    <span>{formatDate(blog.created)}</span>
                                </div>
                                <h3 className="text-sm font-black uppercase text-white mb-2 line-clamp-2">{blog.title}</h3>
                                <p className="text-xs text-white/70 mb-4 line-clamp-3 font-sans">{blog.desc}</p>
                            </div>

                            <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs">
                                <span className="text-[0.7rem] text-accent-1 uppercase">{blog.categories?.[0] || 'DEV'}</span>
                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className="text-white hover:text-accent-1 font-bold underline"
                                >
                                    VIEW_FILE ■
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   WARFARE (COD) — Operational Intel
═══════════════════════════════════════ */
function BlogsCod() {
    return (
        <section id="blogs" className="py-24 md:py-32 relative font-mono bg-[#070805]">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14">
                    <div className="text-accent-1 text-[0.65rem] tracking-[0.2em] mb-2 uppercase">⊕ AFTER-ACTION REPORTS // INTEL</div>
                    <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black uppercase tracking-[0.06em] text-text-primary">
                        INTEL <span className="text-accent-1">LOGS</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogsData.map((blog, idx) => (
                        <div key={blog.slug} className="border border-accent-1/30 bg-[#0e100a] p-6 flex flex-col justify-between"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}>
                            <div>
                                <div className="flex justify-between items-center text-[0.68rem] text-accent-1 mb-2 border-b border-accent-1/20 pb-2">
                                    <span>REPORT_0{idx + 1}</span>
                                    <span>{formatDate(blog.created)}</span>
                                </div>
                                <h3 className="text-sm font-bold uppercase text-text-primary mb-2 line-clamp-2">{blog.title}</h3>
                                <p className="text-xs text-text-secondary leading-relaxed mb-4 line-clamp-3 font-sans">{blog.desc}</p>
                            </div>

                            <div className="pt-3 border-t border-accent-1/20 flex justify-between items-center text-xs">
                                <span className="text-accent-1 text-[0.7rem] uppercase">⊕ {blog.tags?.[0] || 'INTEL'}</span>
                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className="text-text-primary hover:text-accent-1 uppercase text-[0.75rem] font-bold"
                                >
                                    DECRYPT &gt;&gt;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   INDIC — Vichar & Lekh
═══════════════════════════════════════ */
function BlogsIndic() {
    return (
        <section id="blogs" className="py-28 md:py-36 relative bg-indic-bg overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-20 text-center">
                    <div className="text-indic-saffron font-bold tracking-[0.2em] uppercase text-xs mb-3">विचार एवं आलेख THOUGHTS & ARTICLES</div>
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-4 italic">
                        Writing & <span className="indic-gradient-text">Perspectives</span>.
                    </h2>
                    <p className="max-w-[550px] mx-auto text-indic-fg/70 italic font-medium">
                        Analytical writings on modern software frameworks, browser tooling, and resilient architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogsData.map((blog) => (
                        <div key={blog.slug} className="jaali-card p-6 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-center mb-3 border-b border-indic-border/30 pb-2 text-xs">
                                    <span className="font-bold text-indic-saffron uppercase tracking-widest">{blog.categories?.[0] || 'लेख'}</span>
                                    <span className="font-bold text-indic-terracotta italic">{formatDate(blog.created)}</span>
                                </div>
                                <h3 className="text-lg font-bold text-indic-terracotta mb-2 italic line-clamp-2">{blog.title}</h3>
                                <p className="text-xs text-indic-fg/80 italic font-medium leading-relaxed mb-4 line-clamp-3">{blog.desc}</p>
                            </div>

                            <div className="pt-3 border-t border-indic-border/20 flex justify-between items-center text-xs">
                                <span className="text-indic-fg/60 italic">𑁍 {blog.tags?.[0] || 'विचार'}</span>
                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className="font-bold text-indic-saffron hover:underline italic"
                                >
                                    पढ़ें Read Article →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   CYBERSECURITY / HACKER / RED TEAM — Intelligence Feeds
═══════════════════════════════════════ */
function BlogsHacker() {
    return (
        <section id="blogs" className="py-24 relative bg-[var(--hacker-bg)] text-white font-mono overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14 border-b border-[var(--hacker-border)] pb-4 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <div className="text-[0.72rem] text-[var(--hacker-secondary)] uppercase tracking-[0.2em] font-bold">
                            {'// TECHNICAL_DISPATCHES // CVE_AND_CODE'}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mt-1">
                            Engineering Intel <span className="text-[var(--hacker-accent)]">[PUBLIC_RELEASE]</span>
                        </h2>
                    </div>
                    <div className="text-xs text-[var(--hacker-accent)] font-mono">
                        ARTICLES: 08_VERIFIED
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogsData.map((blog, idx) => (
                        <div key={blog.slug} className="hacker-card p-6 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-center text-[0.68rem] mb-3 pb-2 border-b border-[var(--hacker-border)]/40">
                                    <span className="text-[var(--hacker-accent)] font-bold">LOG_0{idx + 1}</span>
                                    <span className="text-text-muted">{formatDate(blog.created)}</span>
                                </div>
                                <h3 className="text-sm font-black text-white uppercase mb-2 line-clamp-2">{blog.title}</h3>
                                <p className="text-xs text-text-secondary leading-relaxed mb-4 line-clamp-3 font-sans">{blog.desc}</p>
                            </div>

                            <div className="pt-3 border-t border-[var(--hacker-border)]/30 flex justify-between items-center text-xs">
                                <span className="text-[0.65rem] text-[var(--hacker-secondary)] uppercase">[{blog.tags?.[0] || 'DEBUG'}]</span>
                                <Link
                                    href={`/blogs/${blog.slug}`}
                                    className="text-[var(--hacker-accent)] font-bold hover:underline"
                                >
                                    ACCESS_FILE ⚡
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
