import '../assets/normalize.css'
import '../assets/global.css';
import '../assets/loader.css';

import '../assets/asks.styles.css';
import '../assets/atributtes.styles.css';
import '../assets/section.styles.css';
import '../assets/motivation.styles.css';
import '../assets/calls.styles.css';
import '../assets/styles.css';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import * as gtag from '../lib/gtag';


function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
      const handleRouteChange = (url) => {
        gtag.pageview(url);
      };
      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }, [router.events]);
  
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Component {...pageProps} />
      </>
    );
}

export default MyApp;
