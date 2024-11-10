# API de Gerenciamento de Usuários

Esta é uma API para o gerenciamento de usuários utilizando **Node.js**, **Express**, **Prisma** e **MongoDB** como banco de dados.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para Node.js, facilitando a criação de servidores e APIs.
- **Prisma**: ORM (Object-Relational Mapping) para trabalhar com bancos de dados.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados dos usuários.

## Instalação

### Pré-requisitos

- **Node.js** instalado (versão >=14).
- **MongoDB** configurado e em execução.

### Passos de Instalação

1. Clone o repositório:
```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Instale as dependências:
```bash
    npm install
```

3. Configure as variáveis de ambiente em um arquivo `.env`, especificando as credenciais para conexão ao MongoDB:
```php
    npx prisma migrate dev
```

4. Execute as migrações Prisma:
```bash
    npx prisma migrate dev
```

5. Inicie o servidor:
```bash
    npm start
```
6. O servidor também pode utilizar outro comando que, sempre que você salvar o projeto, o servidor irá reinicar sem que você precise para e iniciar o servidor manualmente:
```bash
    node --watch server.js
```

Por conta do `app.listen(3000)`.
O servidor estará rodando em http://localhost:3000.


## Endpoints

1. `GET /usuarios`.

Retorna todos os usuários cadastrados ou filtra com base nos parâmetros `email`, `name`, e `age`.

**Exemplo de Requisição**:
```http
GET http://localhost:3000/usuarios
```

2. `POST /usuarios`

Adiciona um novo usuário.

**Corpo da Requisição:**
```json
{
  "email": "email@exemplo.com",
  "name": "Nome do Usuário",
  "age": 30
}
```

3. `PUT /usuarios/:id`

Atualiza um usuário existente com base no id fornecido.

**Corpo da Requisição:**
```json
{
  "email": "novoemail@exemplo.com",
  "name": "Novo Nome",
  "age": 35
}
```

4. `DELETE /usuarios/:id`

Deleta um usuário com base no id fornecido.

**Exemplo de Requisição:**
```http
DELETE /usuarios/1
```

## Estrutura do Projeto
- server.js: Arquivo principal da API.
- Prisma: Diretório de configurações do Prisma para ORM e mapeamento de banco de dados.

---
# Front em desenvolvimento...