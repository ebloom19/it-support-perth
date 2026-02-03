import Link from "next/link";
import sitemap from "../sitemap";

export const metadata = {
  title: "Sitemap Preview - IT Support Perth",
  description: "Human-readable sitemap view",
};

export default async function SitemapPreviewPage() {
  const entries = await sitemap();

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        color: "#111",
        background: "#fff",
        padding: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ marginBottom: "0.5rem" }}>Sitemap Preview</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        Human-readable view. For crawlers, use{" "}
        <Link href="/sitemap.xml" style={{ color: "#2563eb" }}>
          /sitemap.xml
        </Link>
      </p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {entries.map((entry) => (
          <li
            key={entry.url}
            style={{
              padding: "0.5rem 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <a
              href={entry.url}
              style={{ color: "#111", textDecoration: "none" }}
            >
              {entry.url}
            </a>
            <span style={{ color: "#666", fontSize: "0.875rem", marginLeft: "0.5rem" }}>
              (priority: {entry.priority ?? "—"})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
