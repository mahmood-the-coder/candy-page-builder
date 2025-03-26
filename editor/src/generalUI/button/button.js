
export function createButton(html = "button", type, action = () => { }, className = "", tooltip = "") {
    const button = document.createElement("button");
    button.innerHTML = html
    button.classList.add("candyDoc__button", className, type)
    button.addEventListener("click", action)
    button.dataset.tooltip = tooltip;
    return button
}
