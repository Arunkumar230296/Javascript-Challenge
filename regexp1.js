

function regexVar() {
    
    const re = /^([aeiou]).*\1$/;
    
    /*
     * Do not remove the return statement
     */
    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}