'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

const PROJECTS = [
    {
        num: '01',
        title: 'FreshMarks',
        desc: 'Browser Extension used to automatically update and repair bookmarks by replacing outdated URLs with redirected counterparts. Active on Chrome Web Store, Edge & Firefox Add-on store.',
        tags: ['Browser Extension', 'JavaScript', 'Chrome Extension', 'Firefox Addon', 'Edge Addon', 'Web APIs'],
        live: 'https://chromewebstore.google.com/detail/freshmarks-it/kkpkpegedjgbkljpfcnjbpfkdipalfma',
        firefoxLive: 'https://addons.mozilla.org/en-US/firefox/addon/freshmarks-it/',
        edgeLive: 'https://microsoftedge.microsoft.com/addons/detail/freshmarks-it/ffmcidhkdkneebilleobjedhjdodlpea',
        liveLabel: 'Chrome',
        firefoxLabel: 'Firefox',
        edgeLabel: 'Edge',
        github: 'https://github.com/chitranjan-gupta/freshmarks',
    },
    {
        num: '02',
        title: 'Expo React Native Devtools',
        desc: 'Chrome & Edge Extension to seamlessly open React Native Devtools in Expo projects through ngrok tunnels, enhancing mobile debugging with tunnel auto-detection.',
        tags: ['React Native', 'Expo', 'Chrome Extension', 'Edge Addon', 'Developer Tooling'],
        live: 'https://chromewebstore.google.com/detail/expo-react-native-devtool/hipipalomafpfjofeboocnchdnffjoeh',
        edgeLive: 'https://microsoftedge.microsoft.com/addons/detail/expo-react-native-devtool/aakbhgdpbgkgdijllkpoaolnejhobjkl',
        liveLabel: 'Chrome',
        edgeLabel: 'Edge',
        github: 'https://github.com/chitranjan-gupta/expo-react-native-devtools',
    },
    {
        num: '03',
        title: 'Cloudflare Worker Telegram Bot',
        desc: 'Production-ready serverless package hosted on npmjs that acts as a performant Telegram Bot webhook handler entirely on Cloudflare Workers edge compute without cold starts.',
        tags: ['Cloudflare Workers', 'Serverless', 'Node.js', 'npm package', 'Telegram API'],
        live: 'https://www.npmjs.com/package/cloudflare-telegram-bot',
        github: 'https://github.com/chitranjan-gupta/cloudflare-telegram-bot',
    },
    {
        num: '04',
        title: 'PastePass',
        desc: 'Browser Extension used to easily paste anywhere, even on restricted or locked website inputs. Active daily users on Chrome Web Store, Edge, and Firefox Add-ons.',
        tags: ['Browser Extension', 'Security', 'JavaScript', 'Chrome Extension', 'Firefox Addon', 'Edge Addon'],
        live: 'https://chromewebstore.google.com/detail/pastepass/femjpnojccocbkgkajbaepmondbgjcbc',
        firefoxLive: 'https://addons.mozilla.org/en-US/firefox/addon/pastepass/',
        edgeLive: 'https://microsoftedge.microsoft.com/addons/detail/pastepass/ljljoebbabeaaofpdomohljodfhjloic',
        liveLabel: 'Chrome',
        firefoxLabel: 'Firefox',
        edgeLabel: 'Edge',
        github: 'https://github.com/chitranjan-gupta/pastepass',
    },
    {
        num: '05',
        title: 'QRGenie',
        desc: 'Browser Extension used to easily scan QR codes and generate customized QR codes instantly from any active tab or image. Active on Chrome Web Store, Edge & Firefox Add-on store.',
        tags: ['Browser Extension', 'QR Code', 'JavaScript', 'Chrome Extension', 'Firefox Addon', 'Edge Addon', 'Web APIs'],
        live: 'https://chromewebstore.google.com/detail/qr-code-scanner-generator/mikbkbgkohegbbjpimobncjejoikmddk',
        firefoxLive: 'https://addons.mozilla.org/en-US/firefox/addon/qr-code-scanner-generator/',
        edgeLive: 'https://microsoftedge.microsoft.com/addons/detail/qr-code-scanner-generat/mfnikgfcadjfkjonhcebmifiohbobjmm',
        liveLabel: 'Chrome',
        firefoxLabel: 'Firefox',
        edgeLabel: 'Edge',
        github: 'https://github.com/chitranjan-gupta/QRGenie',
    },
    {
        num: '06',
        title: 'Telegram OAuth',
        desc: 'Lightweight, modern authentication provider module integrating Telegram Login Widget with Next.js, React, and backend session handlers.',
        tags: ['Next.js', 'React', 'Telegram API', 'OAuth', 'Authentication'],
        live: 'https://telegram-o-auth.vercel.app/',
        github: 'https://github.com/chitranjan-gupta/Telegram-OAuth',
    },
    {
        num: '07',
        title: 'Sanity Plugin Social Embed',
        desc: 'Official studio plugin for Sanity CMS to embed interactive social media posts (X, Instagram, YouTube) directly into rich text portable content.',
        tags: ['Sanity CMS', 'React', 'TypeScript', 'Content Studio', 'Plugin'],
        live: 'https://github.com/chitranjan-gupta/sanity-plugin-social-embed',
        github: 'https://github.com/chitranjan-gupta/sanity-plugin-social-embed',
    },
    {
        num: '08',
        title: 'QRPhishing Defense',
        desc: 'Security research suite and test harness demonstrating session hijacking attack vectors via malicious QR codes with defensive counter-measures.',
        tags: ['Cybersecurity', 'Red Team', 'Web Security', 'OAuth Defense', 'JavaScript'],
        live: 'https://github.com/chitranjan-gupta/QRPhishing',
        github: 'https://github.com/chitranjan-gupta/QRPhishing',
    },
    {
        num: '09',
        title: 'Flipkart Price Tracker Bot',
        desc: 'Automated Telegram Bot written in Python that monitors Flipkart product prices and notifies users instantly when price drops or discounts occur.',
        tags: ['Python', 'Telegram Bot', 'Web Scraping', 'Automation'],
        live: 'https://github.com/chitranjan-gupta/Flipkart-Bot',
        github: 'https://github.com/chitranjan-gupta/Flipkart-Bot',
    },
    {
        num: '10',
        title: 'Ganache Server Container',
        desc: 'Production-ready Docker container with Ganache local Ethereum testnet with pre-funded custom accounts. Over 360+ downloads on GitHub Package Registry.',
        tags: ['Docker', 'Ethereum', 'Web3', 'Ganache', 'DevOps'],
        live: 'https://github.com/chitranjan-gupta/Ganache-Server',
        github: 'https://github.com/chitranjan-gupta/Ganache-Server',
    },
    {
        num: '11',
        title: 'ShikshaSetu Extension',
        desc: 'AI autofiller, smart clipper, and learning assistant extension for students & educators to streamline e-learning workflows and course management. Active on Firefox and Edge store.',
        tags: ['Browser Extension', 'JavaScript', 'Firefox Addon', 'Edge Addon', 'EdTech'],
        live: 'https://addons.mozilla.org/en-US/firefox/addon/shikshasetu-autofiller-and-ai/',
        firefoxLive: 'https://addons.mozilla.org/en-US/firefox/addon/shikshasetu-autofiller-and-ai/',
        edgeLive: 'https://microsoftedge.microsoft.com/addons/detail/shikshasetu-clipper-aut/imimkhefmjccadhfifdnjakednbdendm',
        liveLabel: 'Firefox',
        firefoxLabel: 'Firefox',
        edgeLabel: 'Edge',
        github: 'https://github.com/chitranjan-gupta/shikshasetu',
    },
];

