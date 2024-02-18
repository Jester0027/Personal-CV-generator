import { getDocumentBuffer } from "@/components/CVDocument";
import { NextResponse } from "next/server";
import { CustomResponse } from "@/helpers/CustomResponse";

type Locale = "en" | "fr";
const locales: Locale[] = ["en", "fr"];

export async function GET(
  request: Request,
  { params: { locale } }: { params: { locale: "en" | "fr" } },
) {
  if (!locales.includes(locale)) {
    return CustomResponse.notFound();
  }
  const buffer = await getDocumentBuffer();
  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/pdf",
    },
  });
}
