import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://ca-central-1.cdn.hygraph.com/content/cln74g4v2d97801uk63ud6vtd/master",

  documents: "queries/*/*.ts",
  generates: {
    "./types/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
