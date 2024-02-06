export default function capitalize(string) {
  if (typeof string !== "string") return "Not a string.";
  return string.charAt(0).toUpperCase() + string.substring(1);
}
