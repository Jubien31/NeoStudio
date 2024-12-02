"use client";

import { Instagram, Youtube, Linkedin, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

export function SocialLinks() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <p className="text-white mb-2 text-sm font-medium">{t.followMe}</p>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/psychedelic_awakening32/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@Jubien3132"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/julien-tartas-6a304490/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div>
        <p className="text-white mb-2 text-sm font-medium">{t.buyArtworks}</p>
        <a
          href="https://displate.com/jubien31/profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Displate"
        >
          <Palette className="w-6 h-6" />
          <span className="text-sm">Displate</span>
        </a>
      </div>
    </motion.div>
  );
}