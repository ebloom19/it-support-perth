'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Eye, FileText, Globe } from 'lucide-react';
import { BlogPost } from '@/lib/db';
import { toast } from 'sonner';

export default function AdminBlogPage() {
    const router = useRouter();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await fetch('/api/blog');
            if (!res.ok) throw new Error('Failed to fetch posts');
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            toast.error('Failed to load blog posts');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this post?')) return;
        
        try {
            const res = await fetch(`/api/blog/${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error('Failed to delete');
            toast.success('Post deleted successfully');
            fetchPosts();
        } catch (error) {
            toast.error('Failed to delete post');
        }
    };

    const handleCreate = async () => {
        const title = prompt('Enter post title:');
        if (!title) return;
        
        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');

        try {
            const res = await fetch('/api/blog', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, slug })
            });
            
            if (!res.ok) throw new Error('Failed to create post');
            const newPost = await res.json();
            router.push(`/admin/blog/editor/${newPost.id}`);
        } catch (error) {
            toast.error('Failed to create post');
            console.error(error);
        }
    };

    return (
        <>
            <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 leading-none">Blog Management</h1>
                    <p className="text-gray-500 mt-3 text-sm font-medium uppercase tracking-wider">Create and manage your articles</p>
                </div>
                <Button onClick={handleCreate} className="gap-2 shadow-md hover:shadow-lg transition-all h-11 px-6">
                    <Plus className="w-5 h-5" /> New Article
                </Button>
            </div>

            {isLoading ? (
                <div>Loading...</div>
            ) : posts.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-lg">
                    <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900">No posts yet</h3>
                    <p className="text-gray-500 mt-1">Get started by creating your first blog post.</p>
                </div>
            ) : (
                <div className="grid gap-6">
                    {posts.map((post) => (
                        <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-xl font-semibold">{post.title}</h3>
                                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                                post.published 
                                                ? 'bg-green-100 text-green-700' 
                                                : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                                {post.published ? 'Published' : 'Draft'}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 font-mono">/{post.slug}</p>
                                        <p className="text-gray-600 line-clamp-2">{post.description || 'No description'}</p>
                                        <div className="text-xs text-gray-400 mt-2">
                                            Last updated: {new Date(post.updatedAt).toLocaleDateString()}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {post.published && (
                                            <Button variant="ghost" size="icon" asChild>
                                                <Link href={`/blog/${post.slug}`} target="_blank">
                                                    <Globe className="w-4 h-4" />
                                                </Link>
                                            </Button>
                                        )}
                                        <Button variant="outline" size="sm" asChild className="gap-2">
                                            <Link href={`/admin/blog/editor/${post.id}`}>
                                                <Edit className="w-4 h-4" /> Edit
                                            </Link>
                                        </Button>
                                        <Button 
                                            variant="ghost" 
                                            size="icon" 
                                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                            onClick={() => handleDelete(post.id)}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </>
    );
}
