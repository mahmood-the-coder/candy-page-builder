export function getToolsWrapper(className, search = []) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("candyPage__toolsWrapper", className);
    wrapper.dataset.search = JSON.stringify(search);
    return wrapper
}
