let isInit = false;
const history = [];
const redoArray = [];

export function initHistory() {
    if (isInit) return; // Prevent multiple initializations
    isInit = true;

    window.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.code === "KeyZ") {
            const action = undo();
            if (typeof action === "function") {
                action();
            }
        } else if (e.ctrlKey && e.code === "KeyY") {
            const action = redo();
            if (typeof action === "function") {
                action();
            }
        }
    });
}

export function saveAction(action) {
    if (typeof action === "function") {
        history.push(action);
        redoArray.length = 0; 
    }
}

function undo() {
    if (history.length === 0) return null;
    const action = history.pop();
    redoArray.push(action);
    return action;
}

function redo() {
    if (redoArray.length === 0) return null;
    const action = redoArray.pop();
    history.push(action);
    return action;
}
