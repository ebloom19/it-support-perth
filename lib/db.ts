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

    // Create indexes
    await sql`CREATE INDEX IF NOT EXISTS idx_email ON security_assessments(email)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_company ON security_assessments(company)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_created_at ON security_assessments(created_at DESC)`;

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
