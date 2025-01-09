import Head from 'next/head';
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FrequentlyAskedQuestionsProps {
  faqs: FAQItem[];
  id?: string;
  singleOnly?: boolean;
  h1?: boolean;
}

export const FrequentlyAskedQuestions: React.FC<
  FrequentlyAskedQuestionsProps
> = ({ faqs, id, singleOnly = false, h1 = false }) => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div id={id} className="z-10 bg-transparent rounded-lg">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="max-w-5xl mx-auto">
        {h1 ? (
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-12">
            <span className="text-brand-foreground">Frequently asked </span>{' '}
            questions
          </h1>
        ) : (
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-12">
            <span className="text-brand-foreground">Frequently asked </span>{' '}
            questions
          </h2>
        )}

        <Accordion
          type={singleOnly ? 'single' : 'multiple'}
          className="w-full bg-background bg-opacity-80 rounded-lg px-7 border dark:border-none"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg md:text-xl font-medium text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className="text-base md:text-md"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </AccordionContent>
              {/* SEO-friendly hidden content using Tailwind classes */}
              <div className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden clip-0 whitespace-nowrap border-0">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
