export const HTMLContent = ({ html }: { html: string }) => (
  <div
    className="prose prose-h1:text-slate-100 prose-h2:text-slate-100 prose-h3:text-slate-100 prose-strong:text-slate-100 dark:text-slate-100 seobot-content"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);
