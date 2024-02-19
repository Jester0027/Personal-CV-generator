Small CV generator created for me.

### Usage

The CVs are generated from yaml files inside the `content` folder. 
You have to specify the path to this folder via an environment variable (see `.env.dist`).

an configuration file (`__configuration.yaml`) is required, with a `defaultLocale` key and a map of locales to a file
e.g.
```yaml
defaultLocale: en
locales:
  en: en.yaml
  es: es.yaml
```

The yaml files should have the same structure as the `en.resume.example.yaml` file.

With the configuration added, and the content files in place, you can run the application with the following command:
```bash
pnpm run dev
```
or:
```bash
next dev
```

then navigate to `http://localhost:3000` to see the generated CV.
The root url will redirect to the default locale, but you can navigate to the other locales by adding the locale to the url, e.g. `http://localhost:3000/es`