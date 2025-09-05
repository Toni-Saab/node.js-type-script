function calculateTotal(price, quantity, discount) {
    if (discount === void 0) { discount = 0; }
    return price * quantity * (1 - discount);
}
console.log("Total with discount:", calculateTotal(100, 2, 0.1));
console.log("Total without discount:", calculateTotal(100, 2));
function displayId(id) {
    typeof id === 'string'
        ? console.log("ID as a string:", id.toUpperCase())
        : console.log("ID as a number:", id * 10);
}
displayId("abc12345");
displayId(98765);
var orders = [
    { orderId: "o1", amount: 100, status: "shipped" },
    { orderId: "o2", amount: 250, status: "pending" },
    { orderId: "o3", amount: 75, status: "shipped" },
    { orderId: "o4", amount: 500, status: "delivered" }
];
function filterOrdersByStatus(orders, status) {
    return orders.filter(function (order) { return order.status === status; });
}
var shippedOrders = filterOrdersByStatus(orders, "shipped");
console.log("Shipped orders:", shippedOrders);
function updateStock(inventory, productInfo) {
    var name = productInfo[0], stock = productInfo[2];
    inventory[name] = stock;
    return inventory;
}
var myInventory = {
    "Laptop": 5,
    "Keyboard": 10
};
var newProduct = ["Mouse", 25, 20];
var updatedInventory = updateStock(myInventory, newProduct);
console.log("Updated inventory:", updatedInventory);
