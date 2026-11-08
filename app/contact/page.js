'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/#contact');
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center font-mono text-accent-1">
            REDIRECTING TO CONTACT...
        </div>
    );
}
