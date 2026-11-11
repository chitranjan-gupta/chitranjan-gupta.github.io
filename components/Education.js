'use client';

import { useTheme } from '@/context/ThemeContext';

const EDUCATION_DATA = [
    {
        degree: 'Bachelor of Computer Application (BCA)',
        field: 'Computer Applications & Software Development',
        institution: 'Guru Nanak College, Dhanbad (BBMKU University)',
        period: '2021 – 2024',
        year: '2024',
        grade: 'UG / Graduation',
        highlights: [
            'Core focus on Web Development, Software Engineering, and Database Architecture',
            'Full Stack Web Applications, Browser Extensions, and Real-time Systems',
            'Developed ShikshaSetu App & Extension, Developer Tooling, and Cloudflare Worker integrations'
        ]
    },
    {
        degree: 'Intermediate of Science (ISc / Class XII)',
        field: 'Science Stream (Physics, Chemistry, Mathematics)',
        institution: 'College of Commerce, Arts & Science, Patna (BSEB)',
        period: '2019 – 2021',
        year: '2021',
        grade: 'Higher Secondary',
        highlights: [
            'Foundations of Computer Science, Programming Logic, and Mathematics',
            'Strong analytical thinking, algorithms, and web technology explorations'
        ]
    },
    {
        degree: 'Matriculation (Matric / Class X)',
        field: 'General Academic Curriculum',
        institution: 'De Nobili School, Mugma, Dhanbad (CISCE)',
        period: '2010 – 2019',
        year: '2019',
        grade: 'Secondary Schooling',
        highlights: [
            'Early exposure to computer basics, science, and extracurricular technical projects',
            'Solid foundation in academic problem solving and computer applications'
        ]
    }
];

export default function Education() {
    const { design } = useTheme();

    if (design === 'tron') return <EducationTron />;
    if (design === 'ares') return <EducationAres />;
    if (design === 'cod') return <EducationCod />;
    if (design === 'modern') return <EducationModern />;
    if (design === 'indic') return <EducationIndic />;
    if (design === 'apple') return <EducationApple />;
    if (design === 'hacker') return <EducationHacker />;
    return <EducationAurora />;
}

