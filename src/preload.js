const { contextBridge, ipcRenderer } =require("electron") ;

contextBridge.exposeInMainWorld("electron", {
    getIpc:()=>ipcRenderer
});
