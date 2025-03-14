"use client";
import DocumentCarousel from "@/components/home/documentCarousel";
import FeaturedSection from "@/components/home/featuredSection";
import { useDocuments } from "@/hooks/use-documents";

export default function Home() {
  const { prayers, magazines } = useDocuments();

  return (
    <div className="w-full h-full flex flex-col">
      <FeaturedSection />
      <DocumentCarousel carouselTitle="Oraciones" items={prayers} />
      <DocumentCarousel carouselTitle="Revistas" items={magazines} />
    </div>
  );
}
