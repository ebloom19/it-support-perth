import { useTheme } from 'next-themes';
import React from 'react';

interface PodcastEmbedProps {
  title: string;
  spotifyPodcastId: string;
  size?: 'compact' | 'normal';
}

export const PodcastEmbed: React.FC<PodcastEmbedProps> = ({
  title,
  spotifyPodcastId,
  size = 'normal',
}) => {
  const { theme } = useTheme();

  return (
    <div className="border rounded-lg">
      <iframe
        style={{ borderRadius: '12px' }}
        src={`https://open.spotify.com/embed/episode/${spotifyPodcastId}?utm_source=generator${theme === 'dark' ? '&theme=0' : ''}`}
        width="100%"
        height={size === 'compact' ? '152px' : '352px'}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={title}
      ></iframe>
    </div>
  );
};
