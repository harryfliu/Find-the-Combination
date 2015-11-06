var countCombinations = function(string, key){
  return (string.match(new RegExp(key,"gi")) || []).length; //account for no matches and empty arrays
}