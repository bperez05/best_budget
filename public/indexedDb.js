const request = window.indexedDB.open("moneySpent", 1);
let db;
let tx;
let store;
let index;

request.onupgradeneeded = function (e) {
    let db = request.result;
    store = db.createObjectStore("moneySpent", {
      autoIncrement: true,
    });
  };
  
  request.onerror = function (e) {
    console.log("There was an error:" + e.target.errorCode);
  };

  request.onsuccess = function (e) {
    db = request.result;
    tx = db.transaction("moneySpent", "readwrite");
    store = tx.objectStore("moneySpent");
    db.onerror = function (e) {
      console.log("Error" + e.target.errorCode);
    };
    tx.oncomplete = function () {
      db.close();
    };
  };