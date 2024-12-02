"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/lib/translations";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary py-12">
      <LanguageSwitcher />
      
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-block mb-8">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">{t.aboutTitle}</h1>
          <p className="text-xl mb-8">{t.aboutIntro}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{t.experienceTitle}</h2>
            <p>{t.experienceText}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{t.aiTitle}</h2>
            <p>{t.aiText}</p>
            <ul className="list-disc pl-6 mt-4">
              <li>{t.services1}</li>
              <li>{t.services2}</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{t.whyChooseTitle}</h2>
            <ul className="list-disc pl-6">
              <li>{t.whyChoose1}</li>
              <li>{t.whyChoose2}</li>
              <li>{t.whyChoose3}</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{t.workTogetherTitle}</h2>
            <p>{t.workTogetherText}</p>
          </section>

          <div className="mt-8 space-y-4 text-lg">
            <p>{t.location}</p>
            <p>{t.contactCta}</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}