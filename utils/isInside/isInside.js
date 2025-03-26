export function isInside(rect1, rect2, percentage = 100) {

    const x_overlap = Math.max(0, Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left));
    const y_overlap = Math.max(0, Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top));
    
    const intersectionArea = x_overlap * y_overlap;
    const rect1Area = rect1.width * rect1.height;
    const rect2Area = rect2.width * rect2.height;

    const minIntersectionArea = Math.min(rect1Area, rect2Area) * (percentage / 100);

    return intersectionArea >= minIntersectionArea;
}