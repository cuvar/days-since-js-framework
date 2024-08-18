import { zeroPad } from "./string";

export function calculateDays(date: Date): number {
  // difference in days
  const diffTime = Math.abs(new Date().getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

export function formatDate(_date: Date | null) {
  if (!_date) {
    return "Unknown";
  }

  const date = new Date(_date);
  const year = date.getFullYear();
  const month = zeroPad(date.getMonth() + 1, 2);
  const day = zeroPad(date.getDate() + 1, 2);
  return `${year}/${month}/${day}`;
}
