var data = [
    { id: 1, name: "Kayak", category: "Watersports", description: "A boat for one person", price: 275 }, 
    { id: 2, name: "Lifejacket", category: "Watersports", description: "Protective and Fashionable", price: 48.99 }, 
    { id: 3, name: "Soccer Ball", category: "Soccer", description: "FIFA-Approved size and weight", price: 19.50 }, 
    { id: 4, name: "Cricket Bat", category: "Cricket", description: "ICCI-Approved size and weight", price: 29.99 }
]

module.exports = function () {
    return {
        products: data, 
        categories: [...new Set(data.map(p => p.category))].sort(), 
        orders: []
    }
}