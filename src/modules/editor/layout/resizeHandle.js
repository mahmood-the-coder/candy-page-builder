import { initResize } from "./functions.js";


export const resizeHandle = $("<div>", {
  id: "layout__" + Math.random().toString(16),
  class: "layoutResizeHandle"
}).css({
  "height": "100%",
  "width": "10px",
  "position": "absolute",
  "cursor": "ew-resize",
  "left": "25%",
  "top": "0",
  "background-color": "var(--color)",
  "opacity": "0",
  "transition": "opacity 300ms ease-in-out",
  "transform": "translateX(-10px)"
}).on("mouseenter", function () {

  $(this).css("opacity", "1");
}).on("mouseleave", function () {
  $(this).css("opacity", "0");
}).on("mousedown", initResize);
