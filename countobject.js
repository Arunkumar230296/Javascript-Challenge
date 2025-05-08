

function getCount(objects) {
    let count = 0;
    
    // Iterate through the objects array and check if o.x == o.y
    for (let obj of objects) {
        if (obj.x === obj.y) {
            count++;
        }
    }
    
    return count;
}

function main() {
    const n = +(readLine());
    let objects = [];
    
    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');
        
        objects.push({x: +(a), y: +(b)});
    }
    
    console.log(getCount(objects));
}