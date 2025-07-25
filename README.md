📝 Enunciado do Exercício: Controle de Estoque Simples (JSON + JavaScript + DOM)
🎯 Objetivo:
Criar um sistema de controle de estoque, com cadastro, listagem e busca de produtos.

✅ Requisitos:
Criar um array de objetos (JSON) chamado estoque, com pelo menos 5 produtos iniciais, contendo:

Nome do produto

Quantidade

Preço unitário

Exemplo de um produto:

javascript
Copiar
Editar
{ nome: "Camiseta", quantidade: 10, preco: 50 }
Montar um HTML com os seguintes campos:

Campo para nome do produto

Campo para quantidade

Campo para preço unitário

Botão para adicionar produto

Campo de busca por nome

Botão para buscar produto

Botão para mostrar todos os produtos

Regras de funcionamento (em JavaScript):

✅ Adicionar um novo produto ao estoque (usando os campos do formulário).
✅ Listar todos os produtos, mostrando:

Nome

Quantidade

Preço unitário

Valor total de cada produto (quantidade × preço)

✅ Mostrar o valor total do estoque (soma de todos os produtos).
✅ Permitir buscar um produto por nome (parcial ou completo) e exibir só os produtos encontrados.
✅ Exibir mensagem caso nenhum produto seja encontrado na busca.

Formato dos dados:

👉 Os produtos devem ser armazenados num array de objetos JSON (em memória).
👉 Não precisa de backend, banco de dados ou localStorage (a menos que queira como desafio extra).

✅ Extras (opcionais, se quiser ir além):
✅ Botão para excluir um produto específico
✅ Salvar o estoque no localStorage
✅ Exportar o estoque como JSON string

✅ Nome sugerido do projeto:
📂 Pasta: controle-estoque-json
📄 HTML: index.html
📄 JS: estoque.js