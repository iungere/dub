import { ZodOpenApiOperationObject } from "zod-openapi";

import { openApiErrorResponses } from "@/lib/openapi/responses";
import z from "@/lib/zod";
import { getQRCodeQuerySchema } from "@/lib/zod/schemas/qr";

export const getQRCode: ZodOpenApiOperationObject = {
  operationId: "getQRCode",
  summary: "Retrieve a QR code",
  description: "Retrieve a QR code for a link.",
  requestParams: {
    query: getQRCodeQuerySchema,
  },
  responses: {
    "200": {
      description: "The QR code",
      content: {
        "image/png": {
          schema: z.string(),
        },
      },
    },
    ...openApiErrorResponses,
  },
  tags: ["Links"],
  security: [{ bearerToken: [] }],
};