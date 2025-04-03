import { getAddIcon } from "../../../icons/addIcon.js";

$("<div>", {
  id: "section__" + Math.random().toString(16),
  class: "addSectionButton",
})
  .html(getAddIcon("35"))
  .css({
    left: "50%",
    transform: "translateX(-50%)",
    width: "35px",
  })
  .appendTo($(".editor"));
