import Image from "next/image";
import temp from "@/assets/images/temp.webp";

export const metadata = {
  title: "Home | Dev Ignitr",
  description: "",
};

export default function Home() {
  return (
    <div className="max-w-6.25xl mx-auto my-27 px-5">
      <div className="my-17 mb:my-20">
        <div className="my-5.5 text-4.25xl md:text-5.5xl text-balance tracking-tight text-center">
          Get a Top Class Website Made for Free
        </div>
        <div className="max-w-3xl mx-auto my-5.5 text-1.5xl text-balance text-center">
          We are an agency that develops websites for businesses needing an
          online presence.
        </div>
        <a
          className="block select-none h-10 w-fit bg-black hover:opacity-70 transition-all duration-200 mx-auto my-5.5 px-5.5 rounded-full flex gap-x-1.5 items-center text-white text-0.5sm"
          href="https://wa.me/923211681128?text=Hi,%20I'm%20interested%20in%20having%20a%20free%20website%20made."
        >
          <div>WhatsApp Us</div>
          <svg
            width="0.625rem"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9L9 1M9 1H2.5M9 1V7.22222"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
      </div>
      <div className="my-17 mb:my-20 rounded-lg overflow-hidden">
        <Image src={temp} alt="" priority placeholder="blur" quality={75} />
      </div>
    </div>
  );
}
