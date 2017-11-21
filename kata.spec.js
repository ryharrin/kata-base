const { encode, decode } = require('./kata');

describe('encode', () => {
  it('should return a', () => {
    expect(encode('a', 1)).toEqual('a')
  });

  it('should handle 2 rails', () => {
    expect(encode('abcd', 2)).toEqual('acbd')
  });
  it('should handle 3 rails', ()=>{
  	expect(encode('abcdefg', 3)).toEqual('aebdfcg')
  })
  it('should handle 4 rails', ()=>{
  	expect(encode('abcdefg', 4)).toEqual('agbfced')
  })

  it('should handle 3 rails and long message', ()=>{
  	expect(encode('WE ARE DISCOVERED FLEE AT ONCE', 3)).toEqual('WECRLTEERDSOEEFEAOCAIVDEN')
  })
  test('encode a single rail message', () => {
    const message = 'Four score and seven years ago.';
    expect(encode(message, 1)).toEqual(message);
  });

  test('encode a double rail message', () => {
    const message = 'AAABBB';
    expect(encode(message, 2)).toEqual('AABABB');
  });

  test('encode the same message with three rails', () => {
    const message = 'AAABBB';
    expect(encode(message, 3)).toEqual('ABABBA');
  });

  test('encode the same message with four rails', () => {
    const message = 'AAABBB';
    expect(encode(message, 4)).toEqual('AABABB');
  });

  test('encode a different message with two rails', () => {
    const message = '0123456789';
    expect(encode(message, 2)).toEqual('0246813579');
  });

  test('encode a different message with three rails', () => {
    const message = '0123456789';
    expect(encode(message, 3)).toEqual('0481357926');
  });
});


describe('decode', () => {
  it('should return a', () => {
    expect(decode('a', 1)).toEqual('a')
  });

  // it('should handle 2 rails', () => {
  //   expect(decode('acbd', 2)).toEqual('abcd')
  // });
  // it('should handle 3 rails', ()=>{
  // 	expect(decode('abcdefg', 3)).toEqual('aebdfcg')
  // })
  // it('should handle 4 rails', ()=>{
  // 	expect(decode('abcdefg', 4)).toEqual('agbfced')
  // })

  // it('should handle 3 rails and long message', ()=>{
  // 	expect(decode('WE ARE DISCOVERED FLEE AT ONCE', 3)).toEqual('WECRLTEERDSOEEFEAOCAIVDEN')
  // })
  // test('encode a single rail message', () => {
  //   const message = 'Four score and seven years ago.';
  //   expect(decode(message, 1)).toEqual(message);
  // });

  // test('encode a double rail message', () => {
  //   const message = 'AAABBB';
  //   expect(decode(message, 2)).toEqual('AABABB');
  // });

  // test('encode the same message with three rails', () => {
  //   const message = 'AAABBB';
  //   expect(decode(message, 3)).toEqual('ABABBA');
  // });

  // test('encode the same message with four rails', () => {
  //   const message = 'AAABBB';
  //   expect(decode(message, 4)).toEqual('AABABB');
  // });

  // test('encode a different message with two rails', () => {
  //   const message = '0123456789';
  //   expect(decode(message, 2)).toEqual('0246813579');
  // });

  // test('encode a different message with three rails', () => {
  //   const message = '0123456789';
  //   expect(decode(message, 3)).toEqual('0481357926');
  // });
});

