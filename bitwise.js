function getMaxLessThanK(n, k) {
    if ((k - 1 | k) <= n) {
        return k - 1;
    } else {
        return k - 2;
    }
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}
