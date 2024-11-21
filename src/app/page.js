export const metadata = {
  title: "Dev Ignitr",
  description:
    "Dev Ignitr is an agency that migrates websites to Sanity and Next.js.",
};

export default function Page() {
  return (
    <div className="content max-w-[480px] mx-auto mt-60 px-4 text-lg">
      <h1>
        <strong>Dev Ignitr</strong> is an agency that migrates websites to
        Sanity and Next.js.
      </h1>
      <p>Check out the demo:</p>
      <ul className="ml-8">
        <li>
          <a href="https://giorgigirl.pages.dev" target="_blank">
            Website
          </a>
        </li>
        <li>
          <a href="https://giorgigirl.sanity.studio" target="_blank">
            CMS
          </a>
          : Use the <strong>E-mail / Password</strong> option with the following
          credentials:
          <ul className="ml-8">
            <li>
              <strong>Email</strong>: demo@devignitr.com
            </li>
            <li>
              <strong>Password</strong>: Supersecretpassword
            </li>
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
