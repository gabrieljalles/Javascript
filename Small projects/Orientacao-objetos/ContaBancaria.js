class ContaBancaria{ 
    constructor(agencia,numero,tipo,saldo){
        this.agencia = agencia;
        this.tipo = tipo;
        this._saldo = 0;
        this.numero = numero;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(value){
        this.saldo=value;
    }

    depositar(value){
        this._saldo += value;
    }

    sacar(value){
        if(value <= this._saldo){
            this._saldo -= value;
            return console.log('saque efetuado com sucesso !');
        }

        console.log('Saldo insuficiente !');
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }
    get cartaoCredito() {
        return this._cartaoCredito;
    }
    set cartaoCredito(value){
        this._cartaoCredito = value;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia,numero);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia, numero);
        this.tipo = 'Universitario';    
    }

    sacar(valor){
        if(valor > 500){
            return console.log('Você só pode sacar valores menores que 500 reais');
        }

        this._saldo -= valor;
    }
}