'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProjectsPage() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/#projects');
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center font-mono text-accent-1">
            REDIRECTING TO PROJECTS...
        </div>
    );
}
