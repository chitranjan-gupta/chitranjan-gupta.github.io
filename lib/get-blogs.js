import { getStoredBlogs } from '@/lib/blogs';

export default async function getBlogs() {
    return getStoredBlogs();
}
