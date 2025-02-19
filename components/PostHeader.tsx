import { format } from 'date-fns';
import Image from 'next/image';

interface PostHeaderProps {
  date: string;
  image?: string;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ date, image }) => {
  const formattedDate = format(new Date(date), 'MMMM dd, yyyy');

  return (
    <div className="flex flex-1 w-full h-1/2 min-h-[6rem] rounded-xl relative overflow-hidden">
      {image && (
        <Image
          src={image}
          alt="Post header"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          quality={75}
        />
      )}
      <div className="absolute inset-0 bg-linear-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 opacity-30" />
      <span className="text-sm text-white p-4 z-10 relative">
        {formattedDate}
      </span>
    </div>
  );
};
