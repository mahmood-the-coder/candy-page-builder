
export const rightSideContainer = $("<div>", {
  id: "layout__" + Math.random().toString(16),
  class: "layoutRightContainer"
}).css({
  "width": "75%",
  "height": "100%",
  "scroll": "auto",
  "scroll-behavior": "smooth"
});
