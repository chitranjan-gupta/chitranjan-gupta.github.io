'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

const CATEGORIES = [
    {
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
        ),
        title: 'Frontend',
        tags: [
            { label: 'React', cls: 'tag-react' }, { label: 'Next.js', cls: 'tag-next' },
            { label: 'TypeScript', cls: 'tag-ts' }, { label: 'JavaScript', cls: 'tag-js' },
            { label: 'HTML5', cls: 'tag-html' }, { label: 'CSS3', cls: 'tag-css' },
            { label: 'Redux', cls: 'tag-redux' }, { label: 'Vite', cls: 'tag-vite' },
        ],
    },
    {
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
            </svg>
        ),
        title: 'Backend',
        tags: [
            { label: 'Node.js', cls: 'tag-node' }, { label: 'Express', cls: 'tag-express' },
            { label: 'Python', cls: 'tag-python' }, { label: 'MongoDB', cls: 'tag-mongo' },
            { label: 'PostgreSQL', cls: 'tag-postgres' }, { label: 'Redis', cls: 'tag-redis' },
            { label: 'GraphQL', cls: 'tag-graphql' }, { label: 'REST APIs', cls: 'tag-rest' },
        ],
    },
    {
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        title: 'DevOps & Tools',
        tags: [
            { label: 'AWS', cls: 'tag-aws' }, { label: 'Docker', cls: 'tag-docker' },
            { label: 'Git', cls: 'tag-git' }, { label: 'CI/CD', cls: 'tag-ci' },
            { label: 'Linux', cls: 'tag-linux' }, { label: 'Nginx', cls: 'tag-nginx' },
            { label: 'Jest', cls: 'tag-jest' }, { label: 'Figma', cls: 'tag-figma' },
        ],
    },
];

const BARS = [
    { label: 'React / Next.js', pct: 92 },
    { label: 'Node.js / Express', pct: 88 },
    { label: 'TypeScript', pct: 85 },
    { label: 'Databases (SQL & NoSQL)', pct: 80 },
    { label: 'AWS / Cloud / DevOps', pct: 72 },
];

export default function Skills() {
    const { design } = useTheme();
    if (design === 'tron') return <SkillsTron />;
    if (design === 'ares') return <SkillsAres />;
    if (design === 'cod') return <SkillsCod />;
    if (design === 'modern') return <SkillsModern />;
    if (design === 'indic') return <SkillsIndic />;
    return <SkillsAurora />;
}

/* ═══════════════════════════════════════
   INDIC — Heritage skills layout
 ═══════════════════════════════════════ */
