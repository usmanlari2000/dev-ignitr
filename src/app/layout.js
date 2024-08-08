import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="my-27">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
