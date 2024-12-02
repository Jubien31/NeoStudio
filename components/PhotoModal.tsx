"use client";

import { useState, useEffect } from "react";
import { Maximize2, ZoomIn, ZoomOut, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface PhotoModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function PhotoModal({ src, alt, onClose }: PhotoModalProps) {
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Hide language switcher when modal is opened
  useEffect(() => {
    const languageSwitcher = document.querySelector('.language-switcher');
    if (languageSwitcher) {
      languageSwitcher.classList.add('hidden');
    }

    // Show language switcher when modal is closed
    return () => {
      const languageSwitcher = document.querySelector('.language-switcher');
      if (languageSwitcher) {
        languageSwitcher.classList.remove('hidden');
      }
    };
  }, []);

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.5, 1));

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button variant="outline" size="icon" onClick={(e) => {
          e.stopPropagation();
          handleZoomOut();
        }}>
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={(e) => {
          e.stopPropagation();
          handleZoomIn();
        }}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={(e) => {
          e.stopPropagation();
          toggleFullscreen();
        }}>
          <Maximize2 className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <motion.div
        className="fixed inset-0 flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-[90vw] object-contain"
          style={{
            scale,
            cursor: scale > 1 ? "grab" : "auto",
          }}
          drag={scale > 1}
          dragConstraints={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />
      </motion.div>
    </motion.div>
  );
}