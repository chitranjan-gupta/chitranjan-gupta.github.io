'use client';

import { useState, useEffect } from 'react';

export function CookieConsentBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const consent = localStorage.getItem('cookie-consent');
            if (!consent) {
                setVisible(true);
            }
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    const accept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[9999] p-4 sm:p-5 rounded-2xl bg-[var(--bg-primary)]/95 backdrop-blur-xl border border-[var(--border)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-fadeIn text-sm">
            <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">🍪</span>
                <div className="flex-1">
                    <h4 className="font-bold text-text-primary mb-1">Cookie Preferences</h4>
                    <p className="text-text-secondary text-xs leading-relaxed mb-3">
                        We use cookies, analytics, and performance measurement tools to ensure you get the best experience on this portfolio.
                    </p>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={accept}
                            className="px-3.5 py-1.5 rounded-full bg-accent-1 text-white text-xs font-semibold hover:opacity-90 transition-all shadow-sm"
                        >
                            Accept All
                        </button>
                        <button
                            onClick={decline}
                            className="px-3 py-1.5 rounded-full border border-[var(--border)] text-text-muted hover:text-text-primary hover:bg-[var(--bg-card)] text-xs font-medium transition-all"
                        >
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
