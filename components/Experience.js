'use client';

import { useTheme } from '@/context/ThemeContext';

const EXPERIENCE_DATA = [
    {
        role: 'Analyst – IT Operations Team',
        company: 'Tata Consultancy Services (TCS)',
        location: 'Indore, India',
        period: 'Sep 2025 – Present',
        year: '2025',
        type: 'Full-time',
        description: 'Maintaining 24×7 high-availability RHEL enterprise server infrastructure, automated access control operations, and engineering full-stack operational dashboards.',
        achievements: [
            'Monitored and maintained RHEL enterprise servers and mission-critical application processes in a 24×7 production environment, ensuring peak system availability, stability, and SLA adherence.',
            'Troubleshot Linux systems using PuTTY and WinSCP for secure SSH access and file transfers; analyzed system and application logs to rapidly resolve incidents and escalate when required.',
            'Managed incidents, change requests, and service requests using ServiceNow, strictly maintaining SLA compliance, timely resolution, and technical documentation.',
            'Performed routine RHEL administration, including OS patching, service configuration, user access management, and repetitive task automation using Bash shell scripting.',
            'Leveraged AI-assisted development tools (OpenCode) to design and build a web-based operational dashboard using React and Python FastAPI, streamlining operational workflows and ACL management.',
            'Developed robust Bash scripts to automate Access Control List (ACL) generation and management across multiple servers, environments, and enterprise customers, drastically cutting manual overhead.',
            'Executed complex SQL queries to retrieve, filter, validate, and analyze operational reporting data, verify telemetry, troubleshoot database records, and feed dashboard analytics.'
        ],
        technologies: ['RHEL / Linux', 'Bash Scripting', 'Python FastAPI', 'React', 'SQL', 'ServiceNow', 'SSH / PuTTY', 'WinSCP', 'Access Control (ACL)']
    },
    {
        role: 'Trainee',
        company: 'Tata Consultancy Services (TCS)',
        location: 'Chennai, India',
        period: 'May 2025 – Sep 2025',
        year: '2025',
        type: 'Full-time Training',
        description: 'Immersive enterprise engineering training specializing in backend service development, full-stack architectures, automated testing, and containerization.',
        achievements: [
            'Engineered core backend services, RESTful endpoints, and business logic using Python and Django.',
            'Gained intensive hands-on experience across AI/ML workflows, MERN stack web development, and professional technical communication.',
            'Collaborated within Agile teams, actively contributing to sprint planning, daily standups, and iterative software delivery cycles.',
            'Conducted automated end-to-end testing with Python & Selenium, performance load testing using Apache JMeter, and comprehensive API testing with Postman and Insomnia.',
            'Utilized Git for version control, Docker for reproducible containerization, and SonarQube for static code quality analysis and vulnerability scanning.'
        ],
        technologies: ['Python', 'Django', 'MERN Stack', 'Docker', 'Git', 'Selenium', 'Apache JMeter', 'SonarQube', 'Postman']
    }
];

export default function Experience() {
    const { design } = useTheme();

    if (design === 'tron') return <ExperienceTron />;
    if (design === 'ares') return <ExperienceAres />;
    if (design === 'cod') return <ExperienceCod />;
    if (design === 'modern') return <ExperienceModern />;
    if (design === 'indic') return <ExperienceIndic />;
    if (design === 'apple') return <ExperienceApple />;
    if (design === 'hacker') return <ExperienceHacker />;
    return <ExperienceAurora />;
}

