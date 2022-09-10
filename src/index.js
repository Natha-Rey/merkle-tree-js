let transactions = ['a','b','c','d','e'];
let hashedLeaf = [];

transactions.forEach((tx) => {
    hashedLeaf.push(hashInput(tx));
})

function hashInput(input){
    return "h(" + input + ")";
}

console.log(transactions);
console.log(hashedLeaf);