const getNextRail = (rails, currentRail, direction)=>{
	return currentRail === rails ? currentRail - 1 :
 	    currentRail === 1 ? currentRail + 1 :
 	         				currentRail + direction
}

const getNextDirection = (rails, currentRail, direction)=>{
	return currentRail === rails ? -1 :
		       currentRail === 1 ? 1 : 
				                   direction
			
}

const getRailForIndex = (indexToFind, rails, currentIndex, currentRail, direction)=>{
	if(currentIndex === indexToFind){
		return currentRail
	} else {
		const nextRail = getNextRail(rails, currentRail, direction)
		const nextDirection = getNextDirection(rails, currentRail, direction)
		return getRailForIndex(indexToFind, rails, currentIndex + 1, nextRail, nextDirection)
	}
}

const getRailsForCharacters = (string, rails, index, acc=[])=>{
	if(acc.length === string.length){
		return acc
	}

	return getRailsForCharacters(string, rails, index + 1, acc.concat([{
		character: string[index],
		rail: getRailForIndex(index, rails, 0, 1) 
	}]))
}

const makeContainerArray = rails => {
	let arr = []
	while(arr.length <= rails){
		arr.push([])
	} 
	return arr
}

const removeWhitespace = str => {
	return str.split('')
	.filter(c => c.replace(/^\s+|\s+$/g, '') !== '') // and other whitespace...
	.join('')
}

const encode = (str, rails)=>{
	if(rails === 1){
		return str
	}
	const containerArray = makeContainerArray(rails)
	getRailsForCharacters(removeWhitespace(str), rails, 0).forEach(railChars=>{
		containerArray[railChars.rail - 1].push(railChars.character)
	})
	return containerArray.reduce((pre, cur)=> pre + cur.join(''), '')
}

const decode = ()=>{

}

module.exports = {
	encode, decode, getNextRail, getNextDirection, getRailForIndex, getRailsForCharacters
}
