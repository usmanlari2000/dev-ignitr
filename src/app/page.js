export const metadata = {
  title: "Dev Ignitr",
  description:
    "Dev Ignitr is an agency that migrates websites to Sanity and Next.js.",
};

export default function Page() {
  return (
    <div className="content max-w-[480px] mx-auto mt-60 px-4">
      <h1>
        Dev Ignitr is an agency that migrates websites to Sanity and Next.js.
      </h1>
      <p>Check out the demo:</p>
      <ul>
        <li>
          <a href="https://giorgigirl.pages.dev" target="_blank">
            Website
          </a>
        </li>
        <li>
          <a href="https://giorgigirl.sanity.studio" target="_blank">
            CMS
          </a>
          : Use the E-mail / Password option with the following credentials:
          <ul>
            <li>Email: demo@devignitr.com</li>
            <li>Password: Supersecretpassword</li>
          </ul>
        </li>
      </ul>
      <p>
        Email us at <a href="mailto:hello@devignitr.com">hello@devignitr.com</a>
        .
      </p>
    </div>
  );
}
