type IdType = string | number;

type OrderStatus = "pending" | "shipped" | "delivered";

type Order = {
  orderId: string;
  amount: number;
  status: OrderStatus;
};

type ProductInfoTuple = [string, number, number];

type Inventory = { [key: string]: number };

function calculateTotal(price: number, quantity: number, discount: number = 0): number {
  return price * quantity * (1 - discount);
}

console.log("Total with discount:", calculateTotal(100, 2, 0.1));
console.log("Total without discount:", calculateTotal(100, 2));

function displayId(id: IdType): void {
  typeof id === 'string'
    ? console.log("ID as a string:", id.toUpperCase())
    : console.log("ID as a number:", id * 10);
}

displayId("abc12345");
displayId(98765);

const orders: Order[] = [
  { orderId: "o1", amount: 100, status: "shipped" },
  { orderId: "o2", amount: 250, status: "pending" },
  { orderId: "o3", amount: 75, status: "shipped" },
  { orderId: "o4", amount: 500, status: "delivered" }
];

function filterOrdersByStatus(orders: Order[], status: OrderStatus): Order[] {
  return orders.filter(order => order.status === status);
}

const shippedOrders = filterOrdersByStatus(orders, "shipped");
console.log("Shipped orders:", shippedOrders);

function updateStock(inventory: Inventory, productInfo: ProductInfoTuple): Inventory {
  const [name, , stock] = productInfo;
  inventory[name] = stock;
  return inventory;
}

const myInventory: Inventory = {
  "Laptop": 5,
  "Keyboard": 10
};

const newProduct: ProductInfoTuple = ["Mouse", 25, 20];
const updatedInventory = updateStock(myInventory, newProduct);
console.log("Updated inventory:", updatedInventory);
