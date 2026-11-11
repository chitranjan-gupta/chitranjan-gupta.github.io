'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme, DESIGNS, DESIGN_THEMES } from '@/context/ThemeContext';

export default function ThemeSwitcher() {
    const { theme, setTheme, design, setDesign, availableThemes } = useTheme();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const currentTheme = availableThemes.find((t) => t.id === theme) || availableThemes[0];
    const currentDesign = DESIGNS.find((d) => d.id === design) || DESIGNS[0];

    return (
        <div ref={ref} className="relative">
            {/* Trigger */}
            <button
                onClick={() => setOpen((o) => !o)}
                aria-label="Switch theme or design"
                title="Theme & Design"
                className="flex items-center gap-2 px-3 h-9 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] transition-all duration-200 hover:scale-105"
            >
                <span
                    className="w-4 h-4 rounded-full border border-[var(--border)] flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${currentTheme.accent} 50%, ${currentTheme.secondary} 50%)` }}
                />
                <span className="text-[0.72rem] font-semibold text-text-secondary hidden sm:block tracking-wide">
                    {currentDesign.label}
                </span>
                <svg className="w-3 h-3 text-text-muted" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Panel */}
            {open && (
                <div className="absolute right-0 top-12 z-[9999] rounded-[22px] bg-[var(--bg-primary)] backdrop-blur-2xl border border-[var(--border)] shadow-[0_24px_80px_rgba(0,0,0,0.55)] w-[320px] max-h-[82vh] overflow-y-auto custom-scrollbar">

                    {/* ── Design System ── */}
                    <div className="p-4 border-b border-[var(--border)]">
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-text-muted">
                                Design System
                            </p>
                            <span className="text-[0.65rem] font-medium text-text-muted px-2 py-0.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border)]">
                                {DESIGNS.length} Styles
                            </span>
                        </div>
                        {/* Responsive grid for designs */}
                        <div className="grid grid-cols-2 gap-2.5">
                            {DESIGNS.map(({ id, label, desc, icon }) => {
                                const isActive = design === id;
                                const previewTheme = DESIGN_THEMES[id]?.[0] || { accent: '#6366f1', secondary: '#06b6d4' };
                                return (
                                    <button
                                        key={id}
                                        onClick={() => setDesign(id)}
                                        className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${isActive
                                            ? 'border-[var(--accent-1)] bg-[color-mix(in_srgb,var(--accent-1)_14%,transparent)] shadow-md'
                                            : 'border-[var(--border)] hover:border-[var(--accent-1)]/50 hover:bg-[var(--bg-secondary)]'
                                            }`}
                                        style={isActive ? { borderColor: currentTheme.accent, boxShadow: `0 0 14px ${currentTheme.accent}44` } : {}}
                                    >
                                        <div className="w-full flex justify-center py-0.5">
                                            <DesignPreview id={id} accent={isActive ? currentTheme.accent : previewTheme.accent} secondary={isActive ? currentTheme.secondary : previewTheme.secondary} active={isActive} />
                                        </div>
                                        <span className={`text-[0.75rem] font-bold flex items-center gap-1 leading-none ${isActive ? 'text-text-primary' : 'text-text-secondary'}`}>
                                            <span className="text-[0.75rem] opacity-75">{icon}</span>
                                            {label}
                                        </span>
                                        <span className="text-[0.62rem] text-text-muted leading-tight text-center">{desc}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── Colour Theme (filtered per design) ── */}
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-text-muted">
                                Colour Palette
                            </p>
                            <span className="text-[0.65rem] font-medium text-text-muted">
                                {availableThemes.length} Options
                            </span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            {availableThemes.map(({ id, label, accent, secondary }) => {
                                const isActive = theme === id;
                                return (
                                    <button
                                        key={id}
                                        onClick={() => { setTheme(id); setOpen(false); }}
                                        className={`flex items-center gap-3 w-full px-3 py-2 rounded-xl text-left transition-all duration-150 cursor-pointer ${isActive ? 'bg-[var(--bg-secondary)] border border-[var(--border)] font-semibold' : 'hover:bg-[var(--bg-secondary)]/60 border border-transparent'
                                            }`}
                                    >
                                        <span
                                            className="w-[20px] h-[20px] rounded-full flex-shrink-0 border-2 transition-transform hover:scale-110"
                                            style={{
                                                background: `linear-gradient(135deg, ${accent} 50%, ${secondary} 50%)`,
                                                borderColor: isActive ? accent : 'var(--border)',
                                                boxShadow: isActive ? `0 0 10px ${accent}88` : 'none',
                                            }}
                                        />
                                        <span className={`text-[0.82rem] ${isActive ? 'text-text-primary font-bold' : 'text-text-secondary'}`}>
                                            {label}
                                        </span>
                                        {isActive && (
                                            <svg className="ml-auto w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: accent }}>
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

/* Mini design preview SVG for each design */
function DesignPreview({ id, accent, secondary, active }) {
    const dim = 'rgba(255,255,255,0.2)';
    const a = active ? accent : dim;
    const a2 = active ? secondary : dim;

    if (id === 'aurora') {
        return (
            <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
                <rect x="1" y="1" width="50" height="34" rx="8" fill="rgba(255,255,255,0.04)" stroke={a} strokeWidth="1.2" />
                <rect x="7" y="7" width="18" height="3" rx="1.5" fill={a} opacity="0.8" />
                <rect x="7" y="14" width="38" height="2" rx="1" fill={`${a}55`} />
                <rect x="7" y="19" width="28" height="2" rx="1" fill={`${a}33`} />
                <rect x="7" y="27" width="14" height="5" rx="2.5" fill={a} opacity="0.6" />
            </svg>
        );
    }
    if (id === 'tron') {
        return (
            <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
                {[8, 16, 24].map(y => <line key={y} x1="0" y1={y} x2="52" y2={y} stroke={`${a}40`} strokeWidth="0.5" strokeDasharray="2 2" />)}
                {[13, 26, 39].map(x => <line key={x} x1={x} y1="0" x2={x} y2="36" stroke={`${a}40`} strokeWidth="0.5" strokeDasharray="2 2" />)}
                <rect x="1" y="1" width="50" height="34" fill="rgba(0,0,0,0.7)" stroke={a} strokeWidth="1.2" />
                <polyline points="1,7 1,1 7,1" stroke={a2} strokeWidth="1.5" fill="none" />
                <polyline points="45,35 51,35 51,29" stroke={a2} strokeWidth="1.5" fill="none" />
                <rect x="6" y="7" width="14" height="2" fill={a} />
                <rect x="6" y="13" width="40" height="1.5" fill={`${a}66`} />
                <rect x="6" y="18" width="26" height="1.5" fill={`${a}44`} />
                <rect x="6" y="27" width="10" height="5" fill={a} opacity="0.8" />
            </svg>
        );
    }
    if (id === 'ares') {
        return (
            <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
                <rect x="5" y="5" width="50" height="34" fill={`${a}22`} />
                <rect x="1" y="1" width="50" height="34" fill="rgba(0,0,0,0.85)" stroke={a} strokeWidth="2" />
                <rect x="6" y="7" width="28" height="5" fill={a} />
                <rect x="6" y="15" width="40" height="2.5" fill={`${a}80`} />
                <rect x="6" y="20" width="26" height="2" fill={`${a}44`} />
                <rect x="6" y="27" width="18" height="6" fill={a} />
            </svg>
        );
    }
    if (id === 'modern') {
        return (
            <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
                <rect x="1" y="1" width="50" height="34" rx="6" fill="rgba(255,255,255,0.02)" stroke={a} strokeWidth="1.2" />
                <rect x="10" y="8" width="32" height="4" rx="2" fill={a} />
                <rect x="10" y="15" width="32" height="1.5" rx="0.75" fill={`${a}44`} />
                <rect x="10" y="18" width="24" height="1.5" rx="0.75" fill={`${a}22`} />
                <rect x="16" y="26" width="20" height="4" rx="2" fill={a} opacity="0.8" />
            </svg>
        );
    }
    if (id === 'indic') {
        return (
            <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
                <rect x="1" y="1" width="50" height="34" rx="4" fill="rgba(255,153,51,0.05)" stroke={a} strokeWidth="1.2" />
                <circle cx="26" cy="18" r="10" stroke={a} strokeWidth="0.5" strokeDasharray="2 1" />
                <path d="M26 10 L28 15 L24 15 Z" fill={a} opacity="0.6" />
                <path d="M26 26 L28 21 L24 21 Z" fill={a} opacity="0.6" />
                <rect x="8" y="8" width="8" height="2" fill={`${a}55`} />
                <rect x="8" y="13" width="12" height="1" fill={`${a}33`} />
                <rect x="18" y="26" width="16" height="4" fill={a} opacity="0.8" />
            </svg>
        );
    }
    if (id === 'apple') {
        return (
            <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
                <rect x="1" y="1" width="50" height="34" rx="8" fill="rgba(0,0,0,0.6)" stroke={a} strokeWidth="1.2" />
                <circle cx="26" cy="14" r="5" fill={a} opacity="0.8" />
                <rect x="12" y="23" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.7)" />
                <rect x="18" y="28" width="16" height="2" rx="1" fill={`${a}66`} />
            </svg>
        );
    }
    // cod / warfare
    return (
        <svg width="52" height="36" viewBox="0 0 52 36" fill="none">
            <rect x="0" y="0" width="52" height="36" fill="#0b0d09" />
            <polygon
                points="1,1 40,1 51,12 51,35 12,35 1,24"
                fill="rgba(14,16,10,0.97)"
                stroke={a}
                strokeWidth="1.2"
            />
            <line x1="1" y1="1" x2="40" y2="1" stroke={a} strokeWidth="2" />
            {[1, 14, 27, 40].map((x) => (
                <line key={x} x1={x + 12} y1="35" x2={x + 10} y2="35" stroke={a} strokeWidth="2" />
            ))}
            <circle cx="10" cy="10" r="4" stroke={a2} strokeWidth="1" fill="none" />
            <line x1="10" y1="5" x2="10" y2="15" stroke={a2} strokeWidth="0.8" />
            <line x1="5" y1="10" x2="15" y2="10" stroke={a2} strokeWidth="0.8" />
            <rect x="18" y="8" width="20" height="2.5" fill={a} opacity="0.8" />
            <rect x="18" y="14" width="28" height="1.5" fill={`${a}55`} />
            <rect x="18" y="19" width="20" height="1.5" fill={`${a}33`} />
            <rect x="0" y="0" width="52" height="36" fill="url(#vig)" opacity="0.4" />
            <defs>
                <radialGradient id="vig" cx="50%" cy="50%" r="70%">
                    <stop offset="40%" stopColor="transparent" />
                    <stop offset="100%" stopColor="black" />
                </radialGradient>
            </defs>
        </svg>
    );
}
