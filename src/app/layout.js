import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Head } from "next/document";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11184509845"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11184509845');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {'send_to': 'AW-11184509845/F3TBCMPLmskZEJWnmNUp'});
            `,
          }}
        />
      </Head>
      <body>
        <Header />
        <main className="my-27">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
