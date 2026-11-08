'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SkillsPage() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/#skills');
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center font-mono text-accent-1">
            REDIRECTING TO SKILLS...
        </div>
    );
}
