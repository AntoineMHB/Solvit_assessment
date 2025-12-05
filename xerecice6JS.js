const users = [
  { name: "alice", role: "admin" },
  { name: "bob", role: "user" },
  { name: "charlie", role: "admin" },
];

let result = users
  .filter((user) => user.role === "admin")
  .map((user) => user.name.toUpperCase());

console.log(result);
