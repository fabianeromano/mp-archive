"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { DocumentData } from "@/types/document.types";
import Image from "next/image";
import CategoryBadge from "./categoryBadge";
import Link from "next/link";

interface DocumentListProps {
  documents: DocumentData[];
}
export function CategoryCard({ documents }: DocumentListProps) {
  return (
    <div>
      {documents.map((document) => (
        <Link key={document.id} href={`/document/${document.id}`}>
          <div className="p-3 flex w-full border-b first:border-t">
            <div className="w-32 h-32 rounded-md overflow-hidden">
              <AspectRatio ratio={1 / 1} className="w-full">
                <Image
                  src={document.imageUrl}
                  alt={document.title}
                  fill
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="flex-1 pl-2 flex flex-col items-start justify-start">
              <h3 className="font-bold text-lg leading-none">
                {document.title}
              </h3>
              <p className="text-sm dark:text-gray-200">{document.author}</p>
              <p className="text-sm dark:text-gray-200">{document.year}</p>
              <CategoryBadge categories={document.categories} />
              <p className="text-sm dark:text-gray-200 line-clamp-1 lg:text-left mt-1">
                {document.uploadDate}
              </p>
              <p className="text-xs italic dark:text-gray-300">
                {document.type}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
