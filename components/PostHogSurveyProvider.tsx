"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { usePostHog } from "posthog-js/react";

export const PostHogSurveyProvider = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  const [surveyShown, setSurveyShown] = useState(false);

  useEffect(() => {
    if (posthog) {
      // Track page views for survey targeting
      posthog.capture('$pageview', {
        $current_url: window.location.href,
        path: pathname,
      });
    }
  }, [pathname, searchParams, posthog]);

  const attemptToShowSurvey = () => {
    if (!posthog || surveyShown) return;

    posthog.getSurveys((surveys) => {
      console.log('Available surveys:', surveys);
      const securitySurvey = surveys.find(survey => 
        survey.name === '01977c26-25e7-0000-e771-fcec1c668c37' ||
        survey.id === '01977c26-25e7-0000-e771-fcec1c668c37'
      );
      
      if (securitySurvey) {
        console.log('Found security survey:', securitySurvey);
        // Create a persistent survey container
        let surveyContainer = document.getElementById('persistent-survey-container');
        if (!surveyContainer) {
          surveyContainer = document.createElement('div');
          surveyContainer.id = 'persistent-survey-container';
          surveyContainer.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            max-width: 400px;
            max-height: calc(100vh - 40px);
            background: white;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
            border: 1px solid rgba(0, 0, 0, 0.08);
            overflow-y: auto;
          `;
          document.body.appendChild(surveyContainer);
        }
        posthog.renderSurvey(securitySurvey.id, '#persistent-survey-container');
        setSurveyShown(true);
      } else {
        console.log('Security survey not found, available surveys:', surveys.map(s => ({ id: s.id, name: s.name })));
      }
    });
  };

  useEffect(() => {
    if (posthog && !surveyShown) {
      // Initial attempt after delay
      const timer = setTimeout(attemptToShowSurvey, 3000);

      // Also try when PostHog's internal survey loading completes
      const checkInterval = setInterval(() => {
        // Check if surveys are loaded by attempting to get them
        posthog.getSurveys((surveys) => {
          if (surveys.length > 0 && !surveyShown) {
            clearInterval(checkInterval);
            attemptToShowSurvey();
          }
        });
      }, 1000);

      // Clean up timers
      return () => {
        clearTimeout(timer);
        clearInterval(checkInterval);
      };
    }
  }, [posthog, surveyShown]);

  return null;
};