function arrayDiff(a, b) {
  const resDiff = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      resDiff.push(a[i]);
    }
  }

  return resDiff
}
