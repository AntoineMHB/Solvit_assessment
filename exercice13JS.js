const users = [{ name: "John" }, { name: "Jane" }, { name: "Doe" }];
let theResult = [];

const result = users.forEach((user) => {
  user.isActive = "true";
  console.log(user);
  theResult.push(user);
});

console.log(theResult);
