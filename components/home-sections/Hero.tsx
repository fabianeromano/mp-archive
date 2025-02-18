import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full px-4 py-6">
      <div className="w-full h-52 bg-gradient-to-r from-[#027EFF] to-[#ABCAFF] rounded-lg p-4 flex justify-start items-start gap-3">
        <div className="rounded-lg w-32 h-full bg-blue-400 shadow-lg overflow-hidden">
          <Image
            src="/magazine.png"
            alt="Imgen de la revista"
            width={128}
            height={173}
            className="object-cover"
          />
        </div>
        <div className="flex-1 h-full flex flex-col items-start justify-between gap-2">
          <div className="overflow-hidden text-ellipsis text-white flex-1">
            <h1 className="text-xl font-bold leading-none">Revista</h1>
            <h3 className="text-base font-normal">
              Ob Audire - AMAR - Edición N° 27
            </h3>
            <p className="text-wrap text-sm mt-1 h-">
              En la actual edición vamos a abordar el tema del Amor. Hablar del
              amor es hablar de la realidad mas profunda de la vida. La alegría,
              la tristeza, el dolor, etc. Están surcados por la realidad del
              amor, ya que sin él, el hombre no es nada....
            </p>
          </div>
          <Button
            variant="link"
            className="font-semibold text-xs hover:no-underline text-white border border-white"
            asChild>
            <Link href="/all">
              Leer
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
