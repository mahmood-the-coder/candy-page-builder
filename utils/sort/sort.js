import { findAncestor } from "../findAncestor/findAncestor.js";
import { isInside } from "../isInside/isInside.js";

let isInit = false;
export function initSort() {
    if (isInit) return;
    isInit = true;
    let startX = 0
    let startY = 0
    let deltaX = 0
    let deltaY = 0
    let zoom = 1;
    let scrollTop = 0
    let target = null;
    let clone = null;
    let isDragging = false;
    let mouseRect = {}
    window.addEventListener("mousedown", (e) => {
        target = findAncestor(e.target, ".sortable");
        if (!target) return;
        if(findAncestor(e.target,".notDraggable"))return;


        isDragging = true;
        clone = target.cloneNode(true);
        clone.classList.add("candyPage__sortableClone")
        clone.style.width = target.getBoundingClientRect().width + "px"
        clone.style.height = target.getBoundingClientRect().height + "px"

        scrollTop = target.parentElement.scrollTop;
        startX = target.getBoundingClientRect().left
        startY = target.getBoundingClientRect().top + scrollTop

        zoom = window.devicePixelRatio;
        deltaX = 0;
        deltaY = 0;
        clone.style.left = startX + "px"
        clone.style.top = startY + "px"
        target.style.visibility = "hidden"
        document.body.append(clone)
    })

    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        if (!target) return;
        if (!clone) return;

        deltaX += e.movementX / zoom
        deltaY += e.movementY / zoom



        clone.style.left = startX + deltaX + "px"
        clone.style.top = startY + deltaY + "px";

        mouseRect = {
            left: e.clientX - 1,  // Small offset to simulate the dragged element
            right: e.clientX + 1,
            top: e.clientY - 1,
            bottom: e.clientY + 1,
            width: 2,
            height: 2
        };

        [...document.body.querySelectorAll(".sortable")]
            .filter(sortable => !sortable.classList.contains("candyPage__sortableClone"))
            .some(sortable => {
                const sortableRect = sortable.getBoundingClientRect();
                if (isInside(mouseRect, sortableRect, 10) && target?.dataset?.type == sortable?.dataset?.type) {
                    target.parentElement.querySelectorAll(".flexResizeHandle").forEach(h => h.remove())
                    swap(target, sortable, e)
                    return true;

                }

            })
    })

    window.addEventListener("mouseup", (e) => {
        if (!isDragging) return;
        isDragging = false;
        target.style.visibility = "visible"
    

        target = null;
        clone?.remove()
        clone = null;
    })

    function swap(target, other, e) {
        if (target.parentElement.children.length == 1) return;
        if (e.movementX < 0 || e.movementY < 0) {
            other.parentElement.insertBefore(target, other)
            const temp=getComputedStyle(target).flexGrow;
            target.style.flexGrow=other.style.flexGrow;
            other.style.flexGrow=temp
        }
        else if (e.movementX > 0 || e.movementY > 0) {
            other.parentElement.insertBefore(target, other.nextElementSibling)
            const temp=getComputedStyle(other).flexGrow;
            other.style.flexGrow=target.style.flexGrow;
            target.style.flexGrow=temp
        }
    }

}

