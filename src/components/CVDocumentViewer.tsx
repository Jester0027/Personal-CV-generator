"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { CVDocument } from "@/components/CVDocument";
import { Keys, Resume } from "@/types/Resume";

export function CVDocumentViewer({
  data,
}: {
  data: { keys: Keys; profile: Resume };
}) {
  return (
    <PDFViewer className="h-dvh w-dvw">
      <CVDocument data={data} />
    </PDFViewer>
  );
}
