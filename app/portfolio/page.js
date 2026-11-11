'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PortfolioPage() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/#portfolio');
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center font-mono text-accent-1">
            REDIRECTING TO PORTFOLIO...
        </div>
    );
}
