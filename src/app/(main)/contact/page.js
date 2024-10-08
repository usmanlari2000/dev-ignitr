export const metadata = {
  title: "Contact us | Dev Ignitr",
  description:
    "Tell us how we can help you. We will respond within a few hours.",
};

export default function Contact() {
  return (
    <div className="max-w-5.75xl my-27 mx-auto px-4">
      <div className="my-17 mb:my-20">
        <div className="my-4.5 font-semibold text-2xl xs:text-3xl lg:text-4xl text-balance tracking-tighter text-center">
          Contact us
        </div>
        <div className="max-w-xs my-4.5 mx-auto text-gray text-base lg:text-lg text-balance text-center">
          Tell us how we can help you. We will respond within a few hours.
        </div>
        <form className="max-w-xs my-4.5 mx-auto flex flex-col gap-y-4 justify-center">
          <input
            className="w-full mx-auto input-shadow rounded-md focus:outline-none px-3 py-2"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <textarea
            className="h-48 w-full mx-auto input-shadow rounded-md focus:outline-none px-3 py-2"
            name="message"
            placeholder="Message"
            required
          />
          <button
            className="h-10 w-full mx-auto select-none bg-black rounded-md hover:opacity-90 transition-all duration-200 px-4 flex justify-center items-center text-white font-medium"
            type="submit"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}
