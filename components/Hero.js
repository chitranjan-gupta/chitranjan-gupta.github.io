'use client';

import { useEffect, useRef, useState, Fragment } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import IndicCrackers from '@/components/IndicCrackers';

const PHRASES = [
    'elegant web apps.',
    'scalable APIs.',
    'beautiful UIs.',
    'fast experiences.',
    'clean code.',
];

const TRON_BOOT = [
    '> SYSTEM BOOT v4.2.1',
    '> LOADING NEURAL INTERFACE...',
    '> IDENTITY: CHITRANJAN_KUMAR_GUPTA',
    '> ROLE: FULL_STACK_DEVELOPER',
    '> STATUS: ONLINE',
    '> INITIALIZING PORTFOLIO...',
];

function useTypewriter(phrases) {
    const [displayed, setDisplayed] = useState('');
    const stateRef = useRef({ phraseIdx: 0, charIdx: 0, isDeleting: false });

    useEffect(() => {
        let timer;
        function tick() {
            const { phraseIdx, charIdx, isDeleting } = stateRef.current;
            const current = phrases[phraseIdx];
            let nextChar = charIdx;
            let nextDeleting = isDeleting;
            let nextPhrase = phraseIdx;
            let delay = isDeleting ? 50 : 90;

            if (isDeleting) {
                nextChar--;
                setDisplayed(current.substring(0, nextChar));
            } else {
                nextChar++;
                setDisplayed(current.substring(0, nextChar));
            }

            if (!isDeleting && nextChar === current.length) {
                delay = 1800;
                nextDeleting = true;
            } else if (isDeleting && nextChar === 0) {
                nextDeleting = false;
                nextPhrase = (phraseIdx + 1) % phrases.length;
                delay = 400;
            }

            stateRef.current = { phraseIdx: nextPhrase, charIdx: nextChar, isDeleting: nextDeleting };
            timer = setTimeout(tick, delay);
        }
        timer = setTimeout(tick, 600);
        return () => clearTimeout(timer);
    }, [phrases]);

    return displayed;
}

function useScrollReveal(design) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const parent = entry.target.parentElement;
                        const siblings = [...parent.children].filter((el) =>
                            el.classList.contains('reveal')
                        );
                        const idx = siblings.indexOf(entry.target);
                        const delay = Math.min(idx * 80, 320);
                        setTimeout(() => entry.target.classList.add('visible'), delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [design]);
}

function useBootSequence(lines) {
    const [visibleLines, setVisibleLines] = useState([]);
    const [done, setDone] = useState(false);

    useEffect(() => {
        let i = 0;
        function showNext() {
            if (i < lines.length) {
                setVisibleLines((prev) => [...prev, lines[i]]);
                i++;
                setTimeout(showNext, 350 + Math.random() * 250);
            } else {
                setDone(true);
            }
        }
        const t = setTimeout(showNext, 500);
        return () => clearTimeout(t);
    }, [lines]);

    return { visibleLines, done };
}

export default function Hero() {
    const { design } = useTheme();
    useScrollReveal(design);

    if (design === 'tron') return <HeroTron />;
    if (design === 'ares') return <HeroAres />;
    if (design === 'cod') return <HeroCod />;
    if (design === 'modern') return <HeroModern />;
    if (design === 'indic') return <HeroIndic />;
    if (design === 'apple') return <HeroApple />;
    if (design === 'hacker') return <HeroHacker />;
    return <HeroAurora />;
}

/* ═══════════════════════════════════════
   INDIC — Heritage centered layout
 ═══════════════════════════════════════ */
