"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useDocuments } from "@/hooks/use-documents";
import Link from "next/link";

export default function FeaturedSection() {
  const { latestPrayer, latestMagazine } = useDocuments();

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2">
      <article className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
        <div className="row-span-2 rounded-xl overflow-hidden flex items-center justify-center h-[70vh]">
          <Image
            src={latestMagazine?.imageUrl || "/placeholder-image.jpg"}
            width={352}
            height={590}
            alt="Magazine"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col items-center justify-center p-2 relative overflow-hidden rounded-xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${"/background.png"})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 backdrop-blur-sm bg-black/30 h-full">
            <div className="relative flex flex-col justify-end items-start h-full">
              <h3 className="font-bold text-lg text-white line-clamp-1">
                Revista
              </h3>
              <p className="text-sm font-semibold text-gray-200 line-clamp-1">
                {latestMagazine?.title}
              </p>
              <p className="text-sm text-gray-200 line-clamp-1">
                {latestMagazine?.author}
              </p>
              <p className="text-xs text-gray-300">2024</p>
              <p className="text-xs italic text-gray-300">
                {latestMagazine?.type}
              </p>
              <Button className="mt-2">Leer Ahora</Button>
            </div>
          </div>
        </div>
        <div className="p-2 row-span-1 rounded-xl relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${"/background.png"})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 backdrop-blur-sm bg-black/30 h-full">
            <div className="relative flex flex-col justify-start items-start h-full">
              <h3 className="text-sm font-semibold text-gray-200 line-clamp-1">
                Descripción
              </h3>
              <p className="text-sm text-gray-200 line-clamp-5">
                {latestMagazine?.description}
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className="grid grid-cols-2 grid-rows-2 gap-4 p-4 ">
        <div className="row-span-2 rounded-xl overflow-hidden flex items-center justify-center h-[70vh]">
          <Image
            src={latestPrayer?.imageUrl || "/placeholder-image.jpg"}
            width={352}
            height={590}
            alt="Magazine"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center p-2 relative overflow-hidden rounded-xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${"/background.png"})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 backdrop-blur-sm bg-black/30 h-full">
            <div className="relative flex flex-col justify-end items-start h-full">
              <h3 className="font-bold text-lg text-white line-clamp-1">
                Oracion
              </h3>
              <p className="text-sm font-semibold text-gray-200 line-clamp-1">
                {latestPrayer?.title}
              </p>
              <p className="text-sm text-gray-200 line-clamp-1">
                {latestPrayer?.author}
              </p>
              <p className="text-xs text-gray-300">2024</p>
              <p className="text-xs italic text-gray-300">
                {latestPrayer?.type}
              </p>
              <Link className="mt-2" href={`/document/${latestPrayer?.id}`}>
                <Button className="w-full">Leer Ahora</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-2 row-span-1 rounded-xl relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${"/background.png"})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 backdrop-blur-sm bg-black/30 h-full">
            <div className="relative flex flex-col justify-start items-start h-full">
              <h3 className="text-sm font-semibold text-gray-200 line-clamp-1">
                Descripción
              </h3>
              <p className="text-sm text-gray-200 line-clamp-5">
                {latestPrayer?.description}
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
