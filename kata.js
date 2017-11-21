const { getNextRail, 
		getNextDirection, 
		getRailForIndex, 
		getNextLetter, 
		getRailsForCharacters } = require('./find-rails');

const removeWhitespace = str => str.split('')
								   .filter(c => c.replace(/^\s+|\s+$/g, '') !== '') 
								   .join('')

const copyArray = arr => JSON.parse(JSON.stringify(arr))

const makeContainerArray = rails => Array(rails).fill([])
	
const buildEncodedString = (str, rails) => getRailsForCharacters(removeWhitespace(str), rails, 0)
	.reduce((pre, cur)=>{
		const tempArray = copyArray(pre)
		tempArray[cur.rail - 1].push(cur.character)
		return tempArray
	}, makeContainerArray(rails))
	.reduce((pre, cur)=> pre + cur.join(''), '')


const encode = (str, rails)=> rails === 1 ? str : buildEncodedString(str, rails)

const decode = (str, rails)=>{
	if(rails ===1 ){
		return str
	}

}

module.exports = {
	encode, decode
}
