import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import fastifyMultipart from "@fastify/multipart";

export async function uploadVideoRoute(app: FastifyInstance) {
  app.register(fastifyMultipart, {
    limits: {
      fileSize: 1048579 * 25 //25mb
    }
  })
  app.post("/videos", async () => {
    
  });
}
