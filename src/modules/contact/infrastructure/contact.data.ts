/**
 * Enlaces de contacto por idioma (etiquetas). Edita en contact.data.ts
 */
import type { Locale } from "../../../common/types/locale";
import type { SocialLink } from "../domain/contact.entity";

export const socialLinksByLocale: Record<Locale, SocialLink[]> = {
  es: [
    { label: "GitHub", href: "https://github.com/zromeros", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zadkielr",
      icon: "linkedin",
    },
    {
      label: "Correo",
      href: "mailto:zadkielg.romeros@gmail.com",
      icon: "mail",
    },
    { label: "X", href: "https://x.com/Zadkiel95", icon: "x" },
  ],
  en: [
    { label: "GitHub", href: "https://github.com/zromeros", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/zadkielr",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:zadkielg.romeros@gmail.com", icon: "mail" },
    { label: "X", href: "https://x.com/Zadkiel95", icon: "x" },
  ],
};
