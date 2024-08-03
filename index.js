class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price of this item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to get the total number of items in the cart
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Method to add an item to the cart
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    // Method to remove an item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to display cart items
    displayCartItems() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.getTotalPrice()}`);
        });
    }

    // Method to get the total price of all items in the cart
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}

// Create products
const product1 = new Product(1, 'Apple', 0.5);
const product2 = new Product(2, 'Banana', 0.3);
const product3 = new Product(3, 'Orange', 0.8);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 3);
cart.addItem(product2, 5);
cart.addItem(product3, 2);

// Display cart items
cart.displayCartItems(); // Output: Apple, Banana, Orange with their quantities and total prices

// Remove an item from the cart
cart.removeItem(2); // Remove Banana (id=2)

// Display cart items again to confirm removal
cart.displayCartItems(); // Output: Apple, Orange with updated quantities and prices

// Get the total price of all items in the cart
console.log('Total Price:', cart.getTotalPrice());

// Product: Apple, Quantity: 3, Total Price: 1.5
// Product: Banana, Quantity: 5, Total Price: 1.5
// Product: Orange, Quantity: 2, Total Price: 1.6

// Product: Apple, Quantity: 3, Total Price: 1.5
// Product: Orange, Quantity: 2, Total Price: 1.6

