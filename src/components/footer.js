import Link from "next/link";

export default function Footer() {
  return (
    <footer className="my-8.5">
      <div className="max-w-6.25xl my-8.5 mx-auto px-5 flex items-center justify-between text-sm">
        <div>Dev Ignitr © 2024</div>
        <div>
          <Link className="hover:underline" href="/login">
            Client login
          </Link>
        </div>
      </div>
    </footer>
  );
}
