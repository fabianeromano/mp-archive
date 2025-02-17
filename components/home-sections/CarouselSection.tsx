"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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
          {items.map((card) => (
            <CarouselItem key={card.id} className="">
              <div className="p-1 flex justify-center items-center">
                <Card className="shadow-lg w-60 cursor-pointer">
                  <CardHeader className="p-2">
                    <div className="rounded-lg bg-gray-100 overflow-hidden aspect-square">
                      <Image
                        src={card.imageUrl || "/placeholder.svg"}
                        alt={card.title}
                        width={164}
                        height={194}
                        className="object-contain w-auto h-full mx-auto"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="py-1">
                    <h3 className="text-base font-semibold leading-4 text-center text-[#000000] mb-1">
                      {card.title}
                    </h3>
                    <p className="font-normal text-xs text-[#9ea4b0] text-center">
                      {card.author}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col justify-center items-center pb-1">
                    <h4 className="text-xs font-medium text-[#000000]">
                      {card.category}
                    </h4>
                    <p className="text-xs font-normal text-[#9ea4b0]">
                      {card.year}
                    </p>
                  </CardFooter>
                </Card>
              </div>
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
