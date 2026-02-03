'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    chatwootSettings: {
      hideMessageBubble: boolean;
      position: string;
      locale: string;
      type: string;
    };
    chatwootSDK: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

export default function ChatwootWidget() {
  useEffect(() => {
    // Add Chatwoot Settings
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right', // This can be left or right
      locale: 'en', // Language to be set
      type: 'standard', // [standard, expanded_bubble]
    };

    // Paste the script from inbox settings except the <script> tag
    (function(d,t) {
      var BASE_URL = "https://chatwoot-production-51d7.up.railway.app";
      var g=d.createElement(t) as HTMLScriptElement,
          s=d.getElementsByTagName(t)[0];
      g.src = BASE_URL+"/packs/js/sdk.js";
      g.async = true;
      s.parentNode?.insertBefore(g,s);
      g.onload=function(){
        window.chatwootSDK.run({
          websiteToken: 'yRbMKj2umcYv4FuzCFMmiHiy',
          baseUrl: BASE_URL
        })
      }
    })(document,"script");
  }, []);

  return null;
} 