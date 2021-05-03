class cliente{
    nome;
    cpf;
    rg;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor) {
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new cliente();
const cliente2 = new cliente();

cliente1.nome = "Ricardo Silva";
cliente1.cpf =  12345665413;
cliente1.rg = 124563152;

cliente2.nome = "Alice";
cliente2.cpf=  12345665412;
cliente2.rg = 1245654152;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;


const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.saldo = 0;
contaCorrenteAlice.agencia = 1001;

console.log(cliente1);
console.log(cliente2);

