'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
            let current = '';
            sections.forEach((sec) => {
                if (window.scrollY >= sec.offsetTop - 140) current = sec.id;
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        setMenuOpen(false);
        if (pathname === '/') {
            e.preventDefault();
            const target = document.querySelector(href.startsWith('/') ? href.replace('/', '#') : href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const links = [
        { href: '/about', label: 'About' },
        { href: '/skills', label: 'Skills' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border-b ${scrolled
                ? 'bg-[var(--bg-secondary)]/80 backdrop-blur-xl border-[var(--border)] py-3'
                : 'bg-transparent border-transparent py-[1.1rem]'
                }`}
            style={{
                backgroundColor: scrolled ? 'color-mix(in srgb, var(--bg-primary) 85%, transparent)' : 'transparent',
                borderBottomColor: scrolled ? 'var(--border)' : 'transparent'
            }}
        >
            <nav className="w-[min(1200px,92vw)] mx-auto flex items-center gap-4">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={(e) => handleNavClick(e, '/')}
                    className="text-[1.4rem] font-extrabold tracking-tight text-text-primary mr-auto no-underline"
                >
                    <span className="text-accent-2">&lt;</span>CKG<span className="text-accent-2">/&gt;</span>
                </Link>

                {/* Desktop links */}
                <ul
                    className={`list-none gap-1 p-0 m-0 ${menuOpen
                        ? 'flex flex-col fixed top-[70px] left-0 right-0 bg-[var(--bg-primary)] p-6 border-b border-[var(--border)] backdrop-blur-xl z-50'
                        : 'hidden md:flex'
                        }`}
                >
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                onClick={(e) => handleNavClick(e, href)}
                                className={`block px-4 py-2 rounded-full text-[0.9rem] font-medium transition-all duration-200 md:text-[0.9rem] text-[1rem] ${activeSection === href.slice(1) || pathname === href
                                    ? 'text-text-primary bg-[var(--bg-card)]'
                                    : 'text-text-secondary hover:text-text-primary hover:bg-[var(--bg-card)]'
                                    }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Theme switcher */}
                <ThemeSwitcher />

                {/* Hire Me CTA */}
                <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="hidden md:block px-5 py-2 text-[0.875rem] font-semibold rounded-full border border-[var(--border)] text-text-primary whitespace-nowrap transition-all duration-200 hover:border-accent-1 hover:text-accent-1"
                >
                    Hire Me
                </a>

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label="Toggle menu"
                    className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-[0.4rem] cursor-pointer"
                >
                    <span className="block w-6 h-[2px] bg-text-primary rounded-[2px] transition-all duration-200" />
                    <span className="block w-6 h-[2px] bg-text-primary rounded-[2px] transition-all duration-200" />
                    <span className="block w-6 h-[2px] bg-text-primary rounded-[2px] transition-all duration-200" />
                </button>
            </nav>
        </header>
    );
}
