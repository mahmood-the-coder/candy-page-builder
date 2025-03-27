export function getToolItem(className = "", search = [], icon = "", data = { key: "", value: "" }, tooltip = "") {
    const tool = document.createElement("div");
    tool.classList.add("candyPage__toolItem", className);
    tool.dataset[data.key] = data.value
    tool.dataset.tooltip = tooltip;
    tool.dataset.search = JSON.stringify(search)
    tool.innerHTML = icon;
    return tool
}

