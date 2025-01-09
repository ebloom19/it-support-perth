import { Calendar } from 'lucide-react';
import Link from 'next/link';

import { cn, formatDate } from '@/lib/utils';

import { Tag } from './Tag';
import { buttonVariants } from './ui/button';
import { ShineBorder } from './ui/shine-border';

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
}: PostItemProps) {
  return (
    <ShineBorder
      className="bg-white dark:bg-muted p-5 py-3 rounded-lg hover:shadow-lg"
      color={['#000000', '#5600D1', '#F8F3FF']}
    >
      <article className="flex flex-col gap-3 border-border max-w-sm">
        <div>
          <h2 className="text-2xl font-bold">
            <Link href={'/' + slug}>{title}</Link>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => <Tag tag={tag} key={tag} />)}
        </div>
        <div className="max-w-none text-muted-foreground">{description}</div>
        <div className="flex justify-between items-center">
          <dl>
            <dt className="sr-only">Published On</dt>
            <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </dl>
          <Link
            href={'/' + slug}
            className={cn(buttonVariants({ variant: 'link' }), 'py-0')}
          >
            Read more →
          </Link>
        </div>
      </article>
    </ShineBorder>
  );
}
