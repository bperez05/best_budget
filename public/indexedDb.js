const request = window.indexedDB.open("moneySpent", 1);
let db;
let tx;
let store;
let index;