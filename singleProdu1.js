function findProduct() {
    const products = [
        { id: 1, name: "washing machine" },
        { id: 2, name: "Fridge" }
    ];

    return products.find(product => product.id === 2);
}

module.exports = findProduct;