function formatNames(arr) {
  let formattedName = arr
    .map((name) => name[0].toUpperCase() + name.slice(1))
    .sort()
    .join(",");
  return formattedName;
}

console.log(formatNames(["bob", "Alice", "david"]));
