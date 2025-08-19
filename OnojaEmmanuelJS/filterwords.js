function friendList(yuyuyu) {
  return yuyuyu.filter(word => word.length === 4);
}


console.log(friendList(["Ryan", "Kieran", "Jason", "Yous"]));
console.log(friendList(["Peter", "Stephen", "Joe"]));       