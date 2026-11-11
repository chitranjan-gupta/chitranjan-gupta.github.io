'use client';

import { useTheme } from '@/context/ThemeContext';

const CERTIFICATES_DATA = [
    {
        title: 'Blockchain and its Applications',
        issuer: 'NPTEL & IIT Kharagpur',
        date: '2023',
        credentialId: 'NPTEL23CS47S4441114404095491',
        link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS47S4441114404095491',
        image: '/assets/nptel-blockchain.png',
        skills: ['Blockchain Architecture', 'Smart Contracts', 'Solidity', 'Consensus Algorithms'],
        icon: '⛓️'
    },
    {
        title: 'C Training & Certification',
        issuer: 'Spoken Tutorial Project, IIT Bombay',
        date: '2023',
        credentialId: '3150188RTD',
        link: 'https://spoken-tutorial.org/software-training/test/participant/certificate/90259/3150188/',
        image: '/assets/spoken-tutorial-c.png',
        skills: ['C Programming', 'Data Structures', 'Memory Management', 'Algorithms'],
        icon: '💻'
    }
];

export default function Certificates() {
    const { design } = useTheme();

    if (design === 'tron') return <CertificatesTron />;
    if (design === 'ares') return <CertificatesAres />;
    if (design === 'cod') return <CertificatesCod />;
    if (design === 'modern') return <CertificatesModern />;
    if (design === 'indic') return <CertificatesIndic />;
    if (design === 'apple') return <CertificatesApple />;
    if (design === 'hacker') return <CertificatesHacker />;
    return <CertificatesAurora />;
}

