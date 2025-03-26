import { findAncestor } from "../findAncestor/findAncestor.js";

let isInit = false;



const bottomHandle = document.createElement("div");
bottomHandle.dataset.tooltip = "Resize"
bottomHandle.classList.add("candyPage__resizeHandle", "resizeHandle", "bottom")
const leftHandle = document.createElement("div");
leftHandle.dataset.tooltip = "Resize"
leftHandle.classList.add("candyPage__resizeHandle", "resizeHandle", "left")
export function initResize() {
    if (isInit) return;
    isInit = true;
    let verticalTarget = null

    let startHeight = 0;
    let deltaY = 0
    let zoom = 1;
    let isResizingVertical = false;
    bottomHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        verticalTarget = findAncestor(e.target, ".resizableVertical")
        if (verticalTarget) {

            verticalTarget.append(bottomHandle);
            deltaY = 0;
            zoom = window.devicePixelRatio;
            startHeight = verticalTarget.getBoundingClientRect().height
            bottomHandle.style.display = "block"
            isResizingVertical = true;

        }
    })
    window.addEventListener("mousedown", (e) => {
        verticalTarget = findAncestor(e.target, ".resizableVertical")
        if (verticalTarget) {

            verticalTarget.append(bottomHandle);
            deltaY = 0;
            zoom = window.devicePixelRatio;
            startHeight = verticalTarget.getBoundingClientRect().height
            bottomHandle.style.display = "block"

        }
        else {
            bottomHandle.style.display = "none"
        }
      
    })

    window.addEventListener("mousemove", (e) => {
        deltaY += e.movementY / zoom
      
        if (isResizingVertical)
            verticalTarget.style.minHeight = startHeight + deltaY + "px"
      


    })

    window.addEventListener("mouseup", () => {

        if (isResizingVertical) {
            isResizingVertical = false;
            verticalTarget = null

        }
        
    })

}