/* ═══════════════════════════════════════
   AURORA — Glassmorphic Vertical Timeline
═══════════════════════════════════════ */
function ExperienceAurora() {
    return (
        <section id="experience" className="py-24 md:py-32 relative">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="text-center mb-16">
                    <p className="text-[0.8rem] font-semibold tracking-[0.15em] uppercase text-accent-2 mb-3">Career Journey</p>
                    <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1]">
                        Work{' '}
                        <span className="bg-gradient-text bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Experience</span>
                    </h2>
                </div>

                <div className="max-w-[900px] mx-auto relative pl-10 md:pl-12 space-y-12">
                    {/* Vertical timeline spine positioned exactly at left 16px (left-4) */}
                    <div className="absolute top-3 bottom-3 left-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-accent-1 via-accent-2/60 to-transparent pointer-events-none" />

                    {EXPERIENCE_DATA.map((item, idx) => (
                        <div key={idx} className="relative group">
                            {/* Branch connector ├── from timeline spine to card with year badge */}
                            <div className="absolute -left-10 md:-left-12 translate-x-4 top-9 w-6 md:w-8 h-[2px] bg-gradient-to-r from-accent-1 to-accent-2/60 pointer-events-none group-hover:scale-x-105 origin-left transition-transform duration-300">
                                <div className="absolute -left-3 -top-6 px-1.5 py-0.5 rounded text-[0.62rem] font-mono font-bold bg-[var(--bg-primary,#0a0a0f)] border border-accent-1/50 text-accent-1 shadow-[0_0_8px_rgba(99,102,241,0.4)] whitespace-nowrap">
                                    {item.year}
                                </div>
                                <div className="absolute -left-1 -top-1 w-2.5 h-2.5 rounded-full bg-accent-1 shadow-[0_0_8px_var(--accent-1)]" />
                                <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 rotate-45 border-t-2 border-r-2 border-accent-2" />
                            </div>

                            <div className="bg-white/[0.04] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-7 md:p-9 transition-all duration-300 hover:border-[rgba(99,102,241,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(99,102,241,0.2)]">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                    <span className="px-3.5 py-1 rounded-full text-[0.75rem] font-bold bg-[var(--accent-1)]/15 border border-[var(--accent-1)]/30 text-[var(--accent-1)] flex items-center gap-1.5">
                                        <span>📅</span> {item.period}
                                    </span>
                                    <span className="text-[0.75rem] font-medium text-[var(--text-muted)]">{item.location} • {item.type}</span>
                                </div>
                                <h3 className="text-[1.4rem] font-bold text-[var(--text-primary)] mb-1">{item.role}</h3>
                                <div className="text-[1.05rem] font-semibold text-[var(--accent-2)] mb-3">@ {item.company}</div>
                                <p className="text-[0.9rem] text-[var(--text-secondary)] mb-6 font-medium leading-relaxed">{item.description}</p>
                                <ul className="space-y-2.5 text-[0.88rem] text-[var(--text-secondary)] mb-6">
                                    {item.achievements.map((ach, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <span className="text-[var(--accent-1)] mt-1">✦</span>
                                            <span>{ach}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                                    {item.technologies.map(t => (
                                        <span key={t} className="px-3 py-1 rounded-full text-[0.72rem] font-medium bg-white/[0.06] text-[var(--text-primary)] border border-white/10">
                                            {t}
                                        </span>
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
   APPLE — Cupertino Liquid Glass Experience
═══════════════════════════════════════ */
function ExperienceApple() {
    return (
        <section id="experience" className="py-20 md:py-28 relative overflow-hidden apple-section">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-16 text-center max-w-[800px] mx-auto">
                    <span className="apple-section-eyebrow">Professional History</span>
                    <h2 className="apple-section-title">
                        Engineered with impact. <br />
                        <span className="text-apple-subtle">A track record of shipping software.</span>
                    </h2>
                </div>

                <div className="max-w-[880px] mx-auto relative pl-10 md:pl-12">
                    <div className="absolute top-3 bottom-3 left-4 -translate-x-1/2 w-[2px] bg-apple-border pointer-events-none" />

                    {EXPERIENCE_DATA.map((item, idx) => (
                        <div key={idx} className="relative mb-12 last:mb-0 group">
                            {/* Apple Branch connector ├── with year */}
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
                                            {item.company} • {item.location}
                                        </span>
                                    </div>
                                    <h3 className="text-[1.5rem] md:text-[1.8rem] font-bold text-apple-heading tracking-tight mb-1">
                                        {item.role}
                                    </h3>
                                    <div className="text-[0.95rem] font-semibold text-apple-accent mb-4">{item.type}</div>
                                    <p className="text-apple-body text-[0.95rem] leading-relaxed mb-6 font-normal">
                                        {item.description}
                                    </p>
                                    <ul className="space-y-3 text-[0.9rem] text-apple-body leading-relaxed mb-8 pt-6 border-t border-apple-border">
                                        {item.achievements.map((ach, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="text-apple-accent mt-1 font-bold">•</span>
                                                <span>{ach}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map(t => (
                                            <span key={t} className="px-3.5 py-1.5 rounded-full text-[0.75rem] font-medium bg-apple-pill-bg text-apple-pill-fg border border-apple-border">
                                                {t}
                                            </span>
                                        ))}
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
   TRON — Cyberpunk Work Logs
═══════════════════════════════════════ */
function ExperienceTron() {
    return (
        <section id="experience" className="py-24 md:py-32 relative font-mono">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14">
                    <div className="text-accent-1 text-[0.7rem] tracking-[0.2em] mb-2 uppercase">{'// DEPLOYMENT_LOGS // CAREER'}</div>
                    <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold tracking-wider uppercase text-text-primary">
                        MISSION_HISTORY: <span className="text-accent-1">OPERATIONS</span>
                    </h2>
                </div>

                <div className="max-w-[880px] mx-auto relative pl-10 md:pl-12">
                    <div className="absolute top-2 bottom-2 left-4 -translate-x-1/2 w-[2px] bg-accent-1/30 pointer-events-none" />

                    {EXPERIENCE_DATA.map((item, idx) => (
                        <div key={idx} className="relative mb-10 last:mb-0">
                            {/* Tron Branch connector ├── with year */}
                            <div className="absolute -left-10 md:-left-12 translate-x-4 top-10 w-6 md:w-8 h-[2px] bg-accent-1/60 pointer-events-none group-hover:bg-accent-1 transition-colors">
                                <div className="absolute -left-3 -top-6 px-1.5 py-0.5 font-mono text-[0.6rem] bg-black border border-accent-1/60 text-accent-1 whitespace-nowrap shadow-[0_0_6px_var(--accent-1)]">
                                    {item.year}
                                </div>
                                <div className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-accent-1 shadow-[0_0_8px_var(--accent-1)]" />
                                <div className="absolute right-0 -top-1 font-mono text-[0.6rem] text-accent-1 leading-none">&gt;</div>
                            </div>

                            <div className="border border-accent-1/40 bg-black/80 p-8 relative group hover:border-accent-1 transition-all"
                                style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
                                <div className="flex justify-between items-center text-[0.75rem] text-accent-1 border-b border-accent-1/20 pb-3 mb-4">
                                    <span>MISSION_NODE #0{idx + 1}</span>
                                    <span>[{item.period}] // {item.location.toUpperCase()}</span>
                                </div>
                                <h3 className="text-[1.3rem] font-bold text-text-primary uppercase mb-1">{item.role}</h3>
                                <div className="text-[0.9rem] text-accent-2 mb-3">{'// COMPANY: '}{item.company.toUpperCase()}</div>
                                <p className="text-[0.82rem] text-text-secondary leading-relaxed mb-4">{item.description}</p>
                                <div className="space-y-2 text-[0.8rem] text-text-secondary mb-6">
                                    {item.achievements.map((ach, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="text-accent-1">&gt;&gt;</span>
                                            <span>{ach}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-accent-1/20">
                                    {item.technologies.map(t => (
                                        <span key={t} className="px-2.5 py-1 text-[0.7rem] border border-accent-1/30 text-accent-1 uppercase">
                                            [{t}]
                                        </span>
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
   MODERN — Minimalist Bento Experience
═══════════════════════════════════════ */
function ExperienceModern() {
    return (
        <section id="experience" className="py-24 md:py-32 relative bg-geist-background">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-16">
                    <div className="geist-badge mb-3">Work History</div>
                    <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-black tracking-[-0.06em] leading-tight mb-4">
                        Experience & <span className="text-gradient">Impact.</span>
                    </h2>
                </div>

                <div className="max-w-[880px] mx-auto relative pl-10 md:pl-12">
                    <div className="absolute top-3 bottom-3 left-4 -translate-x-1/2 w-[2px] bg-geist-gray-200 pointer-events-none" />

                    {EXPERIENCE_DATA.map((item, idx) => (
                        <div key={idx} className="relative mb-12 last:mb-0">
                            {/* Modern Branch connector ├── with year */}
                            <div className="absolute -left-10 md:-left-12 translate-x-4 top-10 w-6 md:w-8 h-[2px] bg-geist-gray-300 pointer-events-none group-hover:bg-geist-foreground transition-colors">
                                <div className="absolute -left-3 -top-6 px-1.5 py-0.5 rounded text-[0.62rem] font-mono font-bold bg-geist-background border border-geist-gray-200 text-geist-foreground whitespace-nowrap shadow-sm">
                                    {item.year}
                                </div>
                                <div className="absolute -left-1 -top-1 w-2.5 h-2.5 rounded-full bg-geist-foreground" />
                                <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 rotate-45 border-t-2 border-r-2 border-geist-foreground" />
                            </div>

                            <div className="bento-card p-8 md:p-10 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap justify-between items-baseline mb-4">
                                        <span className="text-[0.8rem] font-mono font-bold text-[var(--accent-2)] uppercase">{item.period}</span>
                                        <span className="text-[0.8rem] font-bold text-geist-gray-400">{item.company} • {item.location}</span>
                                    </div>
                                    <h3 className="text-[1.7rem] font-black text-geist-foreground tracking-tight mb-1">{item.role}</h3>
                                    <div className="text-[0.95rem] font-bold text-geist-gray-500 mb-4">{item.type}</div>
                                    <p className="text-[1rem] text-geist-gray-500 leading-relaxed font-medium mb-6">{item.description}</p>
                                    <ul className="space-y-3 text-[0.92rem] text-geist-gray-500 font-medium mb-8 pt-4 border-t border-geist-gray-200">
                                        {item.achievements.map((ach, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <span className="text-geist-foreground mt-1">•</span>
                                                <span>{ach}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-geist-gray-200">
                                        {item.technologies.map(t => (
                                            <span key={t} className="px-3 py-1 rounded-md text-[0.75rem] font-bold bg-geist-gray-100 text-geist-foreground border border-geist-gray-200">
                                                {t}
                                            </span>
                                        ))}
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
   ARES — Brutalist Operational Log
═══════════════════════════════════════ */
function ExperienceAres() {
    return (
        <section id="experience" className="py-24 md:py-32 relative bg-black font-mono">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14 border-b-4 border-accent-1 pb-4">
                    <span className="text-[0.8rem] uppercase tracking-widest text-accent-1 block mb-2">[ 05 // FIELD OPERATIONS ]</span>
                    <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase tracking-tight text-white">
                        EXPERIENCE // DEPLOYMENT
                    </h2>
                </div>

                <div className="max-w-[880px] mx-auto relative pl-10 md:pl-12">
                    <div className="absolute top-2 bottom-2 left-4 -translate-x-1/2 w-[3px] bg-accent-1 pointer-events-none" />

                    {EXPERIENCE_DATA.map((item, idx) => (
                        <div key={idx} className="relative mb-10 last:mb-0">
                            {/* Ares Branch connector ├── with year */}
                            <div className="absolute -left-10 md:-left-12 translate-x-4 top-10 w-6 md:w-8 h-[2px] bg-accent-1 pointer-events-none">
                                <div className="absolute -left-3 -top-6 px-1.5 py-0.5 font-mono text-[0.6rem] font-black bg-black border border-accent-1 text-accent-1 whitespace-nowrap">
                                    {item.year}
                                </div>
                                <div className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-accent-1" />
                                <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 rotate-45 border-t-2 border-r-2 border-accent-1" />
                            </div>

                            <div className="border-2 border-white/20 p-8 md:p-10 bg-[#0a0a0a] hover:border-accent-1 transition-all">
                                <div className="flex justify-between text-[0.75rem] text-accent-1 mb-4 border-b border-white/10 pb-2">
                                    <span>OPERATION #{idx + 1}</span>
                                    <span>{item.period} {'//'} {item.location}</span>
                                </div>
                                <h3 className="text-[1.5rem] font-black uppercase text-white mb-1">{item.role}</h3>
                                <div className="text-[0.95rem] font-bold text-accent-1 mb-3">CORP: {item.company}</div>
                                <p className="text-[0.85rem] text-white/70 mb-4">{item.description}</p>
                                <ul className="space-y-2 text-[0.82rem] text-white/60 mb-6">
                                    {item.achievements.map((ach, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-accent-1">■</span>
                                            <span>{ach}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                                    {item.technologies.map(t => (
                                        <span key={t} className="px-3 py-1 text-[0.72rem] bg-white/5 border border-white/20 text-white uppercase">
                                            {t}
                                        </span>
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
   WARFARE (COD) — Field Mission Records
═══════════════════════════════════════ */
function ExperienceCod() {
    return (
        <section id="experience" className="py-24 md:py-32 relative font-mono bg-[#070805]">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14">
                    <div className="text-accent-1 text-[0.65rem] tracking-[0.2em] mb-2 uppercase">⊕ OPERATIONAL SERVICE RECORD</div>
                    <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black uppercase tracking-[0.06em] text-text-primary">
                        FIELD <span className="text-accent-1">EXPERIENCE</span>
                    </h2>
                </div>

                <div className="max-w-[880px] mx-auto relative pl-10 md:pl-12">
                    <div className="absolute top-2 bottom-2 left-4 -translate-x-1/2 w-[2px] bg-accent-1/30 pointer-events-none" />

                    {EXPERIENCE_DATA.map((item, idx) => (
                        <div key={idx} className="relative mb-10 last:mb-0">
                            {/* COD Branch connector ├── with year */}
                            <div className="absolute -left-10 md:-left-12 translate-x-4 top-10 w-6 md:w-8 h-[2px] bg-accent-1/50 pointer-events-none group-hover:bg-accent-1 transition-colors">
                                <div className="absolute -left-3 -top-6 px-1 py-0.5 font-mono text-[0.58rem] bg-[#070805] border border-accent-1 text-accent-1 whitespace-nowrap">
                                    [{item.year}]
                                </div>
                                <div className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-[#070805] border border-accent-1" />
                                <div className="absolute right-0 -top-1.5 font-mono text-[0.65rem] text-accent-1">›</div>
                            </div>

                            <div className="border border-accent-1/30 bg-[#0e100a] p-8 md:p-10"
                                style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
                                <div className="flex justify-between items-center text-[0.7rem] text-accent-1 mb-3 border-b border-accent-1/20 pb-2">
                                    <span>MISSION // 0{idx + 1}</span>
                                    <span>{item.period} {'//'} {item.location}</span>
                                </div>
                                <h3 className="text-[1.3rem] font-bold uppercase text-text-primary mb-1">{item.role}</h3>
                                <div className="text-[0.85rem] text-accent-1 mb-3">COMMAND: {item.company}</div>
                                <p className="text-[0.82rem] text-text-secondary leading-relaxed mb-4">{item.description}</p>
                                <div className="space-y-2 text-[0.8rem] text-text-secondary mb-6">
                                    {item.achievements.map((ach, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="text-accent-1">⊕</span>
                                            <span>{ach}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-accent-1/20">
                                    {item.technologies.map(t => (
                                        <span key={t} className="px-2.5 py-1 text-[0.7rem] border border-accent-1/30 text-accent-1 uppercase">
                                            {t}
                                        </span>
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
   INDIC — Karma & Karya
═══════════════════════════════════════ */
function ExperienceIndic() {
    return (
        <section id="experience" className="py-28 md:py-36 relative bg-indic-bg overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-20 text-center">
                    <div className="text-indic-saffron font-bold tracking-[0.2em] uppercase text-xs mb-3">कर्म एवं साधना PROFESSIONAL JOURNEY</div>
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-4 italic">
                        Experience & <span className="indic-gradient-text">Devotion</span>.
                    </h2>
                    <p className="max-w-[550px] mx-auto text-indic-fg/70 italic font-medium">
                        Disciplined craft — building scalable digital platforms and operational workflows with dedication and precision.
                    </p>
                </div>

                <div className="max-w-[880px] mx-auto relative pl-10 md:pl-12">
                    <div className="absolute top-3 bottom-3 left-4 -translate-x-1/2 w-[2px] bg-indic-border/40 pointer-events-none" />

                    {EXPERIENCE_DATA.map((item, idx) => (
                        <div key={idx} className="relative mb-12 last:mb-0">
                            {/* Indic Branch connector ├── with year */}
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
                                        <span className="text-[0.85rem] font-bold text-indic-terracotta italic">{item.company} • {item.location}</span>
                                    </div>
                                    <h3 className="text-[1.5rem] font-bold text-indic-terracotta mb-1 italic">{item.role}</h3>
                                    <div className="text-[0.95rem] font-semibold text-indic-fg mb-4 italic">{item.type}</div>
                                    <p className="text-[0.95rem] text-indic-fg/80 italic font-medium leading-relaxed mb-6">{item.description}</p>
                                    <ul className="space-y-3 text-[0.92rem] text-indic-fg/80 italic font-medium mb-8 pt-4 border-t border-indic-border/20">
                                        {item.achievements.map((ach, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <span className="text-indic-saffron mt-0.5">𑁍</span>
                                                <span>{ach}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-indic-border/20">
                                        {item.technologies.map(t => (
                                            <span key={t} className="px-3.5 py-1 text-[0.75rem] font-bold border border-indic-border text-indic-terracotta rounded-sm">
                                                {t}
                                            </span>
                                        ))}
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
   CYBERSECURITY / HACKER / RED TEAM — Experience
═══════════════════════════════════════ */
function ExperienceHacker() {
    return (
        <section id="experience" className="py-24 relative bg-[var(--hacker-bg)] text-white font-mono overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14 border-b border-[var(--hacker-border)] pb-4 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <div className="text-[0.72rem] text-[var(--hacker-secondary)] uppercase tracking-[0.2em] font-bold">
                            {'// CAREER_TRAJECTORY_LOG'}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mt-1">
                            Operational Engagements <span className="text-[var(--hacker-accent)]">[ACTIVE_SERVICE]</span>
                        </h2>
                    </div>
                    <div className="text-xs text-[var(--hacker-accent)] font-mono">
                        VERIFIED_BY: ROOT // CKG
                    </div>
                </div>

                <div className="max-w-[880px] mx-auto relative pl-10 md:pl-12">
                    <div className="absolute top-2 bottom-2 left-4 -translate-x-1/2 w-[2px] bg-[var(--hacker-border)] pointer-events-none" />

                    {EXPERIENCE_DATA.map((exp, idx) => (
                        <div key={idx} className="relative mb-10 last:mb-0">
                            {/* Hacker Branch connector ├── with year */}
                            <div className="absolute -left-10 md:-left-12 translate-x-4 top-10 w-6 md:w-8 h-[2px] bg-[var(--hacker-accent)]/50 pointer-events-none group-hover:bg-[var(--hacker-accent)] transition-colors">
                                <div className="absolute -left-3 -top-6 px-1.5 py-0.5 font-mono text-[0.6rem] bg-black border border-[var(--hacker-accent)] text-[var(--hacker-accent)] whitespace-nowrap shadow-[0_0_6px_var(--hacker-accent)]">
                                    {exp.year}
                                </div>
                                <div className="absolute -left-1 -top-1 w-2.5 h-2.5 bg-black border border-[var(--hacker-accent)]" />
                                <div className="absolute right-0 -top-1 font-mono text-[0.6rem] text-[var(--hacker-accent)]">&gt;</div>
                            </div>

                            <div className="hacker-card p-6 md:p-8">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-[var(--hacker-border)]/40 text-xs">
                                    <div className="text-[var(--hacker-accent)] font-bold">
                                        ENGAGEMENT_0{idx + 1} :: {exp.period}
                                    </div>
                                    <div className="text-text-muted">
                                        LOCATION: {exp.location.toUpperCase()}
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                                    <h3 className="text-xl md:text-2xl font-black text-white uppercase">{exp.role}</h3>
                                    <span className="text-sm font-bold text-[var(--hacker-secondary)]">@{exp.company}</span>
                                    <span className="text-xs px-2 py-0.5 rounded bg-black border border-[var(--hacker-border)] text-text-muted">
                                        {exp.type}
                                    </span>
                                </div>

                                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                    {exp.description}
                                </p>

                                <div className="mb-6 space-y-2">
                                    {exp.achievements.map((ach, i) => (
                                        <div key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                                            <span className="text-[var(--hacker-accent)] font-bold">[*]</span>
                                            <span>{ach}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--hacker-border)]/30">
                                    {exp.technologies.map((t) => (
                                        <span key={t} className="px-2 py-0.5 text-[0.65rem] bg-black border border-[var(--hacker-border)] text-[var(--hacker-accent)] font-mono">
                                            {t}
                                        </span>
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
