const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
function buscaCortePorId(id) {
    if(id > barbearia.cortes.length || id < 1){
        return 'Corte não encontrado'
    } else{
        return barbearia.cortes[id - 1]
    }
}

function buscaBarbaPorId(id) {
    if(id > barbearia.barbas.length || id < 1){
        return 'Barba não encontrado'
    } else{
        return barbearia.barbas[id - 1]
    }
}

function verificaStatusBarbearia() {
    if(barbearia.estaAberto){
        return 'Estamos abertos'
    } else{
        return 'Estamos fechados'
    }
}

function retornaTodosCortes() {
    return barbearia.cortes
}

function retornaTodasBarbas() {
    return barbearia.barbas
}

function criaPedido(nomeCliente, corteId, barbaId) {
    const corte = buscaCortePorId(corteId)
    const barba = buscaBarbaPorId(barbaId)

    const pedido = {
        nome: nomeCliente,
        pedidoCorte: corte,
        pedidoCortePreco: corte.valor,
        pedidoBarba: barba,
        pedidoBarbaPreco: barba.valor,
    }
    return pedido
}

function atualizaPedido(lista, id, valor, tipo) {
    if(id > lista.length || id < 1){
        return 'id não encontrado'
    } else{
        lista[id - 1].tipo = tipo
        lista[id - 1].valor = valor
        return lista
    }
    
}

function calculaTotal(pedido) {
    return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco
}
  
  