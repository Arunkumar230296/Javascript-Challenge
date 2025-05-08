
const PI = Math.PI;

function main() {
   
    let radius = parseFloat(readLine());
    let area = PI * radius * radius;
    let perimeter = 2 * PI * radius;

    console.log(area);
    console.log(perimeter);
}