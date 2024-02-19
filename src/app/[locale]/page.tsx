"use server";

import { Keys, Resume } from "@/types/Resume";
import { CVDocumentViewer } from "@/components/CVDocumentViewer";
import { redirect } from "next/navigation";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { parseAllDocuments, parseDocument } from "yaml";
import { configuration } from "@/helpers/configuration";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  if (!locale || !configuration.locales.includes(locale)) {
    return redirect(configuration.defaultLocale);
  }

  const path = join(process.env.CONTENT_PATH!, configuration.mappings[locale]);
  const file = await readFile(path);
  const [firstDocument, secondDocument] = parseAllDocuments(
    file.toString("utf-8"),
  );
  const keys = firstDocument.toJSON() as Keys;
  let profile = secondDocument.toJSON() as Resume;
  profile.phoneNumber = "XXX-XXX-XXXX";
  profile.email = "xxx@xxx.com";

  return <CVDocumentViewer data={{ keys, profile }} />;
}
