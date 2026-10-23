import engAssistantBotImage from "@/assets/eng-assistant-bot.jpg";
import jamoTextileImage from "@/assets/jamo-web.jpg";
import anAvatarImage from "@/assets/an-avatar.jpg";
import asildesignAvatarImage from "@/assets/asildesign-avatar.jpg";
import eastlineMovingImage from "@/assets/eastline-moving.jpg";
import ingliztiliMasterImage from "@/assets/ingliztili-master-avatar.jpg";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  color: string;
  heroImage?: string;
  // Which part of the image to keep when the card crops it (CSS object-position)
  heroImagePosition?: string;
  link?: string;
  fullDescription: string;
  galleryImages: string[];
}

export const projects: Project[] = [
  {
    id: "english-assistant-bot",
    title: "English Assistant Bot",
    subtitle:
      "A bot for English learners preparing for IELTS and CEFR exams, for anyone curious about English and a broad general audience.",
    description: "Telegram Bot · AI Assistant",
    year: "2026",
    role: "Creator",
    tags: ["TELEGRAM BOT", "EDUCATION"],
    color: "hsl(195, 80%, 50%)",
    heroImage: engAssistantBotImage,
    fullDescription:
      "English Assistant Bot helps people learn English. It is built for learners preparing for IELTS and CEFR exams, for anyone interested in the English language, and for a broad general audience. The bot is currently running in test mode.",
    galleryImages: [engAssistantBotImage],
  },
  {
    id: "jamo-textile-website",
    title: 'Website for "JAMO Textile"',
    subtitle:
      "Korporativ formalar ishlab chiqaruvchi kompaniya uchun ishlab chiqildi.",
    description: "Web loyiha · Korporativ sayt",
    year: "2026",
    role: "Developer",
    tags: ["WEBSITE", "DEVELOPMENT"],
    color: "hsl(348, 67%, 26%)",
    heroImage: jamoTextileImage,
    heroImagePosition: "left center",
    link: "https://jamotextile.uz",
    fullDescription:
      'Sayt "JAMO Textile" — korporativ formalar ishlab chiqaruvchi kompaniya uchun ishlab chiqilgan. Unda kompaniya faoliyati, katalog, yangiliklar va bog\'lanish ma\'lumotlari kiritilgan.',
    galleryImages: [jamoTextileImage],
  },
  {
    id: "asilbek-normuminov-youtube-channel",
    title: '"Asilbek Normuminov" YouTube Channel',
    subtitle:
      "Foydali, kundalik hayotda kerakli bo'lgan texno bilimlarni o'rganmoqchilar uchun kanal.",
    description: "YouTube Kanal · Texno bilimlar",
    year: "2021",
    role: "Creator",
    tags: ["YOUTUBE", "CONTENT"],
    color: "hsl(270, 70%, 55%)",
    heroImage: anAvatarImage,
    link: "https://youtube.com/@AsilbekNormuminov",
    fullDescription:
      '"Asilbek Normuminov" — foydali va kundalik hayotda kerakli bo\'lgan texno bilimlarni o\'rganmoqchilar uchun yaratilgan YouTube kanal. Kanal 2021-yilda tashkil etilgan.',
    galleryImages: [anAvatarImage],
  },
  {
    id: "asildesign-uz-page",
    title: "asildesign.uz page",
    subtitle:
      "Grafik va UX/UI dizaynga aloqador ishlar va foydali kontent.",
    description: "Instagram · Grafik va UX/UI dizayn",
    year: "2021",
    role: "Creator",
    tags: ["INSTAGRAM", "GRAPHIC DESIGN", "UX/UI"],
    color: "hsl(0, 78%, 47%)",
    heroImage: asildesignAvatarImage,
    link: "https://instagram.com/asildesign.uz",
    fullDescription:
      "asildesign.uz — grafik va UX/UI dizaynga aloqador ishlar hamda foydali kontent joylashgan Instagram sahifa. Sahifa 2021-yilda boshlangan.",
    galleryImages: [asildesignAvatarImage],
  },
  {
    id: "eastline-moving-website",
    title: '"Eastline Moving" uchun veb-sayt',
    subtitle:
      "Uy va ofis ko'chirish xizmati uchun tayyorlangan veb sayt loyihasi.",
    description: "Web loyiha · Xizmat sayti",
    year: "2025",
    role: "Developer",
    tags: ["WEBSITE", "DEVELOPMENT"],
    color: "hsl(105, 50%, 42%)",
    heroImage: eastlineMovingImage,
    link: "https://eastline-moving.uz",
    fullDescription:
      '"Eastline Moving" — uy va ofis ko\'chirish xizmati uchun tayyorlangan veb sayt loyihasi. Saytda xizmatlar, narxlar, galereya va bog\'lanish ma\'lumotlari kiritilgan.',
    galleryImages: [eastlineMovingImage],
  },
  {
    id: "ingliz-tili-master-youtube-channel",
    title: '"Ingliz Tili Master" YouTube Channel',
    subtitle: "Beginner'dan Advanced'gacha ingliz tilini o'rganing.",
    description: "YouTube Kanal · Ingliz tili",
    year: "2026",
    role: "Creator",
    tags: ["YOUTUBE", "EDUCATION"],
    color: "hsl(46, 98%, 57%)",
    heroImage: ingliztiliMasterImage,
    link: "https://youtube.com/@ingliztilimaster",
    fullDescription:
      '"Ingliz Tili Master" — Beginner\'dan Advanced\'gacha ingliz tilini o\'rganmoqchilar uchun yaratilgan YouTube kanal. Kanal 2026-yilda boshlangan.',
    galleryImages: [ingliztiliMasterImage],
  },
];
