import { openMenu } from "../menu/sectionMenu.js";
import { createButton } from "../../generalUI/button/button.js";
import { getAddIcon } from "../../icons/addIcon.js";

export const addButton = createButton(
    getAddIcon("50"), "secondary", (e) => {
        openMenu();
    },
    "candyPage__editorAddSectionButton", "Add Section"
)


