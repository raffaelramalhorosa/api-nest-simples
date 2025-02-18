# Gerenciamento de Alunos - API NestJS

## 📌 Sobre o Projeto
Esta é uma API desenvolvida em **NestJS** para gerenciar alunos, permitindo criar, listar, buscar, atualizar e deletar alunos. As senhas são criptografadas antes de serem armazenadas.

---

## 🚀 Tecnologias Utilizadas
- [NestJS](https://nestjs.com/) (Framework Node.js)
- [TypeScript](https://www.typescriptlang.org/) (Tipagem Estática)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) (Criptografia de Senhas)

---

## 📂 Estrutura do Projeto

```
src/
 └── alunos/
      ├── controllers/
      │    └── alunos.controller.ts
      ├── dto/
      │    ├── input/
      │    │    ├── create-aluno.dto.ts
      │    │    ├── update-aluno.dto.ts
      │    ├── output/
      │    │    └── aluno-response.dto.ts
      ├── entities/
      │    └── aluno.entity.ts
      ├── services/
      │    └── alunos.service.ts
      ├── alunos.module.ts
```

---

## 🔧 Instalação e Execução

1️⃣ **Clone o repositório**
```sh
git clone https://github.com/raffaelramalhorosa/api-nest-simples
cd api-nest-simples
```

2️⃣ **Instale as dependências**
```sh
npm install
```

3️⃣ **Inicie o servidor**
```sh
npm run start
```

A API estará rodando em `http://localhost:3000`.

---

## 📌 Endpoints Disponíveis

### ➤ Criar um aluno
**POST /alunos**
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "senha123"
}
```

### ➤ Listar todos os alunos
**GET /alunos**

### ➤ Buscar um aluno pelo ID
**GET /alunos/:id**

### ➤ Atualizar um aluno
**PUT /alunos/:id**
```json
{
  "name": "João Atualizado",
  "email": "joao.atualizado@email.com"
}
```

### ➤ Deletar um aluno
**DELETE /alunos/:id**

---

## 🔒 Segurança das Senhas
As senhas dos alunos são criptografadas utilizando **bcryptjs** antes de serem armazenadas no sistema.

---

## 📜 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo!

---

## ✨ Contribuição
Sinta-se à vontade para abrir issues e pull requests para melhorias!

---

Desenvolvido com ❤️ por [Rafael Ramalho Rosa](https://github.com/seu-usuario).