function HeroIndic() {
    const { theme } = useTheme();
    const handleScroll = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Festival specific badges and motifs
    const getFestivalData = () => {
        switch (theme) {
            case 'diwali':
                return {
                    greeting: 'शुभ दीपावली • FESTIVAL OF LIGHTS',
                    headlineSuffix: 'Illuminating Digital Realities',
                    desc: 'Dedicated to the craft of engineering — weaving scalable architectures, robust microservices, and radiant experiences with precision and devotion.',
                    motif: (
                        <div className="flex items-center justify-center gap-3 text-2xl mb-4 text-[#FFD700]">
                            <span>🪔</span>
                            <span className="w-12 h-[1px] bg-[#FFD700]/50" />
                            <span>✨</span>
                            <span className="w-12 h-[1px] bg-[#FFD700]/50" />
                            <span>🪔</span>
                        </div>
                    ),
                    svgPattern: (
                        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="200" cy="200" r="185" stroke="#FFD700" strokeWidth="0.8" strokeDasharray="6 6" />
                            <circle cx="200" cy="200" r="140" stroke="#FF9933" strokeWidth="1" />
                            <circle cx="200" cy="200" r="95" stroke="#FFD700" strokeWidth="0.6" />
                            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                                <g key={deg} transform={`rotate(${deg}, 200, 200)`}>
                                    <path d="M200 15 C195 45, 190 70, 200 95 C210 70, 205 45, 200 15 Z" stroke="#FFD700" strokeWidth="0.75" />
                                    <circle cx="200" cy="15" r="3" fill="#FF9933" />
                                </g>
                            ))}
                        </svg>
                    )
                };
            case 'holi':
                return {
                    greeting: 'रंगोत्सव होली • FESTIVAL OF COLORS',
                    headlineSuffix: 'Vibrant Full Stack Craftsmanship',
                    desc: 'Infusing digital architecture with the joy of vibrant colors — full stack engineering, reactive interfaces, and scalable backend infrastructure.',
                    motif: (
                        <div className="flex items-center justify-center gap-3 text-2xl mb-4 text-[#FF1493]">
                            <span>🎨</span>
                            <span className="w-12 h-[2px] bg-gradient-to-r from-[#FF1493] via-[#7C4DFF] to-[#00E5FF]" />
                            <span>🌸</span>
                            <span className="w-12 h-[2px] bg-gradient-to-r from-[#00E5FF] via-[#76FF03] to-[#FFEB3B]" />
                            <span>💦</span>
                        </div>
                    ),
                    svgPattern: (
                        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="200" cy="200" r="180" stroke="#E040FB" strokeWidth="1" strokeDasharray="8 8" />
                            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                                <g key={deg} transform={`rotate(${deg}, 200, 200)`}>
                                    <circle cx="200" cy="40" r="14" fill={['#FF1493', '#00E5FF', '#FFEB3B', '#76FF03'][i % 4]} fillOpacity="0.25" />
                                    <path d="M200 60 Q215 120, 200 180" stroke="#7C4DFF" strokeWidth="0.8" />
                                </g>
                            ))}
                        </svg>
                    )
                };
            case 'dussehra':
                return {
                    greeting: 'विजयदशमी दशहरा • VICTORY OF LIGHT & TRUTH',
                    headlineSuffix: 'Precision, Valor & Engineering',
                    desc: 'Vanqishing technical debt with the golden arrow of pure architecture. Unbreakable distributed systems and unyielding performance.',
                    motif: (
                        <div className="flex items-center justify-center gap-3 text-2xl mb-4 text-[#FFB300]">
                            <span>🏹</span>
                            <span className="w-14 h-[1.5px] bg-[#FFB300]/60" />
                            <span>🔥</span>
                            <span className="w-14 h-[1.5px] bg-[#FFB300]/60" />
                            <span>🚩</span>
                        </div>
                    ),
                    svgPattern: (
                        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="200,10 390,200 200,390 10,200" stroke="#FFB300" strokeWidth="1.2" />
                            <polygon points="200,45 355,200 200,355 45,200" stroke="#D50000" strokeWidth="0.8" strokeDasharray="5 5" />
                            {[0, 90, 180, 270].map((deg) => (
                                <g key={deg} transform={`rotate(${deg}, 200, 200)`}>
                                    <line x1="200" y1="10" x2="200" y2="190" stroke="#FF6D00" strokeWidth="1" />
                                    <polygon points="200,5 206,20 194,20" fill="#FFB300" />
                                </g>
                            ))}
                        </svg>
                    )
                };
            case 'chhath':
                return {
                    greeting: 'जय छठी मइया • CHHATH PUJA SURYA ARGHYA',
                    headlineSuffix: 'Radiant Engineering & Pure Devotion',
                    desc: 'Salutations to the rising and setting cosmic energy. Engineering systems with pristine clarity, unwavering endurance, and natural purity.',
                    motif: (
                        <div className="flex items-center justify-center gap-3 text-2xl mb-4 text-[#E65100]">
                            <span>☀️</span>
                            <span className="w-12 h-[2px] bg-[#E65100]/50" />
                            <span>🌊</span>
                            <span className="w-12 h-[2px] bg-[#E65100]/50" />
                            <span>🪔</span>
                        </div>
                    ),
                    svgPattern: (
                        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="200" cy="200" r="175" stroke="#E65100" strokeWidth="1" strokeDasharray="4 4" />
                            <circle cx="200" cy="200" r="120" stroke="#FF8F00" strokeWidth="1.2" />
                            <circle cx="200" cy="200" r="60" fill="#FF8F00" fillOpacity="0.08" stroke="#E65100" strokeWidth="1" />
                            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg) => (
                                <line key={deg} x1="200" y1="130" x2="200" y2="170" transform={`rotate(${deg}, 200, 200)`} stroke="#FFB300" strokeWidth="1.5" />
                            ))}
                        </svg>
                    )
                };
            case 'raksha-bandhan':
                return {
                    greeting: 'शुभ रक्षाबंधन • SACRED THREAD OF TRUST',
                    headlineSuffix: 'Secure Bonds & Reliable Architectures',
                    desc: 'Weaving the sacred thread of unshakeable reliability, fault-tolerant data security, and lifelong software integrity.',
                    motif: (
                        <div className="flex items-center justify-center gap-3 text-2xl mb-4 text-[#D81B60]">
                            <span>🧵</span>
                            <span className="w-14 h-[1.5px] border-b-2 border-dashed border-[#D81B60]" />
                            <span>🌺</span>
                            <span className="w-14 h-[1.5px] border-b-2 border-dashed border-[#D81B60]" />
                            <span>✨</span>
                        </div>
                    ),
                    svgPattern: (
                        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="200" cy="200" r="180" stroke="#C2185B" strokeWidth="1" strokeDasharray="5 5" />
                            <circle cx="200" cy="200" r="135" stroke="#FFD700" strokeWidth="0.8" />
                            <circle cx="200" cy="200" r="80" stroke="#D81B60" strokeWidth="1.5" />
                            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                                <g key={deg} transform={`rotate(${deg}, 200, 200)`}>
                                    <ellipse cx="200" cy="95" rx="14" ry="26" stroke="#D81B60" strokeWidth="0.8" fill="#D81B60" fillOpacity="0.05" />
                                    <circle cx="200" cy="95" r="4" fill="#FFD700" />
                                </g>
                            ))}
                        </svg>
                    )
                };
            default:
                return {
                    greeting: 'नमस्ते • VEDIC HERITAGE',
                    headlineSuffix: 'Full Stack Developer & Craftsman',
                    desc: 'Dedicated to the craft of engineering — weaving scalable architectures, robust microservices, and elegant web interfaces with precision and devotion.',
                    motif: null,
                    svgPattern: (
                        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
                            <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" />
                            <path d="M200 10 L210 50 M200 10 L190 50" stroke="currentColor" strokeWidth="1" />
                            {[45, 90, 135, 180, 225, 270, 315].map((deg) => (
                                <g key={deg} transform={`rotate(${deg}, 200, 200)`}><path d="M200 10 L210 50 M200 10 L190 50" stroke="currentColor" strokeWidth="1" /></g>
                            ))}
                        </svg>
                    )
                };
        }
    };

    const festivalData = getFestivalData();

    const isChhath = theme === 'chhath';
    const isFestival = ['diwali', 'holi', 'dussehra', 'chhath', 'raksha-bandhan'].includes(theme);

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
            {/* Interactive Festive Celebration Canvas */}
            <IndicCrackers />

            {/* Chhath Puja: Atmospheric Golden Surya Bloom */}
            {isChhath && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
                    {/* Concentric Golden Surya Bloom & Core */}
                    <div className="fx-sun-bloom" />
                    <div className="fx-sun-glow" />
                    <div className="fx-sun-core" />
                </div>
            )}

            {/* Dynamic Festival Mandala Background */}
            <div className="mandala-container">
                {festivalData.svgPattern}
            </div>

            <div className="relative z-10 max-w-[920px] flex flex-col items-center">
                {/* Traditional Festive Portrait & Sacred Festival Emblem Duo */}
                <div className="relative mb-6 flex items-center justify-center gap-4 sm:gap-6">
                    {/* 1. Ornate Festival Celebration Sacred Artwork (Only shown on festival themes) */}
                    {isFestival && (
                        <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl p-1 bg-gradient-to-tr from-[var(--indic-saffron)] via-[var(--indic-border)] to-[var(--indic-terracotta)] shadow-[0_8px_30px_rgba(255,153,51,0.3)] transition transform hover:scale-105">
                            <div className="w-full h-full rounded-[14px] overflow-hidden border border-[var(--indic-border)] bg-[var(--indic-bg)] flex items-center justify-center">
                                <Image
                                    src={
                                        theme === 'diwali' ? '/assets/festivals/diwali.svg' :
                                        theme === 'holi' ? '/assets/festivals/holi.svg' :
                                        theme === 'dussehra' ? '/assets/festivals/dussehra.svg' :
                                        theme === 'chhath' ? '/assets/festivals/chhath.svg' :
                                        theme === 'raksha-bandhan' ? '/assets/festivals/raksha-bandhan.svg' :
                                        '/assets/festivals/diwali.svg'
                                    }
                                    alt={festivalData.greeting}
                                    width={144}
                                    height={144}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[var(--indic-bg)] border border-[var(--indic-border)] shadow-md text-[0.65rem] font-serif text-[var(--indic-saffron)] font-bold whitespace-nowrap">
                                {theme === 'diwali' ? '🪔 दीप पर्व' :
                                 theme === 'holi' ? '🎨 रंग पर्व' :
                                 theme === 'dussehra' ? '🏹 विजय पर्व' :
                                 theme === 'chhath' ? '☀️ छठ महापर्व' :
                                 theme === 'raksha-bandhan' ? '🧵 रक्षा पर्व' : '𑁍 उत्सव'}
                            </div>
                        </div>
                    )}

                    {/* 2. Personal Portrait Frame */}
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[var(--indic-border)] via-[var(--indic-saffron)] to-[var(--indic-terracotta)] shadow-[0_8px_30px_rgba(255,153,51,0.25)] transition transform hover:scale-105">
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-[var(--indic-border)] bg-[var(--indic-bg)]">
                            <Image
                                src="/assets/avatar.png"
                                alt="Chitranjan Kumar Gupta"
                                width={180}
                                height={180}
                                priority
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[var(--indic-bg)] border border-[var(--indic-border)] shadow-md text-[0.65rem] font-serif text-[var(--indic-terracotta)] font-bold whitespace-nowrap">
                            <span>CKG</span>
                        </div>
                    </div>
                </div>

                {festivalData.motif}

                {/* Eyebrow / Aura Pill */}
                <div className="mb-4">
                    {isChhath ? (
                        <div className="chhath-aura-badge">
                            <div className="chhath-aura-glow" />
                            <span className="text-[var(--indic-saffron)] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm">
                                {festivalData.greeting}
                            </span>
                        </div>
                    ) : (
                        <span className="text-indic-saffron font-bold tracking-[0.25em] uppercase text-xs sm:text-sm block">
                            {festivalData.greeting}
                        </span>
                    )}
                </div>

                {/* Main Hero Headline */}
                <h1 className={`text-[clamp(2.6rem,6.5vw,5.2rem)] font-extrabold mb-1 leading-tight font-serif tracking-tight ${isChhath ? 'chhath-hero-title' : ''}`}>
                    Chitranjan Kumar Gupta
                </h1>
                <div className="text-sm md:text-base font-semibold tracking-wider text-indic-saffron mb-3 opacity-90">
                    चितरंजन कुमार गुप्ता &bull; Bihar, India
                </div>

                <p className={`text-[clamp(1.15rem,2vw,1.6rem)] font-semibold mb-6 italic ${isChhath ? 'chhath-river-text' : 'text-indic-terracotta'}`}>
                    {festivalData.headlineSuffix}
                </p>

                <p className="text-[clamp(0.95rem,1.8vw,1.15rem)] text-indic-fg/80 max-w-[680px] mx-auto mb-10 font-medium italic leading-relaxed">
                    {festivalData.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}
                        className="btn-indic">
                        दर्शन projects
                    </a>
                    <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}
                        className="px-8 py-3 text-indic-terracotta font-bold border-b-2 border-indic-terracotta hover:border-indic-saffron transition-all">
                        संपर्क contact
                    </a>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   AURORA — Dreamy glassmorphism
