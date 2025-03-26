import { initServer } from "./admin/src/server/server.js";
import { initFlexTools } from "./editor/src/flexSection/flexTools.js";
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