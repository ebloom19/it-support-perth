import { neon } from '@neondatabase/serverless';

export type SecurityAssessment = {
  id: string;
  createdAt: Date;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  companySize: string;
  jobTitle: string;
  hearAbout: string;
  responses: Record<string, string>;
  securityScore: {
    score: number;
    maxScore: number;
    percentage: number;
    riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
    recommendations: string[];
  };
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: any; // JSON content from the editor
  published: boolean;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  image: string | null;
  tags: string[];
  author: string | null;
};

function getSql() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set');
  }
  return neon(process.env.DATABASE_URL);
}

export async function initializeDatabase() {
  try {
    const sql = getSql();
    await sql`
      CREATE TABLE IF NOT EXISTS security_assessments (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        created_at TIMESTAMP DEFAULT NOW(),
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        company VARCHAR(255) NOT NULL,
        company_size VARCHAR(50) NOT NULL,
        job_title VARCHAR(255) NOT NULL,
        hear_about VARCHAR(255) NOT NULL,
        responses JSONB NOT NULL,
        security_score JSONB NOT NULL
      )
    `;

    // Create indexes for security_assessments
    await sql`CREATE INDEX IF NOT EXISTS idx_email ON security_assessments(email)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_company ON security_assessments(company)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_created_at ON security_assessments(created_at DESC)`;

    // Create blog_posts table
    await sql`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        slug VARCHAR(255) UNIQUE NOT NULL,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        content JSONB,
        published BOOLEAN DEFAULT false,
        published_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW(),
        image VARCHAR(2048),
        tags TEXT[],
        author VARCHAR(255)
      )
    `;

    // Create indexes for blog_posts
    await sql`CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC)`;

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
}

export async function saveSecurityAssessment(data: Omit<SecurityAssessment, 'id' | 'createdAt'>) {
  try {
    const sql = getSql();
    const result = await sql`
      INSERT INTO security_assessments (
        full_name,
        email,
        phone,
        company,
        company_size,
        job_title,
        hear_about,
        responses,
        security_score
      )
      VALUES (
        ${data.fullName},
        ${data.email},
        ${data.phone},
        ${data.company},
        ${data.companySize},
        ${data.jobTitle},
        ${data.hearAbout},
        ${JSON.stringify(data.responses)},
        ${JSON.stringify(data.securityScore)}
      )
      RETURNING id, created_at as "createdAt"
    `;

    return result[0] as { id: string; createdAt: Date };
  } catch (error) {
    console.error('Error saving assessment:', error);
    throw error;
  }
}

export async function getSecurityAssessment(id: string) {
  try {
    const sql = getSql();
    const result = await sql`
      SELECT
        id,
        created_at as "createdAt",
        full_name as "fullName",
        email,
        phone,
        company,
        company_size as "companySize",
        job_title as "jobTitle",
        hear_about as "hearAbout",
        responses,
        security_score as "securityScore"
      FROM security_assessments
      WHERE id = ${id}
    `;

    return result[0] as SecurityAssessment | undefined;
  } catch (error) {
    console.error('Error fetching assessment:', error);
    throw error;
  }
}

export async function getAllSecurityAssessments(limit = 50, offset = 0) {
  try {
    const sql = getSql();
    const result = await sql`
      SELECT
        id,
        created_at as "createdAt",
        full_name as "fullName",
        email,
        company,
        company_size as "companySize",
        security_score as "securityScore"
      FROM security_assessments
      ORDER BY created_at DESC
      LIMIT ${limit}
      OFFSET ${offset}
    `;

    return result as Partial<SecurityAssessment>[];
  } catch (error) {
    console.error('Error fetching assessments:', error);
    throw error;
  }
}

export async function searchSecurityAssessments(searchTerm: string, limit = 50) {
  try {
    const sql = getSql();
    const searchPattern = `%${searchTerm}%`;
    const result = await sql`
      SELECT
        id,
        created_at as "createdAt",
        full_name as "fullName",
        email,
        company,
        company_size as "companySize",
        security_score as "securityScore"
      FROM security_assessments
      WHERE
        full_name ILIKE ${searchPattern} OR
        email ILIKE ${searchPattern} OR
        company ILIKE ${searchPattern}
      ORDER BY created_at DESC
      LIMIT ${limit}
    `;

    return result as Partial<SecurityAssessment>[];
  } catch (error) {
    console.error('Error searching assessments:', error);
    throw error;
  }
}

export async function getAssessmentCount() {
  try {
    const sql = getSql();
    const result = await sql`SELECT COUNT(*) as count FROM security_assessments`;
    return parseInt(result[0].count, 10);
  } catch (error) {
    console.error('Error getting assessment count:', error);
    throw error;
  }
}

// Blog Post Helpers

export async function createBlogPost(data: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>) {
  try {
    const sql = getSql();
    const result = await sql`
      INSERT INTO blog_posts (
        slug,
        title,
        description,
        content,
        published,
        published_at,
        image,
        tags,
        author
      )
      VALUES (
        ${data.slug},
        ${data.title},
        ${data.description},
        ${JSON.stringify(data.content)},
        ${data.published},
        ${data.publishedAt},
        ${data.image},
        ${data.tags},
        ${data.author}
      )
      RETURNING *
    `;
    return result[0] as BlogPost;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
}

export async function updateBlogPost(id: string, data: Partial<Omit<BlogPost, 'id' | 'createdAt'>>) {
  try {
    const sql = getSql();
    
    // Fetch current post to merge updates
    const current = await getBlogPost(id);
    if (!current) return null;

    const updated = {
        slug: data.slug ?? current.slug,
        title: data.title ?? current.title,
        description: data.description ?? current.description,
        content: data.content ?? current.content,
        published: data.published ?? current.published,
        publishedAt: data.publishedAt ?? current.publishedAt,
        image: data.image ?? current.image,
        tags: data.tags ?? current.tags,
        author: data.author ?? current.author,
    };

    const result = await sql`
      UPDATE blog_posts
      SET 
        slug = ${updated.slug},
        title = ${updated.title},
        description = ${updated.description},
        content = ${JSON.stringify(updated.content)},
        published = ${updated.published},
        published_at = ${updated.publishedAt},
        image = ${updated.image},
        tags = ${updated.tags},
        author = ${updated.author},
        updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `;

    return result[0] as BlogPost;
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
}

export async function getBlogPost(slugOrId: string) {
  try {
    const sql = getSql();
    // Check if UUID
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(slugOrId);
    
    const result = await sql`
      SELECT 
        id,
        slug,
        title,
        description,
        content,
        published,
        published_at as "publishedAt",
        created_at as "createdAt",
        updated_at as "updatedAt",
        image,
        tags,
        author
      FROM blog_posts
      WHERE ${isUuid ? sql`id = ${slugOrId}` : sql`slug = ${slugOrId}`}
    `;
    return result[0] as BlogPost | undefined;
  } catch (error) {
    console.error('Error getting blog post:', error);
    throw error;
  }
}

export async function getAllBlogPosts(includeUnpublished = false) {
  try {
    const sql = getSql();
    
    // Debug log
    const countResult = await sql`SELECT COUNT(*) FROM blog_posts`;
    console.error(`DEBUG: blog_posts row count: ${countResult[0].count}`);
    
    if (includeUnpublished) {
        const result = await sql`
        SELECT 
            id, slug, title, published, published_at as "publishedAt"
        FROM blog_posts
        ORDER BY created_at DESC
        `;
        console.error(`DEBUG: getAllBlogPosts(true) result: ${JSON.stringify(result)}`);
        // ... (refetch full data or just log)
        const fullResult = await sql`
            SELECT id, slug, title, description, content, published, published_at as "publishedAt", created_at as "createdAt", updated_at as "updatedAt", image, tags, author
            FROM blog_posts ORDER BY created_at DESC
        `;
        return fullResult as BlogPost[];
    } else {
        const result = await sql`
        SELECT 
            id, slug, title, published, published_at as "publishedAt"
        FROM blog_posts
        WHERE published = true
        ORDER BY published_at DESC
        `;
        console.error(`DEBUG: getAllBlogPosts(false) result count: ${result.length}`);
        if (result.length > 0) {
            console.error(`DEBUG: First row published status: ${result[0].published} (type: ${typeof result[0].published})`);
        }
        
        const fullResult = await sql`
            SELECT id, slug, title, description, content, published, published_at as "publishedAt", created_at as "createdAt", updated_at as "updatedAt", image, tags, author
            FROM blog_posts WHERE published = true ORDER BY published_at DESC
        `;
        return fullResult as BlogPost[];
    }
  } catch (error) {
    console.error('Error getting all blog posts:', error);
    throw error;
  }
}

export async function deleteBlogPost(id: string) {
  try {
    const sql = getSql();
    await sql`DELETE FROM blog_posts WHERE id = ${id}`;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
}
