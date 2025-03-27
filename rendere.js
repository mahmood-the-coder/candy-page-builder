import { initServer } from "./admin/src/server/server.js";
import { initFlexRatio, initFlexTools } from "./editor/src/flexSection/flexTools/functions.js";
import { initMenu } from "./editor/src/sectionMenu/menu/sectionMenu.js";
import { initResize } from "./utils/resize/resize.js";
import { initSort } from "./utils/sort/sort.js";
import { initTooltip } from "./utils/tooltip/tooltip.js";

initServer()
initTooltip()
initMenu()
initSort()
initResize();
initFlexTools()
initFlexRatio()