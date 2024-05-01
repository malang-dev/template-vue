export function baseURL(path: string) {
  return suffix(import.meta.env.BASE_URL, "/") + path.replace(/^\/*/g, "");
}

function suffix(string: string, suffix: string) {
  return string.endsWith(suffix) ? string : string + suffix;
}
