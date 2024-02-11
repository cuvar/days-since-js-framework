export function zeroPad(num: number, places: number) {
  return String(num).padStart(places, "0");
}
