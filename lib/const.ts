import { IconType } from "react-icons";
import { FaWhatsapp, FaGithub, FaTelegram } from "react-icons/fa";

export const socials: { href: string; label: string; icon: IconType }[] = [
  {
    href: "https://t.me/KellerMs",
    label: "My Telegram Profile",
    icon: FaTelegram,
  },
  {
    href: "https://github.com/Keller007",
    label: "My GitHub Profile",
    icon: FaGithub,
  },
  {
    href: "https://whatsapp.com/",
    label: "My Whatsapp Profile",
    icon: FaWhatsapp,
  },
];
