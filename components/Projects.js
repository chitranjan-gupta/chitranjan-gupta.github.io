'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

const PROJECTS = [
    {
        num: '01',
        title: 'Job Board Platform',
        desc: 'A full-featured job board with real-time listings, advanced filtering, company profiles, and applicant tracking. Built with a microservices architecture for scalability.',
        image: '/assets/project1.png',
        tags: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
    },
    {
        num: '02',
        title: 'Nomad Journeys – Travel Map',
        desc: 'An interactive travel planning app with custom map tiles, drag-and-drop itinerary builder, Points of Interest, and sharable trip links. Powered by Leaflet.js and a Node.js backend.',
        image: '/assets/project2.png',
        tags: ['React', 'Leaflet.js', 'Node.js', 'PostgreSQL', 'TypeScript'],
    },
    {
        num: '03',
        title: 'Synergy – Real-time Chat',
        desc: 'A Discord-inspired real-time collaboration platform with channels, direct messages, voice rooms, file sharing, and live user presence — built with WebSockets and a React frontend.',
        image: '/assets/project3.png',
        tags: ['React', 'Socket.io', 'Node.js', 'Redis', 'Docker'],
    },
];

export default function Projects() {
    const { design } = useTheme();
    if (design === 'tron') return <ProjectsTron />;
    if (design === 'ares') return <ProjectsAres />;
    if (design === 'cod') return <ProjectsCod />;
    if (design === 'modern') return <ProjectsModern />;
    if (design === 'indic') return <ProjectsIndic />;
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
                    <a href="https://github.com" className="btn-indic inline-flex items-center gap-3">
                        View More <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {PROJECTS.map((proj, idx) => (
                        <div key={proj.title}
                            className="jaali-card group flex flex-col h-full animate-modern-reveal"
                            style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="aspect-[16/10] overflow-hidden border-2 border-indic-border inner-shadow-lg mb-8 bg-white p-2">
                                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                            </div>
                            <div className="flex-grow flex flex-col">
                                <h3 className="text-[1.6rem] font-bold text-indic-terracotta mb-4 italic group-hover:text-indic-saffron transition-colors">
                                    {proj.title}
                                </h3>
                                <p className="text-indic-fg/80 text-[1.05rem] leading-relaxed italic mb-10 flex-grow font-medium">
                                    {proj.desc}
                                </p>
                                <div className="flex items-center justify-between border-t border-indic-border/20 pt-6">
                                    <div className="flex gap-3">
                                        {proj.tags?.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[0.7rem] font-bold text-indic-saffron uppercase tracking-widest">{tag}</span>
                                        ))}
                                    </div>
                                    <a href={proj.link} className="w-12 h-12 rounded-sm border border-indic-border flex items-center justify-center text-indic-fg hover:bg-indic-saffron hover:text-white transition-all shadow-sm">
                                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
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
                        <article key={p.num} className="group bg-white/[0.04] border border-[rgba(255,255,255,0.08)] rounded-[20px] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] reveal hover:border-[rgba(99,102,241,0.4)] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(99,102,241,0.25),0_8px_32px_rgba(0,0,0,0.4)]">
                            <div className="relative overflow-hidden aspect-[16/10]">
                                <Image src={p.image} alt={p.title} width={600} height={375}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
                                <div className="absolute inset-0 bg-[rgba(5,9,20,0.7)] flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] backdrop-blur-[4px]">
                                    {['Live', 'Code'].map((label) => (
                                        <a key={label} href="#" target="_blank" rel="noopener noreferrer"
                                            className="inline-flex items-center gap-[6px] px-5 py-2 rounded-full bg-white/[0.12] border border-white/20 text-text-primary text-[0.82rem] font-semibold backdrop-blur-[8px] transition-all duration-200 hover:bg-accent-1 hover:border-accent-1">
                                            {label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-[0.7rem] font-bold tracking-[0.1em] text-accent-1 mb-[0.6rem]">{p.num}</div>
                                <h3 className="text-[1.1rem] font-bold tracking-[-0.02em] mb-3">{p.title}</h3>
                                <p className="text-[0.875rem] text-text-secondary leading-[1.7] mb-[1.1rem]">{p.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {p.tags.map((t) => (
                                        <span key={t} className="px-[0.7rem] py-1 rounded-full text-[0.72rem] font-semibold bg-[rgba(99,102,241,0.12)] border border-[rgba(99,102,241,0.25)] text-accent-1">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="text-center reveal">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
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
                        <article key={p.num} className="group reveal border border-[color-mix(in_srgb,var(--accent-1)_35%,transparent)] transition-all duration-200 hover:border-accent-1"
                            style={{ background: 'rgba(0,8,16,0.9)', boxShadow: '0 0 20px -8px color-mix(in srgb, var(--accent-1) 15%, transparent)' }}>

                            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-0">
                                {/* Image */}
                                <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto">
                                    <Image src={p.image} alt={p.title} width={400} height={250}
                                        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                                        style={{ filter: 'hue-rotate(180deg) saturate(0.5) brightness(0.7)' }} />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(0,8,16,0.95)]" />
                                    {/* Scan line */}
                                    <div className="absolute top-0 left-0 right-0 h-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        style={{ background: 'linear-gradient(to bottom, transparent 45%, color-mix(in srgb, var(--accent-1) 15%, transparent) 50%, transparent 55%)' }} />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="font-mono text-[0.65rem] text-accent-2 tracking-[0.15em]">[FILE_{String(i).padStart(2, '0')}]</span>
                                        <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--accent-1)_15%,transparent)]" />
                                        <span className="font-mono text-[0.6rem] text-accent-1 tracking-[0.1em]">&gt; EXECUTING...</span>
                                    </div>
                                    <h3 className="font-mono text-[1.1rem] font-bold tracking-[0.05em] uppercase mb-3 group-hover:text-accent-1 transition-colors"
                                        style={{ textShadow: '0 0 8px color-mix(in srgb, var(--accent-1) 30%, transparent)' }}>
                                        {p.title}
                                    </h3>
                                    <p className="font-mono text-[0.8rem] text-text-secondary leading-[1.7] mb-4">{p.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {p.tags.map((t) => (
                                            <span key={t} className="font-mono px-3 py-1 text-[0.65rem] tracking-[0.08em] uppercase text-accent-2 border border-[color-mix(in_srgb,var(--accent-1)_30%,transparent)]"
                                                style={{ boxShadow: '0 0 6px -2px var(--accent-1)' }}>
                                                [{t}]
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="reveal">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
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

                <div className="flex flex-col gap-8 mb-12">
                    {PROJECTS.map((p, i) => (
                        <article key={p.num}
                            className={`group reveal border-2 border-[rgba(255,255,255,0.08)] transition-all duration-150 hover:border-accent-1 grid grid-cols-1 ${i === 0 ? 'md:grid-cols-1' : 'md:grid-cols-[1fr_1fr]'}`}
                            style={{ background: 'rgba(5,5,5,0.95)', boxShadow: `${6 + i * 2}px ${6 + i * 2}px 0 var(--accent-1)` }}>

                            {/* Image */}
                            <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}>
                                <Image src={p.image} alt={p.title} width={800} height={400}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                <div className="absolute top-0 left-0 bg-accent-1 text-[#000] px-3 py-1 text-[0.75rem] font-black tracking-[0.15em] uppercase">{p.num}</div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-[clamp(1.2rem,2vw,1.6rem)] font-black uppercase tracking-[0.04em] mb-4 group-hover:text-accent-1 transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-[0.95rem] text-text-secondary leading-[1.7] mb-5 font-semibold">{p.desc}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {p.tags.map((t) => (
                                        <span key={t} className="px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-accent-1 border-2 border-[color-mix(in_srgb,var(--accent-1)_35%,transparent)]">{t}</span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <a href="#" className="px-5 py-2 text-[0.75rem] font-black uppercase tracking-[0.15em] text-[#000] bg-accent-1 border-2 border-accent-1 transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5"
                                        style={{ boxShadow: '3px 3px 0 color-mix(in srgb, var(--accent-1) 60%, black)' }}>LIVE →</a>
                                    <a href="#" className="px-5 py-2 text-[0.75rem] font-black uppercase tracking-[0.15em] text-text-primary border-2 border-[rgba(255,255,255,0.15)] hover:border-accent-1 hover:text-accent-1 transition-colors">CODE</a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="reveal">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
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

                <div className="flex flex-col gap-5 mb-12">
                    {PROJECTS.map((p, i) => (
                        <article key={p.num} className="group reveal border border-[color-mix(in_srgb,var(--accent-1)_35%,rgba(80,70,40,0.5))] transition-all duration-150 hover:border-accent-1"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))', background: 'rgba(14,16,10,0.97)' }}>

                            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0">
                                {/* Image */}
                                <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto">
                                    <Image src={p.image} alt={p.title} width={400} height={250}
                                        className="w-full h-full object-cover"
                                        style={{ filter: 'contrast(1.1) saturate(0.8)' }} />
                                    <div className="absolute top-2 left-2 font-mono text-[0.55rem] tracking-[0.2em] text-accent-1 bg-[rgba(0,0,0,0.8)] px-2 py-0.5 uppercase">
                                        OPERATION {p.num}
                                    </div>
                                    {/* Top accent stripe */}
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent-1" />
                                </div>

                                {/* Briefing */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="w-2 h-2 bg-[#4ade80] shadow-[0_0_4px_#4ade80]" />
                                        <span className="font-mono text-[0.55rem] tracking-[0.2em] text-[#4ade80] uppercase">COMPLETED</span>
                                        <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--accent-1)_15%,transparent)]" />
                                    </div>
                                    <h3 className="text-[1.1rem] font-bold uppercase tracking-[0.04em] mb-3 group-hover:text-accent-1 transition-colors">{p.title}</h3>

                                    <div className="font-mono text-[0.6rem] tracking-[0.15em] text-accent-1 uppercase mb-2">// OBJECTIVE</div>
                                    <p className="font-mono text-[0.82rem] text-text-secondary leading-[1.7] mb-4">{p.desc}</p>

                                    <div className="font-mono text-[0.6rem] tracking-[0.15em] text-accent-1 uppercase mb-2">// ASSETS DEPLOYED</div>
                                    <div className="flex flex-wrap gap-2">
                                        {p.tags.map((t) => (
                                            <span key={t} className="font-mono px-3 py-1 text-[0.65rem] tracking-[0.06em] uppercase text-text-secondary border border-[color-mix(in_srgb,var(--accent-1)_25%,rgba(80,70,40,0.4))]"
                                                style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="reveal">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
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
                    <a href="https://github.com" className="btn-vercel inline-flex items-center gap-2">
                        View All Projects <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                </div>

                <div className="bento-grid">
                    {PROJECTS.map((proj, idx) => (
                        <div key={proj.title}
                            className={`bento-card group animate-modern-reveal ${idx === 0 ? 'col-span-12 lg:col-span-8' : 'col-span-12 lg:col-span-4'}`}
                            style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="showcase-card rounded-none border-0 border-b border-geist-gray-200">
                                <img src={proj.image} alt={proj.title} className="grayscale group-hover:grayscale-0" />
                                <div className="absolute top-6 right-6 flex gap-2">
                                    {proj.tags?.slice(0, 2).map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur text-[0.65rem] font-black uppercase tracking-widest rounded-full border border-geist-gray-200 shadow-sm text-geist-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-10">
                                <h3 className="text-[1.8rem] font-black tracking-tighter text-geist-foreground mb-4 flex justify-between items-center group-hover:text-[var(--accent-2)] transition-colors">
                                    {proj.title}
                                    <svg className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                                </h3>
                                <p className="text-geist-gray-500 text-[1.05rem] leading-relaxed font-medium mb-8">
                                    {proj.desc}
                                </p>
                                <a href={proj.link} className="text-[0.8rem] font-black text-geist-foreground uppercase tracking-[0.2em] inline-flex items-center gap-2 border-b-2 border-geist-gray-200 hover:border-[var(--accent-2)] transition-all">
                                    Case Study
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
