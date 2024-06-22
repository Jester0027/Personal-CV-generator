"use client";

import { useEffect, useRef, useState } from "react";
import { Textarea } from "@/components/ui/Textarea";
import { PDFViewer } from "@react-pdf/renderer";
import { CVDocument } from "@/components/pdf/CVDocument";
import { parseYamlResume } from "@/helpers/parseYamlResume";
import debounce from "lodash.debounce";

export default function Home() {
  const documentRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);
  const [document, setDocument] =
    useState<Awaited<ReturnType<typeof parseYamlResume> | null>>(null);

  useEffect(() => {
    setLoading(true);
    if (documentRef.current) {
      const doc = window.localStorage.getItem("cv");
      documentRef.current.value = doc ?? "";
      if (doc) {
        parseYamlResume(doc).then(setDocument);
      }
      setLoading(false);
    }
  }, []);

  async function updateResume() {
    setLoading(true);
    setDocument(await parseYamlResume(documentRef.current?.value!));
    setLoading(false);
  }

  return (
    <main className="mx-auto grid grid-cols-2" aria-busy={loading}>
      <div className="h-dvh grid-cols-2">
        <Textarea
          className="h-5/6"
          name="document"
          ref={documentRef}
          aria-busy={loading}
          onChange={debounce(updateResume, 500)}
        />
      </div>
      <div>
        {document && (
          <PDFViewer aria-busy={loading} className="h-full w-full">
            <CVDocument data={document} />
          </PDFViewer>
        )}
      </div>
    </main>
  );
}
