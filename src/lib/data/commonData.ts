import React from "react";
import {
  IInstagram,
  ITelegram,
} from "../../components/svg/svg-list";

type socialLinksType = {
  icon?: React.ReactElement | null;
  name: string;
  link: string;
}[];

export const socialLinks: socialLinksType = [
  {
    icon: React.createElement(IInstagram),
    name: "Instagram",
    link: "https://www.instagram.com/brightgallery.uz/",
  },
  {
    icon: React.createElement(ITelegram),
    name: "Telegram",
    link: "https://t.me/brightgallery_uz",
  },
];
