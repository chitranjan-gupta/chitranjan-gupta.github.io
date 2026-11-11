'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

const BIO = [
    "Hi, I'm Chitranjan Kumar Gupta — a creative and driven full-stack developer from Bihar, India. I bring a unique combination of innovation, curiosity, and hands-on engineering to every product I build.",
    "My focus spans modern web development (Next.js, Express, Laravel), cross-platform app engineering (React Native, Expo, Electron.js), performant serverless architectures (Cloudflare Workers), and database system design (PostgreSQL, MongoDB, Redis).",
    "I'm an active open-source creator building browser extensions (FreshMarks, PastePass, Expo DevTools), developer utilities, and backend automation tools.",
];

const INFO = [
    { label: 'Location', value: 'Bihar, India 🇮🇳' },
    { label: 'Experience', value: '1.6 Years' },
    { label: 'Availability', value: 'Open to Work' },
    { label: 'Education', value: 'BCA (Graduation)' },
];

const SOCIALS = [
    {
        href: 'https://github.com/chitranjan-gupta', label: 'GitHub',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>,
    },
    {
        href: 'https://www.linkedin.com/in/chitranjan-gupta', label: 'LinkedIn',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
    },
    {
        href: 'https://www.x.com/chitranjan___', label: 'X (Twitter)',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    },
    {
        href: 'https://wa.me/+919113178457', label: 'WhatsApp',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>,
    },
    {
        href: 'https://t.me/chitranjangupta', label: 'Telegram',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
    },
    {
        href: 'https://medium.com/@chitranjankumargupta', label: 'Medium',
        icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>,
    },
    {
        href: 'mailto:chitranjankumargupta123@gmail.com', label: 'Gmail',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
    {
        href: 'mailto:chitranjankumargupta@outlook.com', label: 'Outlook',
        icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
];

const STATS = [
    { label: 'Experience', value: '1.6 Yrs', desc: 'Enterprise IT operations, automation scripting, and full-stack engineering.' },
    { label: 'Projects', value: '15+', desc: 'Real-world products, browser extensions, packages, and web apps shipped.' },
    { label: 'Extensions', value: '4+', desc: 'Live Chrome and Firefox browser add-ons actively serving users.' },
    { label: 'Availability', value: 'Now', desc: 'Open to high-impact software engineering roles and collaborations.' },
];

export default function About() {
    const { design } = useTheme();
    if (design === 'tron') return <AboutTron />;
    if (design === 'ares') return <AboutAres />;
    if (design === 'cod') return <AboutCod />;
    if (design === 'modern') return <AboutModern />;
    if (design === 'indic') return <AboutIndic />;
    if (design === 'apple') return <AboutApple />;
    if (design === 'hacker') return <AboutHacker />;
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

                        {/* Social Links */}
                        <div className="flex flex-wrap items-center gap-4 mt-10">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 border border-indic-border text-indic-fg font-semibold text-[0.85rem] hover:bg-indic-saffron hover:text-white transition-all shadow-sm rounded-sm"
                                >
                                    {s.icon}
                                    {s.label}
                                </a>
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
                            <div className="font-mono text-[0.6rem] tracking-[0.15em] text-accent-2 mb-3 uppercase">{'// ID_SCAN'}</div>
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
                            <div className="font-mono text-[0.6rem] tracking-[0.15em] text-accent-1 mb-3 uppercase">{'// SYSTEM_LOG'}</div>
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
                            {'// BACKGROUND INTEL'}
                        </div>
                        {BIO.map((text, i) => (
                            <p key={i} className="font-mono text-[0.85rem] text-text-secondary leading-[1.8] mb-3">{text}</p>
                        ))}
                    </div>

                    {/* Service record */}
                    <div className="flex flex-col gap-4 reveal">
                        <div className="border border-[color-mix(in_srgb,var(--accent-1)_35%,rgba(80,70,40,0.5))] p-5"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))', background: 'rgba(14,16,10,0.95)' }}>
                            <div className="font-mono text-[0.6rem] tracking-[0.2em] text-accent-1 uppercase mb-4">{'// SERVICE RECORD'}</div>
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
                            <div className="font-mono text-[0.6rem] tracking-[0.2em] text-accent-1 uppercase mb-3">{'// SECURE CHANNELS'}</div>
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
                    <div className="geist-badge mb-4">About Me</div>
                    <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black tracking-[-0.07em] leading-[0.95] mb-6">
                        Driven by passion. <br />
                        Focused on <span className="text-[var(--accent-2)]">Impact</span>.
                    </h2>
                    <p className="text-geist-gray-500 text-[1.1rem] max-w-[650px] font-medium leading-relaxed">
                        Full Stack Developer & Analyst with 1.6 years of hands-on experience in enterprise IT operations, Linux administration, and full-stack software development.
                    </p>
                </div>

                <div className="bento-grid">
                    {/* Primary Bio Card */}
                    <div className="bento-card col-span-12 lg:col-span-8 p-10 animate-modern-reveal">
                        <h3 className="text-[1.8rem] font-black tracking-tight mb-6 text-geist-foreground">Background & Philosophy</h3>
                        <div className="space-y-4 text-geist-gray-500 text-[1.05rem] leading-relaxed font-medium">
                            <p>{BIO[0]}</p>
                            <p>{BIO[1]}</p>
                            <p>{BIO[2]}</p>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap items-center gap-4 mt-8 pt-8 border-t border-geist-gray-200">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg border border-geist-gray-200 text-geist-foreground font-semibold text-[0.875rem] hover:border-[var(--accent-2)] hover:text-[var(--accent-2)] transition-all bg-geist-gray-100"
                                >
                                    {s.icon}
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Info Card */}
                    <div className="bento-card col-span-12 lg:col-span-4 p-10 animate-modern-reveal flex flex-col justify-between">
                        <div>
                            <h3 className="text-[1.4rem] font-black tracking-tight mb-6 text-geist-foreground">Quick Overview</h3>
                            <div className="space-y-6">
                                {INFO.map((item) => (
                                    <div key={item.label} className="flex justify-between items-center border-b border-geist-gray-200 pb-3">
                                        <span className="text-[0.85rem] font-bold text-geist-gray-400 uppercase tracking-wider">{item.label}</span>
                                        <span className="text-[1rem] font-bold text-geist-foreground">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-geist-gray-200">
                            <a href="#contact" className="btn-vercel w-full inline-flex items-center justify-center text-center">
                                Work Together
                            </a>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    {STATS.map((stat, idx) => (
                        <div key={stat.label}
                            className="bento-card col-span-12 sm:col-span-6 lg:col-span-3 p-8 animate-modern-reveal"
                            style={{ animationDelay: `${(idx + 1) * 0.1}s` }}>
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-[3rem] font-black tracking-tighter leading-none text-geist-foreground">{stat.value}</div>
                                <div className="w-10 h-10 rounded-full bg-geist-gray-100 flex items-center justify-center text-geist-gray-400 border border-geist-gray-200">
                                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 7h10v10M7 17L17 7" /></svg>
                                </div>
                            </div>
                            <h4 className="text-[1.1rem] font-bold text-geist-foreground mb-2 tracking-tight">{stat.label}</h4>
                            <p className="text-geist-gray-500 text-[0.9rem] leading-relaxed font-medium">{stat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   APPLE — Cupertino Bento Showcase
═══════════════════════════════════════ */
function AboutApple() {
    return (
        <section id="about" className="py-20 md:py-28 relative overflow-hidden apple-section">
            <div className="w-[min(1200px,92vw)] mx-auto">
                {/* Apple section header */}
                <div className="mb-20 text-center max-w-[800px] mx-auto">
                    <span className="apple-section-eyebrow">Overview</span>
                    <h2 className="apple-section-title">
                        Engineered with intention. <br />
                        <span className="text-apple-subtle">Down to every pixel.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Hero Bio Card */}
                    <div className="apple-card md:col-span-8 p-10 md:p-12 flex flex-col justify-between">
                        <div>
                            <div className="apple-card-tag mb-4">Philosophy</div>
                            <h3 className="text-[1.9rem] md:text-[2.2rem] font-semibold text-apple-heading tracking-tight mb-6 leading-tight">
                                Building tools that feel natural, instantaneous, and dependable.
                            </h3>
                            <div className="space-y-4 text-apple-body text-[1.05rem] leading-relaxed">
                                <p>{BIO[0]}</p>
                                <p>{BIO[1]}</p>
                            </div>
                        </div>

                        {/* Social pills */}
                        <div className="flex flex-wrap gap-3 mt-10 pt-8 border-t border-apple-border">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="apple-pill-button"
                                >
                                    {s.icon}
                                    <span>{s.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Specs Card */}
                    <div className="apple-card md:col-span-4 p-8 md:p-10 flex flex-col justify-between">
                        <div>
                            <div className="apple-card-tag mb-4">Developer Specs</div>
                            <div className="space-y-6">
                                {INFO.map((item) => (
                                    <div key={item.label} className="border-b border-apple-border pb-4">
                                        <div className="text-[0.75rem] font-medium text-apple-muted uppercase tracking-wider mb-1">{item.label}</div>
                                        <div className="text-[1.15rem] font-semibold text-apple-heading">{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 pt-6">
                            <a href="#contact" className="apple-btn-primary w-full text-center justify-center">
                                Connect with Me
                            </a>
                        </div>
                    </div>

                    {/* 4 Performance Metric Cards */}
                    {STATS.map((stat) => (
                        <div key={stat.label} className="apple-card md:col-span-3 p-8 flex flex-col justify-between">
                            <div className="text-[3.2rem] font-bold tracking-tight text-apple-heading leading-none mb-4">
                                {stat.value}
                            </div>
                            <div>
                                <h4 className="text-[1.05rem] font-semibold text-apple-heading mb-1.5">{stat.label}</h4>
                                <p className="text-apple-body text-[0.85rem] leading-relaxed">{stat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   CYBERSECURITY / HACKER / RED TEAM — About
═══════════════════════════════════════ */
function AboutHacker() {
    return (
        <section id="about" className="py-24 relative bg-[var(--hacker-bg)] text-white font-mono overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                {/* Header */}
                <div className="mb-14 border-b border-[var(--hacker-border)] pb-4 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <div className="text-[0.72rem] text-[var(--hacker-secondary)] uppercase tracking-[0.2em] font-bold">
                            {'// DOSSIER_FILE: CKG-OPERATIVE-INTEL'}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mt-1">
                            Threat Actor Profile <span className="text-[var(--hacker-accent)]">[OFFENSIVE_SEC]</span>
                        </h2>
                    </div>
                    <div className="text-xs text-[var(--hacker-accent)] font-mono px-3 py-1 bg-black/50 border border-[var(--hacker-accent)]/40 rounded">
                        SEC_CLEARANCE: TOP_SECRET // EYES_ONLY
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Bio Card */}
                    <div className="lg:col-span-8 hacker-card p-6 md:p-8">
                        <div className="flex items-center gap-2 text-xs text-[var(--hacker-accent)] mb-4 pb-2 border-b border-[var(--hacker-border)]/40">
                            <span>$ cat /etc/shadow/biography.txt</span>
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-text-secondary mb-4">
                            Chitranjan Kumar Gupta is a Full-Stack Engineer and Red Team security researcher. Bridging high-velocity React/Node development with adversarial penetration testing, kernel-level vulnerability inspection, and automated exploit defenses.
                        </p>
                        <p className="text-sm md:text-base leading-relaxed text-text-secondary mb-6">
                            Operating with an attacker mindset to construct unbreakable production systems. Experienced in OWASP Top 10 mitigation, OAuth/JWT cryptography, distributed API gateway rate-limiting, and hardened zero-trust network deployments.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[var(--hacker-border)]/40">
                            <div>
                                <div className="text-[0.65rem] text-text-muted uppercase tracking-wider">PRIMARY_WEAPON</div>
                                <div className="text-sm font-bold text-[var(--hacker-accent)]">Next.js & Node</div>
                            </div>
                            <div>
                                <div className="text-[0.65rem] text-text-muted uppercase tracking-wider">DEFENSE_MATRIX</div>
                                <div className="text-sm font-bold text-white">OAuth / JWT / AES</div>
                            </div>
                            <div>
                                <div className="text-[0.65rem] text-text-muted uppercase tracking-wider">DEPLOYMENT</div>
                                <div className="text-sm font-bold text-white">Docker / K8s</div>
                            </div>
                            <div>
                                <div className="text-[0.65rem] text-text-muted uppercase tracking-wider">EXPLOIT_STATUS</div>
                                <div className="text-sm font-bold text-[var(--hacker-secondary)]">PATCHED</div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                        {STATS.map((s) => (
                            <div key={s.label} className="hacker-card p-4 flex flex-col justify-between">
                                <div className="text-xs text-[var(--hacker-accent)] font-mono">{`// ${s.label}`}</div>
                                <div className="text-3xl font-black text-white my-2">{s.value}</div>
                                <div className="text-[0.7rem] text-text-muted line-clamp-2">{s.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
