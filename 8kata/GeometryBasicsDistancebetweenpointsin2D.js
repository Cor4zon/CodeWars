function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.abs(a.x - b.x) ** 2 + Math.abs(a.y - b.y) ** 2);
}


// smarter
function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
}
