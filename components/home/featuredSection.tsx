"use client";
import Image from "next/image";
import { useDocuments } from "@/hooks/use-documents";
import { SendHorizontal } from "lucide-react";
import Link from "next/link";

export default function FeaturedSection() {
  const { latestPrayer, latestMagazine } = useDocuments();

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 p-3 gap-3">
      <Link href={`/document/${latestMagazine?.id}`}>
        <article className="rounded-xl relative w-full overflow-hidden h-[50vh]">
          <div className="absolute top-0 left-0 w-1/2 z-10 h-full pt-4 pl-4 pb-8 flex flex-col justify-between items-start">
            <div>
              <p className="text-sm font-normal text-white dark:text-black line-clamp-1">
                Revista
              </p>
              <h1 className="text-3xl font-black text-gray-200 dark:text-black">
                {latestMagazine?.title}
              </h1>
            </div>
            <div className="flex justify-center items-center gap-2 cursor-pointer">
              <span className="rounded-full dark:bg-black bg-white w-6 h-6 flex items-center justify-center">
                <SendHorizontal
                  className="dark:text-white text-black"
                  size={16}
                />
              </span>
              <p className="text-white dark:text-black text-sm font-medium italic">
                Ver Revista
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full  h-full -z-20 bg-black dark:bg-white"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-black via-black/90 to-transparent dark:bg-gradient-to-r dark:from-white dark:via-white/90 dark:to-transparent flex justify-end"></div>
          <div className="absolute -z-10 top-0 right-0 w-1/2 h-full flex justify-end items-center rounded-2xl">
            <Image
              src={latestMagazine?.imageUrl || "/image-not-available.png"}
              width={352}
              height={590}
              alt="Magazine"
              className="object-contain w-auto h-full"
            />
          </div>
        </article>
      </Link>
      <Link href={`/document/${latestPrayer?.id}`}>
        <article className="rounded-xl relative w-full overflow-hidden h-[50vh]">
          <div className="absolute top-0 left-0 w-1/2 z-10 h-full pt-4 pl-4 pb-8 flex flex-col justify-between items-start">
            <div>
              <p className="text-sm font-normal text-white dark:text-black line-clamp-1">
                Revista
              </p>
              <h1 className="text-3xl font-black text-gray-200 dark:text-black">
                {latestPrayer?.title}
              </h1>
            </div>
            <div className="flex justify-center items-center gap-2 cursor-pointer">
              <span className="rounded-full dark:bg-black bg-white w-6 h-6 flex items-center justify-center">
                <SendHorizontal
                  className="dark:text-white text-black"
                  size={16}
                />
              </span>
              <p className="text-white dark:text-black text-sm font-medium italic">
                Ver Oración
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full  h-full -z-20 bg-black dark:bg-white"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-black via-black/90 to-transparent dark:bg-gradient-to-r dark:from-white dark:via-white/90 dark:to-transparent flex justify-end"></div>
          <div className="absolute -z-10 top-0 right-0 w-1/2 h-full flex justify-end items-center rounded-2xl">
            <Image
              src={latestPrayer?.imageUrl || "/image-not-available.png"}
              width={352}
              height={590}
              alt="Magazine"
              className="object-contain w-auto h-full"
            />
          </div>
        </article>
      </Link>
    </section>
  );
}
