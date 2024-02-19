"use server";

import { Keys, Resume } from "@/types/Resume";
import { CVDocumentViewer } from "@/components/CVDocumentViewer";
import { redirect } from "next/navigation";

const locales = ["fr", "en"];

const map = {
  fr: "fr_resume.yaml",
  en: "en_resume.yaml",
};

export default async function Home({
  params: { locale },
}: {
  params: { locale: "fr" | "en" };
}) {
  if (!locale || !locales.includes(locale)) {
    return redirect("en");
  }
  let { 0: keys, 1: profile }: { 0: Keys; 1: Resume } = await import(
    `@/app/content/${map[locale]}`
  );
  profile.email = "## REDACTED ##";
  profile.phoneNumber = "## REDACTED ##";
  profile = JSON.parse(JSON.stringify(profile));
  keys = JSON.parse(JSON.stringify(keys));
  return <CVDocumentViewer data={{ keys, profile }} />;
}
