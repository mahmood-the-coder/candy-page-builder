import { getRatioFourIcon } from "../../icons/ratioFour.js";
import { getRatioOneIcon } from "../../icons/ratioOne.js";
import { getRatioThreeIcon } from "../../icons/ratioThree.js";
import { getRatioTwoIcon } from "../../icons/ratioTwo.js";
import { getToolItem } from "../../toolItem/toolItem.js";
import { getToolsWrapper } from "../../toolsWrapper/toolsWrapper.js";


export const ratioWrapper = getToolsWrapper("ratioToolsWrapper", ["ratio"])
const ratioOne = getToolItem("ratioTool", ["ratio", "flex", "one", "1"], getRatioOneIcon("30"), { key: "ratio", value: "1" }, "Ratio One")
const ratioTwo = getToolItem("ratioTool", ["ratio", "flex", "two", "2"], getRatioTwoIcon("30"), { key: "ratio", value: "2" }, "Ratio Two")
const ratioThree = getToolItem("ratioTool", ["ratio", "flex", "three", "3"], getRatioThreeIcon("30"), { key: "ratio", value: "3" }, "Ratio Three")
const ratioFour = getToolItem("ratioTool", ["ratio", "flex", "four", "4"], getRatioFourIcon("30"), { key: "ratio", value: "4" }, "Ratio Four")

ratioWrapper.append(ratioOne, ratioTwo, ratioThree, ratioFour);


