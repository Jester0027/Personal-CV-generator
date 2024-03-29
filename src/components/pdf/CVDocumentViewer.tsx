"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { CVDocument } from "@/components/pdf/CVDocument";
import { Keys, Resume } from "@/types/Resume";
import { useHasHydrated } from "@/hooks/hasHydrated";

export function CVDocumentViewer({
  data,
}: {
  data: { keys: Keys; profile: Resume };
}) {
  const hasHydrated = useHasHydrated();

  return (
    hasHydrated && (
      <PDFViewer className="h-dvh w-dvw">
        <CVDocument data={data} />
      </PDFViewer>
    )
  );
}