/* ═══════════════════════════════════════
   AURORA — Glassmorphic Certifications
═══════════════════════════════════════ */
function CertificatesAurora() {
    return (
        <section id="certificates" className="py-24 md:py-32 relative">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="text-center mb-16">
                    <p className="text-[0.8rem] font-semibold tracking-[0.15em] uppercase text-accent-2 mb-3">Verified Accreditations</p>
                    <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-[-0.03em] leading-[1.1]">
                        Licenses &{' '}
                        <span className="bg-gradient-text bg-clip-text" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Certifications</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1050px] mx-auto">
                    {CERTIFICATES_DATA.map((item, idx) => (
                        <div key={idx} className="bg-white/[0.04] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-8 md:p-10 transition-all duration-300 hover:border-[rgba(99,102,241,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(99,102,241,0.2)] flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[2rem]">{item.icon}</span>
                                    <span className="px-3 py-1 rounded-full text-[0.72rem] font-semibold bg-[var(--accent-1)]/15 border border-[var(--accent-1)]/30 text-[var(--accent-1)]">
                                        Issued {item.date}
                                    </span>
                                </div>
                                <h3 className="text-[1.3rem] font-bold text-[var(--text-primary)] mb-1 leading-snug">{item.title}</h3>
                                <div className="text-[0.9rem] font-medium text-[var(--accent-2)] mb-2">{item.issuer}</div>
                                <div className="text-[0.75rem] font-mono text-[var(--text-muted)] mb-6">ID: {item.credentialId}</div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.skills.map(s => (
                                        <span key={s} className="px-3 py-1 rounded-full text-[0.72rem] font-medium bg-white/[0.06] text-[var(--text-secondary)] border border-white/10">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-[var(--border)]">
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[0.8rem] font-semibold text-[var(--accent-1)] hover:underline inline-flex items-center gap-1.5">
                                    Verify Credential
                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   APPLE — Liquid Glass Cupertino Cards
═══════════════════════════════════════ */
function CertificatesApple() {
    return (
        <section id="certificates" className="py-20 md:py-28 relative overflow-hidden apple-section">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-16 text-center max-w-[800px] mx-auto">
                    <span className="apple-section-eyebrow">Industry Credentials</span>
                    <h2 className="apple-section-title">
                        Certified expertise. <br />
                        <span className="text-apple-subtle">Recognized by global cloud & software leaders.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1050px] mx-auto">
                    {CERTIFICATES_DATA.map((item, idx) => (
                        <div key={idx} className="apple-card p-8 md:p-10 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-apple-icon-bg flex items-center justify-center text-[1.6rem] border border-apple-border shadow-sm">
                                        {item.icon}
                                    </div>
                                    <span className="text-[0.8rem] font-medium text-apple-muted px-3 py-1 rounded-full bg-apple-pill-bg border border-apple-border">
                                        {item.date}
                                    </span>
                                </div>
                                <h3 className="text-[1.4rem] md:text-[1.6rem] font-bold text-apple-heading tracking-tight mb-2 leading-tight">
                                    {item.title}
                                </h3>
                                <div className="text-[0.95rem] font-semibold text-apple-accent mb-2">{item.issuer}</div>
                                <div className="text-[0.8rem] font-mono text-apple-muted mb-6">Credential: {item.credentialId}</div>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {item.skills.map(s => (
                                        <span key={s} className="px-3.5 py-1.5 rounded-full text-[0.75rem] font-medium bg-apple-pill-bg text-apple-pill-fg border border-apple-border">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-apple-border">
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="apple-pill-button">
                                    <span>Verify Credential</span>
                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   TRON — Cyberpunk Security Tokens
═══════════════════════════════════════ */
function CertificatesTron() {
    return (
        <section id="certificates" className="py-24 md:py-32 relative font-mono">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14">
                    <div className="text-accent-1 text-[0.7rem] tracking-[0.2em] mb-2 uppercase">{'// CRYPTOGRAPHIC_KEYS // ACCREDITATIONS'}</div>
                    <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold tracking-wider uppercase text-text-primary">
                        SECURITY_TOKENS: <span className="text-accent-1">CERTIFIED</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1050px] mx-auto">
                    {CERTIFICATES_DATA.map((item, idx) => (
                        <div key={idx} className="border border-accent-1/40 bg-black/80 p-8 relative group hover:border-accent-1 transition-all"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}>
                            <div className="flex justify-between items-center text-[0.75rem] text-accent-1 border-b border-accent-1/20 pb-3 mb-4">
                                <span>AUTH_TOKEN #0{idx + 1}</span>
                                <span>YEAR: {item.date}</span>
                            </div>
                            <h3 className="text-[1.2rem] font-bold text-text-primary uppercase mb-1">{item.title}</h3>
                            <div className="text-[0.85rem] text-accent-2 mb-3">{'// ISSUER: '}{item.issuer.toUpperCase()}</div>
                            <div className="text-[0.75rem] text-text-muted mb-4 font-mono">HASH: {item.credentialId}</div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {item.skills.map(s => (
                                    <span key={s} className="px-2 py-0.5 text-[0.7rem] border border-accent-1/30 text-accent-1 uppercase">
                                        [{s}]
                                    </span>
                                ))}
                            </div>
                            <div className="pt-4 border-t border-accent-1/20">
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[0.75rem] text-accent-1 uppercase hover:underline inline-flex items-center gap-1.5">
                                    [VERIFY_ON_CHAIN →]
                                </a>
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
function CertificatesModern() {
    return (
        <section id="certificates" className="py-24 md:py-32 relative bg-geist-background">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-16">
                    <div className="geist-badge mb-3">Accreditations</div>
                    <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-black tracking-[-0.06em] leading-tight mb-4">
                        Certificates & <span className="text-gradient">Credentials.</span>
                    </h2>
                </div>

                <div className="bento-grid">
                    {CERTIFICATES_DATA.map((item, idx) => (
                        <div key={idx} className="bento-card col-span-12 md:col-span-6 p-8 md:p-10 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-baseline mb-4">
                                    <span className="text-[0.8rem] font-mono font-bold text-[var(--accent-2)] uppercase">{item.date}</span>
                                    <span className="text-[0.75rem] font-mono text-geist-gray-400">{item.credentialId}</span>
                                </div>
                                <h3 className="text-[1.5rem] font-black text-geist-foreground tracking-tight mb-1">{item.title}</h3>
                                <div className="text-[0.95rem] font-bold text-geist-gray-600 mb-6">{item.issuer}</div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.skills.map(s => (
                                        <span key={s} className="px-3 py-1 rounded-md text-[0.75rem] font-bold bg-geist-gray-100 text-geist-foreground border border-geist-gray-200">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-geist-gray-200">
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[0.8rem] font-bold text-geist-foreground uppercase tracking-[0.15em] inline-flex items-center gap-1.5 hover:text-[var(--accent-2)] transition-colors">
                                    Verify Certificate
                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   ARES — Brutalist Verification Grid
═══════════════════════════════════════ */
function CertificatesAres() {
    return (
        <section id="certificates" className="py-24 md:py-32 relative bg-black font-mono">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14 border-b-4 border-accent-1 pb-4">
                    <span className="text-[0.8rem] uppercase tracking-widest text-accent-1 block mb-2">[ 06 // CERTIFIED CREDENTIALS ]</span>
                    <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black uppercase tracking-tight text-white">
                        ACCREDITATIONS // PROOF
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CERTIFICATES_DATA.map((item, idx) => (
                        <div key={idx} className="border-2 border-white/20 p-8 bg-[#0a0a0a] hover:border-accent-1 transition-all flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between text-[0.75rem] text-accent-1 mb-4 border-b border-white/10 pb-2">
                                    <span>AUTH #{idx + 1}</span>
                                    <span>YEAR: {item.date}</span>
                                </div>
                                <h3 className="text-[1.3rem] font-black uppercase text-white mb-1">{item.title}</h3>
                                <div className="text-[0.9rem] font-bold text-accent-1 mb-3">ISSUER: {item.issuer}</div>
                                <div className="text-[0.75rem] text-white/50 mb-4 font-mono">ID: {item.credentialId}</div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.skills.map(s => (
                                        <span key={s} className="px-2.5 py-1 text-[0.7rem] bg-white/5 border border-white/20 text-white uppercase">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-4 border-t border-white/10">
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[0.8rem] uppercase text-accent-1 font-bold hover:underline">
                                    [VERIFY AUTHENTICITY →]
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   WARFARE (COD) — Classified Certifications
═══════════════════════════════════════ */
function CertificatesCod() {
    return (
        <section id="certificates" className="py-24 md:py-32 relative font-mono bg-[#070805]">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14">
                    <div className="text-accent-1 text-[0.65rem] tracking-[0.2em] mb-2 uppercase">⊕ SPECIALIZED QUALIFICATIONS</div>
                    <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black uppercase tracking-[0.06em] text-text-primary">
                        LICENSES & <span className="text-accent-1">ACCREDITATIONS</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {CERTIFICATES_DATA.map((item, idx) => (
                        <div key={idx} className="border border-accent-1/30 bg-[#0e100a] p-8 flex flex-col justify-between"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
                            <div>
                                <div className="flex justify-between items-center text-[0.7rem] text-accent-1 mb-3 border-b border-accent-1/20 pb-2">
                                    <span>CERT_CODE // 0{idx + 1}</span>
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="text-[1.2rem] font-bold uppercase text-text-primary mb-1">{item.title}</h3>
                                <div className="text-[0.85rem] text-accent-1 mb-2">AUTH: {item.issuer}</div>
                                <div className="text-[0.75rem] text-text-secondary mb-4">REG_HASH: {item.credentialId}</div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.skills.map(s => (
                                        <span key={s} className="px-2.5 py-1 text-[0.7rem] border border-accent-1/30 text-accent-1 uppercase">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-4 border-t border-accent-1/20">
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[0.75rem] text-accent-1 uppercase hover:underline">
                                    ⊕ VERIFY SECURITY CLEARANCE
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   INDIC — Praman Patra (Heritage)
═══════════════════════════════════════ */
function CertificatesIndic() {
    return (
        <section id="certificates" className="py-28 md:py-36 relative bg-indic-bg overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-20 text-center">
                    <div className="text-indic-saffron font-bold tracking-[0.2em] uppercase text-xs mb-3">प्रमाण पत्र ACCREDITATIONS</div>
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-4 italic">
                        Honors & <span className="indic-gradient-text">Certifications</span>.
                    </h2>
                    <p className="max-w-[550px] mx-auto text-indic-fg/70 italic font-medium">
                        Recognized qualifications in enterprise cloud platforms, full-stack frameworks, and distributed databases.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1050px] mx-auto">
                    {CERTIFICATES_DATA.map((item, idx) => (
                        <div key={idx} className="jaali-card p-8 md:p-10 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-center mb-4 border-b border-indic-border/30 pb-3">
                                    <span className="text-[1.8rem]">{item.icon}</span>
                                    <span className="text-[0.75rem] font-bold text-indic-saffron uppercase tracking-widest">{item.date}</span>
                                </div>
                                <h3 className="text-[1.4rem] font-bold text-indic-terracotta mb-1 italic">{item.title}</h3>
                                <div className="text-[0.95rem] font-semibold text-indic-fg mb-2 italic">{item.issuer}</div>
                                <div className="text-[0.75rem] font-mono text-indic-fg/60 mb-6 italic">प्रमाण संख्या: {item.credentialId}</div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.skills.map(s => (
                                        <span key={s} className="px-3 py-1 text-[0.72rem] font-bold border border-indic-border text-indic-terracotta rounded-sm">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-indic-border/20">
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[0.82rem] font-bold text-indic-saffron hover:underline inline-flex items-center gap-1.5 italic">
                                    प्रमाण देखें Verify Credential
                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ═══════════════════════════════════════
   CYBERSECURITY / HACKER / RED TEAM — Certificates
═══════════════════════════════════════ */
function CertificatesHacker() {
    return (
        <section id="certificates" className="py-24 relative bg-[var(--hacker-bg)] text-white font-mono overflow-hidden">
            <div className="w-[min(1200px,92vw)] mx-auto">
                <div className="mb-14 border-b border-[var(--hacker-border)] pb-4 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <div className="text-[0.72rem] text-[var(--hacker-secondary)] uppercase tracking-[0.2em] font-bold">
                            {'// SECURITY_CLEARANCES & ACCREDITATIONS'}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mt-1">
                            Verified Cryptographic Badges <span className="text-[var(--hacker-accent)]">[PKI_VALID]</span>
                        </h2>
                    </div>
                    <div className="text-xs text-[var(--hacker-accent)] font-mono">
                        STATUS: ALL_CERTIFICATES_AUTHENTICATED
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CERTIFICATES_DATA.map((item, idx) => (
                        <div key={idx} className="hacker-card p-6 md:p-8 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-center mb-4 pb-2 border-b border-[var(--hacker-border)]/40 text-xs">
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="text-[var(--hacker-accent)] font-bold">{item.date}</span>
                                </div>
                                <h3 className="text-xl font-black text-white uppercase mb-1">{item.title}</h3>
                                <div className="text-sm font-bold text-[var(--hacker-secondary)] mb-2">{item.issuer}</div>
                                <div className="text-xs text-text-muted mb-4 font-mono">ID: {item.credentialId}</div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.skills.map((s) => (
                                        <span key={s} className="px-2 py-0.5 text-[0.65rem] bg-black border border-[var(--hacker-border)] text-[var(--hacker-accent)]">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-[var(--hacker-border)]/30">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-bold text-[var(--hacker-accent)] hover:underline inline-flex items-center gap-1.5"
                                >
                                    <span>[+] VERIFY_SIGNATURE()</span>
                                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
