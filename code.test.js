const fs = require('fs');
eval(fs.readFileSync('code.js')+'');

//All of these have cycles:
let A = [
    [1],
    [2],
    [0]
];
let B = [
    [1],
    [2],
    [3],
    [0]
];
let pentagon = [
    [1],
    [2],
    [3],
    [4],
    [0]
];
let star = [
    [2],
    [3],
    [4],
    [0],
    [1]
];
let hourglass = [
    [2],
    [0],
    [3],
    [1]
];
// https://qph.cf2.quoracdn.net/main-qimg-16c40327f5a5eec560705ddf2e8eceb9
let H = [
    [1],
    [2,5],
    [3],
    [0],
    [0,5],
    [6],
    [2,7],
    [3,4]
];
if (!hasCycle(A)) throw new Error('Failed to detect cycle in A');
if (!hasCycle(B)) throw new Error('Failed to detect cycle in B');
if (!hasCycle(pentagon)) throw new Error('Failed to detect cycle in pentagon');
if (!hasCycle(star)) throw new Error('Failed to detect cycle in star');
if (!hasCycle(hourglass)) throw new Error('Failed to detect cycle in hourglass');
if (!hasCycle(H)) throw new Error('Failed to detect cycle in H');
// None of these have cycles:
let G = [
    [1,3,5],
    [2,4],
    [3,7],
    [6],
    [5,7],
    [6],
    [7],
    []
];
let empty = [];
let line = [
    [1],
    [2],
    [3],
    []
];
let triangle = [
    [1,2],
    [2],
    []
];
let tree = [
    [1,2],
    [3,4],
    [5,6],
    [7,8],
    [9,10],
    [11,12],
    [13,14],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
if (hasCycle(G)) throw new Error('Detected false cycle in G');
if (hasCycle(empty)) throw new Error('Detected false cycle in empty');
if (hasCycle(line)) throw new Error('Detected false cycle in line');
if (hasCycle(triangle)) throw new Error('Detected false cycle in triangle');
if (hasCycle(tree)) throw new Error('Detected false cycle in tree');
