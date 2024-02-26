import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import "../css/index.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
    return (
        <>

            <Script id="linkedin-sdk" strategy="afterInteractive">
                {`
          _linkedin_partner_id = "5934804";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
            </Script>

            {/* LinkedIn Insight Tag */}
            <Script id="linkedin-insight" strategy="afterInteractive">
                {`
          (function(l) {
            if (!l) {
              window.lintrk = function(a, b) {
                window.lintrk.q.push([a, b]);
              };
              window.lintrk.q = [];
            }
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
            </Script>


            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />

            <Script strategy="lazyOnload">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
            </Script>

            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;