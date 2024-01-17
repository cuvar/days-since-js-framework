export function calculateDays(date: Date): number {
  // difference in days
  const diffTime = Math.abs(new Date().getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
