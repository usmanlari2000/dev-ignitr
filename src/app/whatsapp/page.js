import { redirect } from "next/navigation";

export default function RedirectToWhatsapp() {
  redirect(
    "https://wa.me/923211681128?text=Hi,%20I'm%20interested%20in%20having%20a%20free%20website%20made."
  );

  return null;
}
