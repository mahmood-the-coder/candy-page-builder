export function findAncestor(element, selector) {
    return element?.matches(selector) ? element : element?.closest(selector);
}