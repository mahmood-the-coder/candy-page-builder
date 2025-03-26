import { getData, save, setData } from "../../../DB/save.js";

const express = require("express");
const cors = require("cors")
const app = express();
const port = 3000;
let isInit = false;
const endPointes = []
export function initServer() {
    if (isInit) return;
    isInit = true
    app.use(cors())
    endPointes.forEach(end => {
        app[end.type](end.path, end.response)
    })
    app.listen(port, () => {
        console.log("Listening to " + port);

    })
}

// ✅ Function to add endpoints dynamically
export function addEndpoint(id, type, path, response) {

    endPointes.push({ id, type, path, response });

    // If server is already running, apply the new endpoint
    if (isInit) {
        app[type](path, response);
    }
    const data = getData()
    const newData = {
        ...data,
        endPointes,
    }
    setData(newData)
    save()
}

export function removeEndPoint(id) {
    const index = endPointes.findIndex(end => end.id == id);
    endPointes.splice(index, 1);
    const data = getData()
    const newData = {
        ...data,
        endPointes,
    }
    setData(newData)
    save()
}

export function updateEndPoint(id, newEnd) {
    const index = endPointes.findIndex(end => end.id == id);
    endPointes[index] = newEnd;
    const newData = {
        ...data,
        endPointes,
    }
    save()
}