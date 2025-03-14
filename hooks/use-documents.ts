import { documentsData } from "@/data/documentsData";
import { DocumentData } from "@/types/document.types";
import { useState, useMemo, useCallback } from "react";

export const useDocuments = () => {
  const [documents] = useState<DocumentData[]>(documentsData);

  // Filter prayers
  const prayers = useMemo(
    () => documents.filter((doc) => doc.type === "oraciones"),
    [documents]
  );

  // Filter magazines
  const magazines = useMemo(
    () => documents.filter((doc) => doc.type === "revistas"),
    [documents]
  );

  // Get latest prayer
  const latestPrayer = useMemo(
    () =>
      prayers.length > 0
        ? prayers.reduce((latest, current) =>
            latest.uploadDate > current.uploadDate ? latest : current
          )
        : null,
    [prayers]
  );

  // Get latest magazine
  const latestMagazine = useMemo(
    () =>
      magazines.length > 0
        ? magazines.reduce((latest, current) =>
            latest.uploadDate > current.uploadDate ? latest : current
          )
        : null,
    [magazines]
  );

  // Get document by ID
  const getDocumentById = useCallback(
    (id: string): DocumentData | undefined => {
      return documents.find((doc) => doc.id === id);
    },
    [documents]
  );

  return {
    documents,
    prayers,
    magazines,
    latestPrayer,
    latestMagazine,
    getDocumentById,
  };
};
