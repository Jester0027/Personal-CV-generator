import { NextRequest, NextResponse } from "next/server";
import { Results } from "@/helpers/Results";
import { YAMLParseError } from "yaml";
import { ZodError } from "zod";
import { getDocumentBuffer } from "@/components/pdf/CVDocument";
import { parseYamlResume } from "@/helpers/parseYamlResume";

export const revalidate = 0;

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type");
  try {
    switch (contentType) {
      case "text/xml":
      case "application/xml":
      case "application/json": {
        return Results.notImplemented();
      }

      case "application/yml":
      case "application/yaml": {
        const body = await request.text();
        const document = await parseYamlResume(body);
        const cv = await getDocumentBuffer(document);
        return Results.pdf(cv);
      }

      default: {
        return Results.unsupportedMediaType();
      }
    }
  } catch (error) {
    return handleError(error);
  }
}

function handleError(error: unknown): NextResponse {
  if (error instanceof ZodError) {
    const { formErrors, fieldErrors } = error.flatten();
    return Results.badRequest({ formErrors, fieldErrors });
  }
  if (error instanceof YAMLParseError) {
    return Results.badRequest({ error: error.message });
  }
  return Results.internalServerError();
}
