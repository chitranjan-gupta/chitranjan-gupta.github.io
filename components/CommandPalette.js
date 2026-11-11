'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme, DESIGNS } from '@/context/ThemeContext';

export default function CommandPalette({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);
    const router = useRouter();
    const { design, setDesign, availableThemes, setTheme } = useTheme();

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setQuery('');
                setSelectedIndex(0);
                inputRef.current?.focus();
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === 'Escape') {
                e.preventDefault();
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    const navigateTo = (href) => {
        onClose();
        if (href.startsWith('#')) {
            const id = href.slice(1);
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                router.push(`/${href}`);
            }
        } else {
            router.push(href);
        }
    };

    // Navigation items
    const navItems = [
        { id: 'about', title: 'About Me', category: 'Navigation', icon: '👤', hint: 'Overview & Story', action: () => navigateTo('/about') },
        { id: 'skills', title: 'Skills & Tech Stack', category: 'Navigation', icon: '⚡', hint: 'Frontend, Backend, DevOps', action: () => navigateTo('/skills') },
        { id: 'projects', title: 'Featured Projects', category: 'Navigation', icon: '🚀', hint: 'Chrome extensions, Web apps', action: () => navigateTo('/projects') },
        { id: 'portfolio', title: 'Portfolio Showcase', category: 'Navigation', icon: '💼', hint: 'Selected work & apps', action: () => navigateTo('/portfolio') },
        { id: 'experience', title: 'Work Experience', category: 'Navigation', icon: '🏢', hint: 'Career history', action: () => navigateTo('/experience') },
        { id: 'education', title: 'Education & Academics', category: 'Navigation', icon: '🎓', hint: 'Degrees & institutions', action: () => navigateTo('/education') },
        { id: 'certificates', title: 'Certificates & Licenses', category: 'Navigation', icon: '📜', hint: 'Credentials', action: () => navigateTo('/certificates') },
        { id: 'blogs', title: 'Articles & Blogs', category: 'Navigation', icon: '✍️', hint: 'Tech articles & insights', action: () => navigateTo('/blogs') },
        { id: 'game', title: 'Retro Mini-Game', category: 'Navigation', icon: '🎮', hint: 'Play interactive mini-game', action: () => navigateTo('/game') },
        { id: 'contact', title: 'Contact / Hire Me', category: 'Navigation', icon: '✉️', hint: 'Connect & discuss roles', action: () => navigateTo('/contact') },
    ];

    // Design switchers
    const designItems = DESIGNS.map((d) => ({
        id: `design-${d.id}`,
        title: `Switch Theme to ${d.label}`,
        category: 'Theme & Aesthetic',
        icon: d.icon,
        hint: `${d.desc} aesthetic`,
        action: () => {
            setDesign(d.id);
            onClose();
        },
    }));

    // Quick links
    const externalItems = [
        { id: 'github', title: 'GitHub Profile', category: 'External Links', icon: '🐙', hint: 'github.com/chitranjan-gupta', action: () => { window.open('https://github.com/chitranjan-gupta', '_blank'); onClose(); } },
        { id: 'linkedin', title: 'LinkedIn Profile', category: 'External Links', icon: '💼', hint: 'linkedin.com/in/chitranjan-gupta', action: () => { window.open('https://www.linkedin.com/in/chitranjan-gupta', '_blank'); onClose(); } },
        { id: 'twitter', title: 'X (Twitter)', category: 'External Links', icon: '🐦', hint: '@chitranjan___', action: () => { window.open('https://www.x.com/chitranjan___', '_blank'); onClose(); } },
    ];

    const allItems = [...navItems, ...designItems, ...externalItems];

    const filtered = query.trim() === ''
        ? allItems
        : allItems.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase()) ||
            item.hint.toLowerCase().includes(query.toLowerCase())
        );

    const handleSelect = (idx) => {
        if (filtered[idx]) {
            filtered[idx].action();
        }
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex((i) => (i + 1) % Math.max(1, filtered.length));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex((i) => (i - 1 + filtered.length) % Math.max(1, filtered.length));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            handleSelect(selectedIndex);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[10000] flex items-start justify-center pt-[12vh] sm:pt-[15vh] px-4 bg-black/60 backdrop-blur-md animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="w-full max-w-[620px] rounded-2xl bg-[var(--bg-primary)] border border-[var(--border)] shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col max-h-[75vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Search Header */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border)] bg-[var(--bg-secondary)]/50">
                    <svg className="w-5 h-5 text-accent-1 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search sections, switch themes, open links..."
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setSelectedIndex(0);
                        }}
                        onKeyDown={handleInputKeyDown}
                        className="w-full bg-transparent text-[0.95rem] text-text-primary placeholder:text-text-muted outline-none font-medium"
                    />
                    <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[0.68rem] font-mono text-text-muted bg-[var(--bg-card)] border border-[var(--border)] shrink-0">
                        ESC
                    </kbd>
                </div>

                {/* Results List */}
                <div className="overflow-y-auto p-2 space-y-1 custom-scrollbar">
                    {filtered.length === 0 ? (
                        <div className="py-12 text-center text-text-muted text-sm font-medium">
                            No matching commands or sections found.
                        </div>
                    ) : (
                        filtered.map((item, idx) => {
                            const isSelected = idx === selectedIndex;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => handleSelect(idx)}
                                    onMouseEnter={() => setSelectedIndex(idx)}
                                    className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all ${
                                        isSelected
                                            ? 'bg-accent-1/15 border border-accent-1/30 text-text-primary'
                                            : 'bg-transparent border border-transparent text-text-secondary hover:text-text-primary'
                                    }`}
                                >
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] flex items-center justify-center shrink-0 text-[1rem]">
                                            {item.icon}
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-[0.88rem] font-semibold truncate leading-tight">
                                                {item.title}
                                            </div>
                                            <div className="text-[0.72rem] text-text-muted truncate mt-0.5">
                                                {item.hint}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <span className="text-[0.68rem] font-medium text-text-muted px-2 py-0.5 rounded-full bg-[var(--bg-card)] border border-[var(--border)]">
                                            {item.category}
                                        </span>
                                        {isSelected && (
                                            <span className="text-[0.75rem] text-accent-1 font-mono">↵</span>
                                        )}
                                    </div>
                                </button>
                            );
                        })
                    )}
                </div>

                {/* Footer Tips */}
                <div className="px-5 py-2.5 border-t border-[var(--border)] bg-[var(--bg-secondary)]/40 flex items-center justify-between text-[0.72rem] text-text-muted">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border)] font-mono text-[0.65rem]">↑</kbd>
                            <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border)] font-mono text-[0.65rem]">↓</kbd>
                            Navigate
                        </span>
                        <span className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border)] font-mono text-[0.65rem]">↵</kbd>
                            Select
                        </span>
                    </div>
                    <span>Spotlight Quick Access</span>
                </div>
            </div>
        </div>
    );
}
