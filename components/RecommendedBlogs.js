import Link from 'next/link';

function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function RecommendedBlogs({ currentSlug, blogs = [] }) {
    const currentBlog = blogs.find((b) => b.slug === currentSlug);
    if (!currentBlog) return null;

    const currentIndex = blogs.findIndex((b) => b.slug === currentSlug);
    const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
    const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

    // Smart recommendations: score other blogs based on overlapping categories and tags
    const otherBlogs = blogs.filter((b) => b.slug !== currentSlug);

    const scoredBlogs = otherBlogs.map((b) => {
        let score = 0;
        // Check shared categories
        const currentCats = currentBlog.categories || [];
        const bCats = b.categories || [];
        currentCats.forEach((c) => {
            if (bCats.includes(c)) score += 3;
        });

        // Check shared tags
        const currentTags = currentBlog.tags || [];
        const bTags = b.tags || [];
        currentTags.forEach((t) => {
            if (bTags.includes(t)) score += 1;
        });

        return { blog: b, score };
    });

    // Sort by relevance score descending, then by created date
    scoredBlogs.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return new Date(b.blog.created).getTime() - new Date(a.blog.created).getTime();
    });

    const recommended = scoredBlogs.slice(0, 3).map((item) => item.blog);

    return (
        <section className="mt-16 pt-12 border-t border-[var(--border)]">
            {/* Previous & Next Navigation Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
                {prevBlog ? (
                    <Link
                        href={`/blogs/${prevBlog.slug}`}
                        className="group flex flex-col p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent-1)]/50 transition-all hover:-translate-y-0.5 shadow-sm"
                    >
                        <span className="text-[0.72rem] font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5 mb-1 group-hover:text-[var(--accent-1)] transition-colors">
                            ← Previous Article
                        </span>
                        <span className="text-[0.95rem] font-bold text-[var(--text-primary)] line-clamp-2 group-hover:text-[var(--accent-1)] transition-colors">
                            {prevBlog.title}
                        </span>
                    </Link>
                ) : (
                    <div className="hidden sm:block" />
                )}

                {nextBlog ? (
                    <Link
                        href={`/blogs/${nextBlog.slug}`}
                        className="group flex flex-col items-end text-right p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent-1)]/50 transition-all hover:-translate-y-0.5 shadow-sm"
                    >
                        <span className="text-[0.72rem] font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5 mb-1 group-hover:text-[var(--accent-1)] transition-colors">
                            Next Article →
                        </span>
                        <span className="text-[0.95rem] font-bold text-[var(--text-primary)] line-clamp-2 group-hover:text-[var(--accent-1)] transition-colors">
                            {nextBlog.title}
                        </span>
                    </Link>
                ) : (
                    <div className="hidden sm:block" />
                )}
            </div>

            {/* Recommended Articles Section */}
            {recommended.length > 0 && (
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <span className="text-[0.75rem] font-bold uppercase tracking-widest text-[var(--accent-1)]">
                                Continue Reading
                            </span>
                            <h3 className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight mt-1">
                                Recommended For You
                            </h3>
                        </div>
                        <Link
                            href="/blogs"
                            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent-1)] hover:underline"
                        >
                            View all articles →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {recommended.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blogs/${post.slug}`}
                                className="group flex flex-col justify-between p-5 rounded-2xl bg-white/[0.03] border border-[var(--border)] hover:border-[var(--accent-1)]/60 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div>
                                    <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-3">
                                        <span className="px-2 py-0.5 rounded-full bg-[var(--accent-1)]/15 border border-[var(--accent-1)]/30 text-[var(--accent-1)] text-[0.68rem] font-bold">
                                            {post.categories?.[0] || 'Article'}
                                        </span>
                                        <span className="text-[0.72rem]">{formatDate(post.created)}</span>
                                    </div>
                                    <h4 className="text-[0.98rem] font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-1)] transition-colors line-clamp-2 mb-2 leading-snug">
                                        {post.title}
                                    </h4>
                                    <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed font-normal mb-4">
                                        {post.desc}
                                    </p>
                                </div>

                                <div className="text-xs font-semibold text-[var(--accent-1)] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                                    Read post
                                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

export default RecommendedBlogs;
