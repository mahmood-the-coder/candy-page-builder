
export const leftSideContainer = $("<div>", {
  id: "layout__" + Math.random().toString(16),
  class: "layoutLeftContainer"
}).css({
  "width": "25%",
  "height": "100%",
  "border-right":"2px solid var(--color)"
});
