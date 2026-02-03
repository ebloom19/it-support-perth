export const HTMLContent = ({ html }: { html: string }) => (
  <div
    className="prose prose-neutral dark:prose-invert max-w-none seobot-content text-foreground"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);
