"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { CVDocument } from "@/components/CVDocument";

export function CVDocumentViewer() {
  return (
    <PDFViewer>
      <CVDocument />
    </PDFViewer>
  );
}
