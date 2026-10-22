// Drop certificate images into src/assets/certificates/ and they appear on the
// /certificates page automatically. The file name becomes the title
// (e.g. "google-ux-design.jpg" → "Google Ux Design").
// To set a nicer title, issuer or year, add an entry to `details` below,
// keyed by the file name.

export interface Certificate {
  id: string;
  title: string;
  issuer?: string;
  year?: string;
  image: string;
}

const details: Record<string, Omit<Certificate, "id" | "image">> = {
  "five-million-ai-prompters.jpg": {
    title: "Five Million AI Prompters",
    issuer: "Dubai Future Foundation",
    year: "2026",
  },
  "socially-web-foundation.jpg": {
    title: "Web Foundation",
    issuer: "Socially Design Academy",
    year: "2022",
  },
  "onlinedars-super-photoshop.jpg": {
    title: "Super Photoshop",
    issuer: "onlinedars.uz",
    year: "2021",
  },
  "ustoz-ai-orqali-dasturlash.jpg": {
    title: "AI orqali dasturlash",
    issuer: "Ustoz AI",
    year: "2026",
  },
  "udacity-frontend-development.jpg": {
    title: "Frontend Development",
    issuer: "Udacity",
    year: "2020",
  },
};

const images = import.meta.glob<string>(
  "../assets/certificates/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, import: "default" },
);

const titleFromFile = (file: string) =>
  file
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

export const certificates: Certificate[] = Object.entries(images)
  .map(([path, image]) => {
    const file = path.split("/").pop()!;
    return {
      id: file,
      title: titleFromFile(file),
      ...details[file],
      image,
    };
  })
  .sort((a, b) => (b.year ?? "").localeCompare(a.year ?? "") || a.title.localeCompare(b.title));
