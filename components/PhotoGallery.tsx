"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhotoModal } from "./PhotoModal";

interface Photo {
  name: string;
  path: string;
}

export function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    async function loadPhotos() {
      try {
        const response = await fetch('/api/photos');
        const data = await response.json();
        setPhotos(data.photos);
      } catch (error) {
        console.error('Error loading photos:', error);
      }
    }

    loadPhotos();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <Card className="overflow-hidden cursor-pointer">
              <div className="relative w-full" style={{ height: 'auto' }}>
                <img
                  src={photo.path}
                  alt={photo.name}
                  className="w-full h-auto transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <PhotoModal
            src={selectedPhoto.path}
            alt={selectedPhoto.name}
            onClose={() => setSelectedPhoto(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}