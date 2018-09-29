'use strict';
import { Server } from "./serverCreator";

const server = new Server();

server.server.listen(9000, function () {
    console.log('Server is running on http://localhost:9000');
});
