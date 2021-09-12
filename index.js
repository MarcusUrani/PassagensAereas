class cliente {
    nome;
    cpf;
    rg;
}

class contaCorrente{
    saldo;
    agencia;

    depositar(valor) {
        if(valor <= 1) {
            return;
        }
        this.saldo += valor;
        console.log(`Depósito realizado com sucesso, seu saldo é de ${saldo}`);
    }
}

const listaDeDestinos = new Array(
    `Brasília`,
    `Salvador`,
    `São Paulo`,
    `New York`,
    `Curitiba`,
    `Dubai`,
    `Tóquio`,
);

const tabelaDePrecos = new Array(
    500,
    550,
    750,
    1200,
    600,
    1750,
    2300,
);

const cliente1 = new cliente;
const contaMarcus = new contaCorrente;

contaMarcus.saldo = 2500;
contaMarcus.agencia = 11;
const destino = "Dubai";
const valorPassagem = 1750;


cliente1.nome = `Marcus Vinícius`;
cliente1.cpf = `12345678901`;
cliente1.rg = `12345678`;

const cpfFormatado = cliente1.cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");
console.log(cliente1);
console.log(contaMarcus);
console.log(cpfFormatado);

let podeComprar = false;

for(let cont = 0; cont < 7; cont ++) {
    if(tabelaDePrecos[cont] == valorPassagem){
        contaMarcus.saldo -= valorPassagem;
        podeComprar = true;
        break;
    }
}

let destinoDisponivel = false;
for(let contador = 0; contador < 7; contador ++) {
    if(listaDeDestinos[contador] == destino) {
        destinoDisponivel = true;
        break;
    }
}

if (destinoDisponivel && podeComprar) {
    console.log("Obrigado pela compra, tenha uma boa viagem!");
} else {
    console.log("Desculpe, não foi possível concluir a compra, saldo insuficiente");
}

console.log(`Seu saldo é de ${contaMarcus.saldo}`);