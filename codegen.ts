import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8080/graphql",
  documents: ["app/**/*.{ts,tsx}"],
  generates: {
    "./src/graphql/schema.json": {
      plugins: ["introspection"],
    },
    "./src/graphql/types.gen.ts": {
      plugins: ["typescript"],
    },
    "./app": {
      preset: "near-operation-file",
      presetConfig: { extension: ".gen.ts", baseTypesPath: "types.gen.ts" },
      plugins: ["typescript-operations"],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
