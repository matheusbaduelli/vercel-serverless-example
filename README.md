# Projeto de exemplo Vercel (Funções Serverless)

Este projeto contém duas funções serverless:

- `/api/hello` - Retorna uma mensagem simples.
- `/api/saudacao` - Espera um POST com `{ "nome": "SeuNome" }` e responde com uma saudação.

## Como testar

1. Faça o deploy no Vercel.
2. Acesse: `https://seu-projeto.vercel.app/api/hello`
3. Envie um POST para: `https://seu-projeto.vercel.app/api/saudacao` com JSON:
```json
{ "nome": "Matheus" }
```
