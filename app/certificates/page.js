'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CertificatesPage() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/#certificates');
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center font-mono text-accent-1">
            REDIRECTING TO CERTIFICATES...
        </div>
    );
}
