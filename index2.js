const Eu = {
    nome: "Andre",
    idade: 30,
    estadocivil : "casado",
    trabalha: "sim",
    cargo: "estagiario",

    vida: function (){
        console.log (this.nome + " oi ");
    }
}

console.log(Eu.vida());