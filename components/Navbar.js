'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import CommandPalette from '@/components/CommandPalette';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const [cmdOpen, setCmdOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const moreRef = useRef(null);
    const pathname = usePathname();
    const router = useRouter();

    // Scroll listener for subtle elevation/backdrop blur
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
            let current = '';
            sections.forEach((sec) => {
                if (window.scrollY >= sec.offsetTop - 180) current = sec.id;
            });
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cmd + K listener
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setCmdOpen((o) => !o);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Close "More" dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (moreRef.current && !moreRef.current.contains(e.target)) {
                setMoreOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleNavClick = (e, href) => {
        setMobileOpen(false);
        setMoreOpen(false);
        if (pathname === '/') {
            const targetId = href.startsWith('/#')
                ? href.replace('/#', '')
                : href.startsWith('#')
                ? href.replace('#', '')
                : href.startsWith('/')
                ? href.replace('/', '')
                : href;
            const target = targetId ? document.getElementById(targetId) : null;
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    // Primary visible pill tabs on desktop
    const primaryLinks = [
        { href: '/about', label: 'About' },
        { href: '/skills', label: 'Skills' },
        { href: '/projects', label: 'Projects' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/blogs', label: 'Blogs' },
    ];

    // Secondary items inside the sleek "More" dropdown
    const secondaryLinks = [
        { href: '/experience', label: 'Experience', desc: 'Work history & career progression', icon: '🏢' },
        { href: '/education', label: 'Education', desc: 'Academic background & degrees', icon: '🎓' },
        { href: '/certificates', label: 'Certifications', desc: 'Licenses, honors & achievements', icon: '📜' },
        { href: '/game', label: 'Mini Game', desc: 'Retro Easter-egg arcade game', icon: '🎮' },
    ];

    const isLinkActive = (href) => {
        const id = href.replace(/^\/?#?/, '');
        return activeSection === id || pathname === href;
    };

    const isMoreActive = secondaryLinks.some((item) => isLinkActive(item.href));

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[1000] flex justify-center pointer-events-none px-3 sm:px-6 pt-3.5 sm:pt-5">
                <nav
                    className={`pointer-events-auto w-full max-w-[1140px] flex items-center justify-between gap-3 px-3.5 sm:px-5 py-2.5 rounded-full transition-all duration-300 ${
                        scrolled
                            ? 'bg-[var(--bg-primary)]/80 backdrop-blur-2xl border border-[var(--border)] shadow-[0_16px_40px_rgba(0,0,0,0.35)]'
                            : 'bg-[var(--bg-primary)]/50 backdrop-blur-xl border border-[var(--border)]/70 shadow-[0_8px_24px_rgba(0,0,0,0.15)]'
                    }`}
                >
                    {/* Brand Logo with Modern Monogram Pill */}
                    <Link
                        href="/"
                        onClick={(e) => handleNavClick(e, '/')}
                        className="group flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-full hover:bg-[var(--bg-card)] transition-colors no-underline shrink-0"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-1 to-accent-2 flex items-center justify-center text-white font-black text-[0.8rem] shadow-sm group-hover:scale-105 transition-transform">
                            CK
                        </div>
                        <span className="text-[0.95rem] font-bold text-text-primary tracking-tight hidden min-[400px]:inline-block">
                            Gupta<span className="text-accent-1">.</span>
                        </span>
                    </Link>

                    {/* Desktop Pill Navigation (Middle Capsule) */}
                    <div className="hidden lg:flex items-center gap-1 px-1.5 py-1 rounded-full bg-[var(--bg-card)]/50 border border-[var(--border)]/60">
                        {primaryLinks.map(({ href, label }) => {
                            const active = isLinkActive(href);
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={(e) => handleNavClick(e, href)}
                                    className={`relative px-3.5 py-1.5 rounded-full text-[0.82rem] font-medium transition-all duration-200 ${
                                        active
                                            ? 'text-text-primary bg-[var(--bg-secondary)] shadow-sm font-semibold'
                                            : 'text-text-secondary hover:text-text-primary hover:bg-[var(--bg-secondary)]/50'
                                    }`}
                                >
                                    {label}
                                    {active && (
                                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent-1" />
                                    )}
                                </Link>
                            );
                        })}

                        {/* Dropdown for More Links */}
                        <div ref={moreRef} className="relative">
                            <button
                                type="button"
                                onClick={() => setMoreOpen((o) => !o)}
                                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[0.82rem] font-medium transition-all duration-200 cursor-pointer ${
                                    moreOpen || isMoreActive
                                        ? 'text-text-primary bg-[var(--bg-secondary)] font-semibold'
                                        : 'text-text-secondary hover:text-text-primary hover:bg-[var(--bg-secondary)]/50'
                                }`}
                            >
                                <span>More</span>
                                <svg
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {moreOpen && (
                                <div className="absolute right-0 top-11 z-[999] w-[270px] rounded-2xl bg-[var(--bg-primary)]/95 backdrop-blur-2xl border border-[var(--border)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2 animate-fadeIn">
                                    <div className="text-[0.65rem] font-bold uppercase tracking-wider text-text-muted px-3 py-1.5">
                                        More Sections
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        {secondaryLinks.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={(e) => handleNavClick(e, item.href)}
                                                className={`flex items-start gap-2.5 p-2 rounded-xl transition-all ${
                                                    isLinkActive(item.href)
                                                        ? 'bg-accent-1/10 border border-accent-1/30 text-text-primary'
                                                        : 'hover:bg-[var(--bg-secondary)] text-text-secondary hover:text-text-primary'
                                                }`}
                                            >
                                                <span className="text-[1.1rem] shrink-0 mt-0.5">{item.icon}</span>
                                                <div className="min-w-0">
                                                    <div className="text-[0.82rem] font-semibold text-text-primary leading-tight">
                                                        {item.label}
                                                    </div>
                                                    <div className="text-[0.68rem] text-text-muted leading-tight mt-0.5 truncate">
                                                        {item.desc}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Controls: Cmd+K Search Pill, ThemeSwitcher, Hire Me, Mobile Toggle */}
                    <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                        {/* Cmd+K Quick Search Pill */}
                        <button
                            type="button"
                            onClick={() => setCmdOpen(true)}
                            aria-label="Open Spotlight Search (Cmd+K)"
                            className="flex items-center gap-2 px-2.5 sm:px-3 h-9 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-text-muted hover:text-text-primary hover:border-accent-1/40 transition-all duration-200 cursor-pointer"
                        >
                            <svg className="w-3.5 h-3.5 text-accent-1 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                            </svg>
                            <span className="text-[0.72rem] font-medium hidden md:inline-block">Search</span>
                            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[0.62rem] font-mono text-text-muted bg-[var(--bg-secondary)] border border-[var(--border)]">
                                ⌘K
                            </kbd>
                        </button>

                        {/* Theme Switcher Button */}
                        <ThemeSwitcher />

                        {/* Hire Me / Contact CTA */}
                        <Link
                            href="/contact"
                            onClick={(e) => handleNavClick(e, '/contact')}
                            className="hidden sm:inline-flex items-center gap-1.5 px-4 h-9 rounded-full bg-text-primary text-[var(--bg-primary)] font-semibold text-[0.78rem] tracking-tight hover:opacity-90 hover:scale-105 transition-all shadow-sm"
                        >
                            <span>Contact</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        </Link>

                        {/* Mobile Menu Hamburger */}
                        <button
                            type="button"
                            onClick={() => setMobileOpen((o) => !o)}
                            aria-label="Toggle navigation menu"
                            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-text-primary hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
                        >
                            <div className="w-4 flex flex-col gap-1">
                                <span
                                    className={`block h-0.5 bg-text-primary rounded-full transition-transform duration-200 ${
                                        mobileOpen ? 'rotate-45 translate-y-1.5' : ''
                                    }`}
                                />
                                <span
                                    className={`block h-0.5 bg-text-primary rounded-full transition-opacity duration-200 ${
                                        mobileOpen ? 'opacity-0' : ''
                                    }`}
                                />
                                <span
                                    className={`block h-0.5 bg-text-primary rounded-full transition-transform duration-200 ${
                                        mobileOpen ? '-rotate-45 -translate-y-1.5' : ''
                                    }`}
                                />
                            </div>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Sheet / Drawer */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-[990] bg-black/60 backdrop-blur-md lg:hidden animate-fadeIn"
                    onClick={() => setMobileOpen(false)}
                >
                    <div
                        className="fixed top-[76px] left-4 right-4 max-h-[80vh] overflow-y-auto rounded-3xl bg-[var(--bg-primary)]/95 backdrop-blur-2xl border border-[var(--border)] p-5 shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col gap-4 animate-scaleUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Search shortcut row inside mobile drawer */}
                        <button
                            type="button"
                            onClick={() => {
                                setMobileOpen(false);
                                setCmdOpen(true);
                            }}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] text-text-muted text-[0.85rem]"
                        >
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-accent-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                                Quick command / search...
                            </span>
                            <kbd className="px-2 py-0.5 rounded text-[0.68rem] font-mono bg-[var(--bg-card)] border border-[var(--border)]">
                                ⌘K
                            </kbd>
                        </button>

                        <div className="text-[0.7rem] font-bold uppercase tracking-wider text-text-muted px-1">
                            Primary Navigation
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {primaryLinks.map(({ href, label }) => {
                                const active = isLinkActive(href);
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={(e) => handleNavClick(e, href)}
                                        className={`px-3.5 py-2.5 rounded-xl text-[0.85rem] font-semibold transition-all ${
                                            active
                                                ? 'bg-accent-1 text-white shadow-md'
                                                : 'bg-[var(--bg-card)] text-text-secondary hover:text-text-primary'
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="text-[0.7rem] font-bold uppercase tracking-wider text-text-muted px-1 mt-2">
                            Additional Portals
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            {secondaryLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-secondary)] border border-[var(--border)] text-text-secondary hover:text-text-primary transition-colors"
                                >
                                    <span className="text-[1.2rem]">{item.icon}</span>
                                    <div>
                                        <div className="text-[0.85rem] font-semibold text-text-primary">{item.label}</div>
                                        <div className="text-[0.7rem] text-text-muted">{item.desc}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <Link
                            href="/contact"
                            onClick={(e) => handleNavClick(e, '/contact')}
                            className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-accent-1 to-accent-2 text-white font-bold text-center text-[0.9rem] shadow-md"
                        >
                            Get in Touch / Hire Me
                        </Link>
                    </div>
                </div>
            )}

            {/* Global Spotlight / Command Palette Dialog */}
            <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
        </>
    );
}
