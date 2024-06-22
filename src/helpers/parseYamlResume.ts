import { parseAllDocuments } from "yaml";
import { keysSchema, resumeSchema } from "@/types/Resume";
import type { YAMLParseError } from "yaml";
import type { ZodError } from "zod";

/**
 * @param {string} document the yaml document
 * @throws {YAMLParseError}
 * @throws {ZodError}
 */
export async function parseYamlResume(document: string) {
  const [firstDocument, secondDocument] = parseAllDocuments(document);
  const keys = await keysSchema.parseAsync(firstDocument?.toJSON());
  const profile = await resumeSchema.parseAsync(secondDocument?.toJSON());

  return { keys, profile };
}
