import Image from "next/image";
import hero from "@/assets/images/hero.webp";

export const metadata = {
  title: "We build fast, visually appealing websites | Dev Ignitr",
  description: "",
};

export default function Home() {
  return (
    <div className="max-w-5.75xl my-27 mx-auto px-4">
      <div className="my-17 mb:my-20">
        <div className="my-5.5 font-semibold text-2.5xl 2xs:text-3.5xl xs:text-4.5xl md:text-5xl text-balance tracking-tighter text-center">
          We build fast, visually appealing websites
        </div>
        <div className="max-w-4xl my-5.5 mx-auto text-gray text-base 2xs:text-lg xs:text-xl md:text-1.5xl text-balance text-center">
          We are an agency that designs and develops online stores, marketing
          websites and blogs.
        </div>
        <div className="my-5.5 mx-auto flex justify-center gap-4 flex-wrap">
          <a
            className="h-9 w-fit select-none bg-black shadow rounded-md hover:opacity-90 transition-all duration-200 px-4 flex items-center text-white font-medium whitespace-nowrap"
            href="https://wa.me/923211681128?text=Hi,%20I'm%20interested%20in%20having%20a%20fast%20and%20visually%20appealing%20website%20made."
          >
            WhatsApp Us
          </a>
          <a
            className="h-9 w-fit select-none shadow rounded-md hover:bg-light-gray transition-colors duration-200 px-4 flex items-center font-medium whitespace-nowrap"
            href="/contact"
          >
            Contact Form
          </a>
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
