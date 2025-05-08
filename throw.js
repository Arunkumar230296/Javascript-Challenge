function isPositive(num) {
    if (num > 0) {
        return "YES";  // Positive number case
    } else if (num === 0) {
        throw new Error("Zero Error");  // Zero number case
    } else {
        throw new Error("Negative Error");  // Negative number case
    }
}

unction main() {
    const n = +(readLine());
    
    for (let i = 0; i < n; i++) {
        const a = +(readLine());
      
        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}