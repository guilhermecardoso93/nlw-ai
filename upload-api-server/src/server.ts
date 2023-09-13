import { fastify } from "fastify";
import { uploadVideoRoute } from "./routes/upload-video";
import { getAllPromptsRoute } from "./routes/get-all-prompts";

const app = fastify();

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running");
  });
