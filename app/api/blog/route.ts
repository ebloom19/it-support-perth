
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createBlogPost, getAllBlogPosts } from '@/lib/db';

// Helper to check auth
function isAuthenticated() {
    const cookieStore = cookies();
    const authCookie = cookieStore.get('admin_auth');
    return authCookie?.value === 'authenticated';
}

export async function GET() {
    try {
        // Admin can see all posts (including unpublished)
        // Public API might behave differently, but let's assume this route is for admin use primarily
        // or we allow filtering via query params.
        // For now, let's expose all to admin, and public logic will handle filtering.
        
        // Wait, if this is for the admin dashboard, we need all posts.
        // If this is for public blog listing, we only want published.
        // Let's protect this route for admin operations or split them?
        // Let's assume this is the ADMIN/management API.
        
        if (!isAuthenticated()) {
             return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const posts = await getAllBlogPosts(true); // true = include unpublished
        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error in GET /api/blog:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    if (!isAuthenticated()) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { title, slug } = body;
        
        if (!title || !slug) {
            return NextResponse.json({ error: 'Title and Slug are required' }, { status: 400 });
        }

        // Create with defaults
        const newPost = await createBlogPost({
            title,
            slug,
            description: body.description || '',
            content: body.content || {},
            published: body.published || false,
            publishedAt: body.published ? new Date() : null,
            image: body.image || null,
            tags: body.tags || [],
            author: body.author || 'Admin'
        });

        return NextResponse.json(newPost);
    } catch (error) {
        console.error('Error in POST /api/blog:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
