

function regexVar() {
    
    const re = /^(Mr|Mrs|Ms|Dr|Er)\.[A-Za-z]+$/;
    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(!!s.match(re));
}