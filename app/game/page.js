'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GamePage() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/#game');
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center font-mono text-accent-1">
            REDIRECTING TO GAME...
        </div>
    );
}
