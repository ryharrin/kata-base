// change the require as needed to import your business class from the correct .js file
const {encode, decode, getNextRail, getNextDirection, getRailForIndex, getNextLetter, getRailsForCharacters} = require('./kata');

// customize the descriptions of the suites and individual tests as needed
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

describe('getNextRail', ()=>{
	it('should return 2 for rails 3, currentRail 1, direction 1', ()=>{
		expect(getNextRail(3,1,1)).toEqual(2)
	})
	it('should return 3 for rails 3, currentRail 2, direction 1', ()=>{
		expect(getNextRail(3,2,1)).toEqual(3)
	})

	it('should return 4 for rails 4, currentRail 3, direction 1', ()=>{
		expect(getNextRail(4,3,1)).toEqual(4)
	})

	it('should return 3 for rails 4, currentRail 4, direction -1', ()=>{
		expect(getNextRail(4,4,-1)).toEqual(3)
	})

	it('should return 3 for rails 4, currentRail 4, direction -1', ()=>{
		expect(getNextRail(4,4,-1)).toEqual(3)
	})

	it('should return 3 for rails 8, currentRail 4, direction -1', ()=>{
		expect(getNextRail(8,4,-1)).toEqual(3)
	})

	it('should return 5 for rails 8, currentRail 4, direction 1', ()=>{
		expect(getNextRail(8,4,1)).toEqual(5)
	})
})

describe('getNextDirection', ()=>{
	it('should return 1 for rails 3, currentRail 2, direction 1', ()=>{
		expect(getNextDirection(3,2,1)).toEqual(1)
	})
	it('should return -1 for rails 3, currentRail 3, direction 1', ()=>{
		expect(getNextDirection(3,3,1)).toEqual(-1)
	})
	it('should return 1 for rails 4, currentRail 2, direction 1', ()=>{
		expect(getNextDirection(4,2,1)).toEqual(1)
	})
	it('should return -1 for rails 4, currentRail 4, direction 1', ()=>{
		expect(getNextDirection(4,2,1)).toEqual(1)
	})
})

describe('getRailForIndex', ()=>{
	it('should return current rail when currentindex is indexIndexToFind', ()=>{
		const indexToFind = 0
		const rails = 10000
		const currentIndex = 0
		const currentRail = 100
		const direction = 1
		expect(getRailForIndex(indexToFind, rails, currentIndex, currentRail, direction))
			.toEqual(100)
	})
	it('should return next rail when currentindex is one less than indexToFind', ()=>{
		const indexToFind = 1
		const rails = 10000
		const currentIndex = 0
		const currentRail = 1
		const direction = 1
		expect(getRailForIndex(indexToFind, rails, currentIndex, currentRail, direction))
			.toEqual(2)
	})
	it('should return two rail above currentRail when currentindex is 2 less than indexToFind', ()=>{
		const indexToFind = 2
		const rails = 10000
		const currentIndex = 0
		const currentRail = 1
		const direction = 1
		expect(getRailForIndex(indexToFind, rails, currentIndex, currentRail, direction))
			.toEqual(3)
	})
	it('should return previous rail when currentindex is one less than indexToFind and direction is negative', ()=>{
		const indexToFind = 1
		const rails = 10000
		const currentIndex = 0
		const currentRail = 3
		const direction = -1
		expect(getRailForIndex(indexToFind, rails, currentIndex, currentRail, direction))
			.toEqual(2)
	})

	it('should turn around correctly', ()=>{
		const indexToFind = 2
		const rails = 10000
		const currentIndex = 0
		const currentRail = 9999
		const direction = 1
		expect(getRailForIndex(indexToFind, rails, currentIndex, currentRail, direction))
			.toEqual(9999)
	})

	it('should go many spaces', ()=>{
		const indexToFind = 1000
		const rails = 10000
		const currentIndex = 0
		const currentRail = 2
		const direction = 1
		expect(getRailForIndex(indexToFind, rails, currentIndex, currentRail, direction))
			.toEqual(1002)
	})
})

describe('getRailsForCharacters', ()=>{
	it('should return an array with the correct contents', ()=>{
		const expectedOutput = [{
			character: 'a',
			rail: 1
		},
		{
			character: 'b',
			rail: 2
		}, 
		{
			character: 'c',
			rail: 1
		},
		{
			character:'d',
			rail: 2
		}
		]
		expect(getRailsForCharacters('abcd', 2, 0)).toEqual(expectedOutput)
	})
})
