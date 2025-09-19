
// Import the calculateTotal function to be tested
const { calculateTotal } = require('../example');

// Jest test suite for calculateTotal


describe('calculateTotal', () => {
    // Test: Standard calculation with default tax rate
    // This checks the main use case: valid items, default tax
    test('calculates total with default tax rate for valid items', () => {
        const items = [
            { price: 10 },
            { price: 20 },
            { price: 30 }
        ];
        const expected = (10 + 20 + 30) * 1.08; // subtotal * (1 + default tax)
        expect(calculateTotal(items)).toBe(expected);
    });

    // Test: Calculation with a custom tax rate
    // Ensures the function uses the provided taxRate argument
    test('calculates total with custom tax rate', () => {
        const items = [
            { price: 50 },
            { price: 25 }
        ];
        const taxRate = 0.2; // 20% tax
        const expected = (50 + 25) * 1.2;
        expect(calculateTotal(items, taxRate)).toBe(expected);
    });

    // Test: Empty items array
    // Should return 0, as there are no items to total
    test('returns 0 when items array is empty', () => {
        expect(calculateTotal([])).toBe(0);
    });

    // Test: Invalid items input (not an array)
    // Should throw an error as per input validation in example.js
    test('throws error if items is not an array', () => {
        expect(() => calculateTotal(null)).toThrow(/Items must be an array/);
        expect(() => calculateTotal('not an array')).toThrow(/Items must be an array/);
        expect(() => calculateTotal(123)).toThrow(/Items must be an array/);
    });

    // Test: Item missing price property
    // Should throw an error for invalid item structure
    test('throws error if item price is missing', () => {
        const items = [{ price: 10 }, {}];
        expect(() => calculateTotal(items)).toThrow(/Invalid item price/);
    });

    // Test: Item price is not a number
    // Should throw an error for invalid price type
    test('throws error if item price is not a number', () => {
        const items = [{ price: 10 }, { price: 'abc' }];
        expect(() => calculateTotal(items)).toThrow(/Invalid item price/);
    });

    // Test: Item price is negative
    // Should throw an error for negative price values
    test('throws error if item price is negative', () => {
        const items = [{ price: 10 }, { price: -5 }];
        expect(() => calculateTotal(items)).toThrow(/Invalid item price/);
    });

    // Edge Case: Single item with price 0
    // Should return 0, testing lower boundary
    test('handles edge case: single item', () => {
        const items = [{ price: 0 }];
        expect(calculateTotal(items)).toBe(0);
    });

    // Edge Case: Large numbers
    // Ensures function works with large values and doesn't overflow
    test('handles edge case: large numbers', () => {
        const items = [{ price: 1e6 }, { price: 2e6 }];
        const expected = (1e6 + 2e6) * 1.08;
        expect(calculateTotal(items)).toBe(expected);
    });

    // Edge Case: taxRate is 0
    // Should return subtotal with no tax applied
    test('handles edge case: taxRate is 0', () => {
        const items = [{ price: 100 }];
        expect(calculateTotal(items, 0)).toBe(100);
    });

    // Edge Case: taxRate is negative
    // Should return subtotal with negative tax (discount scenario)
    test('handles edge case: taxRate is negative', () => {
        const items = [{ price: 100 }];
        expect(calculateTotal(items, -0.1)).toBe(90);
    });
});
