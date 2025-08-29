const Produto = {
    nome: "Caneta",
    cor : "Azul",
    marca : "BIC",
    preco: 1.00,
    
    venda: function(quantidade){
        return this.preco * quantidade;

    }
    
}  


console.log (Produto,"sua venda é :"Produto.venda(15));




