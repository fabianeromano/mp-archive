"use client";
import { useDocuments } from "@/hooks/use-documents";
import { use } from "react";

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
  return (
    <section className="w-full h-full px-3">
      <iframe
        src={document?.documentUrl}
        className="w-full h-full"
        allow="autoplay"></iframe>
    </section>
  );
}
