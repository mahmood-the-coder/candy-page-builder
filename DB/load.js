import {  initDB } from "./DB.js";



export function load(id) {
  return new Promise((resolve, reject) => {
    initDB((db)=>{
      if (!db) {
        reject("Database not initialized");
        return;
      }
  
      const transaction = db.transaction(["candy-page-builder"], "readonly");
      const objectStore = transaction.objectStore("candy-page-builder");
      const request = objectStore.get(id);
  
      request.onsuccess = (e) => {
        if (e.target.result) {
          resolve(e.target.result);
        } else {
          reject("No data found for ID: " + id);
        }
      };
  
      request.onerror = (e) => {
        reject("Error loading data: " + e.target.error);
      };
    })
   
  });
}
