import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import fastifyMultipart from "@fastify/multipart";
import path from "path";

export async function uploadVideoRoute(app: FastifyInstance) {
  app.register(fastifyMultipart, {
    limits: {
      fileSize: 1048579 * 25, //25mb
    },
  });

  app.post("/videos", async (request, reply) => {
    const data = await request.file();

    if (!data) {
      return reply.status(400).send({ error: "Missing file input" });
    }

    const extension = path.extname(data.filename);

    if(extension !== '.mp3') {
      return reply.status(400).send({ error: "Invalid input type, please upload a .mp3 file." });

    }
  });
}
