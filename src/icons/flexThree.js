

export function getFlexThreeIcon(size="15",color="var(--color)")
{
    return/*html*/`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4.152 117.437 507.117 290.629" xmlns:bx="https://boxy-svg.com"
        width="${size}px" height="${size}px">
        <rect x="7.711" y="131.672" width="482.796" height="260.377"
            style="stroke: ${color}; fill:var(--background); stroke-width: 14px; stroke-linejoin: round;" />
        <rect x="18.387" y="148.873" width="140.502" height="221.827"
            style="stroke: ${color}; stroke-linecap: square; fill:${color};" />
        <rect x="178.151" y="150.059" width="140.502" height="221.827"
            style="stroke: ${color}; stroke-linecap: square; fill:${color};" />
        <rect x="339.049" y="150.059" width="140.502" height="221.827"
            style="stroke: ${color}; stroke-linecap: square; fill:${color};" />
    </svg>
    `
}