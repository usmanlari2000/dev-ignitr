import "./globals.css";
import { GeistSans } from "geist/font/sans";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} text-black`}>
        {children}
        <footer className="my-8">
          <div className="max-w-5.75xl my-8 mx-auto px-4 flex flex-col md:flex-row gap-y-1 items-center justify-between text-sm">
            <div className="flex gap-x-2">
              <a
                className="p-1 text-gray hover:text-black transition-all duration-200"
                href="https://www.facebook.com/profile.php?id=61563028487171"
              >
                Facebook
              </a>
              <a
                className="p-1 text-gray hover:text-black transition-all duration-200"
                href="https://www.instagram.com/devignitr/"
              >
                Instagram
              </a>
            </div>
            <div className="text-gray">Dev Ignitr © 2024</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
