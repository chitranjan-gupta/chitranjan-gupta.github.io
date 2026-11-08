'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/#about');
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center font-mono text-accent-1">
            REDIRECTING TO ABOUT...
        </div>
    );
}
