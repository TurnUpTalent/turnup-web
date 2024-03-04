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
                src={`https://www.googletagmanager.com/gtag/js?id=G-XZNYF89JR2`}
            />

            <Script strategy="lazyOnload">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XZNYF89JR2', {
            page_path: window.location.pathname,
          });
        `}
            </Script>

              {/* Google Tag Manager */}
              <Script
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-5D2KVXK5');`,
                }}
              />
              {/* End Google Tag Manager */}

              {/* Google Tag Manager (noscript) */}
              <noscript
                dangerouslySetInnerHTML={{
                  __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5D2KVXK5"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                }}
              />

            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;