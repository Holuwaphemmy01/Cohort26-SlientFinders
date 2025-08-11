function CapitalizationPermutations(String){
	const results = [];

	const generate = (index, currentStr)
	{
		if(index ===String.length){
		  results.push(currentStr);
		  return;
		}
		
		const char = String[index];

		generate(index + 1, currentString + char.toLowerCase());

		if(char>='a' && char <='z'){
			generate(index + 1, currentString + char.toUpperCase());
		}else{
		 generate(index + 1, currentString + char);
			}
		};
		generate (0,");

		return results;
	}
const input = "abCD123";
const permutations = CapitalizationPermutations(input);
console.log(permutations);