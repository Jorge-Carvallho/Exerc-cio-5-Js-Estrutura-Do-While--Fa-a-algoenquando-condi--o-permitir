let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial: "));
let opcao = "";

do {
    opcao = prompt(
        "Saldo disponivel: R$ " +
        saldo +
        "\n1 - Adicionar Dinherio: " +
        "\n2 - Remover dinheiro: " +
        "\n3 - Sair"
    );

    switch (opcao) {
        case "1":
            saldo += parseFloat(
                prompt("Informe um valor a ser adicionado ao saldo: ")
            );
            break;
        case "2":
            saldo -= prompt("Informe o valor a ser removido do saldo");
            break;
        case "3":
            alert("Saindo...");
            break;
        default:
            alert("Entrada inválida! ");
    }
} while (opcao !== "3");
