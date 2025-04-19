# `astro-asides`

This is an [Astro integration](https://docs.astro.build/en/guides/integrations-guide/) that converts Markdown `:::` blocks to HTML `<aside>` elements.

## Usage

### Prerequisites

Follow the [Astro Setup Guide](https://docs.astro.build/en/install-and-setup/).

### Installation

Install the integration **automatically** using the Astro CLI:

```bash
pnpm astro add astro-asides
```

```bash
npx astro add astro-asides
```

```bash
yarn astro add astro-asides
```

Or install it **manually**:

1. Install the required dependencies

```bash
pnpm add astro-asides
```

```bash
npm install astro-asides
```

```bash
yarn add astro-asides
```

2. Add the integration to your astro config

```diff
+import integration from "astro-asides";

export default defineConfig({
  integrations: [
+    integration(),
  ],
});
```

### Configuration

TODO:configuration

## Contributing

This package is structured as a monorepo:

- `playground` contains code for testing the package
- `package` contains the actual package

Install dependencies using pnpm: 

```bash
pnpm i --frozen-lockfile
```

Start the playground and package watcher:

```bash
pnpm dev
```

You can now edit files in `package`. Please note that making changes to those files may require restarting the playground dev server.

## Licensing

[MIT Licensed](https://github.com/TODO:/blob/main/LICENSE). Made with ❤️ by [trueberryless](https://github.com/trueberryless).

## Acknowledgements

- Created using [astro-integration-template](https://github.com/florian-lefebvre/astro-integration-template).
- [Starlight Asides implementation](https://github.com/withastro/starlight/blob/main/packages/starlight/integrations/asides.ts)