export function createFlexSection(flexItems) {
    const wrapper = document.createElement("div")
    wrapper.classList.add("candyPage__flexWrapper", "flexWrapper", "section", "sortable", "resizableVertical")
    wrapper.dataset.type = "section"
    const container = document.createElement("div")
    container.classList.add("candyPage__flexContainer", "flexContainer", "container",);
    for (let index = 0; index < flexItems; index++) {
        const flexItem = document.createElement("div");
        flexItem.classList.add("candyPage__flexItem", "flexItem", "item", "sortable", "resizableVertical", "resizableHorizontal")
        flexItem.dataset.type = "item"
        container.append(flexItem)
    }
   
    wrapper.append(container)
    return wrapper;
}