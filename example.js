function calculateTotal(items, taxRate = 0.08) {
    if (!Array.isArray(items)) {
        throw new Error('Items must be an array');
    }
    
    const subtotal = items.reduce((sum, item) => {
        if (typeof item.price !== 'number' || item.price < 0) {
            throw new Error('Invalid item price');
        }
        return sum + item.price;
    }, 0);
    
    return subtotal * (1 + taxRate);
}