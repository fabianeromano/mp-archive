import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import DocumentCard from "./documentCard";
import { DocumentData } from "@/types/document.types";
import Link from "next/link";

interface DocumentListProps {
  carouselTitle: string;
  items: DocumentData[];
}

const DocumentCarousel: React.FC<DocumentListProps> = ({
  carouselTitle,
  items,
}) => {
  return (
    <section className="w-full py-4">
      <div className="flex justify-between items-center w-full px-3 pb-2">
        <h2 className="text-lg font-semibold">{carouselTitle}</h2>
        <Link href="/category">
          <Button className="w-full">Ver Todo</Button>
        </Link>
      </div>
      <div className="px-16">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full">
          <CarouselContent>
            {items.map((document) => (
              <CarouselItem
                key={document.id}
                className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <DocumentCard document={document} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default DocumentCarousel;
