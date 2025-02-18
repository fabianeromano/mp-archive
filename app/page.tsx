// import Image from "next/image";

import CarouselSection from "@/components/home-sections/CarouselSection";
import Hero from "@/components/home-sections/Hero";

const prayerdata = [
  {
    id: "1",
    title: "Oración María Sembradora",
    author: "Movimiento Puente",
    category: "Oraciones",
    year: 2024,
    imageUrl:
      "https://movimientopuente.org/wp-content/uploads/2021/07/maria-s-682x1024.jpeg",
  },
  {
    id: "2",
    title: "Oración María Sembradora",
    author: "Movimiento Puente",
    category: "Oraciones",
    year: 2024,
    imageUrl:
      "https://movimientopuente.org/wp-content/uploads/2021/07/maria-s-682x1024.jpeg",
  },
  {
    id: "3",
    title: "Oración María Sembradora",
    author: "Movimiento Puente",
    category: "Oraciones",
    year: 2024,
    imageUrl:
      "https://movimientopuente.org/wp-content/uploads/2021/07/maria-s-682x1024.jpeg",
  },
];

const magazinedata = [
  {
    id: "1",
    title: "Oración María Sembradora",
    author: "Movimiento Puente",
    category: "Oraciones",
    year: 2024,
    imageUrl:
      "https://drive.google.com/uc?id=1cVR9-y49k5CCkEhc7FE0ZkTMu5ULKae6",
  },
  {
    id: "2",
    title: "Oración María Sembradora",
    author: "Movimiento Puente",
    category: "Oraciones",
    year: 2024,
    imageUrl:
      "https://movimientopuente.org/wp-content/uploads/2021/07/maria-s-682x1024.jpeg",
  },
  {
    id: "3",
    title: "Oración María Sembradora",
    author: "Movimiento Puente",
    category: "Oraciones",
    year: 2024,
    imageUrl:
      "https://movimientopuente.org/wp-content/uploads/2021/07/maria-s-682x1024.jpeg",
  },
];

export default function Home() {
  return (
    <div className="w-full pb-10">
      <Hero />
      <CarouselSection titleSection="Oraciones" items={prayerdata} />
      <CarouselSection titleSection="Revistas" items={magazinedata} />
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div> */}
    </div>
  );
}