/* ═══════════════════════════════════════
   AURORA — Glassmorphism Cards
═══════════════════════════════════════ */
function EducationAurora() {
    return (
        <section id="education" className="py-24 md:py-32 relative">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="text-center mb-16">
                    <p className="text-[0.8rem] font-semibold tracking-[0.15em] uppercase text-accent-2 mb-3">Academic Foundation</p>
                    <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1]">
                        Education &{' '}
                        <span className="bg-gradient-text bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Background</span>
                    </h2>
                </div>

                <div className="max-w-[880px] mx-auto relative pl-10 md:pl-12">
                    <div className="absolute top-3 bottom-3 left-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[var(--accent-1)] via-[var(--accent-2)] to-transparent pointer-events-none" />

                    {EDUCATION_DATA.map((item, idx) => (
                        <div key={idx} className="relative mb-12 last:mb-0 group">
                            {/* Aurora Branch connector ├── from spine to card with year */}
                            <div className="absolute -left-10 md:-left-12 translate-x-4 top-10 w-6 md:w-8 h-[2px] bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] pointer-events-none group-hover:scale-x-105 origin-left transition-transform duration-300">
                                <div className="absolute -left-3 -top-6 px-1.5 py-0.5 rounded text-[0.62rem] font-mono font-bold bg-[var(--bg-primary,#0a0a0f)] border border-[var(--accent-1)]/50 text-[var(--accent-1)] shadow-[0_0_8px_var(--accent-1)] whitespace-nowrap">
                                    {item.year}
                                </div>
                                <div className="absolute -left-1 -top-1 w-2.5 h-2.5 rounded-full bg-[var(--accent-1)] shadow-[0_0_8px_var(--accent-1)]" />
                                <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 rotate-45 border-t-2 border-r-2 border-[var(--accent-2)]" />
                            </div>

                            <div className="bg-white/[0.04] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-8 md:p-10 transition-all duration-300 hover:border-[rgba(99,102,241,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(99,102,241,0.2)]">
                                <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full text-[0.72rem] font-semibold bg-[var(--accent-1)]/15 border border-[var(--accent-1)]/30 text-[var(--accent-1)]">
                                        {item.period}
                                    </span>
                                    <span className="text-[0.75rem] font-medium text-[var(--text-muted)]">{item.grade}</span>
                                </div>
                                <h3 className="text-[1.35rem] font-bold text-[var(--text-primary)] mb-1">{item.degree}</h3>
                                <div className="text-[0.95rem] font-medium text-[var(--accent-2)] mb-3">{item.field}</div>
                                <div className="text-[0.85rem] text-[var(--text-secondary)] font-semibold mb-6 flex items-center gap-2">
                                    <span>🏛</span> {item.institution}
                                </div>
                                <ul className="space-y-2 text-[0.85rem] text-[var(--text-secondary)] leading-relaxed">
                                    {item.highlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-[var(--accent-1)] mt-1">✦</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   APPLE — Liquid Glass Cupertino Bento
═══════════════════════════════════════ */
function EducationApple() {
    return (
        <section id="education" className="py-20 md:py-28 relative overflow-hidden apple-section">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-16 text-center max-w-[800px] mx-auto">
                    <span className="apple-section-eyebrow">Academic Qualifications</span>
                    <h2 className="apple-section-title">
                        Academic background. <br />
                        <span className="text-apple-subtle">Principles of computer science.</span>
                    </h2>
                </div>

                <div className="max-w-[880px] mx-auto relative pl-10 md:pl-12">
                    <div className="absolute top-3 bottom-3 left-4 -translate-x-1/2 w-[2px] bg-apple-border pointer-events-none" />

                    {EDUCATION_DATA.map((item, idx) => (
                        <div key={idx} className="relative mb-12 last:mb-0 group">
                            {/* Apple Branch connector ├── from spine to card with year */}
                            <div className="absolute -left-10 md:-left-12 translate-x-4 top-10 w-6 md:w-8 h-[2px] bg-apple-accent/50 pointer-events-none group-hover:bg-apple-accent transition-colors">
                                <div className="absolute -left-3 -top-6 px-1.5 py-0.5 rounded text-[0.62rem] font-semibold bg-apple-pill-bg border border-apple-border text-apple-heading whitespace-nowrap shadow-sm">
                                    {item.year}
                                </div>
                                <div className="absolute -left-1 -top-1 w-2.5 h-2.5 rounded-full bg-apple-accent" />
                                <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 rotate-45 border-t-2 border-r-2 border-apple-accent" />
                            </div>

                            <div className="apple-card p-8 md:p-10 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                                        <span className="apple-card-tag">{item.period}</span>
                                        <span className="text-[0.8rem] font-medium text-apple-muted px-3 py-1 rounded-full bg-apple-pill-bg border border-apple-border">
                                            {item.grade}
                                        </span>
                                    </div>
                                    <h3 className="text-[1.5rem] md:text-[1.7rem] font-bold text-apple-heading tracking-tight mb-1">
                                        {item.degree}
                                    </h3>
                                    <div className="text-[1rem] font-semibold text-apple-accent mb-3">{item.field}</div>
                                    <div className="text-[0.9rem] font-medium text-apple-body mb-6">
                                        {item.institution}
                                    </div>
                                    <ul className="space-y-2.5 text-[0.88rem] text-apple-body leading-relaxed pt-6 border-t border-apple-border">
                                        {item.highlights.map((h, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <span className="text-apple-accent mt-0.5">•</span>
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
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
   TRON — Cyberpunk Terminal Logs
═══════════════════════════════════════ */
function EducationTron() {
    return (
        <section id="education" className="py-24 md:py-32 relative font-mono">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14">
                    <div className="text-accent-1 text-[0.7rem] tracking-[0.2em] mb-2 uppercase">{'// MEMORY_BANKS // ACADEMICS'}</div>
                    <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold tracking-wider uppercase text-text-primary">
                        DATA_ARCHIVE: <span className="text-accent-1">QUALIFICATIONS</span>
                    </h2>
                </div>

                <div className="max-w-[880px] mx-auto relative pl-10 md:pl-12">
                    <div className="absolute top-2 bottom-2 left-4 -translate-x-1/2 w-[2px] bg-accent-1/30 pointer-events-none" />

                    {EDUCATION_DATA.map((item, idx) => (
                        <div key={idx} className="relative mb-10 last:mb-0">
                            {/* Tron Branch connector ├── from spine with year */}
                            <div className="absolute -left-10 md:-left-12 translate-x-4 top-10 w-6 md:w-8 h-[2px] bg-accent-1/60 pointer-events-none group-hover:bg-accent-1 transition-colors">
                                <div className="absolute -left-3 -top-6 px-1.5 py-0.5 font-mono text-[0.6rem] bg-black border border-accent-1/60 text-accent-1 whitespace-nowrap shadow-[0_0_6px_var(--accent-1)]">
                                    {item.year}
                                </div>
                                <div className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-accent-1 shadow-[0_0_8px_var(--accent-1)]" />
                                <div className="absolute right-0 -top-1 font-mono text-[0.6rem] text-accent-1 leading-none">&gt;</div>
                            </div>

                            <div className="border border-accent-1/40 bg-black/80 p-6 md:p-8 relative group hover:border-accent-1 transition-all"
                                style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}>
                                <div className="flex justify-between items-center mb-4 text-[0.75rem] text-accent-1 border-b border-accent-1/20 pb-3">
                                    <span>RECORD_ID #0{idx + 1}</span>
                                    <span>[{item.period}]</span>
                                </div>
                                <h3 className="text-[1.2rem] font-bold text-text-primary tracking-wide mb-1 uppercase">{item.degree}</h3>
                                <div className="text-[0.85rem] text-accent-2 mb-3">{'// '}{item.field}</div>
                                <div className="text-[0.8rem] text-text-muted mb-2">{item.institution}</div>
                                <div className="text-[0.75rem] text-accent-1 mb-4 font-bold">STATUS: {item.grade.toUpperCase()}</div>
                                <div className="space-y-1.5 text-[0.78rem] text-text-secondary pt-4 border-t border-accent-1/20">
                                    {item.highlights.map((h, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="text-accent-1">&gt;</span>
                                            <span>{h}</span>
                                        </div>
                                    ))}
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
   MODERN — Minimalist Bento Grid
═══════════════════════════════════════ */
function EducationModern() {
    return (
        <section id="education" className="py-24 md:py-32 relative bg-geist-background">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-16">
                    <div className="geist-badge mb-3">Academic Record</div>
                    <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-black tracking-[-0.06em] leading-tight mb-4">
                        Education & <span className="text-gradient">Credentials.</span>
                    </h2>
                </div>

                <div className="max-w-[880px] mx-auto relative pl-10 md:pl-12">
                    <div className="absolute top-3 bottom-3 left-4 -translate-x-1/2 w-[2px] bg-geist-gray-200 pointer-events-none" />

                    {EDUCATION_DATA.map((item, idx) => (
                        <div key={idx} className="relative mb-12 last:mb-0">
                            {/* Modern Branch connector ├── from spine with year */}
                            <div className="absolute -left-10 md:-left-12 translate-x-4 top-10 w-6 md:w-8 h-[2px] bg-geist-gray-300 pointer-events-none group-hover:bg-geist-foreground transition-colors">
                                <div className="absolute -left-3 -top-6 px-1.5 py-0.5 rounded text-[0.62rem] font-mono font-bold bg-geist-background border border-geist-gray-200 text-geist-foreground whitespace-nowrap shadow-sm">
                                    {item.year}
                                </div>
                                <div className="absolute -left-1 -top-1 w-2.5 h-2.5 rounded-full bg-geist-foreground" />
                                <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 rotate-45 border-t-2 border-r-2 border-geist-foreground" />
                            </div>

                            <div className="bento-card p-8 md:p-10 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-baseline mb-4">
                                        <span className="text-[0.8rem] font-mono font-bold text-[var(--accent-2)] uppercase">{item.period}</span>
                                        <span className="text-[0.75rem] font-bold text-geist-gray-400">{item.grade}</span>
                                    </div>
                                    <h3 className="text-[1.6rem] font-black text-geist-foreground tracking-tight mb-1">{item.degree}</h3>
                                    <div className="text-[1rem] font-bold text-geist-gray-600 mb-2">{item.field}</div>
                                    <div className="text-[0.85rem] text-geist-gray-400 mb-6 font-medium">{item.institution}</div>
                                    <ul className="space-y-2 text-[0.9rem] text-geist-gray-500 font-medium pt-4 border-t border-geist-gray-200">
                                        {item.highlights.map((h, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-geist-foreground mt-0.5">•</span>
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
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
   ARES — Brutalist Hard-Edge
═══════════════════════════════════════ */
function EducationAres() {
    return (
        <section id="education" className="py-24 md:py-32 relative bg-black">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14 border-b-4 border-accent-1 pb-4">
                    <span className="font-mono text-[0.8rem] uppercase tracking-widest text-accent-1 block mb-2">[ 04 // ACADEMIC DOSSIER ]</span>
                    <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase tracking-tight text-white">
                        EDUCATION // ARCHIVE
                    </h2>
                </div>

                <div className="max-w-[880px] mx-auto relative pl-10 md:pl-12">
                    <div className="absolute top-2 bottom-2 left-4 -translate-x-1/2 w-[3px] bg-accent-1 pointer-events-none" />

                    {EDUCATION_DATA.map((item, idx) => (
                        <div key={idx} className="relative mb-10 last:mb-0">
                            {/* Ares Branch connector ├── from spine with year */}
                            <div className="absolute -left-10 md:-left-12 translate-x-4 top-10 w-6 md:w-8 h-[2px] bg-accent-1 pointer-events-none">
                                <div className="absolute -left-3 -top-6 px-1.5 py-0.5 font-mono text-[0.6rem] font-black bg-black border border-accent-1 text-accent-1 whitespace-nowrap">
                                    {item.year}
                                </div>
                                <div className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-accent-1" />
                                <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 rotate-45 border-t-2 border-r-2 border-accent-1" />
                            </div>

                            <div className="border-2 border-white/20 p-8 bg-[#0a0a0a] hover:border-accent-1 transition-all">
                                <div className="flex justify-between font-mono text-[0.75rem] text-accent-1 mb-4 border-b border-white/10 pb-2">
                                    <span>INDEX: #{idx + 1}</span>
                                    <span>{item.period}</span>
                                </div>
                                <h3 className="text-[1.4rem] font-black uppercase text-white mb-2">{item.degree}</h3>
                                <div className="text-[0.9rem] font-bold text-accent-1 mb-2 font-mono">{item.field}</div>
                                <div className="text-[0.85rem] text-white/70 mb-3 font-mono">{item.institution}</div>
                                <div className="text-[0.75rem] uppercase font-mono text-accent-2 mb-4 font-bold">GRADE: {item.grade}</div>
                                <ul className="space-y-2 font-mono text-[0.8rem] text-white/60 pt-4 border-t border-white/10">
                                    {item.highlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-accent-1">■</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   WARFARE (COD) — Tactical Intel
═══════════════════════════════════════ */
function EducationCod() {
    return (
        <section id="education" className="py-24 md:py-32 relative font-mono bg-[#070805]">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14">
                    <div className="text-accent-1 text-[0.65rem] tracking-[0.2em] mb-2 uppercase">⊕ PERSONNEL RECORD // DOSSIER</div>
                    <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black uppercase tracking-[0.06em] text-text-primary">
                        TRAINING & <span className="text-accent-1">QUALIFICATIONS</span>
                    </h2>
                </div>

                <div className="max-w-[880px] mx-auto relative pl-10 md:pl-12">
                    <div className="absolute top-2 bottom-2 left-4 -translate-x-1/2 w-[2px] bg-accent-1/30 pointer-events-none" />

                    {EDUCATION_DATA.map((item, idx) => (
                        <div key={idx} className="relative mb-10 last:mb-0">
                            {/* COD Branch connector ├── from spine with year */}
                            <div className="absolute -left-10 md:-left-12 translate-x-4 top-10 w-6 md:w-8 h-[2px] bg-accent-1/50 pointer-events-none group-hover:bg-accent-1 transition-colors">
                                <div className="absolute -left-3 -top-6 px-1 py-0.5 font-mono text-[0.58rem] bg-[#070805] border border-accent-1 text-accent-1 whitespace-nowrap">
                                    [{item.year}]
                                </div>
                                <div className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-[#070805] border border-accent-1" />
                                <div className="absolute right-0 -top-1.5 font-mono text-[0.65rem] text-accent-1">›</div>
                            </div>

                            <div className="border border-accent-1/30 bg-[#0e100a] p-8"
                                style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
                                <div className="flex justify-between items-center text-[0.7rem] text-accent-1 mb-3 border-b border-accent-1/20 pb-2">
                                    <span>TRAINING_CYCLE // 0{idx + 1}</span>
                                    <span>{item.period}</span>
                                </div>
                                <h3 className="text-[1.2rem] font-bold uppercase text-text-primary mb-1">{item.degree}</h3>
                                <div className="text-[0.85rem] text-accent-1 mb-2">{'// '}{item.field}</div>
                                <div className="text-[0.8rem] text-text-secondary mb-3">{item.institution}</div>
                                <div className="text-[0.72rem] text-[#4ade80] mb-4">STATUS: {item.grade.toUpperCase()}</div>
                                <div className="space-y-1.5 text-[0.78rem] text-text-secondary pt-4 border-t border-accent-1/20">
                                    {item.highlights.map((h, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="text-accent-1">⊕</span>
                                            <span>{h}</span>
                                        </div>
                                    ))}
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
   INDIC — Heritage Vidyapeeth
═══════════════════════════════════════ */
function EducationIndic() {
    return (
        <section id="education" className="py-28 md:py-36 relative bg-indic-bg overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-20 text-center">
                    <div className="text-indic-saffron font-bold tracking-[0.2em] uppercase text-xs mb-3">विद्या एवं साधना ACADEMIC HERITAGE</div>
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-4 italic">
                        The Quest for <span className="indic-gradient-text">Knowledge</span>.
                    </h2>
                    <p className="max-w-[550px] mx-auto text-indic-fg/70 italic font-medium">
                        Foundations grounded in engineering discipline, mathematical logic, and computer sciences.
                    </p>
                </div>

                <div className="max-w-[880px] mx-auto relative pl-10 md:pl-12">
                    <div className="absolute top-3 bottom-3 left-4 -translate-x-1/2 w-[2px] bg-indic-border/40 pointer-events-none" />

                    {EDUCATION_DATA.map((item, idx) => (
                        <div key={idx} className="relative mb-12 last:mb-0">
                            {/* Indic Branch connector ├── from spine with year */}
                            <div className="absolute -left-10 md:-left-12 translate-x-4 top-10 w-6 md:w-8 h-[2px] bg-indic-border/80 pointer-events-none group-hover:bg-indic-saffron transition-colors">
                                <div className="absolute -left-3 -top-6 px-1.5 py-0.5 rounded-sm text-[0.62rem] font-bold bg-indic-bg border border-indic-border text-indic-saffron whitespace-nowrap shadow-sm">
                                    {item.year}
                                </div>
                                <div className="absolute -left-1 -top-1 w-2.5 h-2.5 rounded-full bg-indic-saffron" />
                                <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 rotate-45 border-t-2 border-r-2 border-indic-saffron" />
                            </div>

                            <div className="jaali-card p-8 md:p-10 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-center mb-4 border-b border-indic-border/30 pb-3">
                                        <span className="text-[0.75rem] font-bold text-indic-saffron uppercase tracking-widest">{item.period}</span>
                                        <span className="text-[0.8rem] font-bold text-indic-terracotta italic">{item.grade}</span>
                                    </div>
                                    <h3 className="text-[1.5rem] font-bold text-indic-terracotta mb-1 italic">{item.degree}</h3>
                                    <div className="text-[1rem] font-semibold text-indic-fg mb-2 italic">{item.field}</div>
                                    <div className="text-[0.85rem] text-indic-fg/70 mb-6 italic font-medium">🏛 {item.institution}</div>
                                    <ul className="space-y-2 text-[0.9rem] text-indic-fg/80 italic font-medium pt-4 border-t border-indic-border/20">
                                        {item.highlights.map((h, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-indic-saffron mt-0.5">𑁍</span>
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
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
   CYBERSECURITY / HACKER / RED TEAM — Education
═══════════════════════════════════════ */
function EducationHacker() {
    return (
        <section id="education" className="py-24 relative bg-[var(--hacker-bg)] text-white font-mono overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14 border-b border-[var(--hacker-border)] pb-4 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <div className="text-[0.72rem] text-[var(--hacker-secondary)] uppercase tracking-[0.2em] font-bold">
                            {'// ACADEMIC_CREDENTIALS'}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mt-1">
                            Foundations & Degrees <span className="text-[var(--hacker-accent)]">[ACADEMIA]</span>
                        </h2>
                    </div>
                    <div className="text-xs text-[var(--hacker-accent)] font-mono">
                        VERIFIED_ACADEMIC_HASH: 0x88F2A
                    </div>
                </div>

                <div className="max-w-[880px] mx-auto relative pl-10 md:pl-12">
                    <div className="absolute top-2 bottom-2 left-4 -translate-x-1/2 w-[2px] bg-[var(--hacker-border)] pointer-events-none" />

                    {EDUCATION_DATA.map((item, idx) => (
                        <div key={idx} className="relative mb-10 last:mb-0">
                            {/* Hacker Branch connector ├── from spine with year */}
                            <div className="absolute -left-10 md:-left-12 translate-x-4 top-10 w-6 md:w-8 h-[2px] bg-[var(--hacker-accent)]/50 pointer-events-none group-hover:bg-[var(--hacker-accent)] transition-colors">
                                <div className="absolute -left-3 -top-6 px-1.5 py-0.5 font-mono text-[0.6rem] bg-black border border-[var(--hacker-accent)] text-[var(--hacker-accent)] whitespace-nowrap shadow-[0_0_6px_var(--hacker-accent)]">
                                    {item.year}
                                </div>
                                <div className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-black border border-[var(--hacker-accent)]" />
                                <div className="absolute right-0 -top-1 font-mono text-[0.6rem] text-[var(--hacker-accent)]">&gt;</div>
                            </div>

                            <div className="hacker-card p-6 md:p-8 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-center mb-4 pb-2 border-b border-[var(--hacker-border)]/40 text-xs">
                                        <span className="text-[var(--hacker-accent)] font-bold">{item.period}</span>
                                        <span className="text-[var(--hacker-secondary)] font-bold">{item.grade}</span>
                                    </div>
                                    <h3 className="text-xl font-black text-white uppercase mb-1">{item.degree}</h3>
                                    <div className="text-sm font-bold text-[var(--hacker-accent)] mb-2">{item.field}</div>
                                    <div className="text-xs text-text-muted mb-4">🏛 {item.institution}</div>
                                    <ul className="space-y-2 pt-4 border-t border-[var(--hacker-border)]/30 text-xs text-text-secondary">
                                        {item.highlights.map((h, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-[var(--hacker-accent)]">›</span>
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
