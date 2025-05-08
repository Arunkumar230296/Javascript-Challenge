function getSecondLargest(nums) {
    const uniqueNums = [...new Set(nums)];
    uniqueNums.sort((a, b) => b - a);
    return uniqueNums[1];
}

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    console.log(getSecondLargest(nums));
}
