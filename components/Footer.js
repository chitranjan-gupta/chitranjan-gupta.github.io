'use client';

export default function Footer() {
    const handleClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <footer className="border-t border-[var(--border)] py-8">
            <div className="w-[min(1200px,92vw)] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 flex-wrap md:text-left text-center">
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => handleClick(e, '#hero')}
                    className="text-[1.4rem] font-extrabold tracking-[-0.02em] text-text-primary no-underline"
                >
                    <span className="text-accent-2">&lt;</span>CKG<span className="text-accent-2">/&gt;</span>
                </a>

                {/* Copyright */}
                <p className="text-[0.85rem] text-text-muted">
                    © 2026 Chitranjan Kumar Gupta. Crafted with ❤️ and lots of ☕
                </p>

                {/* Nav links */}
                <div className="flex gap-6">
                    {['#about', '#skills', '#projects', '#contact'].map((href) => (
                        <a
                            key={href}
                            href={href}
                            onClick={(e) => handleClick(e, href)}
                            className="text-[0.85rem] text-text-muted transition-all duration-200 hover:text-accent-2"
                        >
                            {href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
