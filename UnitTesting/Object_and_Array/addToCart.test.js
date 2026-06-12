const addToCart = require('./addToCart');

describe('addToCart', () => {
  test('empty cart', () => {
    expect(addToCart([], 'Book'))
      .toEqual(['Book']);
  });

  test('existing cart', () => {
    expect(addToCart(['Pen'], 'Book'))
      .toEqual(['Pen', 'Book']);
  });

  test('duplicate items', () => {
    expect(addToCart(['Book'], 'Book'))
      .toEqual(['Book', 'Book']);
  });
});