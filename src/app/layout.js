import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11184509845"
        />
        <Script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11184509845');`}
        </Script>
        <Script>{`gtag('event', 'conversion', {'send_to': 'AW-11184509845/F3TBCMPLmskZEJWnmNUp'});`}</Script>
      </Head>
      <body>
        <Header />
        <main className="my-27">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
