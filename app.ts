import { createServer, plugins } from "restify";
import { deleteSingle } from "./delete";
import { getAll } from "./getAll";
import { post } from "./insert";

//Server
const server = createServer();

//Use bodyParser plugin
server.use(plugins.bodyParser());

//Add routes
server.get("/contacts", getAll);
server.post("/contacts", post);
server.del("/contacts/:id", deleteSingle);

server.listen(8080, () => console.log("API is listening"));