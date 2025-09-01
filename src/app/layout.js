import { Urbanist } from "next/font/google";
import "./globals.css";
import LayoutLoading from "./loading";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Neu Eu Medical",
  description:
    "Prescribed Medication Assisted Weight Loss Program That Gets Results",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head> 
        <script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NF8J6TW3');`}
        </script>
      </head>
      <body className={`${urbanist.className} antialiased `}>
        <LayoutLoading />
        {children}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NF8J6TW3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
