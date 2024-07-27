import "../styles/globals.css";
import Navbar from "../components/Nav";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata = {
  title: "Jaswant Singh's Porfolio",
  description:
    "Full Stack Developer, Software Developer, and Frontend Developer. Discover the journey of a college dropout who transformed into a skilled tech professional. Explore projects that highlight expertise in full stack development, software engineering, and frontend technologies.",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="ga-script" strategy="lazyOnload">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
        </Script>
      </head>
      <body >
        <div className="main"></div>
        <main className="app">
          <Navbar />
          {children}
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
};

export default Rootlayout;
