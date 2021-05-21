function hydrate(pedido) {
    let soma = 0;
    pedido = pedido.replace(/\D/g, '');
    pedido = pedido.split('');
    pedido.reduce((acc,curr) => soma = acc + parseInt(curr, 10), 0)
    if (soma > 1) {
      return (`${soma} copos de água`);
    } return (`${soma} copo de água`);
  }

module.exports = {
    hydrate,
}