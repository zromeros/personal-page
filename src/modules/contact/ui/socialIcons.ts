import type { SocialIcon } from "../domain/contact.entity";

/** `import.meta.env.BASE_URL` incluye la subruta en GitHub Pages (p. ej. `/repo/`). */
const sprite = `${import.meta.env.BASE_URL}icons.svg`;

export const socialIconHref: Record<SocialIcon, string> = {
  github: `${sprite}#github-icon`,
  linkedin: `${sprite}#linkedin-icon`,
  mail: `${sprite}#mail-icon`,
  x: `${sprite}#x-icon`,
};
