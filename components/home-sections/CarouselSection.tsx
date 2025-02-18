"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

interface CarouselSectionProps {
  titleSection: string;
  items: {
    id: string;
    title: string;
    author: string;
    category: string;
    year: number;
    imageUrl: string;
  }[];
}

const CarouselSection: React.FC<CarouselSectionProps> = ({
  titleSection,
  items,
}) => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-full px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[18px] font-semibold text-[#000000]">
            {titleSection}
          </h2>
          <Button
            variant="link"
            className="bg-[#027eff] font-semibold text-xs hover:no-underline text-white"
            asChild>
            <Link href="/all">
              Ver Todo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <Carousel className="w-full max-w-xs">
        <CarouselContent className="-ml-1">
          {items.map((book) => (
            <CarouselItem key={book.id} className="">
              <Card className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
                <CardHeader className="aspect-[4/3] relative">
                  <Image
                    src={book.imageUrl || "/placeholder.svg"}
                    alt={book.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h2 className="absolute bottom-4 left-4 right-4 text-white font-bold text-xl line-clamp-2 drop-shadow-lg">
                    {book.title}
                  </h2>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-600 mb-1">{book.author}</p>
                  <p className="text-gray-500 text-sm mb-2">{book.year}</p>
                  {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    {book.category}
                  </span> */}
                  <Badge className="bg-[#027eff] text-white">
                    {book.category}
                  </Badge>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default CarouselSection;
