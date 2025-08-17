function friendNames(namesList) {
  let friends = [];

  for (let index = 0; index < namesList.length; index++) {
    let currentName = namesList[index];
    if (currentName.length === 4) {
      friends.push(currentName);
    }
  }

  return friends;
}

console.log(friendNames(["Ryan", "Kieran", "Jason", "Yous"]));
console.log(friendNames(["Peter", "Stephen", "Joe"]));
