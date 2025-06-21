export function parseBookId(str: string): [number, number, string] {
  const match = str.match(/^(\d{4})\/(\d{1,2})_(.+)$/);
  if (!match) return [0, 0, ""];
  const [, year, number, title] = match;
  return [parseInt(year), parseInt(number), title];
}

export function compareBookIds(a: string, b: string): number {
  const [yearA, numA, titleA] = parseBookId(a);
  const [yearB, numB, titleB] = parseBookId(b);
  if (yearA !== yearB) return yearA - yearB;
  if (numA !== numB) return numA - numB;
  return titleA.localeCompare(titleB);
}
