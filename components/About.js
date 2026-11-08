'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

const BIO = [
    "I'm a passionate Full Stack Developer with 3+ years of experience building web applications that are fast, scalable, and user-friendly. I love turning complex problems into simple, beautiful solutions.",
    "My expertise spans the entire web development stack — from crafting pixel-perfect UIs with React and modern CSS, to designing robust REST APIs and microservices with Node.js and cloud platforms like AWS.",
    "When I'm not coding, you'll find me contributing to open source, exploring new technologies, or planning my next travel adventure.",
];

const INFO = [
    { label: 'Location', value: 'India 🇮🇳' },
    { label: 'Experience', value: '3+ Years' },
    { label: 'Availability', value: 'Open to Work' },
    { label: 'Education', value: 'B.Tech CS' },
];

const SOCIALS = [
    {
        href: 'https://github.com', label: 'GitHub',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>,
    },
    {
        href: 'https://linkedin.com', label: 'LinkedIn',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
    },
    {
        href: 'mailto:chitranjan@example.com', label: 'Email',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
];

const STATS = [
    { label: 'Experience', value: '3+ Yrs', desc: 'Developing robust full-stack applications with modern technologies.' },
    { label: 'Projects', value: '20+', desc: 'Successful deployments across various industries and platforms.' },
    { label: 'Client Sat.', value: '100%', desc: 'Committed to delivering high-quality code and exceptional user experiences.' },
    { label: 'Availability', value: 'Now', desc: 'Ready to join your team or start a new freelance collaboration.' },
];

export default function About() {
    const { design } = useTheme();
    if (design === 'tron') return <AboutTron />;
    if (design === 'ares') return <AboutAres />;
    if (design === 'cod') return <AboutCod />;
    if (design === 'modern') return <AboutModern />;
    if (design === 'indic') return <AboutIndic />;
    return <AboutAurora />;
}

/* ═══════════════════════════════════════
   INDIC — Heritage temple layout
 ═══════════════════════════════════════ */
function AboutIndic() {
    return (
        <section id="about" className="py-32 md:py-48 relative bg-indic-bg overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-20 text-center animate-modern-reveal">
                    <div className="text-indic-saffron font-bold tracking-[0.2em] uppercase text-xs mb-4">हमारी कहानी OUR STORY</div>
                    <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-bold mb-8 italic">
                        Legacy of <span className="indic-gradient-text">Innovation</span>.
                    </h2>
                    <div className="w-24 h-1 bg-indic-border mx-auto mb-10" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="animate-modern-reveal">
                        <div className="space-y-8 text-[1.1rem] leading-relaxed text-indic-fg font-medium italic">
                            <p>
                                Engineering is more than code; it is a craft, a tapasya. For over three years, I have
                                dedicated my work to building digital monuments that stand the test of time.
                            </p>
                            <p>
                                Inspired by the intricate symmetry of Indian architecture and the precision of
                                ancient crafts, I build full-stack solutions that are as resilient as stone and as
                                fluid as the Ganges.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-16">
                            {INFO.map((item) => (
                                <div key={item.label} className="border-l-2 border-indic-saffron pl-6">
                                    <div className="text-[0.7rem] uppercase tracking-widest text-indic-terracotta font-bold mb-1">{item.label}</div>
                                    <div className="text-[1.2rem] font-bold text-indic-fg italic">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-modern-reveal" style={{ animationDelay: '0.2s' }}>
                        {STATS.map((stat, idx) => (
                            <div key={stat.label}
                                className="jaali-card group border-indic-border/30 hover:border-indic-saffron transition-all"
                                style={{ marginTop: idx % 2 === 0 ? '0' : '2rem' }}>
                                <div className="text-[2.5rem] font-bold text-indic-terracotta mb-4 italic">{stat.value}</div>
                                <h3 className="text-[1.1rem] font-bold text-indic-fg mb-2 uppercase tracking-tight">{stat.label}</h3>
                                <p className="text-indic-fg/70 text-[0.9rem] leading-relaxed italic">{stat.desc}</p>
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 opacity-10 group-hover:opacity-30 transition-opacity">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14 10H24L16 16L18 24L12 18L6 24L8 16L0 10H10L12 0Z" /></svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   AURORA — Glassmorphic two-column
═══════════════════════════════════════ */
function AboutAurora() {
    const handleScroll = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="about" className="py-28 md:py-[7rem]">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="text-center mb-16 reveal">
                    <p className="text-[0.8rem] font-semibold tracking-[0.15em] uppercase text-accent-2 mb-3">Get to know me</p>
                    <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1]">
                        About{' '}
                        <span className="bg-gradient-text bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Me</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-20 lg:gap-[5rem] items-center">
                    <div className="flex flex-col items-center gap-6 reveal">
                        <div className="relative w-[320px]">
                            <Image src="/assets/avatar.png" alt="Chitranjan Kumar Gupta" width={320} height={320}
                                className="w-[320px] h-[320px] rounded-[20px] object-cover relative z-10 border border-[rgba(255,255,255,0.08)]" />
                            <div className="absolute -inset-[10px] rounded-[20px] bg-gradient-accent opacity-15 blur-[20px] z-0" />
                        </div>
                        <div className="flex gap-4">
                            {SOCIALS.map(({ href, label, icon }) => (
                                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={label}
                                    className="flex items-center justify-center w-11 h-11 rounded-full bg-white/[0.04] border border-[rgba(255,255,255,0.08)] text-text-secondary transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-accent-1 hover:border-accent-1 hover:text-white hover:-translate-y-[3px] hover:shadow-[0_6px_20px_rgba(99,102,241,0.4)]">
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col reveal">
                        <h3 className="text-[1.35rem] font-bold tracking-[-0.02em] mb-5">Full Stack Developer &amp; Problem Solver</h3>
                        {BIO.map((text, i) => (
                            <p key={i} className="text-text-secondary mb-4 text-[0.975rem] leading-[1.8]">{text}</p>
                        ))}
                        <div className="grid grid-cols-2 gap-4 my-7">
                            {INFO.map(({ label, value }) => (
                                <div key={label} className="flex flex-col gap-[0.2rem] px-[1.1rem] py-[0.9rem] bg-white/[0.04] border border-[rgba(255,255,255,0.08)] rounded-[14px] transition-all duration-200 hover:border-[rgba(99,102,241,0.4)]">
                                    <span className="text-[0.72rem] uppercase tracking-[0.1em] text-text-muted font-semibold">{label}</span>
                                    <span className="text-[0.9rem] font-semibold text-text-primary">{value}</span>
                                </div>
                            ))}
                        </div>
                        <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[0.9rem] font-semibold text-white bg-gradient-accent shadow-[0_4px_24px_rgba(99,102,241,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.55)] w-fit">
                            Get In Touch
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}


/* ═══════════════════════════════════════
   TRON — Data readout terminal
═══════════════════════════════════════ */
function AboutTron() {
    return (
        <section id="about" className="py-28 md:py-[7rem]">
            <div className="w-[min(1200px,92vw)] mx-auto">
                {/* Terminal header */}
                <div className="mb-12 reveal">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent-1 font-mono text-[0.8rem]">&gt;</span>
                        <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-accent-1">
                            SYSTEM // USER_PROFILE
                        </span>
                        <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--accent-1)_25%,transparent)]" />
                    </div>
                    <h2 className="font-mono text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold tracking-[0.1em] uppercase"
                        style={{ textShadow: '0 0 15px var(--accent-1)' }}>
                        &gt; ABOUT_ME
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
                    {/* Avatar terminal */}
                    <div className="reveal">
                        <div className="border border-accent-1 p-4" style={{ boxShadow: '0 0 20px -5px var(--accent-1), inset 0 0 20px rgba(0,0,0,0.5)' }}>
                            <div className="font-mono text-[0.6rem] tracking-[0.15em] text-accent-2 mb-3 uppercase">// ID_SCAN</div>
                            <Image src="/assets/avatar.png" alt="Chitranjan Kumar Gupta" width={250} height={250}
                                className="w-full aspect-square object-cover mb-3"
                                style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', filter: 'drop-shadow(0 0 12px var(--accent-1))' }} />
                            <div className="space-y-1">
                                {SOCIALS.map(({ href, label }) => (
                                    <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                        className="block font-mono text-[0.7rem] text-accent-2 hover:text-accent-1 transition-colors">
                                        &gt; {label.toUpperCase()}_LINK
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Data readout */}
                    <div className="reveal">
                        {/* System log bio */}
                        <div className="border border-[color-mix(in_srgb,var(--accent-1)_30%,transparent)] p-5 mb-6"
                            style={{ background: 'rgba(0,8,16,0.8)', boxShadow: 'inset 0 0 25px rgba(0,0,0,0.5)' }}>
                            <div className="font-mono text-[0.6rem] tracking-[0.15em] text-accent-1 mb-3 uppercase">// SYSTEM_LOG</div>
                            {BIO.map((text, i) => (
                                <p key={i} className="font-mono text-[0.85rem] text-text-secondary leading-[1.8] mb-3">
                                    <span className="text-accent-2 opacity-60">[{String(i).padStart(2, '0')}]</span> {text}
                                </p>
                            ))}
                        </div>

                        {/* Info fields */}
                        <div className="grid grid-cols-2 gap-3">
                            {INFO.map(({ label, value }) => (
                                <div key={label} className="border border-[color-mix(in_srgb,var(--accent-1)_25%,transparent)] p-3"
                                    style={{ background: 'rgba(0,4,8,0.9)' }}>
                                    <div className="font-mono text-[0.6rem] tracking-[0.15em] text-accent-1 uppercase">{label.toUpperCase()}:</div>
                                    <div className="font-mono text-[0.85rem] text-text-primary">{value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


/* ═══════════════════════════════════════
   ARES — Brutalist pull-quote layout
═══════════════════════════════════════ */
function AboutAres() {
    const handleScroll = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="about" className="py-28 md:py-[7rem]">
            <div className="w-[min(1200px,92vw)] mx-auto">
                {/* Header — left aligned with accent stripe */}
                <div className="mb-12 reveal">
                    <div className="w-12 h-[5px] bg-accent-1 mb-4" />
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black uppercase tracking-[0.04em] leading-[1]">
                        ABOUT <span className="text-accent-1">ME</span>
                    </h2>
                </div>

                {/* Pull quote */}
                <div className="border-l-[6px] border-accent-1 pl-6 mb-12 reveal"
                    style={{ boxShadow: '6px 6px 0 var(--accent-1)' }}>
                    <blockquote className="text-[clamp(1.2rem,2vw,1.6rem)] font-extrabold leading-[1.5] text-text-primary uppercase">
                        &ldquo;I TURN COMPLEX PROBLEMS INTO SIMPLE, BEAUTIFUL, SCALABLE SOLUTIONS.&rdquo;
                    </blockquote>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Bio text */}
                    <div className="reveal">
                        {BIO.map((text, i) => (
                            <div key={i}>
                                <p className="text-[1rem] text-text-secondary leading-[1.8] font-semibold mb-4">{text}</p>
                                {i < BIO.length - 1 && <div className="w-full h-[2px] bg-[rgba(255,255,255,0.06)] mb-4" />}
                            </div>
                        ))}
                        <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}
                            className="inline-flex items-center gap-2 px-8 py-4 text-[0.85rem] font-black uppercase tracking-[0.2em] text-[#000] bg-accent-1 border-2 border-accent-1 mt-4 transition-all duration-150 hover:translate-x-1 hover:translate-y-1"
                            style={{ boxShadow: '6px 6px 0 var(--accent-1)' }}>
                            CONTACT ME →
                        </a>
                    </div>

                    {/* Info as oversized blocks */}
                    <div className="grid grid-cols-2 gap-4 reveal">
                        {INFO.map(({ label, value }) => (
                            <div key={label} className="border-2 border-[rgba(255,255,255,0.1)] p-5 transition-all duration-150 hover:border-accent-1 hover:translate-x-1 hover:translate-y-1"
                                style={{ background: 'rgba(5,5,5,0.9)', boxShadow: '4px 4px 0 color-mix(in srgb, var(--accent-1) 25%, transparent)' }}>
                                <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-text-muted mb-2">{label}</span>
                                <span className="block text-[1.2rem] font-black text-accent-1 uppercase">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


/* ═══════════════════════════════════════
   WARFARE — Personnel file
═══════════════════════════════════════ */
function AboutCod() {
    return (
        <section id="about" className="py-28 md:py-[7rem]">
            <div className="w-[min(1200px,92vw)] mx-auto">
                {/* Header */}
                <div className="mb-10 reveal">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent-1">⊕</span>
                        <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-accent-1">PERSONNEL // BACKGROUND</span>
                        <div className="h-[2px] flex-1"
                            style={{ background: 'repeating-linear-gradient(90deg, var(--accent-1) 0px, var(--accent-1) 8px, transparent 8px, transparent 14px)' }} />
                    </div>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold uppercase tracking-[0.06em]">
                        ⊕ ABOUT <span className="text-accent-1">OPERATIVE</span>
                    </h2>
                </div>

                {/* Dossier sections */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
                    {/* Background section */}
                    <div className="border border-[color-mix(in_srgb,var(--accent-1)_35%,rgba(80,70,40,0.5))] p-6 reveal"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))', background: 'rgba(14,16,10,0.95)' }}>
                        <div className="font-mono text-[0.6rem] tracking-[0.2em] text-accent-1 uppercase mb-4 pb-2 border-b border-[color-mix(in_srgb,var(--accent-1)_25%,transparent)]">
                            // BACKGROUND INTEL
                        </div>
                        {BIO.map((text, i) => (
                            <p key={i} className="font-mono text-[0.85rem] text-text-secondary leading-[1.8] mb-3">{text}</p>
                        ))}
                    </div>

                    {/* Service record */}
                    <div className="flex flex-col gap-4 reveal">
                        <div className="border border-[color-mix(in_srgb,var(--accent-1)_35%,rgba(80,70,40,0.5))] p-5"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))', background: 'rgba(14,16,10,0.95)' }}>
                            <div className="font-mono text-[0.6rem] tracking-[0.2em] text-accent-1 uppercase mb-4">// SERVICE RECORD</div>
                            <div className="grid grid-cols-2 gap-3">
                                {INFO.map(({ label, value }) => (
                                    <div key={label} className="py-2 border-b border-[color-mix(in_srgb,var(--accent-1)_20%,transparent)]">
                                        <div className="font-mono text-[0.55rem] tracking-[0.2em] text-text-muted uppercase">{label}</div>
                                        <div className="font-mono text-[0.9rem] text-text-primary font-bold">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Comms */}
                        <div className="border border-[color-mix(in_srgb,var(--accent-1)_35%,rgba(80,70,40,0.5))] p-5"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))', background: 'rgba(14,16,10,0.95)' }}>
                            <div className="font-mono text-[0.6rem] tracking-[0.2em] text-accent-1 uppercase mb-3">// SECURE CHANNELS</div>
                            <div className="space-y-2">
                                {SOCIALS.map(({ href, label }) => (
                                    <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                        className="flex items-center gap-2 font-mono text-[0.8rem] text-text-secondary hover:text-accent-1 transition-colors py-1 border-b border-[color-mix(in_srgb,var(--accent-1)_10%,transparent)]">
                                        <span className="text-accent-1">⊕</span>
                                        {label.toUpperCase()}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   MODERN — Clean feature grid
═══════════════════════════════════════ */
function AboutModern() {
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
        <section id="about" ref={sectionRef} className="py-32 md:py-48 relative bg-geist-background overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-20 animate-modern-reveal">
                    <div className="geist-badge mb-4">Core Principles</div>
                    <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-[-0.07em] leading-[0.9] mb-10">
                        Built for <span className="text-[var(--accent-2)]">Scale</span>. <br />
                        Designed for <span className="text-gradient">Performance</span>.
                    </h2>
                </div>

                <div className="bento-grid">
                    {/* Primary Feature */}
                    <div className="bento-card col-span-12 lg:col-span-12 p-10 animate-modern-reveal">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-[1.8rem] font-black tracking-tight mb-6">Engineering Excellence</h3>
                                <p className="text-geist-gray-500 text-[1.1rem] leading-relaxed font-medium">
                                    I build high-performance web applications that bridge the gap between complex backend systems and intuitive user interfaces. Leveraging the latest in Next.js and the Vercel ecosystem.
                                </p>
                            </div>
                            <div className="flex gap-8 justify-center lg:justify-end">
                                {[
                                    { l: 'Lighthouse', v: '100', c: 'text-green-500' },
                                    { l: 'Core Web Vitals', v: 'Pass', c: 'text-[var(--accent-2)]' }
                                ].map(s => (
                                    <div key={s.l} className="text-center">
                                        <div className={`text-[4rem] font-black tracking-tighter ${s.c}`}>{s.v}</div>
                                        <div className="text-[0.7rem] uppercase tracking-widest text-geist-gray-400 font-bold">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    {STATS.map((stat, idx) => (
                        <div key={stat.label}
                            className="bento-card col-span-12 md:col-span-6 lg:col-span-4 p-8 animate-modern-reveal"
                            style={{ animationDelay: `${(idx + 1) * 0.1}s` }}>
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-[3rem] font-black tracking-tighter leading-none text-geist-foreground">{stat.value}</div>
                                <div className="w-10 h-10 rounded-full bg-geist-gray-100 flex items-center justify-center text-geist-gray-400 border border-geist-gray-200">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 7h10v10M7 17L17 7" /></svg>
                                </div>
                            </div>
                            <h4 className="text-[1.2rem] font-bold text-geist-foreground mb-2 tracking-tight">{stat.label}</h4>
                            <p className="text-geist-gray-500 text-[0.95rem] leading-relaxed font-medium">{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
