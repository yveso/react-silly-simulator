function fullNumberJustPositive(exclusiveBound) {
  return Math.floor(Math.random() * exclusiveBound);
}

function fullNumberPositiveOrNegative(exclusiveBoundAbsolute = 5) {
  return (
    (Math.random() < 0.5 ? 1 : -1) *
    fullNumberJustPositive(exclusiveBoundAbsolute)
  );
}

export { fullNumberJustPositive, fullNumberPositiveOrNegative };
