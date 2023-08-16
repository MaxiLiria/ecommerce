import Decimal from 'decimal.js';

const normalizePrice = (price) => {
  // Reemplaza comas por puntos y convierte a Decimal
  return new Decimal(price.replace(',', '.'));
};

const Utils = (products) => {
  let sum = new Decimal(0);

  products.forEach(product => {
    const normalizedPrice = normalizePrice(product.price);
    sum = sum.plus(normalizedPrice);
  });

  return sum.toFixed(2);
};

export default Utils;

