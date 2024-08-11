import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-black">
        {children}
        <footer className="my-8.5">
          <div className="max-w-5.75xl my-8.5 mx-auto px-4 flex flex-col gap-y-1 md:flex-row items-center justify-between text-sm">
            <div className="flex gap-x-2">
              <Link
                className="py-1 px-1 md:pr-1 text-gray hover:text-black transition-all duration-200"
                href="https://www.facebook.com/profile.php?id=61563028487171"
              >
                Facebook
              </Link>
              <Link
                className="p-1 text-gray hover:text-black transition-all duration-200"
                href="https://www.instagram.com/devignitr/"
              >
                Instagram
              </Link>
            </div>
            <div className="text-gray">Dev Ignitr © 2024</div>
          </div>
        </footer>
      </body>
    </html>
  );
}git
