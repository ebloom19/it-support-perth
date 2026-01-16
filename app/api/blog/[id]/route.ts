
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getBlogPost, updateBlogPost, deleteBlogPost } from '@/lib/db';

function isAuthenticated() {
    const cookieStore = cookies();
    const authCookie = cookieStore.get('admin_auth');
    return authCookie?.value === 'authenticated';
}

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    if (!isAuthenticated()) {
         return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const post = await getBlogPost(params.id);
        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    if (!isAuthenticated()) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await req.json();
        const updatedPost = await updateBlogPost(params.id, {
            ...body,
            // Ensure publishedAt is handled if published status changes
             publishedAt: body.published && !body.publishedAt ? new Date() : body.publishedAt
        });

        if (!updatedPost) {
             return NextResponse.json({ error: 'Post not found or no changes' }, { status: 404 });
        }

        return NextResponse.json(updatedPost);
    } catch (error) {
        console.error('Error updating post:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    if (!isAuthenticated()) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        await deleteBlogPost(params.id);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting post:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
