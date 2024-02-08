import { createDocument } from "zod-openapi";

import { TagSchemaOpenApi, tagPaths } from "../schemas/tags";
import { ProjectSchemaOpenApi, projectPaths } from "../schemas/projects";
import { LinkSchemaOpenApi, linkPaths } from "../schemas/links";

export const openAPIDocument = createDocument({
  openapi: "3.0.0",
  info: {
    title: "Dub.co API",
    description:
      "Dub is an open-source link management tool for modern marketing teams to create, share, and track short links.",
    version: "0.0.1",
    contact: {
      name: "Dub.co Support",
      email: "support@dub.co",
      url: "https://dub.co/help",
    },
    license: {
      name: "AGPL-3.0 license",
      url: "https://github.com/dubinc/dub/blob/main/LICENSE.md",
    },
  },
  servers: [
    {
      url: "https://api.dub.co",
      description: "Production API",
    },
  ],
  paths: {
    ...tagPaths,
    ...projectPaths,
    ...linkPaths,
  },
  components: {
    schemas: {
      TagSchemaOpenApi,
      ProjectSchemaOpenApi,
      LinkSchemaOpenApi,
    },
  },
});