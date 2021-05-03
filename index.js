const cliente1 = new Cliente();
const cliente2 = new Cliente();

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


// console.log(Cliente1);
// console.log(Cliente2);

contaCorrenteRicardo.depositar(300);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo)

