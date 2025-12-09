const inventory = [
  { id: 1, name: "iphone 13", inStock: true },
  { id: 2, name: "MacBook Pro", inStock: false },
  { id: 3, name: "Samsung TV", inStock: true },
  { id: 4, name: "Apple Watch", inStock: true },
  { id: 5, name: "Airpods Pro", inStock: true },
  { id: 6, name: "Surface Laptop", inStock: true },
  { id: 7, name: "Apple Iphone 17", inStock: false },
];

const onlyAppleProduct = inventory.filter(
  (product) =>
    product.name.toLowerCase().includes("apple") && product.inStock === true
);

console.log(onlyAppleProduct);
