import { getFlexOneIcon } from "../../icons/flexOne.js";
import { getFlexTwoIcon } from "../../icons/flexTwo.js";
import { getFlexThreeIcon } from "../../icons/flexThree.js";
import { getFlexFourIcon } from "../../icons/flexFour.js";
import { getFlexFiveIcon } from "../../icons/flexFive.js";
import { getFlexSixIcon } from "../../icons/flexSix.js";
import { addButton } from "../addButton/addButton.js";
import { findAncestor } from "../../../../utils/findAncestor/findAncestor.js";
import { createFlexSection } from "../../flexSection/flexSection.js";
let isInit = false;
const ICON_SIZE = 30
const wrapper = document.createElement("div");
wrapper.classList.add("candyPage__addSectionWrapper");

const flexOne = document.createElement("div");
flexOne.classList.add("candyDoc__sectionMenuButton", "flexOne")
flexOne.dataset.tooltip = "Flex One"
flexOne.dataset.flex = "1"
flexOne.innerHTML = getFlexOneIcon(ICON_SIZE)

const flexTwo = document.createElement("div");
flexTwo.classList.add("candyDoc__sectionMenuButton", "flexTwo")
flexTwo.dataset.tooltip = "Flex Two"
flexTwo.dataset.flex = "2"
flexTwo.innerHTML = getFlexTwoIcon(ICON_SIZE)

const flexThree = document.createElement("div");
flexThree.classList.add("candyDoc__sectionMenuButton", "flexThree")
flexThree.dataset.tooltip = "Flex Three"
flexThree.dataset.flex = "3"
flexThree.innerHTML = getFlexThreeIcon(ICON_SIZE)

const flexFour = document.createElement("div");
flexFour.classList.add("candyDoc__sectionMenuButton", "flexFour")
flexFour.dataset.tooltip = "Flex Four"
flexFour.dataset.flex = "4"
flexFour.innerHTML = getFlexFourIcon(ICON_SIZE)

const flexFive = document.createElement("div");
flexFive.classList.add("candyDoc__sectionMenuButton", "flexFive")
flexFive.dataset.tooltip = "Flex Five"
flexFive.dataset.flex = "5"
flexFive.innerHTML = getFlexFiveIcon(ICON_SIZE)

const flexSix = document.createElement("div");
flexSix.classList.add("candyDoc__sectionMenuButton", "flexSix")
flexSix.dataset.tooltip = "Flex Six"
flexSix.dataset.flex = "6"
flexSix.innerHTML = getFlexSixIcon(ICON_SIZE)


wrapper.append(flexOne, flexTwo, flexThree, flexFour, flexFive, flexSix)

export function initMenu() {

    if (isInit) return;
    isInit = true;

    addAddSectionButton();
    closeAddSectionMenu();
    addFlexSection();

}
function addAddSectionButton() {
    const editor=document.getElementById("editor");
    addButton.append(wrapper);
    editor.append(addButton);
    
    wrapper.style.visibility = "hidden";
    wrapper.style.pointerEvents = "none";
    window.addEventListener("mousedown", (e) => {
        if(!findAncestor(e.target,".candyPage__editorAddSectionButton"))
        {
            addButton?.remove()
        }
        if (e.target.nodeName == "BODY"   ) {
            const editor=document.getElementById("editor");
            addButton.append(wrapper);
            editor.append(addButton);
            
            wrapper.style.visibility = "hidden";
            wrapper.style.pointerEvents = "none";
        }
    })
}

function closeAddSectionMenu() {
    window.addEventListener("mousedown", (e) => {
        if (findAncestor(e.target, ".candyPage__addSectionWrapper")) return;
        closeMenu();
    });
}

function addFlexSection() {
    window.addEventListener("mousedown", (e) => {
        const target = findAncestor(e.target, ".candyDoc__sectionMenuButton");
        if (target) {
            const flex = target.dataset.flex;
            if (!flex) return;
            const flexSection = createFlexSection(parseInt(flex));

            const editor = document.getElementById("editor");
            editor.insertBefore(flexSection, addButton);

        }
    });
}

export function openMenu() {
    wrapper.style.visibility = "visible"
    wrapper.style.pointerEvents = "all"

}

export function closeMenu() {
    wrapper.style.visibility = "hidden"
    wrapper.style.pointerEvents = "none"
}

function addFlex(flexItems) {
    c

}