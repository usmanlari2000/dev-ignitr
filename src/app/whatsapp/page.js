"use client";

import { useEffect, useRef } from "react";

export default function RedirectToWhatsapp() {
  const linkRef = useRef(null);

  useEffect(() => {
    if (linkRef.current) {
      linkRef.current.click();
    }
  }, []);

  return (
    <div className="max-w-6.25xl mx-auto my-27 px-5">
      <div className="text-center">Redirecting...</div>
      <a
        ref={linkRef}
        href="https://wa.me/923211681128?text=Hi,%20I'm%20interested%20in%20having%20a%20free%20website%20made."
        className="hidden"
      ></a>
    </div>
  );
}
