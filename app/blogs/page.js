import Blogs from '@/components/Blogs';

export const metadata = {
    title: 'Blogs | Chitranjan Kumar Gupta',
    description: 'Technical articles, debugging notes, and engineering insights by Chitranjan Kumar Gupta.',
};

export default function BlogsPage() {
    return (
        <main className="pt-20">
            <Blogs />
        </main>
    );
}
