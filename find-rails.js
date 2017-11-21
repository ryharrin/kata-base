const getNextRail = (rails, currentRail, direction) => 
	currentRail === rails ? currentRail - 1 :
 	    currentRail === 1 ? currentRail + 1 :
 	         				currentRail + direction

const getNextDirection = (rails, currentRail, direction) => 
	currentRail === rails ? -1 :
	    currentRail === 1 ? 1  : 
	    					direction


const getRailForIndex = (indexToFind, rails, currentIndex, currentRail, direction) => 
	currentIndex === indexToFind ? currentRail : 
		getRailForIndex(indexToFind, rails, currentIndex + 1, 
						getNextRail(rails, currentRail, direction), 
						getNextDirection(rails, currentRail, direction))

const allCharactersProcessed = (acc, string) => acc.length === string.length

const getRailsForCharacters = (string, rails, index, acc=[]) =>
	 allCharactersProcessed(acc, string) ?  acc : getRailsForCharacters(string, rails, index + 1, acc.concat([{
		character: string[index],
		rail: getRailForIndex(index, rails, 0, 1)}]))

module.exports = {
	getNextRail, getNextDirection, getRailForIndex, getRailsForCharacters
}