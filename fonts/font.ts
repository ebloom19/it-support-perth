import localFont from 'next/font/local';

export const customFont = localFont({
  src: [
    {
      path: './thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './medium.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './extra-bold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './hairline.otf',
      weight: '100',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-custom',
});
