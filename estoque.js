let estoque = JSON.parse(localStorage.getItem('estoque')) || [
    { nome: "Camiseta", quantidade: 10, preco: 50 },
    { nome: "Calça Jeans", quantidade: 5, preco: 120 },
    { nome: "Tênis", quantidade: 8, preco: 200 },
    { nome: "Jaqueta", quantidade: 3, preco: 300 },
    { nome: "Boné", quantidade: 15, preco: 30 }
];

function salvarEstoque() {
    localStorage.setItem('estoque', JSON.stringify(estoque));
}

function adicionarProduto() {
    let nomeProduto = document.getElementById('nomeProduto').value.trim();
    let quantidadeProduto = parseInt(document.getElementById('quantidadeProduto').value);
    let precoProduto = parseFloat(document.getElementById('precoProduto').value);
    let encontrado = false;

    let nomeBuscaSemAcento = removerAcentos(nomeProduto.toLowerCase());

    for (let i = 0; i < estoque.length; i++) {
        let nomeEstoqueSemAcento = removerAcentos(estoque[i].nome.toLowerCase());

        if (nomeBuscaSemAcento === nomeEstoqueSemAcento) {
            if (quantidadeProduto > 0) {
                estoque[i].quantidade += quantidadeProduto;
            }
            if (precoProduto > 0) {
                estoque[i].preco = precoProduto
            }
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {

        let novoProduto = {
            nome: nomeProduto,
            quantidade: quantidadeProduto,
            preco: precoProduto
        };
        estoque.push(novoProduto);
    }
    limparCampos()
    valorTotalEstoque()
    salvarEstoque();
}

function excluirProduto() {
    let nomeProduto = document.getElementById('nomeProduto').value.trim();
    let nomeBuscaSemAcento = removerAcentos(nomeProduto.toLowerCase());

    for (let i = 0; i < estoque.length; i++) {
        let nomeEstoqueSemAcento = removerAcentos(estoque[i].nome.toLowerCase());
        if (nomeBuscaSemAcento === nomeEstoqueSemAcento) {
            estoque.splice(i, 1);
            console.log("Produto excluído com sucesso.");
            break;
        }
    }
    limparCampos()
    valorTotalEstoque()
    salvarEstoque();
}

function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


function buscarProduto() {
    let buscaProduto = document.getElementById('buscaProduto').value.trim().toLowerCase();
    let produtoEncontrado = document.getElementById('produtoEncontrado');
    let resultado = "";
    let encontrado = false;

    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i].nome.toLowerCase().includes(buscaProduto)) {
            resultado +=
                `<ul>
                <li>Nome: ${estoque[i].nome}</li>
                <li>Quantidade: ${estoque[i].quantidade}</li>
                <li>Preço: R$ ${estoque[i].preco.toFixed(2)}</li>
                </ul>`;
            encontrado = true;
        }
    }

    if (encontrado) {
        produtoEncontrado.innerHTML = resultado;
    } else {
        produtoEncontrado.innerHTML = `<p>Produto não encontrado</p>`;
    }
}

function mostrarTodos() {
    let listaProdutos = document.getElementById("listaProdutos")
    let produtos = ""

    for (let i = 0; i < estoque.length; i++) {
        produtos += 
            `<ul>
                <li>Nome: ${estoque[i].nome}</li>
                <li>Quantidade: ${estoque[i].quantidade}</li>
                <li>Preço: R$ ${estoque[i].preco.toFixed(2)}</li>
                <li>Valor total: R$ ${(estoque[i].quantidade * estoque[i].preco).toFixed(2)}</li>
            </ul>`;
    }

    listaProdutos.innerHTML = produtos;
    valorTotalEstoque()
}

function valorTotalEstoque() {
    let totalEstoque = document.getElementById("totalEstoque")
    let soma = 0;

    for (let i = 0; i < estoque.length; i++) {
        console.log(soma)
        soma += estoque[i].preco * estoque[i].quantidade;
    }

    totalEstoque.innerHTML = `R$ ${soma.toFixed(2)}`;
}

function limparCampos() {
    document.getElementById('nomeProduto').value = '';
    document.getElementById('quantidadeProduto').value = '';
    document.getElementById('precoProduto').value = '';
}
