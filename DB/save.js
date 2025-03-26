import { initDB } from "./DB.js";

let data = {}

export function getData() {
  return data;
}

export function setData(newData) {
  data = newData
}

export function save() {
  initDB((db) => {
    if (!db) {
      console.error("Database not initialized");
      return;
    }

    const transaction = db.transaction(["candy-page-builder"], "readwrite");
    const objectStore = transaction.objectStore("candy-page-builder");
    const request = objectStore.put(data);

    request.onsuccess = () => {
    };

    request.onerror = (e) => {
      console.error("Error saving data:", e.target.error);
    };
  })

}
