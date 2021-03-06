const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const productIndex0 = productDetails('a', 'b')[0];
    const productIndex1 = productDetails('a', 'b')[1];

    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    
    // Teste se o retorno da função é um array.
      // Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    expect(typeof Array.isArray(productDetails('a', 'b'))).toBeTruthy;    
    
    // Teste se o array retornado pela função contém dois itens dentro.
      // Referência: https://jestjs.io/pt-BR/docs/expect#tohavelengthnumber
    expect(productDetails('a', 'b')).toHaveLength(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('a', 'b')).toBe('object');

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productIndex0).not.toEqual(productIndex1);
    // Teste se os dois productIds terminam com 123.
      //Referência: https://jestjs.io/pt-BR/docs/expect#tomatchregexp--string
    expect(productIndex0.details.productId && productIndex1.details.productId).toMatch(/[1][2][3]$/);
  });
});
