import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { DocumentData } from "@/types/document.types";
import Link from "next/link";

interface DocumentCardProps {
  document: DocumentData;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  return (
    <Link href={`/document/${document.id}`}>
      <Card className="overflow-hidden relative aspect-square cursor-pointer">
        <div className="absolute inset-0 top-0 left-0">
          <Image
            src={document.imageUrl}
            alt={document.title}
            width={500}
            height={700}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <CardContent className="absolute inset-x-0 bottom-0 p-4 bg-black/30 h-full">
          <div className="relative flex flex-col justify-end items-start h-full">
            <h3 className="font-bold text-lg text-white line-clamp-1">
              {document.title}
            </h3>
            <p className="text-sm text-gray-200 line-clamp-1">
              {document.author}
            </p>
            <p className="text-xs text-gray-300">{document.year}</p>
            <p className="text-xs italic text-gray-300">{document.type}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DocumentCard;
