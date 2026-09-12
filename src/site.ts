export type Language = 'en' | 'ar' | 'ru';

/** Shape returned by App's reveal() helper, spread onto scroll-revealed elements. */
export type RevealProps = { id: string; className: string; style: { transitionDelay: string } };
export type Reveal = (id: string, delay?: number) => RevealProps;

/** Sections receive the active language's translation object. It is intentionally
 *  untyped: translations.js is plain JS and the shape varies per section. */
export type Copy = any;

export const socials = {
  github: 'https://github.com/Khalil-Pal',
  linkedin: 'https://www.linkedin.com/in/khalil-housheya/',
  telegram: 'https://t.me/khalil_ayed',
  reddit: 'https://www.reddit.com/user/KhalilHousheya/',
};

export const email = 'Khalilayed777@gmail.com';
export const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

// BASE_URL keeps this correct under the GitHub Pages sub-path. Drop the PDF at public/resume.pdf.
export const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
