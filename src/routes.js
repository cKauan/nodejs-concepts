const { Router } = require('express');
const routes = Router();


routes.get("/repositories", (request, response) => {
    // TODO
    return response.json({ message: "Hello world" })
});

routes.post("/repositories", (request, response) => {
    // TODO
});

routes.put("/repositories/:id", (request, response) => {
    // TODO
});

routes.delete("/repositories/:id", (request, response) => {
    // TODO
});

routes.post("/repositories/:id/like", (request, response) => {
    // TODO
});

module.exports = routes;