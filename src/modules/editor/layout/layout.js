import { leftSideContainer } from "./leftContainer.js";
import { resizeHandle } from "./resizeHandle.js";
import { rightSideContainer } from "./rightContainer.js";
const layoutWrapper = $("<div>", {
  id: "layout__" + Math.random().toString(16),
  class:"layoutWrapper"
}).css({
  "width": "100%",
  "height": "100%",
  "display": "flex",
});

layoutWrapper.append(leftSideContainer,rightSideContainer);
layoutWrapper.append(resizeHandle)
$("body").append(layoutWrapper);

