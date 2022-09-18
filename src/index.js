// Contains all the transactions that need to be hashed
let transactions = ['a', 'b', 'c', 'd', 'e'];
// It will contain the transactions hashed once
let hashedLeaves = [];

transactions.forEach((tx) => {
  hashedLeaves.push(hashTransaction(tx));
});

/**
 * Receives an individual transaction to hash it
 * @param {string} transaction - The transaction that will be hashed
 * @return {string} - A string like "h(a)" to indicate the transaction has been hashed
 */
function hashTransaction(transaction) {
  return 'h(' + transaction + ')';
}

/**
 * Receives the transactions that have been hashed to process them again with the purpose of
 * create the merkle tree, which will produce the merkle root at the end
 * @param {string} _hashedLeaves - The hashed transactions
 * @return {merkleRoot} - The hash of all the hashed transactions
 */
function createMerkleRoot(_hashedLeaves) {
  var branches = [];
  var lastNode = '';

  // Returns 0 if the array is empty
  if (_hashedLeaves.length == 0) return 0;

  // Returns the only value of the array
  if (_hashedLeaves.length == 1) return _hashedLeaves[0];

  //It will hash the values of the _hashedLeaves array in pairs,
  // to then push the resulted hash in the branches array
  for (let i = 0; i < _hashedLeaves.length - 1; i += 2) {
    branches.push(
      hashTransaction(_hashedLeaves[i] + '+' + _hashedLeaves[i + 1])
    );
  }

  // Checks if the total number of transactions is an odd number, which in case, it will take the last
  // value of the array to hash it at the end with its pair
  if (_hashedLeaves.length % 2 == 1) {
    lastNode = _hashedLeaves[_hashedLeaves.length - 1];
    branches.push(lastNode);
  }

  console.log(branches);
  return createMerkleRoot(branches);
}

console.log(transactions);
console.log(hashedLeaves);
let merkleRoot = createMerkleRoot(hashedLeaves);
console.log('Merkle Root: ', merkleRoot);
