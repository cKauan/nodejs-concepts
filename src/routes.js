const { Router } = require('express');
const { v4: uuid } = require('uuid')
const routes = Router();


const repositories = [];

routes.get("/repositories", (_, response) => {
    return response.json(repositories)
});

routes.post("/repositories", (request, response) => {
    const { title, url, techs, likes = 0 } = request.body;
    const data = { title, url, techs, likes };
    const id = uuid();
    repositories.push({ id, ...data })
    const createdRepo = repositories.filter(repo => repo.id === id);
    return response.json(...createdRepo);
    // TODO
});

routes.put("/repositories/:id", (request, response) => {
    const { id } = request.params;
    const repository = repositories.filter(repo => repo.id === id)[0];

    if (!repository) return response.status(404).json({ error: 'Repository not found' })

    const { title = repository.title, url = repository.url, techs = repository.techs
    } = request.body;
    const data = { id, title, url, techs, likes: repository.likes };

    const repositoryIndex = repositories.indexOf(repository);
    repositories.splice(repositoryIndex, 1, data);

    return response.json(data);
});

routes.delete("/repositories/:id", (request, response) => {
    const { id } = request.params;
    const repository = repositories.filter(repo => repo.id === id)[0];

    if (!repository) return response.status(404).json({ error: 'Repository not found' })

    const repositoryIndex = repositories.indexOf(repository);
    repositories.splice(repositoryIndex, 1);
    return response.json({ message: "Deleted" })
    // TODO
});

routes.post("/repositories/:id/like", (request, response) => {
    // TODO
    const { id } = request.params;
    const repository = repositories.filter(repo => repo.id === id)[0];

    if (!repository) return response.status(404).json({ error: 'Repository not found' })

    const repositoryIndex = repositories.indexOf(repository);
    const data = {
        ...repository,
        likes: repository.likes + 1
    }
    repositories.splice(repositoryIndex, 1, data);
    return response.json(data);

});

module.exports = routes;