function SkillsIndic() {
    return (
        <section id="skills" className="py-32 md:py-48 relative bg-indic-bg border-y border-indic-border/20 overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-24 text-center animate-modern-reveal">
                    <div className="text-indic-saffron font-bold tracking-[0.2em] uppercase text-xs mb-4">हमारी कला OUR CRAFT</div>
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-6 italic">
                        Mastery of the <span className="indic-gradient-text">Digital Arts</span>.
                    </h2>
                    <p className="max-w-[600px] mx-auto text-indic-fg/70 italic font-medium">
                        A harmonious blend of ancient wisdom and modern technology, refined for performance and beauty.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
                    {CATEGORIES.map((cat, idx) => (
                        <div key={cat.title}
                            className="jaali-card group animate-modern-reveal"
                            style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="flex items-center gap-5 mb-10">
                                <div className="w-16 h-16 rounded-full bg-indic-bg border-2 border-indic-saffron flex items-center justify-center text-indic-saffron shadow-inner">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
                                    </svg>
                                </div>
                                <h3 className="text-[1.5rem] font-bold text-indic-fg italic tracking-tight">{cat.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {cat.tags.map(t => (
                                    <span key={t.label} className="px-4 py-2 text-[0.85rem] font-bold border border-indic-border/40 text-indic-terracotta rounded-sm hover:border-indic-saffron hover:bg-indic-saffron hover:text-white transition-all cursor-default italic">
                                        {t.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-[1000px] mx-auto animate-modern-reveal">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        {BARS.map(bar => (
                            <div key={bar.label}>
                                <div className="flex justify-between items-end mb-4">
                                    <span className="text-[1.1rem] font-bold text-indic-fg italic">{bar.label}</span>
                                    <span className="text-[0.9rem] font-bold text-indic-saffron">{bar.pct}%</span>
                                </div>
                                <div className="h-1 bg-indic-border/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-indic-saffron"
                                        style={{ width: `${bar.pct}%` }}
                                    />
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
   AURORA — Tag clouds + progress bars
═══════════════════════════════════════ */
function SkillsAurora() {
    const barsRef = useRef(null);
    useEffect(() => {
        if (!barsRef.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                barsRef.current.querySelectorAll('[data-width]').forEach((bar) => { bar.style.width = `${bar.dataset.width}%`; });
                observer.disconnect();
            }
        }, { threshold: 0.3 });
        observer.observe(barsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="py-28 md:py-[7rem] bg-bg-secondary">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="text-center mb-16 reveal">
                    <p className="text-[0.8rem] font-semibold tracking-[0.15em] uppercase text-accent-2 mb-3">What I work with</p>
                    <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1]">
                        My{' '}
                        <span className="bg-gradient-text bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Skills</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 reveal">
                    {CATEGORIES.map(({ icon, title, tags }) => (
                        <div key={title} className="bg-white/[0.04] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-7 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(99,102,241,0.4)] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="flex items-center justify-center w-[42px] h-[42px] rounded-[8px] bg-[linear-gradient(135deg,rgba(99,102,241,0.2),rgba(6,182,212,0.15))] text-accent-2 border border-[rgba(99,102,241,0.2)]">{icon}</div>
                                <h3 className="text-[1rem] font-bold">{title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-[0.6rem]">
                                {tags.map(({ label, cls }) => (<span key={label} className={`skill-tag ${cls}`}>{label}</span>))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid gap-5 max-w-[700px] mx-auto reveal" ref={barsRef}>
                    {BARS.map(({ label, pct }) => (
                        <div key={label} className="flex flex-col gap-2">
                            <div className="flex justify-between text-[0.875rem] font-semibold text-text-secondary">
                                <span>{label}</span><span className="text-accent-2">{pct}%</span>
                            </div>
                            <div className="h-[6px] bg-white/[0.06] rounded-full overflow-hidden">
                                <div className="h-full rounded-full bg-gradient-accent shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-[width] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]" data-width={pct} style={{ width: 0 }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


/* ═══════════════════════════════════════
   TRON — Terminal readout
═══════════════════════════════════════ */
function SkillsTron() {
    const barsRef = useRef(null);
    useEffect(() => {
        if (!barsRef.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                barsRef.current.querySelectorAll('[data-width]').forEach((bar) => { bar.style.width = `${bar.dataset.width}%`; });
                observer.disconnect();
            }
        }, { threshold: 0.3 });
        observer.observe(barsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="py-28 md:py-[7rem] bg-bg-secondary">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-12 reveal">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent-1 font-mono text-[0.8rem]">&gt;</span>
                        <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-accent-1">SCAN // CAPABILITIES</span>
                        <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--accent-1)_25%,transparent)]" />
                    </div>
                    <h2 className="font-mono text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold tracking-[0.1em] uppercase"
                        style={{ textShadow: '0 0 15px var(--accent-1)' }}>
                        &gt; TECH_STACK
                    </h2>
                </div>

                {/* Skill modules */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
                    {CATEGORIES.map(({ title, tags }) => (
                        <div key={title} className="border border-[color-mix(in_srgb,var(--accent-1)_30%,transparent)] p-5 reveal"
                            style={{ background: 'rgba(0,8,16,0.9)', boxShadow: '0 0 15px -5px color-mix(in srgb, var(--accent-1) 15%, transparent)' }}>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-accent-1 font-mono text-[0.7rem]">&gt;</span>
                                <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-accent-1">{title.toUpperCase()}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {tags.map(({ label }) => (
                                    <span key={label} className="font-mono px-3 py-[0.35rem] text-[0.68rem] tracking-[0.06em] uppercase text-accent-2 border border-[color-mix(in_srgb,var(--accent-1)_25%,transparent)] transition-all duration-150 hover:border-accent-1 hover:text-accent-1"
                                        style={{ boxShadow: '0 0 5px -2px var(--accent-1)' }}>
                                        [{label}]
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progress bars — neon segmented */}
                <div className="max-w-[700px] mx-auto reveal" ref={barsRef}>
                    <div className="font-mono text-[0.6rem] tracking-[0.2em] text-accent-1 uppercase mb-4">// PROFICIENCY_SCAN</div>
                    <div className="grid gap-4">
                        {BARS.map(({ label, pct }) => (
                            <div key={label} className="flex flex-col gap-2">
                                <div className="flex justify-between font-mono text-[0.8rem]">
                                    <span className="text-text-secondary">{label}</span>
                                    <span className="text-accent-1">{pct}%</span>
                                </div>
                                <div className="h-[8px] bg-[rgba(0,8,16,0.8)] border border-[color-mix(in_srgb,var(--accent-1)_20%,transparent)]">
                                    <div className="h-full bg-accent-1 transition-[width] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                                        data-width={pct} style={{
                                            width: 0,
                                            backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 10px, rgba(0,0,0,0.35) 10px, rgba(0,0,0,0.35) 12px)',
                                            boxShadow: '0 0 10px -1px var(--accent-1), 0 0 3px var(--accent-1)',
                                        }} />
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
   ARES — Bold tile grid
═══════════════════════════════════════ */
function SkillsAres() {
    const barsRef = useRef(null);
    useEffect(() => {
        if (!barsRef.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                barsRef.current.querySelectorAll('[data-width]').forEach((bar) => { bar.style.width = `${bar.dataset.width}%`; });
                observer.disconnect();
            }
        }, { threshold: 0.3 });
        observer.observe(barsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="py-28 md:py-[7rem] bg-bg-secondary">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-12 reveal">
                    <div className="w-12 h-[5px] bg-accent-1 mb-4" />
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black uppercase tracking-[0.04em] leading-[1]">
                        MY <span className="text-accent-1">STACK</span>
                    </h2>
                </div>

                {/* Bold skill blocks */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
                    {CATEGORIES.map(({ title, tags }) => (
                        <div key={title} className="border-2 border-[rgba(255,255,255,0.08)] p-6 reveal transition-all duration-150 hover:border-accent-1 hover:translate-x-1 hover:translate-y-1"
                            style={{ background: 'rgba(5,5,5,0.95)', boxShadow: '5px 5px 0 var(--accent-1)' }}>
                            <h3 className="text-[1.1rem] font-black uppercase tracking-[0.1em] text-accent-1 mb-5 pb-3 border-b-2 border-accent-1">{title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {tags.map(({ label }) => (
                                    <span key={label} className="px-3 py-[0.4rem] text-[0.72rem] font-bold uppercase tracking-[0.08em] text-text-primary border-2 border-[rgba(255,255,255,0.12)] transition-all duration-150 hover:border-accent-1 hover:text-accent-1">{label}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bold progress bars */}
                <div className="max-w-[700px] mx-auto reveal" ref={barsRef}>
                    <div className="grid gap-5">
                        {BARS.map(({ label, pct }) => (
                            <div key={label} className="flex flex-col gap-2">
                                <div className="flex justify-between text-[0.9rem] font-black uppercase tracking-[0.05em]">
                                    <span className="text-text-primary">{label}</span>
                                    <span className="text-accent-1 text-[1.2rem]">{pct}%</span>
                                </div>
                                <div className="h-[10px] bg-[rgba(255,255,255,0.04)] border-2 border-[rgba(255,255,255,0.08)]">
                                    <div className="h-full bg-accent-1 transition-[width] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                                        data-width={pct} style={{
                                            width: 0,
                                            backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 14px, rgba(0,0,0,0.3) 14px, rgba(0,0,0,0.3) 16px)',
                                        }} />
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
   WARFARE — HUD loadout display
═══════════════════════════════════════ */
function SkillsCod() {
    const barsRef = useRef(null);
    useEffect(() => {
        if (!barsRef.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                barsRef.current.querySelectorAll('[data-width]').forEach((bar) => { bar.style.width = `${bar.dataset.width}%`; });
                observer.disconnect();
            }
        }, { threshold: 0.3 });
        observer.observe(barsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="py-28 md:py-[7rem] bg-bg-secondary">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-10 reveal">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent-1">⊕</span>
                        <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-accent-1">INTEL // CAPABILITIES</span>
                        <div className="h-[2px] flex-1"
                            style={{ background: 'repeating-linear-gradient(90deg, var(--accent-1) 0px, var(--accent-1) 8px, transparent 8px, transparent 14px)' }} />
                    </div>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold uppercase tracking-[0.06em]">
                        ⊕ LOADOUT <span className="text-accent-1">PROFILE</span>
                    </h2>
                </div>

                {/* Loadout categories */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
                    {CATEGORIES.map(({ title, tags }) => (
                        <div key={title} className="border border-[color-mix(in_srgb,var(--accent-1)_35%,rgba(80,70,40,0.5))] p-5 reveal"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))', background: 'rgba(14,16,10,0.95)' }}>
                            <div className="font-mono text-[0.6rem] tracking-[0.2em] text-accent-1 uppercase mb-4 pb-2 border-b border-[color-mix(in_srgb,var(--accent-1)_25%,transparent)]">
                                // {title.toUpperCase()}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {tags.map(({ label }) => (
                                    <span key={label} className="font-mono px-3 py-[0.35rem] text-[0.65rem] tracking-[0.06em] uppercase text-text-secondary border border-[color-mix(in_srgb,var(--accent-1)_20%,rgba(80,70,40,0.3))] transition-colors hover:border-accent-1 hover:text-accent-1"
                                        style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* HUD-style progress bars */}
                <div className="max-w-[700px] mx-auto reveal" ref={barsRef}>
                    <div className="font-mono text-[0.6rem] tracking-[0.2em] text-accent-1 uppercase mb-4">// PROFICIENCY READOUT</div>
                    <div className="grid gap-4">
                        {BARS.map(({ label, pct }) => (
                            <div key={label} className="flex flex-col gap-2">
                                <div className="flex justify-between font-mono text-[0.8rem]">
                                    <span className="text-text-secondary">{label}</span>
                                    <span className="text-accent-1">{pct}%</span>
                                </div>
                                <div className="h-[8px] bg-[rgba(14,16,10,0.9)] border border-[color-mix(in_srgb,var(--accent-1)_20%,rgba(80,70,40,0.4))]">
                                    <div className="h-full bg-accent-1 transition-[width] duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                                        data-width={pct} style={{
                                            width: 0,
                                            backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 16px, rgba(0,0,0,0.4) 16px, rgba(0,0,0,0.4) 18px)',
                                        }} />
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
   MODERN — Minimal skill readout
═══════════════════════════════════════ */
function SkillsModern() {
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
        <section id="skills" ref={sectionRef} className="py-32 md:py-48 relative bg-geist-background overflow-hidden border-y border-geist-gray-200">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-20 animate-modern-reveal">
                    <div className="geist-badge mb-4">Capabilities</div>
                    <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black tracking-[-0.07em] leading-none mb-6">
                        The <span className="text-gradient">stack</span> I trust.
                    </h2>
                    <p className="text-geist-gray-500 max-w-[600px] text-[1.1rem] font-medium tracking-tight">
                        A curated selection of technologies focused on performance, scalability, and developer experience.
                    </p>
                </div>

                <div className="bento-grid">
                    {CATEGORIES.map((cat, idx) => (
                        <div key={cat.title}
                            className={`bento-card p-10 animate-modern-reveal ${idx === 0 ? 'col-span-12 lg:col-span-7' : 'col-span-12 lg:col-span-5'}`}
                            style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="flex items-center gap-6 mb-10">
                                <div className="w-16 h-16 rounded-2xl bg-geist-background border border-geist-gray-200 flex items-center justify-center text-geist-foreground shadow-sm">
                                    {cat.icon}
                                </div>
                                <div>
                                    <h3 className="text-[1.6rem] font-black tracking-tighter text-geist-foreground">{cat.title}</h3>
                                    <div className="text-[0.7rem] uppercase tracking-widest text-geist-gray-400 font-bold">{cat.tags.length} Technologies</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {cat.tags.map(t => (
                                    <span key={t.label} className="px-5 py-2.5 text-[0.85rem] font-bold bg-geist-gray-100 text-geist-gray-600 border border-geist-gray-200 rounded-xl hover:border-[var(--accent-2)] hover:text-[var(--accent-2)] transition-all cursor-default">
                                        {t.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Performance Metrics Bento Card */}
                    <div className="bento-card col-span-12 p-10 animate-modern-reveal" style={{ animationDelay: '0.3s' }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {BARS.map(bar => (
                                <div key={bar.label}>
                                    <div className="flex justify-between items-end mb-4">
                                        <span className="text-[1rem] font-bold text-geist-foreground tracking-tight">{bar.label}</span>
                                        <span className="text-[0.8rem] font-black font-mono text-[var(--accent-2)]">{bar.pct}%</span>
                                    </div>
                                    <div className="h-[2px] bg-geist-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-[var(--accent-2)]" style={{ width: `${bar.pct}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
