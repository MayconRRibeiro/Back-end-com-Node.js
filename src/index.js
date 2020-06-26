const express = require('express');

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 *
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 *   -PUT: Utilizado quando vamos atualizar todos os dados ao mesmo tempo de um recurso
 *   -PATCH: Utilizado quando vamos atualizar um dado específico
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Route Params: Identificar recursos (Atualizar/Deletar)
 * Query Params: Filtros e paginação
 * Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
 */

app.get('/projects', (request, response) => {
  const { title, owner } = request.query;

  console.log(title);
  console.log(owner);

  return response.json(['Projeto 1', 'Projeto 2']);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  console.log(title);
  console.log(owner);

  return response.json(['Projeto 1', 'Projeto 2', 'Projeto 3']);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;

  console.log(id);

  return response.json(['Projeto 4', 'Projeto 2', 'Projeto 3']);
});

app.delete('/projects/:id', (request, response) => {
  return response.json(['Projeto 2', 'Projeto 3']);
});

app.listen(3333, () => {
  console.log('Back-end started!');
});
