import Link from "next/link";
import Image from "next/image";
import hero from "@/assets/images/hero.webp";

export const metadata = {
  title: "We build fast, visually appealing websites | Dev Ignitr",
  description:
    "We are an agency that designs and develops ecommerce stores, business websites, and blogs.",
};

export default function Home() {
  return (
    <div className="max-w-5.75xl my-27 mx-auto px-4">
      <div className="my-17 mb:my-20">
        <div className="my-5.5 font-semibold text-3xl xs:text-4xl lg:text-5xl text-balance tracking-tighter text-center">
          We build fast, visually appealing websites
        </div>
        <div className="max-w-lg my-5.5 mx-auto text-gray text-lg lg:text-xl text-balance text-center">
          We are an agency that designs and develops ecommerce stores, business
          websites, and blogs.
        </div>
        <div className="my-5.5 mx-auto flex justify-center gap-4 flex-wrap">
          <a
            className="h-10 w-fit select-none bg-black rounded-md hover:opacity-90 transition-all duration-200 px-4 flex items-center text-white font-medium"
            href="mailto:admin@devignitr.com"
          >
            Send Email
          </a>
          <Link
            className="h-10 w-fit select-none button-shadow rounded-md hover:bg-light-gray transition-colors duration-200 px-4 flex items-center font-medium"
            href="/contact"
          >
            Contact Form
          </Link>
        </div>
      </div>
      <div className="max-h-152.25 my-17 mb:my-20 rounded-lg overflow-hidden">
        <Image
          className="w-full"
          src={hero}
          alt=""
          priority
          placeholder="blur"
          quality={75}
        />
      </div>
    </div>
  );
}
