const freinds = ['Ryans','Kieran','Jason','Yousa']
const filtered = (array)=>{

	 const returned = array.filter((name) => name.length == 4)
	return returned

	}

console.log(filtered(freinds))