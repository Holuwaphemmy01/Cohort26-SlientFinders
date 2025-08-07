function getLoyalCustomerHeraicy(customerFolderPack){

let loyalCustomers = [];
for (let markScored in customerFolderPack) {
  if (customerFolderPack[markScored].score >= 80) {
    loyalCustomers.push(customerFolderPack[markScored]);
	  }
	}
for (let index = 0; index < loyalCustomers.length; index++) {
  for (let mark = index + 1;mark < loyalCustomers.length; mark++) {
    if (loyalCustomers[index].score < loyalCustomers[mark].score) {
      let temporary = loyalCustomers[index];
      loyalCustomers[index] = loyalCustomers[mark];
      loyalCustomers[mark] = temporary;
  	  }
 	 }
	}

return loyalCustomers;
}

let customerFolderPack = [
  { name: 'John', score: 85 },
  { name: 'Jane', score: 40 },
  { name: 'Bob', score: 90 },
  { name: 'Alice', score: 80 },
  { name: 'Mike', score: 30 },
  { name: 'Emma', score: 95 },
						];
let result = getLoyalCustomerHeraicy(customerFolderPack);

console.log(result);