═══════════════════════════════════════ */
function HeroAurora() {
    const typed = useTypewriter(PHRASES);
    const handleScroll = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section
            id="hero"
            className="relative min-h-svh grid grid-cols-1 md:grid-cols-2 items-center gap-16 pt-32 pb-16 px-[4vw] max-w-[1200px] mx-auto overflow-hidden"
        >
            {/* Background orbs */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute w-[500px] h-[500px] -top-[150px] -left-[100px] rounded-full blur-[80px] animate-orb-float" style={{ background: 'radial-gradient(circle, var(--orb-1) 0%, transparent 70%)', animationDelay: '0s' }} />
                <div className="absolute w-[400px] h-[400px] top-[40%] -right-[100px] rounded-full blur-[80px] animate-orb-float" style={{ background: 'radial-gradient(circle, var(--orb-2) 0%, transparent 70%)', animationDelay: '-3s' }} />
                <div className="absolute w-[350px] h-[350px] bottom-0 left-[30%] rounded-full blur-[80px] animate-orb-float" style={{ background: 'radial-gradient(circle, var(--orb-3) 0%, transparent 70%)', animationDelay: '-6s' }} />
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(color-mix(in srgb, var(--accent-1) 5%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--accent-1) 5%, transparent) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
                    }}
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6 animate-fade-slide-up md:text-left text-center">
                <div className="inline-flex items-center gap-2 px-4 py-[0.45rem] rounded-full bg-[var(--accent-2)]/10 border border-[var(--accent-2)]/25 text-[0.8rem] font-medium text-[var(--accent-2)] w-fit mx-auto md:mx-0">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-2)] animate-pulse-badge" />
                    Available for opportunities
                </div>

                <h1 className="text-[clamp(2.8rem,5.5vw,4.5rem)] font-black tracking-[-0.04em] leading-[1.05]">
                    Hi, I&apos;m{' '}
                    <span
                        className="bg-gradient-text bg-clip-text"
                        style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                    >
                        Chitranjan Kumar Gupta
                    </span>
                </h1>

                <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] font-semibold text-text-secondary tracking-[-0.02em] min-h-[2.5rem]">
                    I build <span className="text-text-primary">{typed}</span>
                    <span className="text-accent-1 font-light animate-blink">|</span>
                </h2>

                <p className="text-[1.05rem] text-text-secondary leading-[1.8] max-w-[520px] mx-auto md:mx-0">
                    A passionate Full Stack Developer and creator from Bihar, India. Engineering performant web applications,
                    React Native mobile apps, browser extensions, and serverless edge solutions with Next.js, Node.js, and Cloudflare.
                </p>

                <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                    <a
                        href="#projects"
                        onClick={(e) => handleScroll(e, '#projects')}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[0.9rem] font-semibold tracking-[0.02em] text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-accent shadow-[0_4px_24px_var(--accent-1)]/40 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_var(--accent-1)]/55"
                    >
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => handleScroll(e, '#contact')}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-[0.9rem] font-semibold tracking-[0.02em] text-text-primary bg-white/[0.06] border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                    >
                        Get In Touch
                    </a>
                </div>

                <div className="flex items-center gap-6 pt-2 justify-center md:justify-start">
                    {[
                        { num: '1.6', label: 'Years Exp.' },
                        { num: '15+', label: 'Projects' },
                        { num: '4+', label: 'Extensions' },
                    ].map(({ num, label }, i) => (
                        <Fragment key={num}>
                            {i > 0 && <div className="w-px h-9 bg-[rgba(255,255,255,0.08)]" />}
                            <div className="text-center">
                                <span
                                    className="block text-[1.8rem] font-extrabold tracking-[-0.04em] bg-gradient-text bg-clip-text"
                                    style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                                >
                                    {num}
                                </span>
                                <span className="text-[0.75rem] text-text-muted font-medium uppercase tracking-[0.05em]">{label}</span>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>

            {/* Avatar */}
            <div className="flex justify-center items-center relative animate-fade-slide-up-delayed order-first md:order-none">
                <div className="absolute rounded-full blur-[30px] animate-avatar-pulse md:w-[380px] md:h-[380px] w-[220px] h-[220px]" style={{ background: 'radial-gradient(circle, var(--avatar-glow) 0%, transparent 70%)' }} />
                <Image
                    src="/assets/avatar.png"
                    alt="Chitranjan Kumar Gupta"
                    width={380}
                    height={380}
                    priority
                    className="rounded-full object-cover relative z-10 md:w-[380px] md:h-[380px] w-[220px] h-[220px]"
                    style={{
                        border: '3px solid transparent',
                        background: 'linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box, var(--gradient) border-box',
                        boxShadow: '0 0 60px var(--avatar-glow)',
                    }}
                />
            </div>

            {/* Scroll indicator */}
            <a
                href="#about"
                onClick={(e) => handleScroll(e, '#about')}
                aria-label="Scroll down"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 col-span-full"
            >
                {[0, 0.15, 0.3].map((delay, i) => (
                    <span
                        key={i}
                        className="block w-2 h-2 border-r-2 border-b-2 border-text-muted rotate-45 animate-scroll-bounce"
                        style={{ animationDelay: `${delay}s` }}
                    />
                ))}
            </a>
        </section>
    );
}


/* ═══════════════════════════════════════
   TRON — Terminal boot sequence
═══════════════════════════════════════ */
function HeroTron() {
    const typed = useTypewriter(PHRASES);
    const { visibleLines, done } = useBootSequence(TRON_BOOT);
    const handleScroll = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="hero" className="relative min-h-svh flex flex-col justify-center pt-24 pb-16 px-[4vw] max-w-[1200px] mx-auto overflow-hidden">
            {/* Grid bg is handled by CSS */}
            <div className="flex flex-col gap-8 animate-fade-slide-up">
                {/* Boot sequence */}
                <div className="font-mono text-[0.8rem] leading-[1.8] text-accent-2 mb-4 min-h-[180px]">
                    {visibleLines.map((line, i) => (
                        <div key={i} className="tron-line-appear" style={{ animationDelay: `${i * 0.1}s` }}>
                            <span className="text-accent-1 opacity-60">[{String(i).padStart(2, '0')}]</span>{' '}
                            <span>{line}</span>
                        </div>
                    ))}
                    {!done && <span className="inline-block w-2 h-4 bg-accent-1 animate-blink ml-1" />}
                </div>

                {/* Main content — appears after boot */}
                <div className={`transition-all duration-700 ${done ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {/* Status bar */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-2 h-2 bg-accent-1 shadow-[0_0_8px_var(--accent-1)]" />
                        <span className="font-mono text-[0.75rem] tracking-[0.2em] uppercase text-accent-1">
                            SYSTEM ACTIVE // PORTFOLIO LOADED
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
                        <div>
                            {/* Name */}
                            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-bold tracking-[0.08em] leading-[1.1] uppercase mb-4">
                                <span className="text-accent-1">&gt;</span>{' '}
                                <span className="text-text-primary" style={{ textShadow: '0 0 20px var(--accent-1), 0 0 40px color-mix(in srgb, var(--accent-1) 40%, transparent)' }}>
                                    CHITRANJAN
                                </span>
                            </h1>

                            {/* Typed */}
                            <h2 className="font-mono text-[clamp(1.1rem,2vw,1.5rem)] text-text-secondary tracking-[0.05em] mb-6 min-h-[2rem]">
                                <span className="text-accent-2">&gt;</span> building{' '}
                                <span className="text-accent-1">{typed}</span>
                                <span className="inline-block w-2 h-5 bg-accent-1 animate-blink ml-1 align-middle" />
                            </h2>

                            {/* Description */}
                            <p className="font-mono text-[0.9rem] text-text-secondary leading-[1.8] max-w-[550px] mb-8"
                                style={{ borderLeft: '2px solid var(--accent-1)', paddingLeft: '1rem' }}>
                                Full Stack Developer // React + Node.js + Cloud Infrastructure.
                                Specializing in high-performance systems, clean architecture, and blazing-fast UX.
                            </p>

                            {/* CTA */}
                            <div className="flex gap-4 flex-wrap">
                                <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}
                                    className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[0.8rem] font-bold tracking-[0.15em] uppercase text-accent-1 border border-accent-1 transition-all duration-200 hover:bg-[color-mix(in_srgb,var(--accent-1)_12%,transparent)] hover:shadow-[0_0_20px_color-mix(in_srgb,var(--accent-1)_30%,transparent)]">
                                    [ENTER] VIEW_PROJECTS
                                </a>
                                <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}
                                    className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[0.8rem] tracking-[0.1em] uppercase text-text-secondary border border-[rgba(255,255,255,0.15)] transition-all duration-200 hover:border-accent-2 hover:text-accent-2">
                                    [TAB] CONTACT
                                </a>
                            </div>
                        </div>

                        {/* Avatar — hexagonal */}
                        <div className="hidden md:flex flex-col items-center gap-4">
                            <div className="relative">
                                <Image
                                    src="/assets/avatar.png"
                                    alt="Chitranjan Kumar Gupta"
                                    width={260}
                                    height={260}
                                    priority
                                    className="object-cover w-[260px] h-[260px]"
                                    style={{
                                        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                        filter: `drop-shadow(0 0 20px var(--accent-1)) drop-shadow(0 0 4px var(--accent-2))`,
                                    }}
                                />
                                {/* Corner brackets */}
                                <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-accent-2" style={{ boxShadow: '0 0 8px var(--accent-2)' }} />
                                <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-accent-2" style={{ boxShadow: '0 0 8px var(--accent-2)' }} />
                            </div>
                            {/* Stats as terminal readout */}
                            <div className="font-mono text-[0.7rem] text-text-muted space-y-1 text-center">
                                <div><span className="text-accent-1">PROJECTS:</span> 12+</div>
                                <div><span className="text-accent-1">EXTENSIONS:</span> 4</div>
                                <div><span className="text-accent-1">CORP:</span> TCS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


/* ═══════════════════════════════════════
   ARES — Brutalist, raw, powerful
═══════════════════════════════════════ */
function HeroAres() {
    const typed = useTypewriter(PHRASES);
    const handleScroll = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="hero" className="relative min-h-svh flex flex-col justify-center pt-24 pb-16 px-[4vw] max-w-[1200px] mx-auto overflow-hidden">
            <div className="animate-fade-slide-up">
                {/* Oversized name */}
                <div className="mb-8">
                    <div className="text-[0.85rem] font-bold tracking-[0.2em] uppercase text-accent-1 mb-4"
                        style={{ borderLeft: '4px solid var(--accent-1)', paddingLeft: '12px' }}>
                        FULL STACK DEVELOPER
                    </div>
                    <h1 className="text-[clamp(4rem,12vw,10rem)] font-black uppercase leading-[0.9] tracking-[-0.02em]"
                        style={{ WebkitTextStroke: '2px var(--accent-1)' }}>
                        CHITRA
                        <br />
                        <span className="text-accent-1" style={{ WebkitTextStroke: '0px' }}>NJAN</span>
                    </h1>
                </div>

                {/* Accent bar */}
                <div className="w-full h-[6px] bg-accent-1 mb-8" />

                {/* Typed + description side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div>
                        <h2 className="text-[clamp(1.2rem,2vw,1.6rem)] font-extrabold uppercase tracking-[0.04em] min-h-[2.5rem] mb-4">
                            I BUILD <span className="text-accent-1">{typed}</span>
                            <span className="text-accent-2 animate-blink">_</span>
                        </h2>
                        <p className="text-[1rem] text-text-secondary leading-[1.8] font-semibold">
                            Crafting high-performance web experiences with React, Node.js, and modern cloud infrastructure.
                            No fluff. Just raw, scalable code.
                        </p>
                    </div>

                    {/* Stats — giant raw numbers */}
                    <div className="flex gap-8 items-end md:justify-end">
                        {[
                            { num: '12+', label: 'PROJECTS' },
                            { num: '4', label: 'EXTENSIONS' },
                            { num: 'TCS', label: 'ENTERPRISE' },
                        ].map(({ num, label }) => (
                            <div key={label} className="text-center">
                                <span className="block text-[3.5rem] font-black leading-none text-accent-1">{num}</span>
                                <span className="text-[0.65rem] font-bold tracking-[0.2em] text-text-muted uppercase">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA buttons — bold blocks */}
                <div className="flex gap-4 flex-wrap">
                    <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}
                        className="inline-flex items-center gap-2 px-8 py-4 text-[0.85rem] font-black uppercase tracking-[0.2em] text-[#000] bg-accent-1 border-2 border-accent-1 transition-all duration-150 hover:translate-x-1 hover:translate-y-1"
                        style={{ boxShadow: '6px 6px 0 var(--accent-1)' }}>
                        VIEW WORK →
                    </a>
                    <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}
                        className="inline-flex items-center gap-2 px-8 py-4 text-[0.85rem] font-black uppercase tracking-[0.2em] text-text-primary border-2 border-[rgba(255,255,255,0.2)] transition-all duration-150 hover:border-accent-1 hover:text-accent-1">
                        CONTACT
                    </a>
                </div>
            </div>
        </section>
    );
}


/* ═══════════════════════════════════════
   WARFARE — Military dossier / briefing
═══════════════════════════════════════ */
function HeroCod() {
    const typed = useTypewriter(PHRASES);
    const handleScroll = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="hero" className="relative min-h-svh flex items-center pt-24 pb-16 px-[4vw] max-w-[1200px] mx-auto overflow-hidden">
            <div className="w-full animate-fade-slide-up">
                {/* Classification header */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-accent-1 text-[1.2rem]">⊕</span>
                    <div className="h-[2px] flex-1"
                        style={{ background: 'repeating-linear-gradient(90deg, var(--accent-1) 0px, var(--accent-1) 8px, transparent 8px, transparent 14px)' }} />
                    <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-accent-1">
                        CLASSIFIED // PERSONNEL FILE
                    </span>
                    <div className="h-[2px] flex-1"
                        style={{ background: 'repeating-linear-gradient(90deg, var(--accent-1) 0px, var(--accent-1) 8px, transparent 8px, transparent 14px)' }} />
                    <span className="text-accent-1 text-[1.2rem]">⊕</span>
                </div>

                {/* Dossier card */}
                <div className="border border-[color-mix(in_srgb,var(--accent-1)_40%,rgba(80,70,40,0.5))] p-6 md:p-8"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))', background: 'rgba(14,16,10,0.95)' }}>

                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
                        {/* ID photo */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="relative">
                                <Image
                                    src="/assets/avatar.png"
                                    alt="Chitranjan Kumar Gupta"
                                    width={180}
                                    height={180}
                                    priority
                                    className="object-cover w-[180px] h-[180px]"
                                    style={{
                                        clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                                        filter: 'contrast(1.1) saturate(0.85)',
                                        border: '2px solid var(--accent-1)',
                                    }}
                                />
                                <div className="absolute top-1 right-1 text-[0.55rem] font-mono tracking-[0.15em] text-accent-1 bg-[rgba(0,0,0,0.7)] px-1">
                                    ID-2026
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="w-2 h-2 bg-[#4ade80] shadow-[0_0_6px_#4ade80]" />
                                <span className="font-mono text-[0.65rem] tracking-[0.1em] text-[#4ade80] uppercase">ACTIVE</span>
                            </div>
                        </div>

                        {/* Personnel details */}
                        <div>
                            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold uppercase tracking-[0.06em] leading-[1.1] mb-4">
                                CHITRANJAN
                                <br />
                                <span className="text-accent-1">KUMAR GUPTA</span>
                            </h1>

                            {/* Fields */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                                {[
                                    { label: 'CALLSIGN', value: 'CKG' },
                                    { label: 'RANK', value: 'FULL STACK DEV' },
                                    { label: 'PROJECTS', value: '12+' },
                                    { label: 'CORP / ORG', value: 'TCS' },
                                ].map(({ label, value }) => (
                                    <div key={label} className="py-2 border-b border-[color-mix(in_srgb,var(--accent-1)_25%,transparent)]">
                                        <div className="font-mono text-[0.55rem] tracking-[0.2em] text-text-muted uppercase">{label}</div>
                                        <div className="font-mono text-[0.85rem] text-text-primary font-bold">{value}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Mission brief */}
                            <div className="mb-6">
                                <div className="font-mono text-[0.6rem] tracking-[0.2em] text-accent-1 uppercase mb-2">{'// CURRENT MISSION'}</div>
                                <p className="text-[0.9rem] text-text-secondary leading-[1.7] font-mono min-h-[1.5rem]">
                                    Building <span className="text-accent-1">{typed}</span>
                                    <span className="inline-block w-2 h-4 bg-accent-1 animate-blink ml-1 align-middle" />
                                </p>
                                <p className="text-[0.85rem] text-text-secondary leading-[1.7] font-mono mt-2">
                                    Specialist in React, Node.js, and cloud ops. Deployed across multiple theaters of operation.
                                    Clean code. Zero downtime. Mission accomplished.
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="flex gap-3 flex-wrap">
                                <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}
                                    className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[0.75rem] font-bold tracking-[0.15em] uppercase text-[#0a0b07] bg-accent-1 border border-accent-1 transition-all duration-150 hover:brightness-110"
                                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                                    ⊕ VIEW OPERATIONS
                                </a>
                                <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}
                                    className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[0.75rem] tracking-[0.12em] uppercase text-text-secondary border border-[color-mix(in_srgb,var(--accent-1)_40%,rgba(80,70,40,0.5))] transition-all duration-150 hover:border-accent-1 hover:text-accent-1"
                                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                                    TRANSMIT MESSAGE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom hazard stripe */}
                <div className="h-[3px] mt-6"
                    style={{ background: 'repeating-linear-gradient(90deg, var(--accent-1) 0px, var(--accent-1) 12px, transparent 12px, transparent 20px)' }} />
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   MODERN — Clean centered layout
   Inspired by nextjs.org
   — Massive headline, sleek subtext, primary CTA
═══════════════════════════════════════ */
function HeroModern() {
    const handleScroll = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
            <div className="modern-bg-container">
                <div className="modern-grid-overlay" />
                <div className="modern-mesh-orb" />
            </div>

            <div className="relative z-10 max-w-[1200px] animate-modern-reveal">
                <div className="mb-12 flex justify-center">
                    <div className="geist-badge bg-[var(--accent-2)]/5 text-[var(--accent-2)] border-[var(--accent-2)]/20 px-4 py-1.5 rounded-full flex items-center gap-2 font-bold text-[0.85rem] tracking-tight">
                        <span className="flex w-2 h-2 rounded-full bg-[var(--accent-2)] animate-pulse" />
                        Available for opportunities
                    </div>
                </div>

                <h1 className="hero-title mb-8">
                    Chitranjan Kumar Gupta
                </h1>

                <p className="text-[clamp(1.3rem,2.5vw,2rem)] font-bold tracking-tight text-geist-foreground mb-6">
                    Full Stack Developer & Software Engineer
                </p>

                <p className="hero-sub mx-auto mb-14 font-medium">
                    Crafting high-performance web applications, scalable microservices, and pixel-perfect digital experiences with React, Node.js, and cloud platforms.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}
                        className="btn-vercel">
                        View Projects
                    </a>
                    <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}
                        className="modern-btn-secondary px-8 py-3.5 border-geist-gray-200 text-geist-foreground font-bold hover:bg-geist-gray-100 transition-all rounded-lg">
                        Get In Touch
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   APPLE — Cupertino Keynote Hero (VisionOS & Apple Intelligence)
═══════════════════════════════════════ */
function HeroApple() {
    const handleScroll = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section id="hero" className="apple-hero relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden">
            {/* Apple Intelligence Multi-Color Fluid Glow */}
            <div className="apple-intelligence-glow" />

            {/* Top Product Hero Intro */}
            <div className="relative z-10 max-w-[1050px] flex flex-col items-center text-center">
                {/* Artificial Intelligence Aura Badge */}
                <div className="apple-intelligence-badge mb-6">
                    <span className="apple-intelligence-ring" />
                    <span>Artificial Intelligence Ready</span>
                    <span className="text-apple-muted">•</span>
                    <span className="text-[0.8rem] font-normal text-apple-body">Available for Work</span>
                </div>

                <div className="text-[0.85rem] md:text-[0.95rem] font-semibold text-apple-accent tracking-widest uppercase mb-3">
                    Developer & Systems Architect
                </div>

                {/* Massive Typographic Hero Headline */}
                <h1 className="apple-hero-headline mb-3">
                    Chitranjan Kumar Gupta.
                </h1>

                <h2 className="text-[clamp(1.6rem,3.8vw,2.8rem)] font-bold tracking-tight mb-6">
                    <span className="apple-gradient-headline">Pro performance. Pure craft.</span>
                </h2>

                <p className="apple-hero-desc max-w-[640px] mx-auto mb-8 text-[1.05rem]">
                    Engineered from the silicon up. Crafting ultra-responsive web applications, scalable distributed microservices, and fluid spatial experiences with React and Node.js.
                </p>

                {/* Apple Call to Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                    <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}
                        className="apple-btn-primary">
                        View Projects
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                    <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}
                        className="apple-btn-secondary">
                        Get in Touch
                    </a>
                </div>

                {/* Key Spec Stats Bar at Bottom */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-[800px] pt-6 border-t border-apple-border text-center">
                    <div>
                        <div className="text-[1.8rem] font-bold text-apple-heading tracking-tight leading-none mb-1">1.6 Yrs</div>
                        <div className="text-[0.7rem] font-medium text-apple-muted uppercase tracking-wider">Enterprise Exp</div>
                    </div>
                    <div>
                        <div className="text-[1.8rem] font-bold text-apple-heading tracking-tight leading-none mb-1">20+</div>
                        <div className="text-[0.7rem] font-medium text-apple-muted uppercase tracking-wider">Apps Shipped</div>
                    </div>
                    <div>
                        <div className="text-[1.8rem] font-bold text-apple-accent tracking-tight leading-none mb-1">100%</div>
                        <div className="text-[0.7rem] font-medium text-apple-muted uppercase tracking-wider">Client Sat</div>
                    </div>
                    <div>
                        <div className="text-[1.8rem] font-bold text-apple-heading tracking-tight leading-none mb-1">99.9%</div>
                        <div className="text-[0.7rem] font-medium text-apple-muted uppercase tracking-wider">System Uptime</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   CYBERSECURITY / HACKER / RED TEAM
   C2 Interactive Terminal & Exploit Payload Telemetry
═══════════════════════════════════════ */
function HeroHacker() {
    const handleScroll = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const terminalLogs = [
        '[*] Initializing RedTeam C2 Framework v4.9.2-RELEASE...',
        '[+] Target architecture: x86_64-gnu-linux :: MEM_MAP: 0x7FFF5FBFF000',
        '[+] Privilege Escalation Vector: CAP_SYS_ADMIN bypass verified',
        '[+] Threat Actor ID: CHITRANJAN_KUMAR_GUPTA [OPERATIONAL]',
        '[*] Specialization: Application Security, Full-Stack Exploitation, Zero-Day Hardening',
        '[>] Command listener active on 0.0.0.0:4444 (ESTABLISHED)',
    ];

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-4 md:px-8 overflow-hidden font-mono">
            {/* Background Memory Matrix Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden text-[0.65rem] text-[var(--hacker-accent)] select-none">
                <div className="p-4 leading-relaxed font-mono whitespace-pre">
                    {`0x00007FFF  48 89 E5 48 83 EC 20 48 89 7D E8 48 89 75 E0 48  H..H.. H.}dH.u`}<br />
                    {`0x00007F10  8B 45 E8 48 8B 00 48 8B 40 18 48 8B 7D E0 FF D0  .E.H..H.@.H.}.`}<br />
                    {`0x00007F20  89 45 FC 83 7D FC 00 74 12 48 8D 3D 45 12 00 00  .E..}..t.H.=E..`}<br />
                    {`0x00007F30  E8 A4 FE FF FF B8 01 00 00 00 EB 0A B8 00 00 00  ...............`}
                </div>
            </div>

            <div className="relative z-10 w-full max-w-[1050px]">
                {/* Cyber Security Status Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-black/60 border border-[var(--hacker-border)] rounded-t-lg backdrop-blur-md mb-0 text-xs">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block animate-pulse" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                        <span className="ml-2 font-bold text-[var(--hacker-accent)] tracking-wider">
                            ROOT@CKG-C2:~# ./payload.elf --elevate
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-[0.7rem] text-text-muted">
                        <span className="px-2 py-0.5 rounded bg-[var(--hacker-accent)]/15 text-[var(--hacker-accent)] font-bold border border-[var(--hacker-accent)]/30">
                            DEFCON 1
                        </span>
                        <span className="hidden sm:inline">SHA256: 9e107d9d372bb6826bd81d3542a419d6</span>
                    </div>
                </div>

                {/* Main Interactive Terminal Pane */}
                <div className="p-6 md:p-8 bg-[var(--hacker-panel)] border-x border-b border-[var(--hacker-border)] rounded-b-lg shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Terminal Telemetry Logs */}
                        <div className="lg:col-span-8">
                            <div className="text-xs text-[var(--hacker-accent)] mb-4 space-y-1 font-mono">
                                {terminalLogs.map((log, idx) => (
                                    <div key={idx} className="leading-relaxed opacity-90">{log}</div>
                                ))}
                            </div>

                            <div className="my-6 border-t border-[var(--hacker-border)]/40 pt-4">
                                <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold tracking-tight text-white mb-2 uppercase leading-none">
                                    Chitranjan <span className="text-[var(--hacker-accent)]">Kumar Gupta</span>
                                </h1>
                                <p className="text-base md:text-lg text-[var(--hacker-secondary)] font-bold tracking-wide mb-4">
                                    Full-Stack Engineer & Offensive Security Architect
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed max-w-[650px] mb-6">
                                    Hardening mission-critical web applications from the inside out. Specialist in secure full-stack development, zero-day threat modeling, penetration testing, and bulletproof microservice architectures.
                                </p>
                            </div>

                            {/* C2 Command CTAs */}
                            <div className="flex flex-wrap gap-4 items-center">
                                <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}
                                    className="btn-hacker-primary">
                                    <span>☠ EXECUTE_PROJECTS()</span>
                                </a>
                                <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}
                                    className="btn-hacker-secondary">
                                    <span>ENCRYPTED_COMMS</span>
                                </a>
                            </div>
                        </div>

                        {/* Operative Portrait Frame with Target Crosshair Reticle */}
                        <div className="lg:col-span-4 flex flex-col items-center">
                            <div className="relative w-48 h-48 md:w-56 md:h-56 p-1 border-2 border-[var(--hacker-accent)] bg-black shadow-[0_0_25px_var(--hacker-glow)]">
                                {/* Corner Reticles */}
                                <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[var(--hacker-secondary)]" />
                                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[var(--hacker-secondary)]" />
                                <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[var(--hacker-secondary)]" />
                                <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[var(--hacker-secondary)]" />

                                <div className="w-full h-full overflow-hidden relative grayscale contrast-125 hover:grayscale-0 transition duration-300">
                                    <Image
                                        src="/assets/avatar.png"
                                        alt="CKG Operative"
                                        width={240}
                                        height={240}
                                        priority
                                        className="object-cover w-full h-full"
                                    />
                                    {/* Scanline Sweep Animation */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--hacker-accent)]/20 to-transparent pointer-events-none animate-pulse" />
                                </div>

                                <div className="absolute bottom-2 right-2 bg-black/90 px-2 py-0.5 border border-[var(--hacker-accent)] text-[0.62rem] text-[var(--hacker-accent)] font-bold">
                                    TARGET: AUTH_OK
                                </div>
                            </div>
                            <div className="mt-3 text-[0.68rem] text-text-muted text-center tracking-widest uppercase">
                                CALLSIGN: <span className="text-[var(--hacker-accent)] font-bold">CKG_ROOT</span>
                            </div>
                        </div>
                    </div>

                    {/* Threat Intel Metrics Footer */}
                    <div className="mt-8 pt-6 border-t border-[var(--hacker-border)]/50 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-3 bg-black/40 border border-[var(--hacker-border)]/30 rounded">
                            <div className="text-[1.5rem] font-black text-[var(--hacker-accent)]">20+</div>
                            <div className="text-[0.65rem] text-text-muted uppercase tracking-wider">Breaches Secured</div>
                        </div>
                        <div className="p-3 bg-black/40 border border-[var(--hacker-border)]/30 rounded">
                            <div className="text-[1.5rem] font-black text-[var(--hacker-secondary)]">0-DAY</div>
                            <div className="text-[0.65rem] text-text-muted uppercase tracking-wider">Exploit Hardening</div>
                        </div>
                        <div className="p-3 bg-black/40 border border-[var(--hacker-border)]/30 rounded">
                            <div className="text-[1.5rem] font-black text-white">99.99%</div>
                            <div className="text-[0.65rem] text-text-muted uppercase tracking-wider">C2 Uptime</div>
                        </div>
                        <div className="p-3 bg-black/40 border border-[var(--hacker-border)]/30 rounded">
                            <div className="text-[1.5rem] font-black text-[var(--hacker-accent)]">256-BIT</div>
                            <div className="text-[0.65rem] text-text-muted uppercase tracking-wider">AES Encryption</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
