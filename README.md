<p align="center">
  <img src="https://camo.githubusercontent.com/0a35fb0a0add717a1556200218530580cca84bfd7a0e8c3f5c28fc72e02cd3fb/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732d6e65772e706e67" alt="Logo" height="120" />
  <h3 align="center">NodeJS Concepts</h3>
  <p align="center">GoStack Challenge at Rocketseat :rocket:</p>
<p align="center">


## :rocket: Sobre o Desafio
Aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".<br>
<a href="https://github.com/rocketseat-education/bootcamp-gostack-desafios">Repositório oficial dos desafios</a>

## 📌 Rotas

- ```POST /repositories```: Deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. 

  |field|example|
  |---|---|
  |title|Desafio Node.js|
  |url|http://github.com/ckauan/nodejs-concepts|
  |techs|["Node.js", "Javascript", "Jest"]|

- ```GET /repositories```: Lista todos os repositórios;

- ```PUT /repositories/:id```: Altera o title, a url e/ou as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;

- ```DELETE /repositories/:id```: Deleta o repositório com o id presente nos parâmetros da rota;

- ```POST /repositories/:id/like```: Aumenta o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes aumenta em 1

## :dart: Testes
```should be able to create a new repository:``` Para que esse teste passe, sua aplicação deve permitir que um repositório seja criado, e retorne um json com o projeto criado.

```should be able to list the repositories:``` Para que esse teste passe, sua aplicação deve permitir que seja retornado um array com todos os repositórios que foram criados até o momento.

```should be able to update repository:``` Para que esse teste passe, sua aplicação deve permitir que sejam alterados apenas os campos url, title e techs.

```should not be able to update a repository that does not exist:``` Para que esse teste passe, você deve validar na sua rota de update se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.

```should not be able to update repository likes manually:``` Para que esse teste passe, você não deve permitir que sua rota de update altere diretamente os likes desse repositório, mantendo o mesmo número de likes que o repositório já possuia antes da atualização. Isso porque o único lugar que deve atualizar essa informação é a rota responsável por aumentar o número de likes.

```should be able to delete the repository:``` Para que esse teste passe, você deve permitir que a sua rota de delete exclua um projeto, e ao fazer a exclusão, ele retorne uma resposta vazia, com status 204.

```should not be able to delete a repository that does not exist:``` Para que esse teste passe, você deve validar na sua rota de delete se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.

```should be able to give a like to the repository:``` Para que esse teste passe, sua aplicação deve permitir que um repositório com o id informado possa receber likes. O valor de likes deve ser incrementado em 1 a cada requisição, e como resultado, retornar um json contendo o repositório com o número de likes atualizado.

```should not be able to like a repository that does not exist```: Para que esse teste passe, você deve validar na sua rota de like se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400


<!-- CONTACT -->
## Contato

:boy: Carlos Kauãn - [https://twitter.com/carlaodamassaa](https://twitter.com/carlaodamassaa) - carloskauanmoreiradesousa@gmail.com

<p align="center">Feito com 💚 por Carlos Kauãn</p>
