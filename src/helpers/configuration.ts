import { join } from "node:path";
import { readFileSync } from "node:fs";
import { parseDocument } from "yaml";

export type ConfigurationFile = {
  defaultLocale: string;
  locales: Record<string, string>;
};

class Configuration {
  private readonly _configuration: ConfigurationFile;

  get locales() {
    return Object.keys(this._configuration.locales);
  }

  get defaultLocale() {
    return this._configuration.defaultLocale;
  }

  get mappings() {
    return this._configuration.locales;
  }

  constructor() {
    const configFilePath = join(
      process.env.CONTENT_PATH!,
      "__configuration.yaml",
    );
    const file = readFileSync(configFilePath);
    const document = parseDocument(file.toString("utf-8"));
    const configuration = document.toJSON() as ConfigurationFile;

    this._configuration = configuration;

    if (!configuration.defaultLocale) {
      throw new Error("defaultLocale is missing in the configuration file");
    }

    if (!configuration.locales || this.locales.length === 0) {
      throw new Error("locales is missing in the configuration file");
    }

    if (!this.locales.includes(configuration.defaultLocale)) {
      throw new Error("defaultLocale is not included in the locales");
    }
  }
}

export const configuration = new Configuration();
