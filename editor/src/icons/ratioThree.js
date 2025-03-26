export function getRatioThreeIcon(size = "15", color = "var(--color)") {
    return /*html*/`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" xmlns:bx="https://boxy-svg.com" width="${size}px"
        height="${size}px">
        <rect x="32.918" y="148.873" width="434.164" height="202.254"
            style="stroke: ${color}; fill: var(--background); stroke-width: 8px; stroke-linejoin: round;" />
        <rect x="51.008" y="170.819" width="237.841" height="164.887"
            style="stroke: ${color};fill:${color}; stroke-linecap: round; stroke-linejoin: round; stroke-width: 15px;"
            id="object-0" />
    </svg>
    `
}