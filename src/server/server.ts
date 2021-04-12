import express, { json } from "express";
import next from "next";
import Specter from "@specter/specter";
import { registerServices } from "./services";
import morgan from "morgan";

async function main() {
  const dev = process.env.NODE_ENV !== "production";
  const port = Number.parseInt(process.env.PORT ?? "3000", 10);

  registerServices();

  const app = next({ dev });
  const handle = app.getRequestHandler();
  await app.prepare();
  const server = express();

  server.use(json({ limit: "1000kb" }));
  server.use(morgan("dev", { skip: req => req.url.indexOf("webpack") !== -1 }));

  server.use("/xhr", Specter.createMiddleware({}));

  server.get("*", (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
  });
}

main();
