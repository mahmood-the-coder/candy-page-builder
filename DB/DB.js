
let db;
let isInit = false;


export function initDB(onsuccess) {
  if (isInit) return;

  const request = window.indexedDB.open("candy-page-builder", 10);

  request.onerror = (e) => {
    console.error("Database error:", e.target.error);
    isInit = false;
  };

  request.onsuccess = (e) => {
    db = e.target.result;
    onsuccess(db)
    isInit = true;
  };

  request.onupgradeneeded = (e) => {
    db = e.target.result;

    // Check if the object store already exists
    if (!db.objectStoreNames.contains("candy-page-builder")) {
      db.createObjectStore("candy-page-builder", { keyPath: "id" });
    }
  };

}