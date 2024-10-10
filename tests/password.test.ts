import {calculatePasswordStrength} from '../src/password'

describe('calculatePasswordStrength', () => {

    test('should return "Very Weak" for passwords with less than 3 strength points', () => {
        expect(calculatePasswordStrength("123")).toBe("Very Weak");
        expect(calculatePasswordStrength("abcABC")).toBe("Very Weak");
    });

    test('should return "Weak" for passwords with exactly 3 strength points', () => {
        expect(calculatePasswordStrength("Abc123")).toBe("Weak");
        expect(calculatePasswordStrength("12abCD")).toBe("Weak");
    })

    test('should return "Moderate" for passwords with exactly 4 strength points', () => {
        expect(calculatePasswordStrength("Abc123*")).toBe("Moderate");
    })

    test('should return "Strong" for passwords with 5 or more strength points', () => {
        expect(calculatePasswordStrength("Abc123*&xyz")).toBe("Strong");
        expect(calculatePasswordStrength("Super123!Pass")).toBe("Strong");
    });

    test('should return "Strong" for long, complex passwords', () => {
        expect(calculatePasswordStrength("ThisIs@VeryStrong123Password!!")).toBe("Strong");
    });

});
