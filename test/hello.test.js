
describe('Hello World Tests', () => {
    test('should return true for 1 + 1 = 2', () => {
        expect(1 + 1).toBe(2);
    });
    test('should return false for 1 + 1 = 3', () => {
        expect(1 + 1).not.toBe(3);
    });
});