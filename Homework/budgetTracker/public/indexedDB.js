let db;
// create a new request for 'budget' db
const request = indexedDB.open('budget', 1);

// creates object store called "pending" and set autoIncrement to true
request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function (event) {
    db = event.target.result;
    // check if app is online before reading from database
    if (navigator.onLine) {
        checkDatabase();
    }
};

request.onerror = function (event) {
    console.log("ERROR! " + event.target.errorCode);
};

function saveRecord(record) {
    // create a transaction on the pending database using readwrite access
    const transaction = db.transaction(["pending"], "readwrite");

    // accesses pending object store
    const store = transaction.objectStore("pending");

    // adds records to store
    store.add(record);
}

function checkDatabase() {
    // opens a transaction on the pending database
    const transaction = db.transaction(["pending"], "readwrite");
    // accesses the pending object store
    const store = transaction.objectStore("pending");
    // assigns to a variable all records from store
    const getAll = store.getAll();

    getAll.onsuccess = function () {
        if (getAll.result.length > 0) {
            fetch("/api/transaction/bulk", {
                method: "POST",
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(() => {
                    // it opens a transaction on the pending databaseb
                    const transaction = db.transaction(["pending"], "readwrite");

                    // accesses the pending object store
                    const store = transaction.objectStore("pending");

                    // clears store
                    store.clear();
                });
        }
    };
}

// eventlistener to update the app when it comes online
window.addEventListener("online", checkDatabase);