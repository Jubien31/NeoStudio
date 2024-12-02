"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

export function PriceDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t.price}</DialogTitle>
        </DialogHeader>
        <div className="py-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">{t.website}</h3>
              <p className="text-muted-foreground">
                {t.websitePrice}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{t.imageCreation}</h3>
              <p className="text-muted-foreground">
                {t.imagePrice}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}