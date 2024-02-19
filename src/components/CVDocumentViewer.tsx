"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { CVDocument } from "@/components/CVDocument";

export function CVDocumentViewer() {
  return (
    <PDFViewer className="h-dvh w-dvw">
      <CVDocument />
    </PDFViewer>
  );
}
