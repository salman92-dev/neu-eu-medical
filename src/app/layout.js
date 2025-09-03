import { Urbanist } from "next/font/google";
import "./globals.css";
import LayoutLoading from "./loading";
import Head from "next/head";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Neu Eu Medical",
  description: "Prescribed Medication Assisted Weight Loss Program That Gets Results",
};
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Neu Eu Medical",
    url: "https://www.neueu.co/",
    logo: "https://www.neueu.co/images/logo.svg",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61566649072474&mibextid=wwXIfr&rdid=OVrmXSbYKrpxHm5A&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BTkikvoWx%2F%3Fmibextid%3DwwXIfr",
      "https://www.instagram.com/neueumedical",
    ],
  };


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={ `${urbanist.className} antialiased ` }
      >
        <LayoutLoading/>
        { children }
      </body>
    </html>
  );
}
