function numSquareSum(n) {
    let sum = 0;
    while (n !== 0) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}

function isHappy(n) {
    let st = new Set();
    while (true) {
        n = numSquareSum(n);
        if (n === 1) {
            return true;  // It's a happy number
        }
        if (st.has(n)) {
            return false;  // Cycle detected, not a happy number
        }
        st.add(n);
    }
}

console.log(isHappy(19));  // Example usage, 19 is a happy number



//This code is contributed by Nishant

