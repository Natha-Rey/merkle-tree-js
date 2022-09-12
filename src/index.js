// Contains all the transactions that need to be hashed
let transactions = ['a','b','c','d','e'];
// It will contain the transactions hashed once
let hashedLeaf = [];

transactions.forEach((tx) => {
    hashedLeaf.push(hashTransaction(tx));
})

/**
 * Receives an individual transaction to hash it
 * @param {string} transaction - The transaction that will be hashed
 * @return {string} - A string like "h(a)" to indicate the transaction has been hashed
 */
function hashTransaction(transaction){
    return "h(" + transaction + ")";
}

console.log(hashedLeaf);
console.log(transactions);
