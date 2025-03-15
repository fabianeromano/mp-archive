"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useDocuments } from "@/hooks/use-documents";
import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default function Page({ params }: PageProps) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const { getDocumentById } = useDocuments();
  const document = getDocumentById(id);

  if (!document) {
    return notFound();
  }

  return (
    <section className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
      <article className="w-full flex justify-center items-start bg-black/10 p-2 rounded-xl">
        <Dialog>
          <DialogTrigger className="w-full">
            <div>
              <AspectRatio ratio={3 / 2} className="w-full">
                <Image
                  src={document.imageUrl}
                  alt={document.title}
                  fill
                  className="h-full w-full rounded-md object-contain"
                />
              </AspectRatio>
              <p className="text-xs text-black dark:text-gray-300">
                Click en la imagen para ver más detalle
              </p>
            </div>
          </DialogTrigger>
          <DialogContent className="w-full h-[90vh]">
            <DialogHeader>
              <DialogTitle>{document.title}</DialogTitle>
              <DialogDescription className="bg-muted/50 flex justify-center items-center">
                <Image
                  className="w-full h-full object-contain"
                  src={document.imageUrl}
                  alt={document.title}
                  width={300}
                  height={500}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </article>
      <article className="p-2 rounded-xl bg-black/10">
        <div className="w-full px-3 text-center">
          <h3 className="font-bold text-lg lg:text-left">{document.title}</h3>
          <p className="text-sm dark:text-gray-200 line-clamp-1 lg:text-left">
            {document.author}
          </p>
        </div>
        <div className="w-full p-3">
          <div className="flex gap-1">
            {document.categories.map((item, index) => (
              <Badge
                key={index}
                className="border border-black dark:border-white"
                variant="outline">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <div className="w-full px-3 pb-4">
          <h4 className="font-bold text-lg">Descripción</h4>
          <p className="text-sm dark:text-gray-200">{document.description}</p>
        </div>
        <div className="w-full flex justify-center items-center">
          {document.type === "revistas" ? (
            <a
              href={document.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/3 md:w-1/3">
              <Button className="w-full">Ver Revista</Button>
            </a>
          ) : (
            <Link
              href={`/document/${document.id}/view`}
              className="w-1/3 md:w-1/3">
              <Button className="w-full">Ver Archivo</Button>
            </Link>
          )}
        </div>
      </article>
    </section>
  );
}
