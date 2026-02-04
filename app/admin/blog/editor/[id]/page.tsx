'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import AdvancedEditor from '@/components/editor/advanced-editor';
import { BlogPost } from '@/lib/db';
import { toast } from 'sonner';
import { ArrowLeft, Save, Loader2, Globe, Settings, FileText, Image as ImageIcon, Search, X, Upload } from 'lucide-react';
import Link from 'next/link';
import { uploadImage } from '@/lib/upload';

export default function EditorPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        fetchPost();
    }, [params.id]);

    const fetchPost = async () => {
        try {
            const res = await fetch(`/api/blog/${params.id}`);
            if (!res.ok) throw new Error('Failed to fetch post');
            const data = await res.json();
            setPost(data);
            setContent(data.content);
        } catch (error) {
            toast.error('Failed to load post');
            router.push('/admin/blog');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async () => {
        if (!post) return;
        setIsSaving(true);
        try {
            const res = await fetch(`/api/blog/${params.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...post,
                    content
                })
            });
            
            if (!res.ok) throw new Error('Failed to save');
            const updated = await res.json();
            setPost(updated);
            toast.success('Post saved successfully');
        } catch (error) {
            toast.error('Failed to save post');
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) return <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>;
    if (!post) return <div>Post not found</div>;

    return (
        <div className="min-h-screen bg-[#f9fafb]">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm h-16">
                <div className="container h-full flex items-center justify-between mx-auto px-4 max-w-[1400px]">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" onClick={() => router.push('/admin/blog')} title="Back to Dashboard">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Editor</h1>
                            <span className="text-lg font-bold text-gray-900 truncate max-w-[300px]">{post.title || "Untitled Post"}</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                         {post.published && (
                            <Button variant="outline" size="sm" asChild className="hidden sm:flex">
                                <Link href={`/blog/${post.slug}`} target="_blank">
                                    <Globe className="mr-2 h-4 w-4" />
                                    View Live
                                </Link>
                            </Button>
                        )}
                        <Button onClick={handleSave} disabled={isSaving} size="sm" className="px-6">
                            {isSaving ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Save className="mr-2 h-4 w-4" />
                            )}
                            Save Changes
                        </Button>
                    </div>
                </div>
            </header>

            <main className="mx-auto px-4 py-8 max-w-[1400px]">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content Area */}
                    <div className="flex-1 space-y-8">
                        {/* Title Input */}
                        <div className="space-y-2">
                            <Label htmlFor="title" className="text-sm font-semibold text-gray-700">Post Title</Label>
                            <Input 
                                id="title" 
                                value={post.title} 
                                onChange={(e) => setPost({ ...post, title: e.target.value })} 
                                className="text-2xl font-bold py-8 border-gray-200 focus:ring-primary shadow-sm"
                                placeholder="Enter a catchy title..."
                            />
                        </div>

                        {/* Editor Area */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Label className="text-sm font-semibold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                                    <FileText className="h-4 w-4" />
                                    Post Content
                                </Label>
                            </div>
                            <div className="rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200">
                                <AdvancedEditor 
                                    initialValue={content} 
                                    onChange={setContent} 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <aside className="w-full lg:w-96 space-y-6">
                        {/* Publication Status */}
                        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm space-y-4">
                            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 border-b pb-3 mb-4 uppercase tracking-wider">
                                <Settings className="h-4 w-4" />
                                Publication
                            </div>
                            
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="space-y-0.5">
                                    <Label htmlFor="published" className="text-sm font-medium">Published Status</Label>
                                    <p className="text-xs text-gray-500">{post.published ? 'Visible to everyone' : 'Only you can see this'}</p>
                                </div>
                                <Switch 
                                    id="published" 
                                    checked={post.published}
                                    onCheckedChange={(checked) => setPost({ ...post, published: checked })}
                                />
                            </div>

                            <div className="pt-2 space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="slug" className="text-xs font-semibold text-gray-500 uppercase tracking-tighter">Url Slug</Label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-2.5 text-gray-500 text-xs font-medium">/blog/</div>
                                        <Input 
                                            id="slug" 
                                            value={post.slug} 
                                            onChange={(e) => setPost({ ...post, slug: e.target.value })} 
                                            className="pl-[3.8rem] text-sm h-10 border-gray-200"
                                            placeholder="my-cool-post"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="author" className="text-xs font-semibold text-gray-500 uppercase tracking-tighter">Author</Label>
                                    <Input 
                                        id="author" 
                                        value={post.author || ''} 
                                        onChange={(e) => setPost({ ...post, author: e.target.value })} 
                                        className="text-sm h-10 border-gray-200"
                                        placeholder="Author name..."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Search & SEO */}
                        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm space-y-4">
                            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 border-b pb-3 mb-4 uppercase tracking-wider">
                                <Search className="h-4 w-4" />
                                SEO & Discovery
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description" className="text-xs font-semibold text-gray-500 uppercase tracking-tighter">Meta Description</Label>
                                <Textarea 
                                    id="description" 
                                    value={post.description || ''} 
                                    onChange={(e) => setPost({ ...post, description: e.target.value })} 
                                    className="text-sm h-32 border-gray-200 resize-none"
                                    placeholder="Brief summary for search engines..."
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="tags" className="text-xs font-semibold text-gray-500 uppercase tracking-tighter">Tags</Label>
                                <Input 
                                    id="tags" 
                                    value={post.tags?.join(', ') || ''} 
                                    onChange={(e) => setPost({ ...post, tags: e.target.value.split(',').map(t => t.trim()) })} 
                                    className="text-sm h-10 border-gray-200"
                                    placeholder="perth, it, support..."
                                />
                                <p className="text-[10px] text-gray-500">Comma separated</p>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm space-y-4">
                            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 border-b pb-3 mb-4 uppercase tracking-wider">
                                <ImageIcon className="h-4 w-4" />
                                Featured Image
                            </div>

                            <div className="space-y-4">
                                {post.image ? (
                                    <div className="relative aspect-video rounded-lg overflow-hidden border">
                                        <img src={post.image} alt="Featured" className="object-cover w-full h-full" width={640} height={360} loading="lazy" />
                                        <Button 
                                            variant="destructive" 
                                            size="icon" 
                                            className="absolute top-2 right-2 h-8 w-8 rounded-full shadow-lg"
                                            onClick={() => setPost({ ...post, image: null })}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ) : (
                                    <div 
                                        className="aspect-video rounded-lg border-2 border-dashed border-gray-200 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                                        onClick={() => document.getElementById('image-upload')?.click()}
                                    >
                                        <div className="bg-white p-3 rounded-full shadow-sm mb-2">
                                            <Upload className="h-6 w-6 text-gray-500" />
                                        </div>
                                        <p className="text-sm font-medium text-gray-700">Click to upload</p>
                                        <p className="text-xs text-gray-500 mt-1">PNG, JPG, WEBP up to 10MB</p>
                                        <input 
                                            id="image-upload"
                                            type="file" 
                                            className="hidden" 
                                            accept="image/*"
                                            onChange={async (e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    const toastId = toast.loading("Uploading image...");
                                                    const url = await uploadImage(file);
                                                    if (url) {
                                                        setPost({ ...post, image: url });
                                                        toast.success("Image uploaded", { id: toastId });
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                )}
                                <div className="space-y-2">
                                    <Label htmlFor="image" className="text-xs font-semibold text-gray-500 uppercase tracking-tighter text-left block">Or Image URL</Label>
                                    <Input 
                                        id="image" 
                                        value={post.image || ''} 
                                        onChange={(e) => setPost({ ...post, image: e.target.value })} 
                                        className="text-sm h-10 border-gray-200"
                                        placeholder="https://..."
                                    />
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
