function reverseString(s) {
   
    try {
        console.log(s.split('').reverse().join(''));
    } catch (error) {
        console.log(error.message);
        console.log(s);
    }
}

function main() {
    const s = eval(readLine());
    
    reverseString(s);
}