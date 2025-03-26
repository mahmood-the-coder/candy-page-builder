import { getRatioOneIcon } from "../icons/ratioOne.js";
import { getRatioTwoIcon } from "../icons/ratioTwo.js";
import { getRatioThreeIcon } from "../icons/ratioThree.js";
import { getRatioFourIcon } from "../icons/ratioFour.js";
import { findAncestor } from "../../../utils/findAncestor/findAncestor.js";

export const flexTools = document.createElement("div");
flexTools.classList.add("candyPage__flexTools", "flexTools", "tools");

const ratioWrapper = document.createElement("div");
ratioWrapper.classList.add("candyPage__ratioToolsWrapper", "ratioToolsWrapper");

const ratioOne = document.createElement("div");
ratioOne.classList.add("candyDoc__ratioTool", "ratioTool", "ratioOne");
ratioOne.dataset.ratio = "1";
ratioOne.innerHTML = getRatioOneIcon("30");

const ratioTwo = document.createElement("div");
ratioTwo.classList.add("candyDoc__ratioTool", "ratioTool", "ratioTwo");
ratioTwo.dataset.ratio = "2";
ratioTwo.innerHTML = getRatioTwoIcon("30");

const ratioThree = document.createElement("div");
ratioThree.classList.add("candyDoc__ratioTool", "ratioTool", "ratioThree");
ratioThree.dataset.ratio = "3";
ratioThree.innerHTML = getRatioThreeIcon("30");

const ratioFour = document.createElement("div");
ratioFour.classList.add("candyDoc__ratioTool", "ratioTool", "ratioFour");
ratioFour.dataset.ratio = "4";
ratioFour.innerHTML = getRatioFourIcon("30");
ratioWrapper.append(ratioOne, ratioTwo, ratioThree, ratioFour)
flexTools.append(ratioWrapper)

flexTools.addEventListener("mousedown", e => {
    e.stopPropagation()
    const flexItem = findAncestor(e.target, ".flexItem");

    const flexRatio = findAncestor(e.target, ".ratioTool")
    if (!flexRatio) return;
    flexItem.style.flex = flexRatio.dataset.ratio
    flexTools.querySelectorAll(".ratioTool").forEach(t => {
        t.style.backgroundColor = "white"
    })
    flexRatio.style.backgroundColor = "var(--color)"

})
export function initFlexTools() {
    window.addEventListener("mousedown", (e) => {
        if (findAncestor(e.target, ".flexTools")) return;
        const flexItem = findAncestor(e.target, ".flexItem");
        document.body.querySelectorAll(".flexTools").forEach(t => t.remove());
        if (!flexItem) return;
        flexItem.append(flexTools)
        flexTools.querySelectorAll(".ratioTool").forEach(t => {
            t.style.backgroundColor = "white"
        })
      
        const flex = flexItem.style.flexGrow==""?1:flexItem.style.flexGrow
        
        const activeTool = flexTools.querySelector(`[data-ratio='${flex}']`)
        if(activeTool)
        activeTool.style.backgroundColor = "var(--color)"

    })
}