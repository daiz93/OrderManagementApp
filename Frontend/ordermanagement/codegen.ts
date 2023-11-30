
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:5243/graphql/",
  //documents: "**/*.{gql.graphql}",
  documents: "src/graphql/**/*.{gql,graphql}",
  
  generates: {
    'src/graphql/generated/schema.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo']
    }
  }
};

export default config;
