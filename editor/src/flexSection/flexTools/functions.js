import { findAncestor } from "../../../../utils/findAncestor/findAncestor.js";
import { flexTools } from "./flexTools.js";
export function initFlexTools() {
    window.addEventListener("mousedown", (e) => {
        if (findAncestor(e.target, ".flexTools")) return;
        document.body.querySelectorAll(".flexTools").forEach(t => t.remove());
        const flexItem = findAncestor(e.target, ".flexItem");

        if (!flexItem) return;
        flexItem.append(flexTools);

        setActiveRatioTool(flexItem,getComputedStyle(flexItem).flexGrow)

    });
}

export function initFlexRatio() {
    window.addEventListener("mousedown", (e) => {
        const ratioTool = findAncestor(e.target, ".ratioTool");
        if (!ratioTool) return;
        const ratio = ratioTool.dataset.ratio;
        const flexItem = findAncestor(e.target, ".flexItem")



        if (!flexItem) return;
        flexItem.style.flex = ratio;
        setActiveRatioTool(flexItem, ratio);
    })
}

function setActiveRatioTool(flexItem, ratio) {
    flexItem.querySelectorAll(".ratioTool").forEach(tool => {
        tool.style.backgroundColor = "white";
    });

    const activeRatioTool = flexItem.querySelector(`[data-ratio='${ratio}']`);
    if (activeRatioTool) {
        activeRatioTool.style.backgroundColor = "rgb(from var(--color) r g b / 0.5)";
    }
}
