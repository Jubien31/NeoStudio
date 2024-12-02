"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Code, Cpu, Globe, Lightbulb, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { PhotoGallery } from "@/components/PhotoGallery";
import { SocialLinks } from "@/components/SocialLinks";
import { useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import { PriceDialog } from "@/components/PriceDialog";
import { BackgroundMedia } from "@/components/BackgroundMedia";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/lib/translations";
import Link from "next/link";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: t.aiSolutions,
      description: t.aiDesc
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: t.globalReach,
      description: t.globalDesc
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-600" />,
      title: t.imageCreationService,
      description: t.imageCreationDesc
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: t.customDev,
      description: t.customDevDesc
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      title: t.innovation,
      description: t.innovationDesc
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-600" />,
      title: t.deployment,
      description: t.deploymentDesc
    }
  ];

  const stats = [
    { value: "98%", label: t.clientSatisfaction },
    { value: "50+", label: t.globalClients }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <LanguageSwitcher />
      
      <div className="absolute top-4 left-4 z-50">
        <SocialLinks />
      </div>
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden" aria-label="Introduction">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-6 leading-[1.3] pb-1">
              {t.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {t.subtitle}
            </p>
            <div className="space-y-4">
              <div className="space-x-4">
                <Button size="lg" onClick={() => setContactOpen(true)}>
                  <span className="sr-only">Ouvrir le formulaire de contact</span>
                  {t.contact}
                </Button>
                <Button variant="outline" size="lg" onClick={() => setPriceOpen(true)}>
                  <span className="sr-only">Voir les tarifs</span>
                  {t.price}
                </Button>
                <Link href="/about" passHref>
                  <Button variant="outline" size="lg">
                    {t.about}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-12 relative" aria-labelledby="gallery-heading">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full">
            <BackgroundMedia 
              src="/Photo/background.png" 
              className="opacity-30"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl font-bold text-center mb-6 text-white">
            {t.gallery}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            {t.galleryDesc}
          </p>
          <PhotoGallery />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-secondary" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-center mb-8">
            {t.services}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background" aria-labelledby="stats-heading">
        <div className="container mx-auto px-4">
          <h2 id="stats-heading" className="sr-only">Nos statistiques</h2>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Dialog */}
      <ContactForm open={contactOpen} onOpenChange={setContactOpen} />
      
      {/* Price Dialog */}
      <PriceDialog open={priceOpen} onOpenChange={setPriceOpen} />
    </main>
  );
}