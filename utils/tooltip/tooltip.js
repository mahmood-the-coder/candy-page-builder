export function initTooltip() {
    const OFFSET = 15;
    const tooltipElement = document.createElement("div")

    document.body.append(tooltipElement);
    tooltipElement.classList.add("candyPage__tooltip")
    window.addEventListener("mousemove", (e) => {
        const target = e.target
        const tooltip = target.dataset.tooltip;
        if (!tooltip) {
            tooltipElement.style.display = "none"

            return;
        }

        tooltipElement.style.display = "block"

        tooltipElement.innerText = tooltip
        const center = {
            x: document.body.width / 2,
            y: document.body.height / 2
        }
        const x = e.clientX;
        const y = e.clientY;
        let xTranslate = "0"
        let yTranslate = "0"
        if (x > center.x) {
            xTranslate = "-100%"
        }
        else {

            xTranslate = "0"
        }
        if (y > center.y) {
            yTranslate = "100%"
        }
        else {
            yTranslate = "0"
        }
        tooltipElement.style.transform = `translate(${xTranslate, yTranslate})`
        tooltipElement.style.left = x + OFFSET + "px"
        tooltipElement.style.top = y + OFFSET + "px"



    })
}