export default function Projects() {
    const { design } = useTheme();
    if (design === 'tron') return <ProjectsTron />;
    if (design === 'ares') return <ProjectsAres />;
    if (design === 'cod') return <ProjectsCod />;
    if (design === 'modern') return <ProjectsModern />;
    if (design === 'indic') return <ProjectsIndic />;
    if (design === 'apple') return <ProjectsApple />;
    if (design === 'hacker') return <ProjectsHacker />;
    return <ProjectsAurora />;
}

/* ═══════════════════════════════════════
   INDIC — Heritage projects layout
 ═══════════════════════════════════════ */
function ProjectsIndic() {
    return (
        <section id="projects" className="py-32 md:py-48 relative bg-indic-bg overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10 animate-modern-reveal">
                    <div>
                        <div className="text-indic-saffron font-bold tracking-[0.2em] uppercase text-xs mb-4">हमारी रचनाएँ OUR CREATIONS</div>
                        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold mb-6 italic">
                            Digital <span className="indic-gradient-text">Manifestations</span>.
                        </h2>
                        <p className="max-w-[500px] text-indic-fg/70 italic font-medium leading-relaxed">
                            A showcase of modern engineering projects crafted with the precision of ancient artisans.
                        </p>
                    </div>
                    <a href="https://github.com/chitranjan-gupta" className="btn-indic inline-flex items-center gap-3">
                        View More <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((proj, idx) => (
                        <div key={proj.title}
                            className="jaali-card group p-8 flex flex-col justify-between h-full animate-modern-reveal"
                            style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div>
                                <div className="flex items-center justify-between mb-4 pb-2 border-b border-indic-border/20">
                                    <span className="text-[0.72rem] font-bold text-indic-saffron uppercase tracking-widest">
                                        प्रकल्प {proj.num}
                                    </span>
                                    <span className="text-xs text-indic-terracotta">
                                        Active Deployment
                                    </span>
                                </div>
                                <h3 className="text-[1.5rem] font-bold text-indic-terracotta mb-3 italic group-hover:text-indic-saffron transition-colors">
                                    {proj.title}
                                </h3>
                                <p className="text-indic-fg/80 text-[0.95rem] leading-relaxed italic mb-6 font-medium">
                                    {proj.desc}
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center justify-between border-t border-indic-border/20 pt-5">
                                    <div className="flex flex-wrap gap-2">
                                        {proj.tags?.map(tag => (
                                            <span key={tag} className="text-[0.68rem] font-bold text-indic-saffron uppercase tracking-wider">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <a href={proj.live || proj.github} target="_blank" rel="noopener noreferrer" title={proj.liveLabel || "Live Demo"} className="w-9 h-9 rounded-sm border border-indic-border flex items-center justify-center text-indic-fg hover:bg-indic-saffron hover:text-white transition-all shadow-sm">
                                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                                        </a>
                                        {proj.firefoxLive && (
                                            <a href={proj.firefoxLive} target="_blank" rel="noopener noreferrer" title={proj.firefoxLabel ? `Mozilla ${proj.firefoxLabel} Add-ons` : "Mozilla Firefox Add-ons"} className="px-2 h-9 rounded-sm border border-indic-border flex items-center justify-center text-[0.7rem] font-bold text-indic-fg hover:bg-indic-saffron hover:text-white transition-all shadow-sm">
                                                {proj.firefoxLabel || 'Firefox'}
                                            </a>
                                        )}
                                        {proj.edgeLive && (
                                            <a href={proj.edgeLive} target="_blank" rel="noopener noreferrer" title={proj.edgeLabel ? `Microsoft ${proj.edgeLabel} Add-ons` : "Microsoft Edge Add-ons"} className="px-2 h-9 rounded-sm border border-indic-border flex items-center justify-center text-[0.7rem] font-bold text-indic-fg hover:bg-indic-saffron hover:text-white transition-all shadow-sm">
                                                {proj.edgeLabel || 'Edge'}
                                            </a>
                                        )}
                                        <a href={proj.github} target="_blank" rel="noopener noreferrer" title="Source Code" className="w-9 h-9 rounded-sm border border-indic-border flex items-center justify-center text-indic-fg hover:bg-indic-saffron hover:text-white transition-all shadow-sm">
                                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
/* ═══════════════════════════════════════
   AURORA — Glassmorphic card grid
═══════════════════════════════════════ */
function ProjectsAurora() {
    return (
        <section id="projects" className="py-28 md:py-[7rem]">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="text-center mb-16 reveal">
                    <p className="text-[0.8rem] font-semibold tracking-[0.15em] uppercase text-accent-2 mb-3">What I&apos;ve built</p>
                    <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1]">
                        Featured{' '}
                        <span className="bg-gradient-text bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Projects</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {PROJECTS.map((p) => (
                        <article key={p.num} className="group flex flex-col justify-between bg-white/[0.04] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] reveal hover:border-[rgba(99,102,241,0.4)] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(99,102,241,0.25),0_8px_32px_rgba(0,0,0,0.4)]">
                            <div>
                                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.06]">
                                    <span className="text-[0.72rem] font-bold tracking-[0.1em] text-accent-1">PROJECT {p.num}</span>
                                    <div className="flex gap-2">
                                        <a href={p.live || p.github} target="_blank" rel="noopener noreferrer" className="text-xs text-accent-2 hover:text-white transition-colors">
                                            {p.firefoxLive || p.edgeLive ? `${p.liveLabel || 'Chrome'} ↗` : 'Live Demo ↗'}
                                        </a>
                                        {p.firefoxLive && (
                                            <>
                                                <span className="text-white/20">•</span>
                                                <a href={p.firefoxLive} target="_blank" rel="noopener noreferrer" className="text-xs text-accent-2 hover:text-white transition-colors">
                                                    {p.firefoxLabel || 'Firefox'} ↗
                                                </a>
                                            </>
                                        )}
                                        {p.edgeLive && (
                                            <>
                                                <span className="text-white/20">•</span>
                                                <a href={p.edgeLive} target="_blank" rel="noopener noreferrer" className="text-xs text-accent-1 hover:text-white transition-colors">
                                                    {p.edgeLabel || 'Edge'} ↗
                                                </a>
                                            </>
                                        )}
                                        <span className="text-white/20">•</span>
                                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs text-text-muted hover:text-white transition-colors">
                                            Code
                                        </a>
                                    </div>
                                </div>
                                <h3 className="text-[1.25rem] font-bold tracking-[-0.02em] mb-3 text-text-primary group-hover:text-accent-2 transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-[0.875rem] text-text-secondary leading-[1.7] mb-6 font-normal">
                                    {p.desc}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                                {p.tags.map((t) => (
                                    <span key={t} className="px-[0.7rem] py-1 rounded-full text-[0.72rem] font-semibold bg-[rgba(99,102,241,0.12)] border border-[rgba(99,102,241,0.25)] text-accent-1">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
                <div className="text-center reveal">
                    <a href="https://github.com/chitranjan-gupta" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[0.9rem] font-semibold text-text-primary bg-transparent border border-[rgba(255,255,255,0.08)] backdrop-blur-[8px] transition-all duration-300 hover:border-accent-1 hover:text-accent-1 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(99,102,241,0.2)]">
                        View All Projects on GitHub
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}



/* ═══════════════════════════════════════
   TRON — Terminal file entries
═══════════════════════════════════════ */
function ProjectsTron() {
    return (
        <section id="projects" className="py-28 md:py-[7rem]">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-12 reveal">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent-1 font-mono text-[0.8rem]">&gt;</span>
                        <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-accent-1">DIR // PROJECTS</span>
                        <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--accent-1)_25%,transparent)]" />
                    </div>
                    <h2 className="font-mono text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold tracking-[0.1em] uppercase"
                        style={{ textShadow: '0 0 15px var(--accent-1)' }}>
                        &gt; FEATURED_BUILDS
                    </h2>
                </div>

                <div className="flex flex-col gap-4 mb-12">
                    {PROJECTS.map((p, i) => (
                        <article key={p.num} className="group reveal border border-[color-mix(in_srgb,var(--accent-1)_35%,transparent)] p-6 transition-all duration-200 hover:border-accent-1"
                            style={{ background: 'rgba(0,8,16,0.9)', boxShadow: '0 0 20px -8px color-mix(in srgb, var(--accent-1) 15%, transparent)' }}>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="font-mono text-[0.65rem] text-accent-2 tracking-[0.15em]">[FILE_{String(i).padStart(2, '0')}]</span>
                                <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--accent-1)_15%,transparent)]" />
                                <a href={p.live || p.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.68rem] text-accent-1 tracking-[0.1em] hover:underline">
                                    &gt; {p.firefoxLive || p.edgeLive ? `${(p.liveLabel || 'CHROME').toUpperCase()}()` : 'EXECUTE_PROGRAM()'}
                                </a>
                                {p.firefoxLive && (
                                    <a href={p.firefoxLive} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.68rem] text-accent-1 tracking-[0.1em] hover:underline">
                                        &gt; {(p.firefoxLabel || 'FIREFOX').toUpperCase()}()
                                    </a>
                                )}
                                {p.edgeLive && (
                                    <a href={p.edgeLive} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.68rem] text-accent-2 tracking-[0.1em] hover:underline">
                                        &gt; {(p.edgeLabel || 'EDGE').toUpperCase()}()
                                    </a>
                                )}
                            </div>
                            <h3 className="font-mono text-[1.2rem] font-bold tracking-[0.05em] uppercase mb-3 group-hover:text-accent-1 transition-colors"
                                style={{ textShadow: '0 0 8px color-mix(in srgb, var(--accent-1) 30%, transparent)' }}>
                                {p.title}
                            </h3>
                            <p className="font-mono text-[0.85rem] text-text-secondary leading-[1.7] mb-4">{p.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <span key={t} className="font-mono px-3 py-1 text-[0.65rem] tracking-[0.08em] uppercase text-accent-2 border border-[color-mix(in_srgb,var(--accent-1)_30%,transparent)]"
                                        style={{ boxShadow: '0 0 6px -2px var(--accent-1)' }}>
                                        [{t}]
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="reveal">
                    <a href="https://github.com/chitranjan-gupta" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono px-6 py-3 text-[0.8rem] tracking-[0.15em] uppercase text-accent-1 border border-accent-1 transition-all duration-200 hover:bg-[color-mix(in_srgb,var(--accent-1)_10%,transparent)] hover:shadow-[0_0_15px_-3px_var(--accent-1)]">
                        [ENTER] VIEW_ALL_ON_GITHUB →
                    </a>
                </div>
            </div>
        </section>
    );
}



/* ═══════════════════════════════════════
   ARES — Alternating magazine layout
═══════════════════════════════════════ */
function ProjectsAres() {
    return (
        <section id="projects" className="py-28 md:py-[7rem]">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-12 reveal">
                    <div className="w-12 h-[5px] bg-accent-1 mb-4" />
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black uppercase tracking-[0.04em] leading-[1]">
                        FEATURED <span className="text-accent-1">WORK</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {PROJECTS.map((p, i) => (
                        <article key={p.num}
                            className="group reveal border-2 border-[rgba(255,255,255,0.08)] p-8 flex flex-col justify-between transition-all duration-150 hover:border-accent-1"
                            style={{ background: 'rgba(5,5,5,0.95)', boxShadow: `${6 + i * 2}px ${6 + i * 2}px 0 var(--accent-1)` }}>

                            {/* Content */}
                            <div>
                                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                                    <span className="text-[0.75rem] font-black uppercase tracking-[0.15em] text-accent-1">PROJECT {p.num}</span>
                                    <span className="text-[0.7rem] uppercase font-bold text-text-muted">READY</span>
                                </div>
                                <h3 className="text-[clamp(1.3rem,2vw,1.7rem)] font-black uppercase tracking-[0.04em] mb-4 group-hover:text-accent-1 transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-[0.95rem] text-text-secondary leading-[1.7] mb-6 font-semibold">{p.desc}</p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {p.tags.map((t) => (
                                        <span key={t} className="px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent-1 border-2 border-[color-mix(in_srgb,var(--accent-1)_35%,transparent)]">{t}</span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <a href={p.live || p.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-[0.75rem] font-black uppercase tracking-[0.15em] text-[#000] bg-accent-1 border-2 border-accent-1 transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5"
                                        style={{ boxShadow: '3px 3px 0 color-mix(in srgb, var(--accent-1) 60%, black)' }}>{p.firefoxLive || p.edgeLive ? `${(p.liveLabel || 'CHROME').toUpperCase()} →` : 'LIVE →'}</a>
                                    {p.firefoxLive && (
                                        <a href={p.firefoxLive} target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-[0.75rem] font-black uppercase tracking-[0.15em] text-[#000] bg-accent-1 border-2 border-accent-1 transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5"
                                            style={{ boxShadow: '3px 3px 0 color-mix(in srgb, var(--accent-1) 60%, black)' }}>{(p.firefoxLabel || 'FIREFOX').toUpperCase()} →</a>
                                    )}
                                    {p.edgeLive && (
                                        <a href={p.edgeLive} target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-[0.75rem] font-black uppercase tracking-[0.15em] text-[#000] bg-accent-2 border-2 border-accent-2 transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5"
                                            style={{ boxShadow: '3px 3px 0 color-mix(in srgb, var(--accent-2) 60%, black)' }}>{(p.edgeLabel || 'EDGE').toUpperCase()} →</a>
                                    )}
                                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-[0.75rem] font-black uppercase tracking-[0.15em] text-text-primary border-2 border-[rgba(255,255,255,0.15)] hover:border-accent-1 hover:text-accent-1 transition-colors">CODE</a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="reveal">
                    <a href="https://github.com/chitranjan-gupta" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 text-[0.85rem] font-black uppercase tracking-[0.2em] text-text-primary border-2 border-[rgba(255,255,255,0.15)] transition-all duration-150 hover:border-accent-1 hover:text-accent-1"
                        style={{ boxShadow: '4px 4px 0 rgba(255,255,255,0.1)' }}>
                        ALL PROJECTS →
                    </a>
                </div>
            </div>
        </section>
    );
}



/* ═══════════════════════════════════════
   WARFARE — Mission briefings
═══════════════════════════════════════ */
function ProjectsCod() {
    return (
        <section id="projects" className="py-28 md:py-[7rem]">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-10 reveal">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent-1">⊕</span>
                        <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-accent-1">OPERATIONS // COMPLETED</span>
                        <div className="h-[2px] flex-1"
                            style={{ background: 'repeating-linear-gradient(90deg, var(--accent-1) 0px, var(--accent-1) 8px, transparent 8px, transparent 14px)' }} />
                    </div>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold uppercase tracking-[0.06em]">
                        ⊕ MISSION <span className="text-accent-1">BRIEFINGS</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
                    {PROJECTS.map((p, i) => (
                        <article key={p.num} className="group reveal border border-[color-mix(in_srgb,var(--accent-1)_35%,rgba(80,70,40,0.5))] p-6 flex flex-col justify-between transition-all duration-150 hover:border-accent-1"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))', background: 'rgba(14,16,10,0.97)' }}>

                            {/* Briefing */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2 h-2 bg-[#4ade80] shadow-[0_0_4px_#4ade80]" />
                                    <span className="font-mono text-[0.6rem] tracking-[0.2em] text-[#4ade80] uppercase">OPERATION {p.num} {'//'} ACTIVE</span>
                                    <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--accent-1)_15%,transparent)]" />
                                </div>
                                <h3 className="text-[1.2rem] font-bold uppercase tracking-[0.04em] mb-3 group-hover:text-accent-1 transition-colors">{p.title}</h3>

                                <div className="font-mono text-[0.6rem] tracking-[0.15em] text-accent-1 uppercase mb-1.5">{'// OBJECTIVE'}</div>
                                <p className="font-mono text-[0.82rem] text-text-secondary leading-[1.7] mb-5">{p.desc}</p>
                            </div>

                            <div>
                                <div className="font-mono text-[0.6rem] tracking-[0.15em] text-accent-1 uppercase mb-2">{'// ASSETS DEPLOYED'}</div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {p.tags.map((t) => (
                                        <span key={t} className="font-mono px-2.5 py-1 text-[0.65rem] tracking-[0.06em] uppercase text-text-secondary border border-[color-mix(in_srgb,var(--accent-1)_25%,rgba(80,70,40,0.4))]"
                                            style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-4 pt-3 border-t border-[rgba(80,70,40,0.3)]">
                                    <a href={p.live || p.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.72rem] text-accent-1 hover:underline">
                                        ⊕ {p.firefoxLive || p.edgeLive ? `${(p.liveLabel || 'CHROME').toUpperCase()}_OPS` : 'LAUNCH_OPS'}
                                    </a>
                                    {p.firefoxLive && (
                                        <a href={p.firefoxLive} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.72rem] text-accent-1 hover:underline">
                                            ⊕ {(p.firefoxLabel || 'FIREFOX').toUpperCase()}_OPS
                                        </a>
                                    )}
                                    {p.edgeLive && (
                                        <a href={p.edgeLive} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.72rem] text-accent-2 hover:underline">
                                            ⊕ {(p.edgeLabel || 'EDGE').toUpperCase()}_OPS
                                        </a>
                                    )}
                                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.72rem] text-text-muted hover:text-white">
                                        SOURCE
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="reveal">
                    <a href="https://github.com/chitranjan-gupta" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono px-6 py-3 text-[0.75rem] tracking-[0.12em] uppercase text-[#0a0b07] bg-accent-1 border border-accent-1 transition-all duration-150 hover:brightness-110"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                        ⊕ VIEW ALL OPERATIONS
                    </a>
                </div>
            </div>
        </section>
    );
}


/* ═══════════════════════════════════════
   MODERN — Sleek project showcase
═══════════════════════════════════════ */
function ProjectsModern() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!sectionRef.current) return;
            const cards = sectionRef.current.querySelectorAll('.bento-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-32 md:py-48 bg-geist-background relative overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-modern-reveal">
                    <div>
                        <div className="geist-badge mb-4">Showcase</div>
                        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black tracking-[-0.07em] leading-none mb-6">
                            Selected <span className="text-gradient">projects.</span>
                        </h2>
                        <p className="text-geist-gray-500 max-w-[500px] text-[1.1rem] font-medium tracking-tight leading-relaxed">
                            A collection of high-impact production apps built with the latest tools and focused on the end user.
                        </p>
                    </div>
                    <a href="https://github.com/chitranjan-gupta" className="btn-vercel inline-flex items-center gap-2">
                        View All Projects <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                </div>

                <div className="bento-grid">
                    {PROJECTS.map((proj, idx) => (
                        <div key={proj.title}
                            className={`bento-card group p-8 flex flex-col justify-between animate-modern-reveal ${idx === 0 || idx === 3 ? 'col-span-12 lg:col-span-8' : 'col-span-12 lg:col-span-4'}`}
                            style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div>
                                <div className="flex items-center justify-between mb-4 pb-2 border-b border-geist-gray-200">
                                    <span className="text-[0.75rem] font-mono font-bold text-[var(--accent-2)] uppercase tracking-wider">
                                        Project {proj.num}
                                    </span>
                                    <span className="text-xs font-semibold text-geist-gray-400">
                                        Production
                                    </span>
                                </div>
                                <h3 className="text-[1.6rem] font-black tracking-tight text-geist-foreground mb-3 flex justify-between items-center group-hover:text-[var(--accent-2)] transition-colors">
                                    {proj.title}
                                </h3>
                                <p className="text-geist-gray-500 text-[1rem] leading-relaxed font-medium mb-6">
                                    {proj.desc}
                                </p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {proj.tags?.map(tag => (
                                        <span key={tag} className="px-2.5 py-1 bg-geist-gray-100 text-[0.7rem] font-bold uppercase tracking-wider rounded-md border border-geist-gray-200 shadow-sm text-geist-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-geist-gray-200">
                                    <a href={proj.live || proj.github} target="_blank" rel="noopener noreferrer" className="text-[0.8rem] font-bold text-geist-foreground uppercase tracking-[0.15em] inline-flex items-center gap-1.5 hover:text-[var(--accent-2)] transition-colors">
                                        {proj.firefoxLive || proj.edgeLive ? `${proj.liveLabel || 'Chrome'} Store` : 'Live Demo'}
                                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                                    </a>
                                    {proj.firefoxLive && (
                                        <>
                                            <span className="text-geist-gray-300">•</span>
                                            <a href={proj.firefoxLive} target="_blank" rel="noopener noreferrer" className="text-[0.8rem] font-bold text-geist-foreground uppercase tracking-[0.15em] inline-flex items-center gap-1.5 hover:text-[var(--accent-2)] transition-colors">
                                                {proj.firefoxLabel || 'Firefox'} Addon
                                                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                                            </a>
                                        </>
                                    )}
                                    {proj.edgeLive && (
                                        <>
                                            <span className="text-geist-gray-300">•</span>
                                            <a href={proj.edgeLive} target="_blank" rel="noopener noreferrer" className="text-[0.8rem] font-bold text-geist-foreground uppercase tracking-[0.15em] inline-flex items-center gap-1.5 hover:text-[var(--accent-1)] transition-colors">
                                                {proj.edgeLabel || 'Edge'} Addon
                                                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                                            </a>
                                        </>
                                    )}
                                    <span className="text-geist-gray-300">•</span>
                                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-[0.8rem] font-bold text-geist-gray-500 uppercase tracking-[0.15em] inline-flex items-center gap-1.5 hover:text-geist-foreground transition-colors">
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
/* ═══════════════════════════════════════
   CYBERSECURITY / HACKER / RED TEAM — Projects
═══════════════════════════════════════ */
function ProjectsHacker() {
    return (
        <section id="projects" className="py-24 relative bg-[var(--hacker-bg)] text-white font-mono overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14 border-b border-[var(--hacker-border)] pb-4 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <div className="text-[0.72rem] text-[var(--hacker-secondary)] uppercase tracking-[0.2em] font-bold">
                            {'// EXPLOITS & HARDENED REPOSITORIES'}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mt-1">
                            Deployments & Case Studies <span className="text-[var(--hacker-accent)]">[SECURED]</span>
                        </h2>
                    </div>
                    <div className="text-xs text-[var(--hacker-accent)] font-mono">
                        VULN_STATUS: 0 CRITICAL // CLEAN
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PROJECTS.map((proj, idx) => (
                        <div key={proj.title} className="hacker-card p-6 md:p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--hacker-border)]/40 text-xs">
                                    <div className="flex items-center gap-2 text-[var(--hacker-accent)] font-bold">
                                        <span>SYS_ID: 0x{idx + 1}A</span>
                                        <span>•</span>
                                        <span>NODE #{proj.num}</span>
                                    </div>
                                    <div className="text-[var(--hacker-secondary)] text-[0.65rem]">
                                        CLEAN_AUDIT
                                    </div>
                                </div>
                                <h3 className="text-xl md:text-2xl font-extrabold uppercase text-white mb-3">
                                    {proj.title}
                                </h3>
                                <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-6 font-mono">
                                    {proj.desc}
                                </p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {proj.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 text-[0.65rem] bg-black border border-[var(--hacker-border)] text-[var(--hacker-accent)] font-bold"
                                        >
                                            [{tag}]
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3 items-center pt-4 border-t border-[var(--hacker-border)]/40">
                                    <a
                                        href={proj.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-hacker-primary text-xs"
                                    >
                                        <span>{proj.firefoxLive || proj.edgeLive ? `${(proj.liveLabel || 'CHROME').toUpperCase()}_EXT()` : 'RUN_PROD()'}</span>
                                    </a>
                                    {proj.firefoxLive && (
                                        <a
                                            href={proj.firefoxLive}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-hacker-primary text-xs"
                                        >
                                            <span>{(proj.firefoxLabel || 'FIREFOX').toUpperCase()}_ADDON()</span>
                                        </a>
                                    )}
                                    {proj.edgeLive && (
                                        <a
                                            href={proj.edgeLive}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-hacker-secondary text-xs"
                                        >
                                            <span>{(proj.edgeLabel || 'EDGE').toUpperCase()}_ADDON()</span>
                                        </a>
                                    )}
                                    <a
                                        href={proj.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-hacker-secondary text-xs"
                                    >
                                        <span>INSPECT_SRC</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   APPLE / CUPERTINO — Projects
   Precision Glass Bento Showcase
═══════════════════════════════════════ */
function ProjectsApple() {
    return (
        <section id="projects" className="py-32 px-6 relative overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-20 text-center max-w-[800px] mx-auto">
                    <span className="apple-section-eyebrow">Portfolio</span>
                    <h2 className="apple-section-title mb-6">
                        Engineered for Impact.
                    </h2>
                    <p className="apple-hero-desc">
                        A curated selection of production applications, distributed microservices, and human-centric software.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((proj, idx) => (
                        <div
                            key={proj.title}
                            className="apple-card p-8 md:p-10 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4 pb-2 border-b border-apple-border">
                                    <span className="apple-card-tag">RELEASE #{proj.num}</span>
                                    <span className="text-xs font-semibold text-apple-muted">ENGINEERED</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-apple-heading mb-4">
                                    {proj.title}
                                </h3>
                                <p className="text-apple-body text-base leading-relaxed mb-8">
                                    {proj.desc}
                                </p>
                            </div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {proj.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-apple-pill-bg text-apple-heading border border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4 items-center pt-6 border-t border-apple-border">
                                    <a
                                        href={proj.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="apple-btn-primary"
                                    >
                                        {proj.firefoxLive || proj.edgeLive ? `${proj.liveLabel || 'Chrome'} Store` : 'Live Demo'}
                                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                                    </a>
                                    {proj.firefoxLive && (
                                        <a
                                            href={proj.firefoxLive}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="apple-btn-secondary"
                                        >
                                            {proj.firefoxLabel || 'Firefox'} Addon
                                            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                                        </a>
                                    )}
                                    {proj.edgeLive && (
                                        <a
                                            href={proj.edgeLive}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="apple-btn-secondary"
                                        >
                                            {proj.edgeLabel || 'Edge'} Addon
                                            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                                        </a>
                                    )}
                                    <a
                                        href={proj.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="apple-btn-secondary"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


