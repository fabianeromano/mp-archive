export interface DocumentData {
  id: string;
  title: string;
  author: string;
  description: string;
  year: string;
  categories: string[];
  imageUrl: string;
  documentUrl: string;
  uploadDate: string;
  type: "fotos" | "oraciones" | "pasajes" | "revistas";
}
