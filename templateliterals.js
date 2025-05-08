function sides(literals, ...expressions) {

    const [area, perimeter] = expressions;

    
    const discriminant = Math.sqrt(Math.pow(perimeter / 2, 2) - 4 * area);

    
    const s1 = (perimeter / 2 - discriminant) / 2;
    const s2 = (perimeter / 2 + discriminant) / 2;

    return [s1, s2].sort((a, b) => a - b);
}

function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}
